# OzzyPeps — Backend Setup (checkout, payments, orders DB, admin)

The site now runs as a **Cloudflare Worker** (`worker/index.js`) that serves the
static pages **and** powers an on-site checkout with crypto payments, an orders
database, and an admin dashboard.

Until you complete the steps below, the site keeps working normally and the
checkout shows a friendly "ordering is being finalised" message. Nothing is
exposed publicly except the pages themselves — all keys live in Worker secrets.

---

## 1. Create the orders database (Cloudflare D1)

```bash
wrangler d1 create ozzypeps-orders
# copy the database_id it prints
wrangler d1 execute ozzypeps-orders --remote --file=./schema.sql
```

Then open `wrangler.jsonc`, **uncomment the `d1_databases` block**, and paste the
`database_id` you copied.

## 2. Create your NOWPayments account (crypto payments)

1. Sign up at https://nowpayments.io and add at least one payout wallet.
2. **Settings → API keys** → create an API key.
3. **Settings → IPN** → enable IPN and copy the **IPN secret key**.
4. Set both as Worker secrets:

```bash
wrangler secret put NOWPAYMENTS_API_KEY      # paste the API key
wrangler secret put NOWPAYMENTS_IPN_SECRET   # paste the IPN secret
```

The IPN callback URL is handled automatically at
`https://ozzypeps.store/api/webhooks/nowpayments` (you can also paste this in the
NOWPayments dashboard if it asks for a default callback).

## 3. Address autocomplete (Geoapify)

1. Free account at https://www.geoapify.com → create an API key.
2. Restrict the key to your domain in the Geoapify dashboard (recommended).

```bash
wrangler secret put GEOAPIFY_KEY
```

(The key is only used server-side via `/api/address/autocomplete`, so it never
appears in the page source. If unset, the address fields still work — just
without the live dropdown.)

## 4. Admin dashboard token

Pick a long random string — this is your password for the admin page.

```bash
wrangler secret put ADMIN_TOKEN
```

Then visit **https://ozzypeps.store/admin** and sign in with that token. You can
view every order, filter by status, and move orders through
`pending_payment → paid → dispatched` (etc).

## 5. Deploy

```bash
wrangler deploy
```

(Or just push to your production branch if you have the Cloudflare GitHub
integration set up.)

---

## How the flow works

1. Customer adds items → **Checkout** → enters details (address has Geoapify
   autocomplete) → **Continue to Payment**.
2. `POST /api/checkout` re-prices the cart server-side, saves the order as
   `pending_payment` in D1, creates a NOWPayments invoice, and redirects the
   customer to the hosted crypto payment page.
3. Customer pays. NOWPayments calls `/api/webhooks/nowpayments` (HMAC-verified);
   the order flips to **paid** and `paid_at` is stamped.
4. Customer is returned to `checkout.html?paid=1` which shows an automated
   "order confirmed" screen with a downloadable/printable receipt and polls
   `/api/payment-status` until the webhook lands.
5. You see everything in **/admin**.

## Secrets summary

| Secret                   | Purpose                              | If unset |
|--------------------------|--------------------------------------|----------|
| `NOWPAYMENTS_API_KEY`    | create crypto invoices               | checkout returns "payment not enabled" |
| `NOWPAYMENTS_IPN_SECRET` | verify payment webhooks              | webhooks rejected |
| `GEOAPIFY_KEY`           | address autocomplete                 | manual address entry only |
| `ADMIN_TOKEN`            | admin dashboard login                | /admin login refuses all tokens |
| `PUBLIC_BASE_URL` (var)  | callback/return URLs (in wrangler)   | falls back to request origin |

## Notes / honest caveats

- **Card payments are intentionally not included.** Mainstream card processors
  (Stripe/PayPal/Square) prohibit this product category and will freeze funds.
  Crypto via NOWPayments avoids that and has no chargebacks.
- Order **pricing is recalculated on the server** from the catalogue prices sent
  by the cart; totals are not trusted from the browser. For maximum integrity
  you may later want the Worker to look prices up from a server-side copy of
  `product-data.js` rather than the posted values.
- A confirmation **email to the customer** is referenced in the UI but not yet
  wired to an email provider. Add one (e.g. MailChannels/Resend) in
  `handleNowPaymentsIPN` when an order becomes `paid` if you want automated
  emails. The admin dashboard already captures everything in the meantime.
