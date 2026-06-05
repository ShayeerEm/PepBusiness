-- ════════════════════════════════════════════════════════════════════════════
-- OzzyPeps — D1 database schema (orders)
-- Apply with:  wrangler d1 execute ozzypeps-orders --file=./schema.sql --remote
-- ════════════════════════════════════════════════════════════════════════════

CREATE TABLE IF NOT EXISTS orders (
  id              INTEGER PRIMARY KEY AUTOINCREMENT,
  order_number    TEXT    NOT NULL UNIQUE,
  status          TEXT    NOT NULL DEFAULT 'pending_payment',
                          -- pending_payment | paid | dispatched | cancelled | failed

  -- Customer
  customer_name   TEXT    NOT NULL,
  email           TEXT    NOT NULL,
  phone           TEXT,

  -- Shipping address (structured)
  address_line1   TEXT,
  address_line2   TEXT,
  suburb          TEXT,
  state           TEXT,
  postcode        TEXT,
  country         TEXT    DEFAULT 'Australia',

  notes           TEXT,

  -- Order contents + money (AUD)
  items_json      TEXT    NOT NULL,
  subtotal        REAL    NOT NULL,
  shipping        REAL    NOT NULL,
  total           REAL    NOT NULL,
  currency        TEXT    NOT NULL DEFAULT 'AUD',

  -- Payment (crypto via NOWPayments)
  payment_provider TEXT,
  payment_id       TEXT,   -- NOWPayments invoice / payment id
  pay_currency     TEXT,   -- e.g. btc, usdttrc20
  pay_amount       TEXT,   -- amount in crypto, as reported by provider
  payment_status   TEXT,   -- raw provider status

  -- Audit
  ip              TEXT,
  user_agent      TEXT,
  created_at      TEXT    NOT NULL,
  paid_at         TEXT
);

CREATE INDEX IF NOT EXISTS idx_orders_status     ON orders(status);
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON orders(created_at);
CREATE INDEX IF NOT EXISTS idx_orders_payment_id ON orders(payment_id);
