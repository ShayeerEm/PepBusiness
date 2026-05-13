/* OzzyPeps – Product modal data + logic */

const PRODUCTS = {

  /* ═══════════ GLP-1 / WEIGHT LOSS ═══════════ */

  semaglutide: {
    emoji: '💊', name: 'Semaglutide', category: 'GLP-1 Analogue', code: 'SM-Series',
    purity: '99.1', batch: 'OZP-SM-2025A',
    desc: 'Semaglutide is a long-acting GLP-1 receptor agonist analogue with a 7-day effective half-life. It was originally developed in the context of type-2 diabetes research and has since become central to obesity and appetite-regulation studies due to its potent effects on satiety signalling in the hypothalamus.',
    uses: [
      { icon: '⚖️', title: 'Significant Fat Loss', sub: 'Consistent caloric deficit through appetite suppression — results typically visible within 4–8 weeks.' },
      { icon: '🍽️', title: 'Appetite & Craving Control', sub: 'Reduces hunger signals and food noise — less mental effort to stay on track with diet.' },
      { icon: '🩸', title: 'Blood Sugar Stability', sub: 'Smooths glucose spikes and improves insulin response — supports steady energy and mood.' },
      { icon: '❤️', title: 'Cardiovascular Markers', sub: 'Research shows improvement in blood pressure, LDL, and inflammatory markers alongside fat loss.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$140' },
      { size: '10mg × 10 vials', price: '$171' },
      { size: '15mg × 10 vials', price: '$217' },
      { size: '20mg × 10 vials', price: '$248' },
      { size: '30mg × 10 vials', price: '$310' },
    ],
  },

  tirzepatide: {
    emoji: '🧪', name: 'Tirzepatide', category: 'Dual GIP / GLP-1', code: 'TR-Series',
    purity: '99.2', batch: 'OZP-TR-2025A',
    coaUrl: 'https://chromate.org/verify?c=29867_331U1ZHQB41B',
    desc: 'Tirzepatide is a synthetic 39-amino-acid peptide that acts as a dual agonist at both GLP-1 and GIP receptors. The dual mechanism produces synergistic effects on metabolism, appetite, and glucose regulation, with clinical data showing superior fat loss outcomes compared to GLP-1 monotherapy.',
    uses: [
      { icon: '🔥', title: 'Superior Fat Loss', sub: 'Dual GIP+GLP-1 mechanism consistently outperforms GLP-1 alone — faster, more aggressive results.' },
      { icon: '🧠', title: 'Appetite Suppression', sub: 'Reduces hunger at both central and peripheral levels — easy dieting compliance.' },
      { icon: '📉', title: 'Blood Glucose & Insulin', sub: 'One of the most effective compounds for glucose normalisation and insulin sensitivity improvement.' },
      { icon: '💪', title: 'Body Recomposition', sub: 'Preserves lean mass better than caloric restriction alone when paired with resistance training.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$155' },
      { size: '10mg × 10 vials', price: '$186' },
      { size: '15mg × 10 vials', price: '$233' },
      { size: '20mg × 10 vials', price: '$264' },
      { size: '30mg × 10 vials', price: '$326' },
      { size: '40mg × 10 vials', price: '$388' },
      { size: '50mg × 10 vials', price: '$481' },
      { size: '60mg × 10 vials', price: '$558' },
    ],
  },

  retatrutide: {
    emoji: '⚡', name: 'Retatrutide', category: 'Triple Agonist (GLP-1/GIP/GCG)', code: 'RT-Series',
    purity: '99.0', batch: 'OZP-RT-2025A',
    coaUrl: 'https://chromate.org/verify?c=29866_K9C47J1MT13C',
    desc: 'Retatrutide is a next-generation triple receptor agonist simultaneously targeting GLP-1, GIP, and glucagon receptors. The glucagon component adds a thermogenic and hepatic fat-clearing mechanism not present in dual agonists, making it the most potent weight loss compound currently in advanced clinical research.',
    uses: [
      { icon: '🚀', title: 'Most Potent Weight Loss Available', sub: 'Triple mechanism: appetite control (GLP-1), metabolic boost (GIP), thermogenesis (glucagon). The gold standard.' },
      { icon: '🌡️', title: 'Increased Metabolic Rate', sub: 'Glucagon activation raises resting metabolic rate — burning more calories at rest than GLP-1 alone.' },
      { icon: '🏋️', title: 'Rapid Body Recomposition', sub: 'Aggressive fat loss while preserving or gaining lean mass with proper training and protein intake.' },
      { icon: '🫀', title: 'Liver & Visceral Fat Reduction', sub: 'Specifically clears hepatic and deep visceral fat — improves cardiovascular and metabolic risk profile.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$202' },
      { size: '10mg × 10 vials', price: '$279' },
      { size: '15mg × 10 vials', price: '$357' },
      { size: '20mg × 10 vials', price: '$434' },
      { size: '30mg × 10 vials', price: '$558' },
      { size: '40mg × 10 vials', price: '$682' },
      { size: '50mg × 10 vials', price: '$822' },
      { size: '60mg × 10 vials', price: '$930' },
    ],
  },

  cagrilintide: {
    emoji: '🌟', name: 'Cagrilintide', category: 'Amylin Analogue', code: 'CGL-Series',
    purity: '99.0', batch: 'OZP-CGL-2025A',
    desc: 'Cagrilintide is a long-acting amylin analogue with a half-life of approximately 7 days. Amylin is co-secreted with insulin from beta cells and regulates gastric emptying, glucagon secretion, and satiety. When combined with GLP-1 agonists, cagrilintide provides complementary and synergistic metabolic effects.',
    uses: [
      { icon: '🍽️', title: 'Powerful Satiety Signal', sub: 'Works through a different receptor to GLP-1 — additive appetite suppression without dose escalation.' },
      { icon: '⚖️', title: 'Fat Loss Amplification', sub: 'Stacked with semaglutide ("CagriSema"), produces greater weight loss than either compound alone.' },
      { icon: '🩸', title: 'Glucagon Regulation', sub: 'Suppresses inappropriate glucagon release — smooths post-meal glucose spikes.' },
      { icon: '🔬', title: 'Cutting-Edge Protocol', sub: 'The foundation of next-generation combination weight-loss research protocols.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$357' },
      { size: '10mg × 10 vials', price: '$605' },
    ],
  },

  cagrisema: {
    emoji: '🔬', name: 'CagriSema (Cagrilintide 5mg + Semaglutide 5mg)', category: 'Combo Peptide', code: 'CS10',
    purity: '99.0', batch: 'OZP-CS10-2025A',
    desc: 'CagriSema is a pre-mixed combination of cagrilintide (amylin analogue) and semaglutide (GLP-1 agonist) in a single vial. Clinical trials have demonstrated that this combination produces greater weight loss than either compound alone, with a favourable safety and tolerability profile.',
    uses: [
      { icon: '🚀', title: 'Greater Fat Loss Than Semaglutide Alone', sub: 'Dual mechanism (amylin + GLP-1) consistently outperforms semaglutide monotherapy in trials.' },
      { icon: '🍽️', title: 'Appetite — Dual Attack', sub: 'Two independent satiety pathways engaged simultaneously — markedly reduced food intake.' },
      { icon: '📦', title: 'Convenience', sub: 'Pre-mixed — single vial replaces two separate compounds. Simpler protocol, same results.' },
      { icon: '🔭', title: 'The Step Beyond Semaglutide', sub: 'For those who have plateaued on semaglutide, this is the natural next step in metabolic research.' },
    ],
    specs: [
      { size: '10mg × 10 vials (5+5)', price: '$620' },
    ],
  },

  mazdutide: {
    emoji: '💠', name: 'Mazdutide', category: 'Dual GLP-1/GCG Agonist', code: 'MDT10',
    purity: '98.9', batch: 'OZP-MDT-2025A',
    desc: 'Mazdutide is an investigational dual GLP-1 and glucagon receptor co-agonist. The glucagon component provides a thermogenic boost by increasing energy expenditure through hepatic and brown adipose tissue activation, complementing the appetite-suppressive effect of GLP-1 agonism.',
    uses: [
      { icon: '🌡️', title: 'Thermogenic Fat Burning', sub: 'Glucagon receptor activation raises body temperature and energy expenditure — burns more at rest.' },
      { icon: '🍽️', title: 'GLP-1 Appetite Control', sub: 'Reduced food intake and cravings through central GLP-1 signalling.' },
      { icon: '🫀', title: 'Liver Fat Clearance', sub: 'Glucagon preferentially mobilises hepatic fat — visible in reduced liver markers.' },
      { icon: '⚡', title: 'Energy & Drive', sub: 'Users report increased energy and motivation — likely due to glucagon receptor effects.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$636' }],
  },

  survodutide: {
    emoji: '💎', name: 'Survodutide', category: 'Dual GLP-1/GCG Agonist', code: 'SUR10',
    purity: '98.8', batch: 'OZP-SUR-2025A',
    desc: 'Survodutide is a glucagon/GLP-1 receptor co-agonist with a glucagon-dominant pharmacological profile. This makes it particularly effective in hepatic fat reduction and energy expenditure research, with ongoing trials in NASH (non-alcoholic steatohepatitis).',
    uses: [
      { icon: '🔥', title: 'Aggressive Caloric Burn', sub: 'Higher glucagon ratio means greater thermogenic effect — significant resting energy expenditure increase.' },
      { icon: '🫀', title: 'Liver & Visceral Fat', sub: 'Highly effective at reducing NAFLD/NASH markers and visceral adipose tissue.' },
      { icon: '💪', title: 'Body Composition', sub: 'Strong fat oxidation while maintaining muscle when combined with adequate protein and training.' },
      { icon: '🔭', title: 'Cutting-Edge Compound', sub: 'One of the newest and most potent compounds in metabolic research pipelines.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$868' }],
  },

  /* ═══════════ GROWTH HORMONE ═══════════ */

  hgh: {
    emoji: '📈', name: 'HGH (Recombinant)', category: 'Recombinant Growth Hormone', code: 'H-Series',
    purity: '99.0', batch: 'OZP-HGH-2025A',
    desc: 'Recombinant human growth hormone is a 191-amino-acid protein identical in structure to endogenous GH. It governs a wide range of physiological processes including protein synthesis, lipolysis, and cell regeneration, primarily through downstream IGF-1 signalling.',
    uses: [
      { icon: '💪', title: 'Muscle Growth & Fullness', sub: 'Drives nitrogen retention and protein synthesis — noticeable improvement in muscle density and recovery speed.' },
      { icon: '🔥', title: 'Fat Metabolism', sub: 'Directly activates lipolysis — particularly effective on stubborn subcutaneous and visceral fat.' },
      { icon: '🌿', title: 'Skin Quality & Collagen', sub: 'GH stimulates collagen synthesis — tighter skin, reduced fine lines, improved texture over months of use.' },
      { icon: '😴', title: 'Sleep & Recovery', sub: 'Peak GH secretion occurs in deep sleep — exogenous GH deepens recovery and cellular repair overnight.' },
    ],
    specs: [
      { size: '10 iu × 10 vials', price: '$233' },
      { size: '24 iu × 10 vials', price: '$434' },
      { size: '36 iu × 10 vials', price: '$558' },
    ],
  },

  ipamorelin: {
    emoji: '🌡️', name: 'Ipamorelin', category: 'Selective Ghrelin Mimetic', code: 'IP-Series',
    purity: '99.4', batch: 'OZP-IP-2025A',
    coaUrl: 'https://chromate.org/verify?c=29911_EY346JG2U615',
    desc: 'Ipamorelin is a highly selective GHRP (growth hormone releasing peptide) that stimulates GH secretion through the ghrelin receptor without meaningfully affecting cortisol, prolactin, or ACTH. This clean hormonal profile makes it one of the most popular GH secretagogues in research.',
    uses: [
      { icon: '💪', title: 'Lean Muscle & Recovery', sub: 'Pulsatile GH release supports muscle repair, anti-catabolism, and lean body composition.' },
      { icon: '🧴', title: 'Skin & Connective Tissue', sub: 'Elevated GH and IGF-1 improve skin elasticity, joint health, and collagen density.' },
      { icon: '😴', title: 'Sleep Quality', sub: 'GH pulses are largest in deep sleep — ipamorelin amplifies recovery during sleep cycles.' },
      { icon: '✅', title: 'Clean Hormonal Profile', sub: 'No significant cortisol or prolactin spike — none of the bloat or stress associated with GHRP-2/6.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$171' },
      { size: '10mg × 10 vials', price: '$279' },
    ],
  },

  cjc_dac: {
    emoji: '🔭', name: 'CJC-1295 W/DAC', category: 'Long-Acting GHRH Analogue', code: 'CD5',
    purity: '99.0', batch: 'OZP-CD5-2025A',
    desc: 'CJC-1295 with Drug Affinity Complex is a modified GHRH analogue that covalently binds to albumin in the bloodstream, dramatically extending its half-life to 6–8 days. This creates a sustained elevation of GH and downstream IGF-1 suitable for twice-weekly dosing research protocols.',
    uses: [
      { icon: '📊', title: 'Sustained GH Elevation', sub: 'Week-long half-life means stable GH levels — mimics the effect of continuous GH with minimal injections.' },
      { icon: '💪', title: 'Muscle Growth & Recomposition', sub: 'Chronic IGF-1 elevation from sustained GH drives muscle anabolism and fat oxidation.' },
      { icon: '🛠️', title: 'Joint & Tissue Repair', sub: 'Ongoing GH elevation accelerates connective tissue synthesis and recovery from wear and tear.' },
      { icon: '⏰', title: 'Convenience', sub: 'Once or twice weekly protocol — easy to maintain compared to daily GH injections.' },
    ],
    specs: [{ size: '5mg × 10 vials', price: '$527' }],
  },

  cjc_nodac: {
    emoji: '🔬', name: 'CJC-1295 WO/DAC (Mod-GRF 1-29)', category: 'Short-Acting GHRH Analogue', code: 'CND-Series',
    purity: '99.0', batch: 'OZP-CND-2025A',
    coaUrl: 'https://chromate.org/verify?c=29910_6R5E1VNYN36E',
    desc: 'CJC-1295 without DAC (also known as Modified GRF 1-29) retains the potent GHRH receptor binding of the parent molecule but has a shorter half-life of 30 minutes, allowing for more physiologically mimetic pulsatile GH release when timed appropriately.',
    uses: [
      { icon: '📈', title: 'Natural GH Pulses', sub: 'Short half-life mimics the natural pulsatile GH release pattern — preferred by those prioritising physiological protocols.' },
      { icon: '💪', title: 'Lean Muscle Support', sub: 'Pair with ipamorelin for synergistic GH release — the classic combination for body recomposition.' },
      { icon: '🔥', title: 'Fat Metabolism', sub: 'Each GH pulse activates lipolysis — multiple daily pulses add up to meaningful fat oxidation.' },
      { icon: '🤝', title: 'Best Stacked with GHRP', sub: 'Most effective combined with ipamorelin or GHRP-2 — pre-mixed version also available.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$295' },
      { size: '10mg × 10 vials', price: '$496' },
    ],
  },

  cjc_ipa_blend: {
    emoji: '🧪', name: 'CJC-1295 WO/DAC + Ipamorelin Blend', category: 'GH Research Blend', code: 'CP10',
    purity: '99.0', batch: 'OZP-CP10-2025A',
    desc: 'This pre-mixed blend combines CJC-1295 WO/DAC (a GHRH analogue) with Ipamorelin (a ghrelin mimetic) in a single vial. The two peptides act on different receptor populations and produce synergistic GH release significantly greater than either alone.',
    uses: [
      { icon: '🚀', title: 'Synergistic GH Release', sub: 'GHRH + GHRP together produce 2–5× the GH pulse of either alone — the gold-standard GH research stack.' },
      { icon: '💪', title: 'Lean Muscle & Recovery', sub: 'Elevated GH and IGF-1 drive muscle repair, anti-catabolism, and body recomposition.' },
      { icon: '😴', title: 'Sleep & Skin Quality', sub: 'Pre-sleep dosing maximises GH-driven recovery and collagen synthesis overnight.' },
      { icon: '📦', title: 'Pre-Mixed Convenience', sub: 'Single vial replaces two compounds — consistent ratios and no separate reconstitution.' },
    ],
    specs: [{ size: '10mg × 10 vials (5+5)', price: '$326' }],
  },

  sermorelin: {
    emoji: '📊', name: 'Sermorelin Acetate', category: 'GHRH Fragment', code: 'SMO-Series',
    purity: '98.9', batch: 'OZP-SMO-2025A',
    desc: 'Sermorelin is a synthetic analogue of the first 29 amino acids of endogenous human GHRH — the minimum sequence required for full GH-releasing activity. It stimulates the pituitary to produce and secrete natural GH, making it a physiologically gentle approach to GH optimisation.',
    uses: [
      { icon: '🏛️', title: 'Physiological GH Stimulation', sub: 'Works through your own pituitary — no suppression of natural GH production unlike exogenous HGH.' },
      { icon: '💪', title: 'Gradual Muscle & Recovery', sub: 'Slower onset than HGH but more sustainable — muscle quality, recovery, and body comp improve over months.' },
      { icon: '😴', title: 'Sleep Depth', sub: 'Enhanced GH release during deep sleep — users consistently report improved sleep quality and depth.' },
      { icon: '🌿', title: 'Anti-Aging Effects', sub: 'Gentle but meaningful improvement in skin elasticity, joint health, and energy over a 3–6 month protocol.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$248' },
      { size: '10mg × 10 vials', price: '$403' },
    ],
  },

  tesamorelin: {
    emoji: '🎯', name: 'Tesamorelin', category: 'Stabilised GHRH Analogue', code: 'TSM-Series',
    purity: '99.1', batch: 'OZP-TSM-2025A',
    coaUrl: 'https://chromate.org/verify?c=29908_495D9478EF5V',
    desc: 'Tesamorelin is a GHRH analogue with an added trans-3-hexenoic acid modification that increases stability and bioavailability. It has been specifically studied for reduction of visceral adipose tissue and is one of the few peptides with an established track record in this area.',
    uses: [
      { icon: '🎯', title: 'Targeted Visceral Fat Loss', sub: 'Specifically studied for abdominal/visceral fat reduction — the fat most associated with health risks.' },
      { icon: '🧴', title: 'Defined Midsection', sub: 'Less bloat, tighter waist, improved abdominal definition — results visible in 8–12 weeks.' },
      { icon: '🫀', title: 'Cardiovascular & Liver Markers', sub: 'Visceral fat reduction translates to improved lipids, reduced inflammation, and liver fat clearance.' },
      { icon: '💪', title: 'GH Optimisation', sub: 'Simultaneously improves GH pulsatility — supporting muscle, skin, and recovery benefits.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$372' },
      { size: '10mg × 10 vials', price: '$605' },
    ],
  },

  ghrp2: {
    emoji: '⚡', name: 'GHRP-2', category: 'GH Secretagogue', code: 'G2-Series',
    purity: '98.8', batch: 'OZP-G2-2025A',
    desc: 'GHRP-2 is a synthetic hexapeptide that stimulates GH secretion via ghrelin receptor activation. It produces a strong, acute GH pulse and also modestly increases appetite — making it well-suited for mass-building phases or combined use with GHRH analogues.',
    uses: [
      { icon: '💥', title: 'Potent GH Release', sub: 'Strong ghrelin receptor activation — one of the most effective GHRPs for acute GH pulse elevation.' },
      { icon: '🍗', title: 'Appetite & Anabolism', sub: 'Increases appetite — ideal during building phases where caloric surplus is the goal.' },
      { icon: '🛠️', title: 'Recovery & Repair', sub: 'GH-driven recovery from training, injury, or illness — improved muscle and connective tissue repair.' },
      { icon: '🤝', title: 'Stack with GHRH', sub: 'Synergistic when combined with CJC-1295 or Sermorelin — produces significantly larger GH pulses.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$171' },
      { size: '10mg × 10 vials', price: '$248' },
    ],
  },

  ghrp6: {
    emoji: '🔋', name: 'GHRP-6 Acetate', category: 'GH Secretagogue', code: 'G6-Series',
    purity: '99.1', batch: 'OZP-G6-2025A',
    desc: 'GHRP-6 is a hexapeptide with strong ghrelin receptor affinity. Similar to GHRP-2 in mechanism but with a greater hunger-stimulating effect, making it particularly useful in research models studying appetite enhancement and anabolic GH pulses simultaneously.',
    uses: [
      { icon: '💪', title: 'Muscle Building Phase', sub: 'Hunger stimulation + GH release is the ideal combination for adding mass — supports caloric surplus.' },
      { icon: '🔥', title: 'GH-Driven Fat Metabolism', sub: 'Post-GH-pulse lipolysis contributes to improved body composition when hunger is managed.' },
      { icon: '🦴', title: 'Joint & Cartilage Support', sub: 'GH and IGF-1 elevation supports connective tissue health — useful for those with joint wear.' },
      { icon: '⚡', title: 'Energy & Drive', sub: 'Ghrelin activation improves motivation and physical drive — reported across multiple research models.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$248' },
      { size: '10mg × 10 vials', price: '$322' },
    ],
  },

  igf1lr3: {
    emoji: '📐', name: 'IGF-1 LR3', category: 'IGF-1 Analogue', code: 'IG-Series',
    purity: '99.0', batch: 'OZP-IG-2025A',
    desc: 'IGF-1 LR3 is a recombinant analogue of Insulin-like Growth Factor 1 with an arginine-3 substitution and 13-amino-acid extension that reduces binding to IGF-binding proteins, extending its half-life to 20–30 hours compared to the 12–15 minutes of native IGF-1.',
    uses: [
      { icon: '🧬', title: 'Muscle Cell Hyperplasia', sub: 'Directly stimulates creation of new muscle cells (hyperplasia) — not just hypertrophy. Hard to achieve any other way.' },
      { icon: '🍽️', title: 'Nutrient Partitioning', sub: 'Dramatically improves how the body uses nutrients — more goes to muscle, less to fat.' },
      { icon: '💪', title: 'Muscle Retention', sub: 'Powerful anti-catabolic — preserves muscle during cutting phases or periods of caloric deficit.' },
      { icon: '🛠️', title: 'Injury Recovery', sub: 'Accelerates tissue regeneration and cellular repair — used in research on injury recovery protocols.' },
    ],
    specs: [
      { size: '0.1mg × 10 vials', price: '$155' },
      { size: '1mg × 10 vials', price: '$614' },
    ],
  },

  /* ═══════════ HEALING & RECOVERY ═══════════ */

  bpc157: {
    emoji: '🧬', name: 'BPC-157', category: 'Healing Peptide', code: 'BC-Series',
    purity: '99.1', batch: 'OZP-BC-2025A',
    coaUrl: 'https://chromate.org/verify?c=29899_GNFX8N58LE1A',
    desc: 'BPC-157 (Body Protection Compound 157) is a synthetic pentadecapeptide derived from a protective gastric protein. It has been studied extensively in animal models for its remarkable tissue-regenerative properties across tendons, ligaments, muscle, and gut tissue.',
    uses: [
      { icon: '🦴', title: 'Joint & Tendon Repair', sub: 'Accelerates healing of tendon and ligament injuries — research shows significantly faster recovery vs control.' },
      { icon: '🫃', title: 'Gut & GI Health', sub: 'Heals leaky gut, reduces intestinal inflammation, and protects the GI lining — foundational for gut biohackers.' },
      { icon: '🔥', title: 'Inflammation Reduction', sub: 'Systemic anti-inflammatory effects — reduces pain and swelling around injury sites.' },
      { icon: '🩹', title: 'Wound & Injury Recovery', sub: 'One of the most versatile healing compounds available — used in sports injury, post-surgery, and overuse research.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$155' },
      { size: '10mg × 10 vials', price: '$248' },
    ],
  },

  tb500: {
    emoji: '⚗️', name: 'TB-500 (Thymosin β4 Analogue)', category: 'Systemic Tissue Repair', code: 'BT-Series',
    purity: '99.3', batch: 'OZP-BT-2025A',
    coaUrl: 'https://chromate.org/verify?c=29830_5X86Y3ZNV46U',
    desc: 'TB-500 is a synthetic analogue of the actin-binding domain of Thymosin Beta-4, a naturally occurring ubiquitous protein with roles in tissue repair, cell migration, and angiogenesis. Unlike many peptides, TB-500 distributes systemically, making it effective for whole-body healing.',
    uses: [
      { icon: '🌐', title: 'Systemic Tissue Healing', sub: 'Works body-wide — not site-specific like BPC-157. Useful for multiple injury sites simultaneously.' },
      { icon: '🤸', title: 'Flexibility & Mobility', sub: 'Reduces muscle stiffness and improves range of motion — used in sports recovery protocols.' },
      { icon: '💪', title: 'Muscle Repair', sub: 'Promotes myocyte migration and repair after intense training or injury.' },
      { icon: '🫀', title: 'Cardiovascular Tissue', sub: 'Supports cardiac and vascular tissue repair — studied in heart muscle and angiogenesis research.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$264' },
      { size: '10mg × 10 vials', price: '$465' },
    ],
  },

  bpc_tb_blend: {
    emoji: '🔗', name: 'BPC-157 + TB-500 Blend', category: 'Healing Blend', code: 'BB-Series',
    purity: '99.0', batch: 'OZP-BB-2025A',
    coaUrl: 'https://chromate.org/verify?c=29827_77A44DSNHUR5',
    desc: 'This pre-mixed blend pairs BPC-157\'s site-specific tissue repair and gut protection with TB-500\'s systemic healing and cell migration capabilities. The two peptides are complementary — BPC-157 works locally while TB-500 acts systemically, providing comprehensive coverage.',
    uses: [
      { icon: '🎯', title: 'Localised + Systemic Healing', sub: 'BPC-157 targets the injury site; TB-500 supports body-wide repair — full-spectrum healing protocol in one vial.' },
      { icon: '🚀', title: 'Faster Injury Recovery', sub: 'Clinical researchers report faster functional recovery vs either compound alone in musculoskeletal models.' },
      { icon: '🦴', title: 'Joints, Tendons & Gut', sub: 'Covers the three most common research use cases — tendons, joints, and gastrointestinal health.' },
      { icon: '📦', title: 'Convenient Pre-Mix', sub: 'One reconstitution, one injection — consistent ratios, no separate vial management.' },
    ],
    specs: [
      { size: '10mg × 10 vials (5+5)', price: '$326' },
      { size: '20mg × 10 vials (10+10)', price: '$558' },
    ],
  },

  ghkcu: {
    emoji: '🔶', name: 'GHK-CU', category: 'Copper Peptide', code: 'CU-Series',
    purity: '99.0', batch: 'OZP-CU-2025A',
    desc: 'GHK-Cu is a naturally occurring copper-binding tripeptide (Gly-His-Lys) present in human plasma, saliva, and urine. It plays a significant role in wound healing, collagen synthesis, and anti-inflammatory signalling, and declines sharply with age.',
    uses: [
      { icon: '✨', title: 'Skin Quality & Tightening', sub: 'Stimulates collagen and elastin production — visibly firmer, thicker skin with consistent use.' },
      { icon: '🩹', title: 'Wound & Scar Healing', sub: 'Accelerates wound closure and reduces scar formation — used topically and systemically in research.' },
      { icon: '💇', title: 'Hair Density & Growth', sub: 'Activates hair follicle stem cells and promotes thicker hair growth — often stacked with AHK-CU.' },
      { icon: '🔥', title: 'Anti-Inflammatory', sub: 'Downregulates inflammatory cytokines and oxidative stress markers — foundational in anti-aging protocols.' },
    ],
    specs: [
      { size: '50mg × 10 vials', price: '$124' },
      { size: '100mg × 10 vials', price: '$171' },
    ],
  },

  ahkcu: {
    emoji: '🟠', name: 'AHK-CU', category: 'Copper Peptide', code: 'AHK-CU',
    purity: '99.0', batch: 'OZP-AHK-2025A',
    desc: 'AHK-Cu (Ala-His-Lys copper complex) is a copper-binding tripeptide that selectively activates hair follicle stem cells. Research shows it outperforms minoxidil in follicle stimulation metrics, making it a premier compound in hair regrowth and androgenic alopecia research.',
    uses: [
      { icon: '💇', title: 'Hair Regrowth & Density', sub: 'Directly activates follicle stem cells — more targeted than minoxidil with a better safety profile in research.' },
      { icon: '📈', title: 'Follicle Enlargement', sub: 'Increases hair follicle size and prolongs the anagen (growth) phase — thicker, fuller hair over time.' },
      { icon: '🧴', title: 'Scalp Health', sub: 'Anti-inflammatory effects in the scalp — reduces DHT-related inflammation that contributes to hair loss.' },
      { icon: '🤝', title: 'Stack with GHK-CU', sub: 'The two copper peptides complement each other — GHK-CU for skin; AHK-CU for hair. Often used together.' },
    ],
    specs: [{ size: '100mg × 10 vials', price: '$242' }],
  },

  kpv: {
    emoji: '🌿', name: 'KPV Tripeptide', category: 'Anti-Inflammatory Peptide', code: 'KPV10',
    purity: '99.0', batch: 'OZP-KPV-2025A',
    desc: 'KPV (Lys-Pro-Val) is a C-terminal tripeptide fragment of α-melanocyte-stimulating hormone (α-MSH). It retains the anti-inflammatory properties of the parent molecule while being smaller and more stable, primarily acting through melanocortin receptors in the gut and immune system.',
    uses: [
      { icon: '🫃', title: 'Gut Inflammation & IBD', sub: 'Specifically studied in colitis and IBD models — reduces intestinal inflammation and supports healing of gut lining.' },
      { icon: '🌸', title: 'Skin Redness & Irritation', sub: 'Anti-inflammatory at the skin level — studied for rosacea, eczema, and inflammatory skin conditions.' },
      { icon: '🤝', title: 'Synergistic with BPC-157', sub: 'Commonly combined with BPC-157 for gut healing — available as the KLOW80 blend.' },
      { icon: '🛡️', title: 'Immune Modulation', sub: 'Balances immune response without immune suppression — helpful in autoimmune and inflammatory research.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$217' }],
  },

  bbg70: {
    emoji: '🎁', name: 'BBG70 — GHK-CU + BPC-157 + TB-500', category: 'Premium Healing Blend', code: 'BBG70',
    purity: '99.0', batch: 'OZP-BBG-2025A',
    desc: 'BBG70 is a triple-compound blend containing GHK-CU (50mg), BPC-157 (10mg), and TB-500 (10mg). This combination covers skin and collagen repair (GHK-CU), local tissue healing (BPC-157), and systemic cellular repair (TB-500) in a single, convenient pre-mixed vial.',
    uses: [
      { icon: '🧴', title: 'Skin + Tissue + Systemic', sub: 'Three complementary mechanisms in one — the ideal starter blend for holistic recovery and aesthetics.' },
      { icon: '✨', title: 'Skin Quality & Collagen', sub: 'High-dose GHK-CU drives visible improvements in skin firmness, texture, and wound healing.' },
      { icon: '🦴', title: 'Joint & Injury Recovery', sub: 'BPC-157 and TB-500 together provide localised and systemic tissue repair coverage.' },
      { icon: '📦', title: 'Travel-Friendly Protocol', sub: 'Three research compounds in one vial — simplifies protocols significantly.' },
    ],
    specs: [{ size: '70mg × 10 vials', price: '$527' }],
  },

  klow80: {
    emoji: '🏆', name: 'KLOW80 — The Ultimate Healing Blend', category: 'Premium 4-in-1 Blend', code: 'KLOW80',
    purity: '99.0', batch: 'OZP-KLOW-2025A',
    desc: 'KLOW80 is our most comprehensive healing blend: GHK-CU (50mg) + BPC-157 (10mg) + TB-500 (10mg) + KPV (10mg). Adding KPV to the BBG70 formula adds a dedicated anti-inflammatory layer, making this the most complete healing protocol available in a single vial.',
    uses: [
      { icon: '🏆', title: 'All-In-One Recovery Stack', sub: 'Covers skin, collagen, localised tissue, systemic repair, and gut/immune inflammation in one vial.' },
      { icon: '🔥', title: 'Maximum Anti-Inflammatory', sub: 'KPV adds dedicated gut and systemic anti-inflammatory action on top of BPC-157\'s tissue protection.' },
      { icon: '✨', title: 'Aesthetic + Recovery', sub: 'GHK-CU for skin and hair; BPC-157 + TB-500 for injuries; KPV for gut and inflammation.' },
      { icon: '📦', title: 'The Complete Peptide Protocol', sub: 'For researchers wanting everything covered with a single compound — this is it.' },
    ],
    specs: [{ size: '80mg × 10 vials', price: '$636' }],
  },

  /* ═══════════ COGNITIVE & NOOTROPIC ═══════════ */

  semax: {
    emoji: '💡', name: 'Semax', category: 'Nootropic Peptide', code: 'XA-Series',
    purity: '99.1', batch: 'OZP-XA-2025A',
    desc: 'Semax is a synthetic heptapeptide derived from the ACTH(4-7) sequence with a Pro-Gly-Pro C-terminal extension that prevents enzymatic degradation. It has potent BDNF-stimulating, neuroprotective, and cognitive-enhancing properties studied extensively in Russia.',
    uses: [
      { icon: '🧠', title: 'Focus & Cognitive Performance', sub: 'Noticeably clearer thinking, faster recall, and improved working memory — often felt acutely.' },
      { icon: '📈', title: 'BDNF Upregulation', sub: 'Increases brain-derived neurotrophic factor — supports long-term neuroplasticity and learning.' },
      { icon: '🛡️', title: 'Neuroprotection', sub: 'Protective effects against ischaemic damage and neurodegeneration in research models.' },
      { icon: '😌', title: 'Stress Resilience', sub: 'Reduces the cognitive impact of acute stress — maintains mental performance under pressure.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$155' },
      { size: '10mg × 10 vials', price: '$186' },
    ],
  },

  selank: {
    emoji: '🧠', name: 'Selank', category: 'Anxiolytic Nootropic', code: 'SK-Series',
    purity: '99.1', batch: 'OZP-SK-2025A',
    desc: 'Selank is a synthetic heptapeptide based on the immunomodulatory peptide tuftsin. It exhibits anxiolytic effects comparable to benzodiazepines in animal models but without sedation, dependency, or cognitive impairment — making it one of the most well-tolerated nootropic peptides in research.',
    uses: [
      { icon: '😌', title: 'Anxiety Reduction Without Sedation', sub: 'Calm, focused state without drowsiness or mental fog — clear-headed composure under social or performance stress.' },
      { icon: '🧠', title: 'Cognitive Enhancement', sub: 'Improves memory consolidation, learning speed, and attention — studied alongside semax in nootropic stacks.' },
      { icon: '🛡️', title: 'Immune Modulation', sub: 'Tuftsin-derived sequence supports immune function — dual cognitive + immune benefits.' },
      { icon: '😴', title: 'Stress Recovery', sub: 'Reduces chronically elevated stress markers and helps restore baseline HPA axis function.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$155' },
      { size: '10mg × 10 vials', price: '$186' },
    ],
  },

  dsip: {
    emoji: '🌙', name: 'DSIP (Delta Sleep-Inducing Peptide)', category: 'Sleep & Recovery', code: 'DS-Series',
    purity: '99.0', batch: 'OZP-DS-2025A',
    desc: 'DSIP is a nonapeptide that modulates EEG delta wave activity associated with deep, slow-wave sleep. It was first isolated from rabbit cerebral venous blood and has been studied for its ability to normalise disrupted sleep architecture and reduce cortisol.',
    uses: [
      { icon: '😴', title: 'Deep Sleep Enhancement', sub: 'Increases slow-wave (delta) sleep — the most restorative phase for muscle repair and hormonal reset.' },
      { icon: '⏰', title: 'Sleep Onset & Architecture', sub: 'Reduces time to sleep and improves sleep structure — useful for shift workers, travellers, or poor sleepers.' },
      { icon: '📉', title: 'Cortisol Reduction', sub: 'Dampens elevated cortisol — particularly useful for those under high chronic stress.' },
      { icon: '💪', title: 'Recovery Through Sleep', sub: 'Better sleep = better recovery, better hormones, better cognitive function the next day.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$171' },
      { size: '15mg × 10 vials', price: '$295' },
    ],
  },

  cerebrolysin: {
    emoji: '🧠', name: 'Cerebrolysin', category: 'Neurotrophic Peptide', code: 'CBL60',
    purity: '99.0', batch: 'OZP-CBL-2025A',
    desc: 'Cerebrolysin is a porcine brain-derived peptide preparation containing a mixture of low-molecular-weight neuropeptides and amino acids that mimic the physiological effects of endogenous neurotrophic factors including NGF, BDNF, CNTF, and GDNF.',
    uses: [
      { icon: '🧠', title: 'Cognitive Clarity & Memory', sub: 'Mimics multiple neurotrophic factors simultaneously — improved memory consolidation and recall speed.' },
      { icon: '🌱', title: 'Neuroplasticity & Learning', sub: 'Supports formation of new neural connections — useful during periods of intensive learning or mental demands.' },
      { icon: '🛡️', title: 'Neuroprotection', sub: 'Studied in TBI, stroke recovery, and Alzheimer\'s research — one of the most clinically validated neuropeptides.' },
      { icon: '💨', title: 'Brain Fog Clearance', sub: 'Subjectively, users report rapid improvement in mental clarity and reduction of cognitive fatigue.' },
    ],
    specs: [{ size: '60mg × 10 vials', price: '$121' }],
  },

  pinealon: {
    emoji: '✨', name: 'Pinealon', category: 'Neuropeptide', code: 'PI-Series',
    purity: '99.0', batch: 'OZP-PI-2025A',
    desc: 'Pinealon is a short tripeptide (Glu-Asp-Arg) bioregulator that penetrates the blood-brain barrier and accumulates in nerve cells. It was developed as part of the Russian bioregulator peptide research program and has been studied for cognitive longevity and sleep quality.',
    uses: [
      { icon: '🧠', title: 'Cognitive Longevity', sub: 'Studied for preservation of cognitive function in aging research models — mental sharpness over time.' },
      { icon: '😴', title: 'Sleep Quality', sub: 'Works synergistically with the pineal gland and melatonin axis — deeper, more restorative sleep.' },
      { icon: '🛡️', title: 'Neuroprotection', sub: 'Protects neurons from oxidative damage and apoptosis — studied in neurodegenerative research models.' },
      { icon: '🔋', title: 'Brain Energy & Clarity', sub: 'Improved cerebral energy metabolism — users report better mental stamina and clarity.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$202' },
      { size: '10mg × 10 vials', price: '$248' },
      { size: '20mg × 10 vials', price: '$341' },
    ],
  },

  snap8: {
    emoji: '🪄', name: 'SNAP-8 (Acetyl Octapeptide-3)', category: 'Cosmetic Peptide', code: 'NP810',
    purity: '99.0', batch: 'OZP-NP8-2025A',
    desc: 'SNAP-8 is an eight-amino-acid peptide analogue of the N-terminal end of SNAP-25. It competes with this protein for the SNARE complex assembly, partially inhibiting vesicle docking and neurotransmitter release at the neuromuscular junction — reducing muscle contraction intensity at expression lines.',
    uses: [
      { icon: '✨', title: 'Expression Line Reduction', sub: 'Reduces the depth of forehead, glabellar, and crow\'s feet lines — the peptide "Botox" alternative in research.' },
      { icon: '🧴', title: 'Skin Smoothing', sub: 'Improves skin texture and surface appearance — often stacked with GHK-CU for comprehensive skin protocols.' },
      { icon: '🕐', title: 'Preventive Anti-Aging', sub: 'Starts reducing expression line depth before they become permanent — best used early in an anti-aging protocol.' },
      { icon: '🌿', title: 'Non-Invasive Alternative', sub: 'Studied as a topical and injectable alternative to botulinum toxin in cosmetic peptide research.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$155' }],
  },

  melatonin: {
    emoji: '🌜', name: 'Melatonin', category: 'Sleep & Circadian', code: 'MT10',
    purity: '99.0', batch: 'OZP-MT10-2025A',
    desc: 'Melatonin is the primary hormone produced by the pineal gland in response to darkness, acting as the master circadian rhythm regulator. Injectable melatonin in research doses allows for precise timing and dose control compared to oral supplementation, which is subject to variable absorption.',
    uses: [
      { icon: '😴', title: 'Sleep Onset & Quality', sub: 'Precise circadian signalling — fast sleep onset, deeper sleep architecture, and reduced night waking.' },
      { icon: '✈️', title: 'Jet Lag & Shift Work', sub: 'Rapidly resets circadian phase — one of the most effective interventions for sleep schedule disruption.' },
      { icon: '🛡️', title: 'Antioxidant Protection', sub: 'Melatonin is a potent free-radical scavenger — protective effects on mitochondria and DNA integrity.' },
      { icon: '🌿', title: 'Anti-Aging Support', sub: 'Melatonin declines with age — restoring physiological levels supports sleep, immunity, and longevity markers.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$202' }],
  },

  /* ═══════════ LONGEVITY ═══════════ */

  epithalon: {
    emoji: '🌌', name: 'Epithalon (Epitalon)', category: 'Longevity Research', code: 'ET-Series',
    purity: '99.3', batch: 'OZP-ET-2025A',
    desc: 'Epithalon is a synthetic tetrapeptide (Ala-Glu-Asp-Gly) analogue of the natural peptide Epithalamin produced by the pineal gland. It is the only known compound proven to lengthen telomeres in human somatic cells, a key mechanism of the aging process.',
    uses: [
      { icon: '🧬', title: 'Telomere Lengthening', sub: 'Activates telomerase enzyme — the only accessible compound known to measurably extend telomere length in cells.' },
      { icon: '😴', title: 'Sleep Quality & Melatonin', sub: 'Restores pineal function and melatonin production — improved sleep depth and circadian rhythm.' },
      { icon: '🛡️', title: 'Antioxidant & DNA Protection', sub: 'Reduces oxidative stress and protects cellular DNA — studied in longevity and cancer prevention research.' },
      { icon: '⏳', title: 'The Longevity Protocol', sub: 'Most commonly used in 10-day course cycles, 1–2 times per year — a cornerstone of longevity research stacks.' },
    ],
    specs: [
      { size: '10mg × 10 vials', price: '$180' },
      { size: '50mg × 10 vials', price: '$496' },
    ],
  },

  nad: {
    emoji: '🔮', name: 'NAD+', category: 'Cellular Energy', code: 'NJ-Series',
    purity: '99.0', batch: 'OZP-NJ-2025A',
    desc: 'Nicotinamide adenine dinucleotide (NAD+) is a coenzyme central to all metabolic processes, DNA repair, and sirtuin protein activation. NAD+ levels decline approximately 50% every 20 years, and this decline is increasingly implicated as a primary driver of cellular aging.',
    uses: [
      { icon: '⚡', title: 'Energy & Mental Clarity', sub: 'Restores cellular ATP production — most users report a significant improvement in energy, focus, and drive.' },
      { icon: '🧬', title: 'DNA Repair', sub: 'PARP activation via NAD+ drives DNA damage repair — foundational for longevity and cancer prevention protocols.' },
      { icon: '🔄', title: 'Sirtuin Activation', sub: 'Fuels sirtuin longevity proteins (SIRT1–7) — regulates gene expression, metabolism, and inflammation.' },
      { icon: '😴', title: 'Sleep & Recovery Quality', sub: 'Improved mitochondrial efficiency translates to better overnight recovery and hormonal restoration.' },
    ],
    specs: [
      { size: '100mg × 10 vials', price: '$155' },
      { size: '500mg × 10 vials', price: '$279' },
      { size: '1000mg × 10 vials', price: '$434' },
    ],
  },

  ss31: {
    emoji: '⚙️', name: 'SS-31 (Elamipretide)', category: 'Mitochondrial Research', code: '2S-Series',
    purity: '99.2', batch: 'OZP-2S-2025A',
    desc: 'SS-31 is a mitochondria-targeted tetrapeptide that selectively concentrates in the inner mitochondrial membrane. It prevents oxidation of cardiolipin — a key phospholipid that anchors cytochrome c and maintains the electron transport chain efficiency.',
    uses: [
      { icon: '⚡', title: 'Mitochondrial Efficiency', sub: 'Restores electron transport chain function — directly improves how efficiently cells produce energy.' },
      { icon: '🛡️', title: 'Oxidative Stress Protection', sub: 'Prevents mitochondrial ROS overload — reduces chronic inflammation and cellular damage at the source.' },
      { icon: '🫀', title: 'Cardiovascular Protection', sub: 'Studied in heart failure and ischaemia research — preserves cardiac function and reduces infarct size.' },
      { icon: '🏃', title: 'Endurance & Recovery', sub: 'Better mitochondrial function means better exercise capacity, faster recovery, and reduced fatigue.' },
    ],
    specs: [
      { size: '10mg × 10 vials', price: '$298' },
      { size: '50mg × 10 vials', price: '$915' },
    ],
  },

  motsc: {
    emoji: '🔋', name: 'MOTS-C', category: 'Mitochondrial Peptide', code: 'MS-Series',
    purity: '99.0', batch: 'OZP-MS-2025A',
    desc: 'MOTS-C is a 16-amino-acid peptide encoded within the mitochondrial genome — specifically the 12S rRNA gene. It acts as a mitochondria-derived signalling molecule that translocates to the nucleus and regulates metabolic gene expression, insulin sensitivity, and exercise adaptation.',
    uses: [
      { icon: '🔥', title: 'Metabolic Rate Boost', sub: 'Increases resting metabolic rate by improving mitochondrial biogenesis and efficiency — more calories burned.' },
      { icon: '🩸', title: 'Insulin Sensitivity', sub: 'Significantly improves glucose uptake and insulin signalling — effective for blood sugar management.' },
      { icon: '🏋️', title: 'Exercise Performance', sub: 'Studied as an exercise-mimetic — improves endurance, strength output, and recovery independently.' },
      { icon: '⏳', title: 'Longevity & Healthspan', sub: 'Regulates AMPK and FOXO pathways — two of the most important longevity signalling axes.' },
    ],
    specs: [
      { size: '10mg × 10 vials', price: '$233' },
      { size: '40mg × 10 vials', price: '$605' },
    ],
  },

  glutathione: {
    emoji: '💧', name: 'Glutathione', category: 'Master Antioxidant', code: 'GTT',
    purity: '99.0', batch: 'OZP-GTT-2025A',
    desc: 'Glutathione is a tripeptide (Glu-Cys-Gly) and the body\'s primary intracellular antioxidant. It is central to detoxification, redox homeostasis, and immune function. Intravenous or injectable glutathione bypasses the poor oral bioavailability of supplemental forms.',
    uses: [
      { icon: '✨', title: 'Skin Brightening & Tone', sub: 'Inhibits tyrosinase and shifts melanin production — skin appears brighter and more even with consistent use.' },
      { icon: '🫀', title: 'Detoxification', sub: 'Conjugates heavy metals and toxins for elimination — important for those with high environmental exposure.' },
      { icon: '🛡️', title: 'Antioxidant Replenishment', sub: 'Direct repletion of the master antioxidant — protects cells from oxidative damage at the source.' },
      { icon: '💪', title: 'Immune Function', sub: 'Critical for lymphocyte proliferation and NK cell activity — immune support at the cellular level.' },
    ],
    specs: [{ size: '1500mg × 10 vials', price: '$279' }],
  },

  amino1mq: {
    emoji: '🧊', name: '5-Amino-1MQ', category: 'NNMT Inhibitor', code: '5AM',
    purity: '99.0', batch: 'OZP-5AM-2025A',
    desc: '5-Amino-1MQ is a selective small-molecule inhibitor of nicotinamide N-methyltransferase (NNMT), an enzyme overexpressed in adipocytes. NNMT inhibition increases intracellular SAM and NAD+ levels, reprogramming adipocyte metabolism to favour fat burning over storage.',
    uses: [
      { icon: '🔥', title: 'Adipocyte Reprogramming', sub: 'Blocks NNMT — forces fat cells to switch from storage mode to burning mode at a genetic level.' },
      { icon: '💊', title: 'NAD+ Preservation', sub: 'Reduces NAD+ consumption in fat tissue — leaves more available for longevity pathways and energy production.' },
      { icon: '⚖️', title: 'Body Recomposition', sub: 'Selectively targets fat mass while supporting lean mass — useful in cutting and recomposition protocols.' },
      { icon: '🤝', title: 'Stacks with Longevity Compounds', sub: 'Complements NAD+ supplementation, NMN, and mitochondrial peptides — amplifies their effects.' },
    ],
    specs: [{ size: '5mg × 10 vials', price: '$171' }],
  },

  /* ═══════════ SEXUAL & REPRODUCTIVE ═══════════ */

  pt141: {
    emoji: '🔥', name: 'PT-141 (Bremelanotide)', category: 'Melanocortin / Sexual Health', code: 'P41',
    purity: '99.2', batch: 'OZP-P41-2025A',
    desc: 'PT-141 is a cyclic heptapeptide analogue of α-MSH that acts as a non-selective melanocortin receptor agonist. Unlike PDE5 inhibitors (e.g., sildenafil), PT-141 works centrally through the CNS rather than via vascular mechanisms — making it effective in both males and females.',
    uses: [
      { icon: '❤️‍🔥', title: 'Libido & Sexual Desire', sub: 'Central CNS mechanism increases desire and arousal directly — not dependent on stimulation or vascular response.' },
      { icon: '⚡', title: 'Works For Both Sexes', sub: 'Unlike most sexual health compounds, PT-141 shows consistent results in both male and female research subjects.' },
      { icon: '🔄', title: 'Complements Hormone Protocols', sub: 'Stacks with testosterone optimisation and other hormonal compounds — addresses the central desire component.' },
      { icon: '🎯', title: 'No Vascular Side Effects', sub: 'Works independently of blood pressure — no headache, flushing, or cardiovascular effects of PDE5 inhibitors.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$217' }],
  },

  oxytocin: {
    emoji: '💞', name: 'Oxytocin', category: 'Neuropeptide Hormone', code: 'OT2',
    purity: '99.0', batch: 'OZP-OT2-2025A',
    desc: 'Oxytocin is a nine-amino-acid neuropeptide produced in the hypothalamus and released from the posterior pituitary. Often called the "bonding hormone," it plays critical roles in social behaviour, stress response, pain modulation, and sexual function.',
    uses: [
      { icon: '🤝', title: 'Social Confidence & Connection', sub: 'Reduces social anxiety and increases prosocial behaviour — studied in autism, social phobia, and bonding research.' },
      { icon: '😌', title: 'Stress & Cortisol Reduction', sub: 'Blunts HPA axis stress response — useful for social performance anxiety and chronic stress management.' },
      { icon: '💑', title: 'Intimacy & Bonding', sub: 'Amplifies emotional connection and sexual satisfaction — used in couples and sexual health research.' },
      { icon: '🛠️', title: 'Recovery & Pain Modulation', sub: 'Anti-nociceptive properties — studied for chronic pain and recovery from physical stress.' },
    ],
    specs: [{ size: '2mg × 10 vials', price: '$109' }],
  },

  kisspeptin: {
    emoji: '💗', name: 'Kisspeptin-10', category: 'Reproductive Endocrinology', code: 'KS-Series',
    purity: '99.0', batch: 'OZP-KS-2025A',
    desc: 'Kisspeptin-10 is a decapeptide fragment of the full-length kisspeptin protein encoded by the KISS1 gene. It is the primary regulator of GnRH pulse secretion and acts as the master switch for the hypothalamic-pituitary-gonadal (HPG) axis.',
    uses: [
      { icon: '💪', title: 'Testosterone Stimulation', sub: 'Upstream HPG axis activation — stimulates LH surge and subsequent testosterone production naturally.' },
      { icon: '🔥', title: 'Libido & Sexual Drive', sub: 'Kisspeptin neurons are central to sexual motivation — directly restores drive through hormonal pathway.' },
      { icon: '🧬', title: 'Fertility & Reproductive Health', sub: 'Studied in hypogonadism, infertility, and puberty research — restores natural hormonal rhythm.' },
      { icon: '🔄', title: 'PCT & Hormonal Reset', sub: 'Restores natural HPG axis function — useful in post-cycle or low-testosterone recovery protocols.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$186' },
      { size: '10mg × 10 vials', price: '$295' },
    ],
  },

  hcg: {
    emoji: '🧫', name: 'HCG (Human Chorionic Gonadotropin)', category: 'Glycoprotein Hormone', code: 'G-Series',
    purity: '99.0', batch: 'OZP-HCG-2025A',
    desc: 'Human chorionic gonadotropin is a glycoprotein hormone that mimics LH at the LH receptor in Leydig cells. It directly stimulates testosterone production and maintains testicular volume and function during periods of suppressed endogenous LH.',
    uses: [
      { icon: '💊', title: 'Testosterone Production', sub: 'Directly stimulates Leydig cells — maintains or restores testosterone without suppressing natural HPG axis.' },
      { icon: '🔄', title: 'PCT & Hormonal Reset', sub: 'Standard post-cycle therapy compound — essential for restoring natural testosterone after suppressive protocols.' },
      { icon: '🧬', title: 'Testicular Maintenance', sub: 'Prevents testicular atrophy during periods of suppressed LH — preserves size and fertility potential.' },
      { icon: '⚡', title: 'Libido & Drive', sub: 'Testosterone elevation from HCG improves libido, energy, and motivation in research subjects.' },
    ],
    specs: [
      { size: '5,000 iu × 10 vials', price: '$295' },
      { size: '10,000 iu × 10 vials', price: '$527' },
    ],
  },

  hmg: {
    emoji: '🌸', name: 'HMG (Human Menopausal Gonadotropin)', category: 'Gonadotropin', code: 'G75',
    purity: '99.0', batch: 'OZP-HMG-2025A',
    desc: 'HMG contains a mix of FSH and LH activity extracted from the urine of postmenopausal women. FSH activity stimulates follicle development (females) and Sertoli cell function and sperm production (males), while LH activity supports steroidogenesis.',
    uses: [
      { icon: '🧬', title: 'Fertility Support', sub: 'Stimulates sperm production in males and follicle development in females — key for fertility protocols.' },
      { icon: '🤝', title: 'Complements HCG', sub: 'Used alongside HCG for more complete gonadal stimulation — addresses both LH and FSH receptor populations.' },
      { icon: '💪', title: 'Spermatogenesis', sub: 'Restores sperm count and motility in azoospermia and oligospermia research models.' },
      { icon: '🔬', title: 'IVF Research Protocols', sub: 'Standard compound in assisted reproduction and ovarian stimulation research.' },
    ],
    specs: [{ size: '75 iu × 10 vials', price: '$217' }],
  },

  dermorphin: {
    emoji: '🌑', name: 'Dermorphin', category: 'Opioid Peptide', code: 'DR5',
    purity: '99.0', batch: 'OZP-DR5-2025A',
    desc: 'Dermorphin is a heptapeptide opioid originally isolated from the skin of South American frogs (Phyllomedusa species). It has extremely high selectivity and affinity for mu-opioid receptors — approximately 40x more potent than morphine by weight in receptor binding assays.',
    uses: [
      { icon: '🔬', title: 'Pain Research', sub: 'High mu-opioid receptor affinity makes it valuable for receptor binding and analgesic mechanism research.' },
      { icon: '🧠', title: 'Neurological Studies', sub: 'Used to probe opioid receptor distribution and signalling in CNS research models.' },
      { icon: '⚗️', title: 'Receptor Binding Studies', sub: 'High selectivity makes it an ideal ligand for characterising opioid receptor populations in tissue studies.' },
      { icon: '📚', title: 'Pharmacological Research', sub: 'Widely used as a reference compound in pain pharmacology and drug development research.' },
    ],
    specs: [{ size: '5mg × 10 vials', price: '$202' }],
  },

  /* ═══════════ AESTHETIC & PIGMENTATION ═══════════ */

  melanotan1: {
    emoji: '☀️', name: 'Melanotan I', category: 'Melanocortin / Pigmentation', code: 'MT1',
    purity: '99.0', batch: 'OZP-MT1-2025A',
    desc: 'Melanotan I (afamelanotide) is a synthetic analogue of alpha-melanocyte stimulating hormone (α-MSH) that binds MC1R with high affinity. It drives eumelanin production in skin cells — producing a tan without UV exposure and providing photoprotective research data.',
    uses: [
      { icon: '🌞', title: 'Skin Tanning Without Excessive UV', sub: 'Deep, even tan developed with minimal UV exposure — reduces cumulative solar damage.' },
      { icon: '🛡️', title: 'Photoprotection', sub: 'Increased melanin density reduces UV penetration — studied for skin cancer prevention in at-risk populations.' },
      { icon: '✨', title: 'Even Skin Tone', sub: 'Uniform melanin distribution avoids patchy tanning — gives a natural, even result.' },
      { icon: '🏖️', title: 'Tan Preparation', sub: 'Pre-loading before sun exposure maximises colour depth and minimises burn risk.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$171' }],
  },

  melanotan2: {
    emoji: '🌞', name: 'Melanotan II (MT-2 Acetate)', category: 'Melanocortin / Pigmentation', code: 'ML10',
    purity: '99.0', batch: 'OZP-ML10-2025A',
    coaUrl: 'https://chromate.org/verify?c=29909_2E9HCJ72C1R6',
    desc: 'Melanotan II is a cyclic analogue of α-MSH with broader receptor affinity than Melanotan I, acting at MC1R, MC3R, MC4R, and MC5R. The MC4R activity produces appetite suppression and libido enhancement as additional effects alongside skin darkening.',
    uses: [
      { icon: '☀️', title: 'Deep, Rapid Tanning', sub: 'Faster and darker tan than MT-I — results typically visible within 1–2 weeks of research protocol.' },
      { icon: '🍽️', title: 'Appetite Suppression', sub: 'MC4R activity reduces appetite — can assist body composition goals alongside fat loss protocols.' },
      { icon: '❤️‍🔥', title: 'Libido Enhancement', sub: 'MC4R also mediates sexual arousal — libido boost is a commonly reported secondary effect.' },
      { icon: '🌞', title: 'Tanning Protocol Staple', sub: 'The most widely used pigmentation research compound — effective with minimal UV maintenance dosing.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$171' }],
  },

  /* ═══════════ FAT LOSS & METABOLIC ═══════════ */

  aod9604: {
    emoji: '⚖️', name: 'AOD-9604', category: 'Lipolytic Peptide', code: '5AD',
    purity: '99.0', batch: 'OZP-5AD-2025A',
    desc: 'AOD-9604 is a stabilised fragment of the C-terminus of HGH (residues 176–191). It retains the lipolytic activity of HGH without binding to the HGH receptor or affecting IGF-1 levels — providing fat-burning effects without the side effects associated with full HGH.',
    uses: [
      { icon: '🔥', title: 'Targeted Fat Loss', sub: 'Activates beta-3 adrenergic receptors in adipose tissue — direct, GH receptor-independent lipolysis.' },
      { icon: '✅', title: 'Clean Side Effect Profile', sub: 'No IGF-1 elevation, no glucose disruption — can be run longer and at higher doses than full HGH safely.' },
      { icon: '⚖️', title: 'Stubborn Subcutaneous Fat', sub: 'Particularly effective on resistant fat deposits — often added to GLP-1 protocols for enhanced results.' },
      { icon: '💊', title: 'Anti-Obesity Mechanism', sub: 'Studied for obesity treatment with demonstrated fat oxidation and metabolic improvement in clinical trials.' },
    ],
    specs: [{ size: '5mg × 10 vials', price: '$357' }],
  },

  aicar: {
    emoji: '🚴', name: 'AICAR', category: 'AMPK Activator', code: 'AR50',
    purity: '99.0', batch: 'OZP-AR50-2025A',
    desc: 'AICAR (5-aminoimidazole-4-carboxamide ribonucleotide) is a cell-permeable AMP-mimetic that directly activates AMPK (AMP-activated protein kinase) — often called the "master metabolic switch." It produces exercise-mimetic effects by activating the same pathways as intense cardio.',
    uses: [
      { icon: '🏃', title: 'Exercise Mimetic', sub: 'Activates AMPK — the same pathway triggered by endurance exercise. Documented endurance improvements in rodent studies.' },
      { icon: '🔥', title: 'Fat Oxidation', sub: 'AMPK activation shunts metabolism toward fatty acid oxidation — burns fat preferentially at rest.' },
      { icon: '⚡', title: 'Cardiovascular Capacity', sub: 'Studied for VO₂ max improvement — increases mitochondrial biogenesis and oxidative enzyme expression.' },
      { icon: '🩸', title: 'Glucose & Insulin', sub: 'Improves insulin sensitivity and glucose uptake — studied alongside metformin in metabolic research.' },
    ],
    specs: [{ size: '50mg × 10 vials', price: '$223' }],
  },

  adipotide: {
    emoji: '🎯', name: 'Adipotide (FTPP)', category: 'Targeted Adipose', code: 'AP-Series',
    purity: '99.0', batch: 'OZP-AP-2025A',
    desc: 'Adipotide is a peptidomimetic designed to selectively target and destroy blood vessels supplying white adipose tissue. It binds prohibitin on the surface of adipose blood vessel endothelium, triggering apoptosis of the vessel — cutting off the fat\'s blood supply.',
    uses: [
      { icon: '🎯', title: 'Targeted Adipose Destruction', sub: 'Novel mechanism — selectively kills fat tissue blood supply rather than mobilising fat. Unique in research peptides.' },
      { icon: '⚖️', title: 'Stubborn Body Fat', sub: 'Particularly studied for obesity-resistant fat deposits — areas where GLP-1 or lipolysis peptides have limited effect.' },
      { icon: '🔬', title: 'Advanced Recomposition', sub: 'For those who have plateaued on conventional fat loss compounds — a fundamentally different mechanism.' },
      { icon: '🌿', title: 'Complements GLP-1 Protocols', sub: 'Different enough in mechanism to provide additive effects when stacked with GLP-1 and lipolytic peptides.' },
    ],
    specs: [
      { size: '2mg × 10 vials', price: '$248' },
      { size: '5mg × 10 vials', price: '$496' },
    ],
  },

  slupp322: {
    emoji: '🏃', name: 'SLU-PP-322', category: 'ERRα/γ Pan-Agonist', code: '322',
    purity: '99.0', batch: 'OZP-322-2025A',
    desc: 'SLU-PP-322 is a synthetic ligand that activates all three estrogen-related receptors (ERRα, ERRβ, ERRγ) — orphan nuclear receptors that regulate energy expenditure and mitochondrial biogenesis. It produces profound exercise-mimetic effects including type I muscle fibre switching.',
    uses: [
      { icon: '🏃', title: 'Endurance Without Training', sub: 'Pan-ERR activation switches muscle fibre type and improves cardiovascular markers without physical exercise.' },
      { icon: '🔥', title: 'Fatty Acid Oxidation', sub: 'Dramatically increases fat burning — muscles preferentially oxidise fat even at rest.' },
      { icon: '💪', title: 'Muscle Quality', sub: 'Type I (slow-twitch) fibre increase improves muscular endurance, stamina, and recovery speed.' },
      { icon: '⚡', title: 'Metabolic Efficiency', sub: 'Studied for heart failure, obesity, and metabolic disease — one of the most potent exercise mimetics discovered.' },
    ],
    specs: [{ size: '5mg × 10 vials', price: '$341' }],
  },

  lemonbottle: {
    emoji: '🍋', name: 'Lemon Bottle', category: 'Lipolytic Solution', code: 'LB',
    purity: '99.0', batch: 'OZP-LB-2025A',
    desc: 'Lemon Bottle is a premium lipolytic research solution containing riboflavin, lecithin, and bromelain in a pre-mixed aqueous solution. It is studied for localised fat dissolution, with an application focus on superficial and sub-dermal adipose tissue.',
    uses: [
      { icon: '🍋', title: 'Localised Fat Spot Reduction', sub: 'Breaks down adipocytes in targeted areas — studied for chin, jowl, abdomen, and thigh fat reduction.' },
      { icon: '✨', title: 'Jawline & Facial Definition', sub: 'One of the most used compounds in facial contouring research — sub-mental and jowl fat clearance.' },
      { icon: '🤝', title: 'Complements Body Sculpting', sub: 'Pairs with systemic GLP-1 or AOD-9604 protocols — addresses localised areas that systemic compounds miss.' },
      { icon: '🌿', title: 'Natural Ingredients', sub: 'Enzyme and phospholipid-based mechanism — studied as an alternative to synthetic lipolytic injections.' },
    ],
    specs: [{ size: '10ml × 10 vials', price: '$341' }],
  },

  lc120: {
    emoji: '🧴', name: 'LC120 Compound', category: 'Lipotropic', code: 'LC120',
    purity: '99.0', batch: 'OZP-LC120-2025A',
    desc: 'LC120 is a standardised pre-mixed lipotropic solution designed for metabolic research. It contains a combination of fat-mobilising compounds including methionine, inositol, choline, and supporting co-factors in a sterile injectable preparation.',
    uses: [
      { icon: '🔥', title: 'Fat Mobilisation', sub: 'Lipotropic agents facilitate fat transport from the liver and tissue into circulation for oxidation.' },
      { icon: '🫀', title: 'Liver Health', sub: 'Choline and methionine support hepatic fat processing — studied for NAFLD and fatty liver research.' },
      { icon: '⚡', title: 'Energy & Metabolism', sub: 'Improved fat metabolism translates to better energy availability and metabolic efficiency.' },
      { icon: '📦', title: 'Pre-Mixed Convenience', sub: 'Ready to use — no compounding or preparation required beyond standard reconstitution.' },
    ],
    specs: [{ size: '10ml × 10 vials', price: '$217' }],
  },

  lipocb12: {
    emoji: '🧪', name: 'Lipo-C with Vitamin B12', category: 'Lipotropic Blend', code: 'LC216',
    purity: '99.0', batch: 'OZP-LC216-2025A',
    desc: 'This extended lipotropic formula adds methylcobalamin (B12) to the methionine, inositol, and choline base. B12 is essential for fatty acid metabolism and plays a critical role in energy production and neurological health.',
    uses: [
      { icon: '⚡', title: 'Energy & Drive', sub: 'B12 corrects a common deficiency affecting energy production, mood, and cognitive function.' },
      { icon: '🔥', title: 'Enhanced Fat Metabolism', sub: 'B12 optimises the methylation cycle required for efficient fat processing and elimination.' },
      { icon: '🧠', title: 'Cognitive Support', sub: 'Methylcobalamin form crosses the blood-brain barrier — supports neurological health and mood.' },
      { icon: '📦', title: 'All-In-One Formula', sub: 'Lipotropic + B12 in a single vial — covers fat mobilisation and energy co-factor in one injection.' },
    ],
    specs: [{ size: '10ml × 10 vials', price: '$264' }],
  },

  b12: {
    emoji: '🟥', name: 'Vitamin B12 (1mg/ml)', category: 'Vitamin', code: 'B12',
    purity: '99.0', batch: 'OZP-B12-2025A',
    desc: 'Injectable Vitamin B12 (cobalamin) at 1mg/ml provides direct supplementation bypassing intestinal absorption limitations. B12 is essential for DNA synthesis, red blood cell formation, myelin maintenance, and one-carbon metabolism.',
    uses: [
      { icon: '⚡', title: 'Energy & Fatigue Elimination', sub: 'Corrects deficiency-related fatigue — noticeable energy improvement within days in deficient individuals.' },
      { icon: '🧠', title: 'Neurological & Cognitive Health', sub: 'Critical for myelin synthesis and nerve conduction — supports memory, mood, and cognitive speed.' },
      { icon: '🏃', title: 'Athletic Performance', sub: 'Required for red blood cell formation and oxygen transport — supports endurance and recovery.' },
      { icon: '🧬', title: 'Methylation & DNA Repair', sub: 'Co-factor in the methylation cycle — supports DNA repair and gene expression regulation.' },
    ],
    specs: [{ size: '10ml × 10 vials', price: '$140' }],
  },

  lcarnitine: {
    emoji: '🟧', name: 'L-Carnitine (600mg/ml)', category: 'Amino Acid', code: 'LC600',
    purity: '99.0', batch: 'OZP-LC600-2025A',
    desc: 'L-Carnitine is a conditionally essential amino acid derivative that transports long-chain fatty acids across the inner mitochondrial membrane for beta-oxidation. Injectable forms achieve significantly higher plasma concentrations than oral supplementation.',
    uses: [
      { icon: '🔥', title: 'Fat Oxidation', sub: 'Rate-limiting factor in mitochondrial fat transport — more carnitine means more fat burned for fuel.' },
      { icon: '🏋️', title: 'Exercise Performance', sub: 'Reduces muscle damage markers, improves oxygen utilisation, and delays fatigue during training.' },
      { icon: '❤️', title: 'Cardiovascular Support', sub: 'Studied for heart failure, arrhythmia, and cardiac recovery — improves energy production in cardiac muscle.' },
      { icon: '🧬', title: 'Insulin Sensitivity', sub: 'Improves glucose uptake and GLUT4 expression — metabolic synergy with GLP-1 and insulin-sensitising compounds.' },
    ],
    specs: [{ size: '10ml × 10 vials', price: '$279' }],
  },

  /* ═══════════ IMMUNITY ═══════════ */

  thymosinA1: {
    emoji: '🛡️', name: 'Thymosin Alpha-1', category: 'Immune Peptide', code: 'TA-Series',
    purity: '99.0', batch: 'OZP-TA-2025A',
    coaUrl: 'https://chromate.org/verify?c=29906_36T8Y32L22GJ',
    desc: 'Thymosin Alpha-1 (Tα1) is a 28-amino-acid peptide originally isolated from thymosin fraction 5 of bovine thymus. It is an endogenous immunomodulator that enhances T-cell maturation, dendritic cell function, and NK cell activity — and declines naturally with age.',
    uses: [
      { icon: '🛡️', title: 'Immune System Strengthening', sub: 'Increases T-cell count and activity — builds a stronger adaptive immune response over a protocol cycle.' },
      { icon: '🦠', title: 'Infection Resilience', sub: 'Studied in chronic viral infection (HIV, HBV, HCV) and sepsis research — significantly reduces morbidity markers.' },
      { icon: '♻️', title: 'Post-Illness Recovery', sub: 'Accelerates immune reconstitution after illness, chemotherapy, or immunosuppressive events.' },
      { icon: '⏳', title: 'Longevity Immune Maintenance', sub: 'Age-related immune decline (immunosenescence) can be partially reversed — foundational in anti-aging stacks.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$279' },
      { size: '10mg × 10 vials', price: '$481' },
    ],
  },

  ll37: {
    emoji: '🛡️', name: 'LL-37', category: 'Antimicrobial Peptide', code: '3750',
    purity: '98.8', batch: 'OZP-3750-2025A',
    desc: 'LL-37 is the only human cathelicidin antimicrobial peptide (CAMP). It is produced in neutrophils, macrophages, and epithelial cells and acts as a first-line defence against bacterial, viral, and fungal pathogens while simultaneously modulating the immune and inflammatory response.',
    uses: [
      { icon: '🦠', title: 'Antimicrobial Defence', sub: 'Directly disrupts bacterial membranes — effective against drug-resistant strains in research models.' },
      { icon: '🩹', title: 'Wound Healing', sub: 'Recruits immune cells and keratinocytes to wounds — significantly accelerates closure and re-epithelialisation.' },
      { icon: '🌿', title: 'Skin Microbiome Support', sub: 'Balances skin microbiome and reduces pathogen overgrowth — studied for acne, eczema, and rosacea.' },
      { icon: '🫃', title: 'Gut Barrier Protection', sub: 'Expressed in gut epithelium — protects against microbial invasion and maintains intestinal mucosal integrity.' },
    ],
    specs: [{ size: '5mg × 10 vials', price: '$326' }],
  },

  ara290: {
    emoji: '🩹', name: 'ARA-290 (Cibinetide)', category: 'Tissue Protective Peptide', code: 'ARA',
    purity: '99.0', batch: 'OZP-ARA-2025A',
    desc: 'ARA-290 is an 11-amino-acid peptide derived from the protective site of erythropoietin (EPO) that selectively activates the innate repair receptor (IRR) without triggering erythropoiesis. This provides the tissue-protective and anti-inflammatory benefits of EPO without the hematopoietic side effects.',
    uses: [
      { icon: '🔥', title: 'Neuropathic Pain Reduction', sub: 'Studied in peripheral neuropathy and small-fibre nerve research — meaningful reduction in chronic pain scores.' },
      { icon: '🛡️', title: 'Anti-Inflammatory', sub: 'Activates IRR to reduce systemic inflammation — studied in autoimmune and inflammatory disease models.' },
      { icon: '🩹', title: 'Tissue Protection Post-Injury', sub: 'Protects cells from ischaemic and hypoxic damage — studied in organ protection and surgical research.' },
      { icon: '🤝', title: 'Complements Healing Stacks', sub: 'Pairs well with BPC-157 and TB-500 for comprehensive tissue protection and repair.' },
    ],
    specs: [{ size: '10mg × 10 vials', price: '$279' }],
  },

  vip: {
    emoji: '🌀', name: 'Vasoactive Intestinal Peptide (VIP)', category: 'Neuropeptide', code: 'VIP-Series',
    purity: '99.0', batch: 'OZP-VIP-2025A',
    desc: 'VIP is a 28-amino-acid neuropeptide expressed throughout the GI tract, CNS, and immune system. It acts as a potent vasodilator, bronchdilator, and immunomodulator through VPAC1 and VPAC2 receptors, with broad anti-inflammatory and neuroprotective properties.',
    uses: [
      { icon: '🌿', title: 'Anti-Inflammatory Signalling', sub: 'Potent anti-inflammatory — inhibits pro-inflammatory cytokines and macrophage activation. Studied in autoimmune models.' },
      { icon: '🫃', title: 'Gut Motility & Health', sub: 'Regulates smooth muscle tone, secretion, and blood flow in the GI tract — studied in IBS and gut dysmotility.' },
      { icon: '🧠', title: 'Neuroprotection', sub: 'Acts as a survival factor for neurons — studied in Parkinson\'s, ALS, and neurodegeneration models.' },
      { icon: '🫁', title: 'Pulmonary Research', sub: 'Potent bronchodilator — studied in pulmonary hypertension and asthma research models.' },
    ],
    specs: [
      { size: '5mg × 10 vials', price: '$264' },
      { size: '10mg × 10 vials', price: '$481' },
    ],
  },

  /* ═══════════ SUPPLIES ═══════════ */

  pbs: {
    emoji: '💧', name: 'Phosphate Buffered Saline (PBS)', category: 'Reconstitution Solvent', code: 'WA-Series',
    purity: '99.0', batch: 'OZP-WA-2025A',
    desc: 'PBS is an isotonic, pH-neutral buffered saline solution (pH 7.4) matching the osmolarity of human blood. It is the standard solvent for reconstituting water-soluble peptides and is compatible with most peptide preparations.',
    uses: [
      { icon: '🧪', title: 'Peptide Reconstitution', sub: 'Ideal solvent for most water-soluble lyophilised peptides — neutral pH preserves compound integrity.' },
      { icon: '🔬', title: 'Laboratory Dilutions', sub: 'Standard lab buffer for serial dilutions, assay preparations, and cell culture studies.' },
      { icon: '⚗️', title: 'Short-Term Storage', sub: 'Reconstituted peptides in PBS can be stored refrigerated at 4°C for up to 7–14 days.' },
      { icon: '📐', title: 'Dose Precision', sub: 'Known concentration makes precise dosing straightforward — calculate volume based on desired dose per vial.' },
    ],
    specs: [
      { size: '3ml × 10 vials', price: '$16' },
      { size: '10ml × 10 vials', price: '$31' },
    ],
  },

  bacwater: {
    emoji: '💦', name: 'Bacteriostatic Water 0.9%', category: 'Reconstitution Solvent', code: 'BA-Series',
    purity: '99.0', batch: 'OZP-BA-2025A',
    desc: 'Bacteriostatic water contains 0.9% benzyl alcohol as a preservative, inhibiting bacterial growth in reconstituted solutions. This makes it the preferred choice for peptides that will be stored after reconstitution, as it extends usable shelf life significantly beyond sterile water or PBS.',
    uses: [
      { icon: '🧪', title: 'Extended Storage After Reconstitution', sub: 'Benzyl alcohol preservative inhibits bacterial growth — reconstituted peptides remain stable for 28–30 days at 4°C.' },
      { icon: '📐', title: 'Multi-Use Vials', sub: 'Multi-draw from reconstituted vials without contamination risk — essential for any protocol longer than a single injection.' },
      { icon: '✅', title: 'Preferred for Most Peptides', sub: 'The standard choice for GLP-1 peptides, GH peptides, healing peptides, and most lyophilised compounds.' },
      { icon: '🔬', title: 'Research Standard', sub: 'Industry-standard reconstitution medium — ensures sterility throughout the research protocol.' },
    ],
    specs: [
      { size: '3ml × 10 vials', price: '$16' },
      { size: '10ml × 10 vials', price: '$31' },
    ],
  },

  aceticwater: {
    emoji: '🧴', name: 'Acetic Acid Water 0.6%', category: 'Reconstitution Solvent', code: 'AA-Series',
    purity: '99.0', batch: 'OZP-AA-2025A',
    desc: '0.6% acetic acid water is a mildly acidic reconstitution medium (pH ~3.5) that improves solubility of hydrophobic or pH-sensitive peptides that do not dissolve well in neutral water or PBS. It is commonly used for GHRPs, IGF compounds, and other hydrophobic sequences.',
    uses: [
      { icon: '🔬', title: 'Hydrophobic Peptide Reconstitution', sub: 'Required for certain peptides (e.g. GHRP-6, IGF-1) that aggregate or precipitate in neutral pH solvents.' },
      { icon: '🧪', title: 'Improved Solubility', sub: 'Acidic environment prevents aggregation and maintains compound in active monomeric form.' },
      { icon: '⚗️', title: 'Research Standard', sub: 'Used as directed by the CoA for pH-sensitive compounds — always check which solvent is recommended per product.' },
      { icon: '📐', title: 'Precise Preparation', sub: 'Allows consistent reconstitution of compounds that would otherwise be difficult to dissolve accurately.' },
    ],
    specs: [
      { size: '3ml × 10 vials', price: '$16' },
      { size: '10ml × 10 vials', price: '$31' },
    ],
  },


  /* ═══════════════ YAOWU PHARMA PRODUCTS ═══════════════ */

  somatropin: {
    emoji: '📈', name: 'Somatropin (Recombinant HGH)', category: 'Pharma-Grade HGH', code: 'YW-HGH-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SOMATR-2026A',
    form: 'Lyophilised vial + diluent',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Pharma-grade recombinant human growth hormone supplied in lyophilised vials. Studied for IGF-1 elevation, body composition, recovery and anti-aging applications.',
    uses: [
      { icon: '💪', title: 'Muscle & Recovery', sub: 'Drives IGF-1 elevation, lean mass gain, faster recovery from training and tissue repair.' },
      { icon: '🔥', title: 'Body Recomposition', sub: 'Promotes lipolysis and reduces visceral fat alongside lean tissue gain.' },
      { icon: '✨', title: 'Skin & Anti-Aging', sub: 'Improves skin elasticity, sleep depth, and overall well-being markers in research.' }
    ],
    specs: [
      { size: '10 iu × 10 vials', price: '$155' }
    ],
  },
  peg_somatropin: {
    emoji: '🛰️', name: 'PEG-Somatropin (Long-Acting GH)', category: 'Long-Acting HGH', code: 'YW-PEG-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PEG_SO-2026A',
    form: 'Lyophilised vial + diluent',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'PEGylated long-acting somatropin engineered for once-weekly administration with sustained GH/IGF-1 elevation. Convenient alternative to daily HGH protocols.',
    uses: [
      { icon: '🗓️', title: 'Once-Weekly Dosing', sub: 'Single weekly injection — far more convenient than daily HGH regimens.' },
      { icon: '📈', title: 'Sustained IGF-1', sub: 'Maintains steady IGF-1 elevation rather than daily peaks and troughs.' },
      { icon: '💪', title: 'Recovery & Composition', sub: 'Same anabolic / lipolytic benefits as standard HGH with simpler logistics.' }
    ],
    specs: [
      { size: '54 iu × 1 vial', price: '$217' }
    ],
  },
  mecasermin: {
    emoji: '🧬', name: 'Mecasermin (Recombinant IGF-1)', category: 'Recombinant IGF-1', code: 'YW-MEC-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MECASE-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Full-length recombinant human IGF-1 (not the LR3 analogue). Used in growth disorder research, muscle hypertrophy studies, and neuroprotection.',
    uses: [
      { icon: '💪', title: 'Muscle Cell Growth', sub: 'Activates IGF-1R for hyperplasia and hypertrophy in skeletal muscle research.' },
      { icon: '🧠', title: 'Neuroprotection', sub: 'Studied in neurological development and neuroprotective pathway research.' },
      { icon: '🦴', title: 'Anabolic Recovery', sub: 'Supports protein synthesis and recovery from training and injury.' }
    ],
    specs: [
      { size: '40mg × 10 vials', price: '$1302' }
    ],
  },
  vosoritide: {
    emoji: '🧪', name: 'Vosoritide', category: 'CNP Analogue', code: 'YW-VOS-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VOSORI-2026A',
    form: 'Lyophilised vial',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'C-type natriuretic peptide analogue studied for endochondral bone growth and FGFR3 pathway modulation in skeletal research models.',
    uses: [
      { icon: '🦴', title: 'Bone Growth Pathways', sub: 'Acts on NPR-B receptor to counter FGFR3 over-signalling in growth plate research.' },
      { icon: '🔬', title: 'Pediatric Research', sub: 'Studied in pediatric skeletal development and achondroplasia models.' },
      { icon: '📏', title: 'Growth Plate Modulation', sub: 'Specifically targets endochondral ossification mechanisms.' }
    ],
    specs: [
      { size: '1.2mg × 10 vials', price: '$1395' }
    ],
  },
  teriparatide: {
    emoji: '🦴', name: 'Teriparatide', category: 'PTH Fragment', code: 'YW-TER-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TERIPA-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Recombinant 1-34 fragment of parathyroid hormone — anabolic bone agent that stimulates new bone formation in osteoporosis research.',
    uses: [
      { icon: '🦴', title: 'New Bone Formation', sub: 'Stimulates osteoblast activity for net bone gain rather than just antiresorption.' },
      { icon: '💪', title: 'Fracture Risk Reduction', sub: 'Improves bone mineral density and reduces vertebral fracture risk in research.' },
      { icon: '🔬', title: 'Severe Osteoporosis', sub: 'Most-studied anabolic agent for advanced bone-loss states.' }
    ],
    specs: [
      { size: '600mcg × 1 pen', price: '$155' }
    ],
  },
  abaloparatide: {
    emoji: '🦴', name: 'Abaloparatide', category: 'PTHrP Analogue', code: 'YW-ABA-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ABALOP-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Synthetic analogue of PTHrP (parathyroid hormone-related protein) — anabolic bone agent with more selective PTH1R signalling than teriparatide.',
    uses: [
      { icon: '🦴', title: 'Anabolic Bone Agent', sub: 'Newer-generation anabolic builder with cleaner receptor selectivity.' },
      { icon: '📈', title: 'Bone Density Gains', sub: 'Significant BMD improvements at spine and hip in osteoporosis research.' },
      { icon: '🛡️', title: 'Fracture Prevention', sub: 'Reduces both vertebral and non-vertebral fracture risk in trials.' }
    ],
    specs: [
      { size: '3120mcg × 1 pen', price: '$186' }
    ],
  },
  liraglutide: {
    emoji: '💉', name: 'Liraglutide', category: 'Daily GLP-1', code: 'YW-LIR-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LIRAGL-2026A',
    form: 'Multi-dose injection pen',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Daily-administered GLP-1 receptor agonist (the original GLP-1 weight-loss compound). 18mg pen — practical entry into GLP-1 research at low cost.',
    uses: [
      { icon: '⚖️', title: 'Fat Loss', sub: 'Daily appetite suppression and reduced food noise.' },
      { icon: '🩸', title: 'Blood Sugar Control', sub: 'Improves glycemic markers and insulin response.' },
      { icon: '💰', title: 'Cost-Effective', sub: 'Cheaper entry into GLP-1 research than semaglutide / tirzepatide.' }
    ],
    specs: [
      { size: '18mg × 1 pen', price: '$93' }
    ],
  },
  epo: {
    emoji: '🩸', name: 'Erythropoietin (EPO)', category: 'Erythropoiesis', code: 'YW-EPO-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EPO-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Recombinant erythropoietin — stimulates red blood cell production. Used in anemia research and endurance physiology studies.',
    uses: [
      { icon: '🩸', title: 'Red Cell Production', sub: 'Stimulates erythropoiesis for hematocrit elevation and oxygen carrying.' },
      { icon: '🏃', title: 'Endurance Research', sub: 'Studied extensively for aerobic capacity and VO2 max effects.' },
      { icon: '🛡️', title: 'Anemia Models', sub: 'Standard tool in renal-failure and chemotherapy-induced anemia research.' }
    ],
    specs: [
      { size: '10,000 IU × 10 vials', price: '$248' }
    ],
  },
  alprostadil: {
    emoji: '🌡️', name: 'Alprostadil', category: 'Prostaglandin E1', code: 'YW-ALP-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ALPROS-2026A',
    form: 'Lyophilised vial',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Prostaglandin E1 used in erectile dysfunction research and peripheral vascular models. Direct vasodilator activity.',
    uses: [
      { icon: '🔥', title: 'ED Research', sub: 'Local vasodilator with strong effect in refractory ED research.' },
      { icon: '🩸', title: 'Vascular Studies', sub: 'Used in peripheral vascular disease research models.' },
      { icon: '💪', title: 'Penile Rehab', sub: 'Studied post-surgical for tissue oxygenation.' }
    ],
    specs: [
      { size: '500mcg × 1 vial', price: '$62' }
    ],
  },
  calcitonin: {
    emoji: '🦴', name: 'Calcitonin', category: 'Calcium Regulation', code: 'YW-CAL-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CALCIT-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Polypeptide hormone that inhibits osteoclast activity. Studied in osteoporosis, Paget disease, and hypercalcemia research.',
    uses: [
      { icon: '🛑', title: 'Osteoclast Inhibition', sub: 'Direct osteoclast suppression — reduces bone resorption.' },
      { icon: '💊', title: 'Bone Pain Relief', sub: 'Studied for analgesic effect in vertebral compression fractures.' },
      { icon: '⚖️', title: 'Hypercalcemia', sub: 'Used in acute hypercalcemia management research.' }
    ],
    specs: [
      { size: '50 IU × 10 vials', price: '$46' }
    ],
  },
  lanreotide: {
    emoji: '🧪', name: 'Lanreotide', category: 'Somatostatin Analogue', code: 'YW-LAN-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LANREO-2026A',
    form: 'Pre-filled extended-release syringe',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Long-acting somatostatin analogue used in acromegaly and neuroendocrine tumor research. Suppresses GH and IGF-1 secretion.',
    uses: [
      { icon: '🛑', title: 'GH Suppression', sub: 'Long-acting reduction of growth hormone and IGF-1 levels.' },
      { icon: '🔬', title: 'Neuroendocrine Tumors', sub: 'Standard tool in carcinoid and NET research.' },
      { icon: '🩺', title: 'Acromegaly Models', sub: 'Used in pituitary tumor research.' }
    ],
    specs: [
      { size: '120mg × 1 syringe', price: '$1085' }
    ],
  },
  octreotide: {
    emoji: '🧪', name: 'Octreotide', category: 'Somatostatin Analogue', code: 'YW-OCT-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OCTREO-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Short-acting somatostatin analogue. Used in acromegaly, neuroendocrine tumors, and variceal bleeding research.',
    uses: [
      { icon: '🛑', title: 'Hormonal Suppression', sub: 'Inhibits GH, insulin, glucagon, gastrin and many GI hormones.' },
      { icon: '🩸', title: 'Variceal Bleeding', sub: 'Reduces splanchnic blood flow in portal hypertension research.' },
      { icon: '🔬', title: 'Diagnostic Imaging', sub: 'Octreoscan tracer development uses the same scaffold.' }
    ],
    specs: [
      { size: '0.1mg × 10 vials', price: '$248' }
    ],
  },
  darbepoetin: {
    emoji: '🩸', name: 'Darbepoetin Alfa', category: 'Long-Acting EPO', code: 'YW-DAR-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DARBEP-2026A',
    form: 'Pre-filled syringe',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Hyperglycosylated EPO analogue with extended half-life. Used in CKD anemia and chemotherapy-induced anemia research.',
    uses: [
      { icon: '🩸', title: 'Longer Half-Life', sub: 'Dosed weekly or bi-weekly vs daily for standard EPO.' },
      { icon: '🛡️', title: 'CKD Anemia', sub: 'Standard in chronic kidney disease anemia research.' },
      { icon: '🧪', title: 'Hematology', sub: 'Studied in chemo-related anemia and bone marrow research.' }
    ],
    specs: [
      { size: '100mcg × 1 vial', price: '$248' }
    ],
  },
  fsh: {
    emoji: '💗', name: 'Follitropin Alpha (FSH)', category: 'Gonadotropin', code: 'YW-FSH-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FSH-2026A',
    form: 'Pre-filled multi-dose pen',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Recombinant follicle-stimulating hormone — used in fertility research, ovarian stimulation protocols, and male spermatogenesis studies.',
    uses: [
      { icon: '🥚', title: 'Ovulation Induction', sub: 'Standard in controlled ovarian stimulation protocols.' },
      { icon: '♂️', title: 'Spermatogenesis', sub: 'Used in male fertility research alongside HCG.' },
      { icon: '🔬', title: 'Endocrinology', sub: 'Core tool in HPG-axis research.' }
    ],
    specs: [
      { size: '450 IU × 1 pen', price: '$310' }
    ],
  },
  heparin: {
    emoji: '🩸', name: 'Heparin Sodium', category: 'Anticoagulant', code: 'YW-HEP-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-HEPARI-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Classic unfractionated heparin — anticoagulant that activates antithrombin III. Cornerstone of acute thrombosis research and surgical prophylaxis.',
    uses: [
      { icon: '🩸', title: 'Rapid Anticoagulation', sub: 'Onset within minutes — used in acute coronary and DVT models.' },
      { icon: '🫀', title: 'Surgical Use', sub: 'Standard during cardiac bypass and dialysis research.' },
      { icon: '🛡️', title: 'Antithrombin III', sub: 'Catalyzes ATIII for thrombin/Xa inhibition.' }
    ],
    specs: [
      { size: '25,000 IU × 10 vials', price: '$62' }
    ],
  },
  enoxaparin: {
    emoji: '🩸', name: 'Enoxaparin Sodium', category: 'LMW Heparin', code: 'YW-ENO-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ENOXAP-2026A',
    form: 'Pre-filled syringe',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Low-molecular-weight heparin with preferential Factor Xa inhibition. Used in DVT prophylaxis and ACS research.',
    uses: [
      { icon: '💉', title: 'Predictable Dosing', sub: 'Weight-based dosing without routine monitoring.' },
      { icon: '🛡️', title: 'DVT Prophylaxis', sub: 'Standard for surgical and medical thromboprophylaxis research.' },
      { icon: '🫀', title: 'ACS Treatment', sub: 'Used in acute coronary syndrome research.' }
    ],
    specs: [
      { size: '4,000 IU × 10 syringes', price: '$124' }
    ],
  },
  albumin: {
    emoji: '💧', name: 'Human Serum Albumin (20%)', category: 'Plasma Protein', code: 'YW-ALB-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ALBUMI-2026A',
    form: 'Concentrated solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Concentrated human serum albumin — used in volume expansion, oncotic pressure research, and as a plasma substitute in shock models.',
    uses: [
      { icon: '💧', title: 'Volume Expansion', sub: 'Primary oncotic agent in shock and burn research.' },
      { icon: '🧪', title: 'Drug Binding', sub: 'Studied as a carrier for hydrophobic compounds.' },
      { icon: '🩸', title: 'Liver Disease', sub: 'Used in hepatorenal syndrome and cirrhosis research.' }
    ],
    specs: [
      { size: '50ml × 1 vial', price: '$186' }
    ],
  },
  furosemide_inj: {
    emoji: '💧', name: 'Furosemide (IV)', category: 'Loop Diuretic', code: 'YW-FUR-IV',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FUROSE-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Intravenous loop diuretic — rapid-onset Na+/K+/2Cl- transporter inhibitor for acute fluid overload research.',
    uses: [
      { icon: '💧', title: 'Acute Diuresis', sub: 'Rapid IV onset for heart failure decompensation research.' },
      { icon: '🫀', title: 'CHF Models', sub: 'Standard in acute heart failure research protocols.' },
      { icon: '🩺', title: 'Renal Studies', sub: 'Tool for nephron function and diuretic resistance research.' }
    ],
    specs: [
      { size: '20mg × 10 vials', price: '$31' }
    ],
  },
  epinephrine: {
    emoji: '⚡', name: 'Epinephrine (Adrenaline)', category: 'Adrenergic Agonist', code: 'YW-EPI-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EPINEP-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Endogenous catecholamine and powerful α/β-adrenergic agonist. Standard tool in shock, anaphylaxis, and cardiac arrest research.',
    uses: [
      { icon: '⚡', title: 'Anaphylaxis', sub: 'First-line in anaphylaxis research and resuscitation protocols.' },
      { icon: '🫀', title: 'Cardiac Arrest', sub: 'Core ACLS tool in cardiac resuscitation studies.' },
      { icon: '🩺', title: 'Local Vasoconstriction', sub: 'Adjunct in local anesthetics for prolonged effect.' }
    ],
    specs: [
      { size: '1mg × 10 vials', price: '$46' }
    ],
  },
  ceftriaxone: {
    emoji: '💊', name: 'Ceftriaxone Sodium', category: '3rd-Gen Cephalosporin', code: 'YW-CEF-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CEFTRI-2026A',
    form: 'Lyophilised vial + diluent',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Third-generation cephalosporin antibiotic with broad gram-positive and gram-negative coverage. Once-daily IV/IM dosing.',
    uses: [
      { icon: '🛡️', title: 'Broad Coverage', sub: 'Effective against most respiratory, GU, and CNS pathogens.' },
      { icon: '🗓️', title: 'Once-Daily', sub: 'Long half-life enables single daily dosing.' },
      { icon: '🧠', title: 'CNS Penetration', sub: 'Crosses BBB — used in meningitis research.' }
    ],
    specs: [
      { size: '1g × 10 vials', price: '$93' }
    ],
  },
  pantoprazole_inj: {
    emoji: '💊', name: 'Pantoprazole (IV)', category: 'PPI Injectable', code: 'YW-PANTI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PANTOP-2026A',
    form: 'Lyophilised vial',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Intravenous proton pump inhibitor — for acute upper GI bleeding and severe reflux research where oral dosing isn\'t possible.',
    uses: [
      { icon: '🩸', title: 'Upper GI Bleed', sub: 'Standard high-dose infusion in peptic ulcer bleed research.' },
      { icon: '🔥', title: 'Acute Reflux', sub: 'IV alternative when oral PPIs aren\'t feasible.' },
      { icon: '🛡️', title: 'Stress Ulcer Prophylaxis', sub: 'Used in ICU stress-ulcer research.' }
    ],
    specs: [
      { size: '40mg × 10 vials', price: '$78' }
    ],
  },
  ertapenem: {
    emoji: '💊', name: 'Ertapenem', category: 'Carbapenem', code: 'YW-ERT-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ERTAPE-2026A',
    form: 'Lyophilised vial',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Once-daily carbapenem antibiotic with broad coverage including ESBL-producing organisms. Reserved for serious infection research.',
    uses: [
      { icon: '🛡️', title: 'ESBL Coverage', sub: 'Active against ESBL Enterobacteriaceae.' },
      { icon: '🗓️', title: 'Once-Daily', sub: 'Single daily dose convenience.' },
      { icon: '🔬', title: 'Complex Infections', sub: 'Used in complicated abdominal and pelvic infection research.' }
    ],
    specs: [
      { size: '1g × 10 vials', price: '$248' }
    ],
  },
  glutathione_inj: {
    emoji: '✨', name: 'Glutathione (Reduced)', category: 'Master Antioxidant', code: 'YW-GSH-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-GLUTAT-2026A',
    form: 'Lyophilised vial + diluent',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Reduced glutathione — the cell\'s master antioxidant. Used in detoxification, skin lightening, and oxidative stress research.',
    uses: [
      { icon: '✨', title: 'Skin Brightening', sub: 'Inhibits tyrosinase activity — well-known skin-brightening research.' },
      { icon: '🛡️', title: 'Detoxification', sub: 'Phase II conjugation pathway for xenobiotic clearance.' },
      { icon: '🧬', title: 'Oxidative Stress', sub: 'Foundational redox buffer in cellular research.' }
    ],
    specs: [
      { size: '1200mg × 10 vials', price: '$93' }
    ],
  },
  denosumab: {
    emoji: '🦴', name: 'Denosumab', category: 'RANKL Inhibitor', code: 'YW-DEN-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DENOSU-2026A',
    form: 'Pre-filled syringe',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Fully human monoclonal antibody against RANKL. Blocks osteoclast formation/function for use in osteoporosis and bone metastasis research.',
    uses: [
      { icon: '🦴', title: 'Osteoporosis', sub: 'High-affinity RANKL block — dose every 6 months for sustained antiresorption.' },
      { icon: '🛡️', title: 'Bone Metastasis', sub: 'Reduces skeletal-related events in cancer research models.' },
      { icon: '💪', title: 'Density Gains', sub: 'Continuous BMD improvements vs plateau seen with bisphosphonates.' }
    ],
    specs: [
      { size: '120mg × 1 vial', price: '$248' }
    ],
  },
  pembrolizumab: {
    emoji: '🛡️', name: 'Pembrolizumab', category: 'PD-1 Checkpoint', code: 'YW-PEM-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PEMBRO-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Anti-PD-1 monoclonal antibody — unleashes T-cell anti-tumor activity. Foundational checkpoint inhibitor in modern oncology research.',
    uses: [
      { icon: '🎯', title: 'Checkpoint Inhibition', sub: 'Blocks PD-1 to restore T-cell tumor recognition.' },
      { icon: '🔬', title: 'Broad Indications', sub: 'Studied in melanoma, lung, head/neck, bladder, and many tumor types.' },
      { icon: '🛡️', title: 'Immune Reactivation', sub: 'Durable responses in MSI-high tumors.' }
    ],
    specs: [
      { size: '100mg × 1 vial', price: '$1426' }
    ],
  },
  adalimumab: {
    emoji: '🛡️', name: 'Adalimumab', category: 'TNF-α Inhibitor', code: 'YW-ADA-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ADALIM-2026A',
    form: 'Pre-filled syringe / auto-injector',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Fully human anti-TNF-α monoclonal antibody. Cornerstone biologic in autoimmune research — RA, psoriasis, IBD, ankylosing spondylitis.',
    uses: [
      { icon: '🛡️', title: 'Anti-Inflammatory', sub: 'Neutralises TNF-α for systemic inflammation reduction.' },
      { icon: '🦴', title: 'Joint Protection', sub: 'Slows radiographic progression in RA research.' },
      { icon: '🌿', title: 'IBD & Skin', sub: 'Used in Crohn\'s, ulcerative colitis, and psoriasis research.' }
    ],
    specs: [
      { size: '40mg × 1 syringe', price: '$248' }
    ],
  },
  bevacizumab: {
    emoji: '🩸', name: 'Bevacizumab', category: 'Anti-VEGF', code: 'YW-BEV-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BEVACI-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Humanised anti-VEGF monoclonal antibody. Anti-angiogenic agent used in solid tumor and macular degeneration research.',
    uses: [
      { icon: '🩸', title: 'Anti-Angiogenesis', sub: 'Starves tumors of new blood vessel formation.' },
      { icon: '🔬', title: 'Combination Therapy', sub: 'Standard backbone in colorectal, lung, and ovarian cancer protocols.' },
      { icon: '👁️', title: 'Off-Label Ophthalmology', sub: 'Studied extensively in wet AMD research.' }
    ],
    specs: [
      { size: '400mg × 1 vial', price: '$264' }
    ],
  },
  trastuzumab: {
    emoji: '🎯', name: 'Trastuzumab', category: 'Anti-HER2', code: 'YW-TRA-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TRASTU-2026A',
    form: 'Lyophilised vial',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Humanised anti-HER2 monoclonal antibody. Targeted therapy for HER2-positive breast and gastric cancer research.',
    uses: [
      { icon: '🎯', title: 'HER2 Targeted', sub: 'Precision therapy for HER2-amplified tumors.' },
      { icon: '🔬', title: 'Breast Cancer', sub: 'Foundational in HER2+ breast cancer research.' },
      { icon: '🛡️', title: 'ADCC Mechanism', sub: 'Engages immune effector cells for tumor killing.' }
    ],
    specs: [
      { size: '440mg × 1 vial', price: '$589' }
    ],
  },
  rituximab: {
    emoji: '🛡️', name: 'Rituximab', category: 'Anti-CD20', code: 'YW-RIT-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RITUXI-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Chimeric anti-CD20 monoclonal antibody. B-cell depletion agent used in lymphoma, leukemia, and autoimmune research.',
    uses: [
      { icon: '🛡️', title: 'B-Cell Depletion', sub: 'Selective elimination of CD20+ B-lymphocytes.' },
      { icon: '🔬', title: 'Lymphoma & CLL', sub: 'Backbone of CD20+ lymphoma and CLL regimens.' },
      { icon: '🦴', title: 'Autoimmune', sub: 'Used in RA, vasculitis, lupus, MS research.' }
    ],
    specs: [
      { size: '500mg × 1 vial', price: '$651' }
    ],
  },
  nivolumab: {
    emoji: '🛡️', name: 'Nivolumab', category: 'PD-1 Checkpoint', code: 'YW-NIV-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NIVOLU-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Fully human anti-PD-1 monoclonal antibody. Alternative to pembrolizumab in checkpoint inhibition research.',
    uses: [
      { icon: '🎯', title: 'Checkpoint Block', sub: 'Anti-PD-1 mechanism with broad oncology indications.' },
      { icon: '🤝', title: 'Combo Therapy', sub: 'Often paired with ipilimumab for enhanced response.' },
      { icon: '🔬', title: 'Multi-Tumor', sub: 'Approved across melanoma, lung, renal, HCC, gastric models.' }
    ],
    specs: [
      { size: '100mg × 1 vial', price: '$713' }
    ],
  },
  evolocumab: {
    emoji: '❤️', name: 'Evolocumab', category: 'PCSK9 Inhibitor', code: 'YW-EVO-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EVOLOC-2026A',
    form: 'Pre-filled auto-injector',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Anti-PCSK9 monoclonal antibody. Profoundly lowers LDL cholesterol — used in refractory hyperlipidemia and CV risk research.',
    uses: [
      { icon: '📉', title: 'LDL Reduction', sub: '60%+ LDL-C reduction on top of statin therapy.' },
      { icon: '❤️', title: 'CV Event Reduction', sub: 'Reduces MACE in high-risk patients in trials.' },
      { icon: '🛡️', title: 'Familial Hyperlipidemia', sub: 'Used in heterozygous and homozygous FH research.' }
    ],
    specs: [
      { size: '140mg × 1 syringe', price: '$93' }
    ],
  },
  dupilumab: {
    emoji: '🌿', name: 'Dupilumab', category: 'IL-4/IL-13 Block', code: 'YW-DUP-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DUPILU-2026A',
    form: 'Pre-filled syringe',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Fully human monoclonal antibody blocking IL-4Rα. Major advance in atopic dermatitis, asthma, and eosinophilic disease research.',
    uses: [
      { icon: '🌿', title: 'Atopic Dermatitis', sub: 'Transformative for moderate-severe eczema research.' },
      { icon: '🌬️', title: 'Eosinophilic Asthma', sub: 'Reduces exacerbations in Type-2-high asthma.' },
      { icon: '🛡️', title: 'Th2 Pathway', sub: 'Blocks both IL-4 and IL-13 signalling.' }
    ],
    specs: [
      { size: '300mg × 1 syringe', price: '$124' }
    ],
  },
  secukinumab: {
    emoji: '🛡️', name: 'Secukinumab', category: 'IL-17A Inhibitor', code: 'YW-SEC-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SECUKI-2026A',
    form: 'Pre-filled syringe',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Anti-IL-17A monoclonal antibody. Used in psoriasis, psoriatic arthritis, and ankylosing spondylitis research.',
    uses: [
      { icon: '🌿', title: 'Plaque Psoriasis', sub: 'Rapid skin clearance in moderate-severe psoriasis.' },
      { icon: '🦴', title: 'Spondyloarthritis', sub: 'Effective in AS and psoriatic arthritis research.' },
      { icon: '🛡️', title: 'IL-17 Pathway', sub: 'Selective IL-17A neutralisation.' }
    ],
    specs: [
      { size: '150mg × 1 syringe', price: '$248' }
    ],
  },
  ustekinumab: {
    emoji: '🛡️', name: 'Ustekinumab', category: 'IL-12/IL-23 Block', code: 'YW-UST-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-USTEKI-2026A',
    form: 'Sterile injectable solution',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Anti-p40 monoclonal antibody (blocks IL-12 and IL-23). Used in psoriasis, psoriatic arthritis, and IBD research.',
    uses: [
      { icon: '🌿', title: 'Psoriasis', sub: 'Long-lasting effect with infrequent dosing schedule.' },
      { icon: '🌿', title: 'Crohn\'s Disease', sub: 'Approved for moderate-severe Crohn\'s research.' },
      { icon: '🛡️', title: 'Dual Cytokine Block', sub: 'Inhibits both IL-12 and IL-23 via shared p40 subunit.' }
    ],
    specs: [
      { size: '45mg × 1 vial', price: '$372' }
    ],
  },
  ranibizumab: {
    emoji: '👁️', name: 'Ranibizumab', category: 'Anti-VEGF (Ocular)', code: 'YW-RAN-A',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RANIBI-2026A',
    form: 'Pre-filled syringe',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Anti-VEGF antibody fragment optimised for intravitreal use. Standard in neovascular AMD and diabetic macular edema research.',
    uses: [
      { icon: '👁️', title: 'Wet AMD', sub: 'Slows or reverses choroidal neovascularization.' },
      { icon: '🍬', title: 'Diabetic Macular Edema', sub: 'Reduces retinal thickness and improves vision.' },
      { icon: '🩸', title: 'Retinal Vein Occlusion', sub: 'Used in branch and central RVO research.' }
    ],
    specs: [
      { size: '10mg × 1 vial', price: '$372' }
    ],
  },
  metformin: {
    emoji: '🩸', name: 'Metformin HCl', category: 'Diabetes & Metabolic', code: 'YW-METFORMI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-METFOR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Biguanide — first-line oral antidiabetic. Reduces hepatic glucose production, improves insulin sensitivity.',
    uses: [
      { icon: '🩸', title: 'Glycemic Control', sub: 'Cornerstone Type-2 diabetes therapy in research.' },
      { icon: '⚖️', title: 'Weight Neutral', sub: 'No weight gain, mild appetite suppression in some studies.' },
      { icon: '🧬', title: 'Longevity Pathways', sub: 'Studied in AMPK activation and anti-aging research.' }
    ],
    specs: [
      { size: '100×500mg', price: '$31' }
    ],
  },
  sitagliptin: {
    emoji: '🩸', name: 'Sitagliptin', category: 'Diabetes & Metabolic', code: 'YW-SITAGLIP',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SITAGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'DPP-4 inhibitor that increases endogenous incretin levels. Weight-neutral oral agent for T2D research.',
    uses: [
      { icon: '🩸', title: 'DPP-4 Inhibition', sub: 'Boosts GLP-1 and GIP without injections.' },
      { icon: '⚖️', title: 'Weight Neutral', sub: 'Doesn\'t cause hypoglycemia or weight gain.' },
      { icon: '🛡️', title: 'Combination Use', sub: 'Pairs well with metformin in protocols.' }
    ],
    specs: [
      { size: '28×100mg', price: '$46' }
    ],
  },
  dapagliflozin: {
    emoji: '🩸', name: 'Dapagliflozin', category: 'Diabetes & Metabolic', code: 'YW-DAPAGLIF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DAPAGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SGLT2 inhibitor — promotes urinary glucose excretion. Also approved for heart failure and CKD research.',
    uses: [
      { icon: '🩸', title: 'SGLT2 Block', sub: 'Renal glucose excretion = caloric loss + glucose lowering.' },
      { icon: '🫀', title: 'Heart Failure', sub: 'Cardio benefits independent of diabetes status.' },
      { icon: '🩺', title: 'CKD Protection', sub: 'Slows progression of diabetic nephropathy.' }
    ],
    specs: [
      { size: '30×10mg', price: '$62' }
    ],
  },
  empagliflozin: {
    emoji: '🩸', name: 'Empagliflozin', category: 'Diabetes & Metabolic', code: 'YW-EMPAGLIF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EMPAGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SGLT2 inhibitor with strong cardiovascular outcome data. Studied in HFrEF, HFpEF, and CKD.',
    uses: [
      { icon: '🫀', title: 'Cardio-Renal', sub: 'Mortality reduction in HF independent of diabetes.' },
      { icon: '🩸', title: 'Glucose Excretion', sub: '~80g glucose/day via urine.' },
      { icon: '⚖️', title: 'Mild Weight Loss', sub: 'Caloric loss drives 2-4kg loss in research.' }
    ],
    specs: [
      { size: '30×10mg', price: '$78' }
    ],
  },
  canagliflozin: {
    emoji: '🩸', name: 'Canagliflozin', category: 'Diabetes & Metabolic', code: 'YW-CANAGLIF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CANAGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SGLT2 inhibitor with additional SGLT1 activity. Approved for diabetic kidney disease research.',
    uses: [
      { icon: '🩸', title: 'Dual SGLT Block', sub: 'Some intestinal SGLT1 inhibition for postprandial glucose.' },
      { icon: '🩺', title: 'Renal Protection', sub: 'CREDENCE trial showed CKD progression slowing.' },
      { icon: '🫀', title: 'MACE Reduction', sub: 'Cardiovascular benefit in high-risk populations.' }
    ],
    specs: [
      { size: '30×100mg', price: '$78' }
    ],
  },
  ertugliflozin: {
    emoji: '🩸', name: 'Ertugliflozin', category: 'Diabetes & Metabolic', code: 'YW-ERTUGLIF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ERTUGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SGLT2 inhibitor — same class effects (glycemic, weight, cardio).',
    uses: [
      { icon: '🩸', title: 'SGLT2 Inhibition', sub: 'Class-effect glucose lowering.' },
      { icon: '🫀', title: 'Cardio Outcomes', sub: 'Non-inferior CV outcomes in VERTIS-CV.' },
      { icon: '⚖️', title: 'Weight Reduction', sub: 'Mild caloric loss via glucosuria.' }
    ],
    specs: [
      { size: '30×5mg', price: '$78' }
    ],
  },
  pioglitazone: {
    emoji: '🩸', name: 'Pioglitazone', category: 'Diabetes & Metabolic', code: 'YW-PIOGLITA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PIOGLI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Thiazolidinedione — PPAR-γ agonist that improves insulin sensitivity at adipocyte level.',
    uses: [
      { icon: '🩸', title: 'Insulin Sensitization', sub: 'Direct adipocyte effect on glucose uptake.' },
      { icon: '🛡️', title: 'NASH Studies', sub: 'Improves liver histology in fatty liver research.' },
      { icon: '🫀', title: 'Atherosclerosis', sub: 'Studied for plaque stabilization effects.' }
    ],
    specs: [
      { size: '30×15mg', price: '$46' }
    ],
  },
  glimepiride: {
    emoji: '🩸', name: 'Glimepiride', category: 'Diabetes & Metabolic', code: 'YW-GLIMEPIR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-GLIMEP-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Sulfonylurea — stimulates endogenous insulin release from pancreatic β-cells.',
    uses: [
      { icon: '🩸', title: 'Insulin Release', sub: 'Effective glucose-lowering by direct β-cell stimulation.' },
      { icon: '💰', title: 'Low Cost', sub: 'Inexpensive entry to oral antidiabetic research.' },
      { icon: '⚠️', title: 'Hypoglycemia Risk', sub: 'Used in research on hypoglycemic mechanisms.' }
    ],
    specs: [
      { size: '30×2mg', price: '$31' }
    ],
  },
  gliclazide: {
    emoji: '🩸', name: 'Gliclazide', category: 'Diabetes & Metabolic', code: 'YW-GLICLAZI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-GLICLA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Sulfonylurea with better cardiovascular safety profile than older agents in this class.',
    uses: [
      { icon: '🩸', title: 'β-Cell Stimulation', sub: 'Stable insulin secretion stimulus.' },
      { icon: '🫀', title: 'CV-Friendly Profile', sub: 'Less arrhythmogenic than other sulfonylureas.' },
      { icon: '🛡️', title: 'Renal Studies', sub: 'Studied in ADVANCE trial for renal outcomes.' }
    ],
    specs: [
      { size: '60×30mg', price: '$31' }
    ],
  },
  glipizide: {
    emoji: '🩸', name: 'Glipizide', category: 'Diabetes & Metabolic', code: 'YW-GLIPIZID',
    purity: 'Pharmacopoeia Grade', batch: 'YW-GLIPIZ-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Short-acting sulfonylurea — useful for postprandial glucose control research.',
    uses: [
      { icon: '🩸', title: 'Postprandial Focus', sub: 'Short duration ideal for mealtime glucose.' },
      { icon: '💰', title: 'Generic Standard', sub: 'Long-established research workhorse.' },
      { icon: '🔬', title: 'Mechanism Studies', sub: 'Standard for KATP channel research.' }
    ],
    specs: [
      { size: '30×5mg', price: '$31' }
    ],
  },
  glibenclamide: {
    emoji: '🩸', name: 'Glibenclamide', category: 'Diabetes & Metabolic', code: 'YW-GLIBENCL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-GLIBEN-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Long-acting sulfonylurea (also called glyburide). Used in MODY/neonatal diabetes research.',
    uses: [
      { icon: '🩸', title: 'Sustained Action', sub: '24-hour glucose lowering.' },
      { icon: '🧬', title: 'MODY Studies', sub: 'First-line in KCNJ11 neonatal diabetes research.' },
      { icon: '🔬', title: 'Channel Research', sub: 'Classic KATP-channel pharmacology tool.' }
    ],
    specs: [
      { size: '30×5mg', price: '$31' }
    ],
  },
  repaglinide: {
    emoji: '🩸', name: 'Repaglinide', category: 'Diabetes & Metabolic', code: 'YW-REPAGLIN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-REPAGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Meglitinide — rapid-onset, short-duration insulin secretagogue. Mealtime dosing.',
    uses: [
      { icon: '🍽️', title: 'Mealtime Use', sub: 'Take immediately before meals only.' },
      { icon: '🩸', title: 'Postprandial Control', sub: 'Targets glucose excursions specifically.' },
      { icon: '🛡️', title: 'Renal Safe', sub: 'Hepatic metabolism — usable in CKD research.' }
    ],
    specs: [
      { size: '30×1mg', price: '$46' }
    ],
  },
  nateglinide: {
    emoji: '🩸', name: 'Nateglinide', category: 'Diabetes & Metabolic', code: 'YW-NATEGLIN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NATEGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Meglitinide analogue — even faster onset than repaglinide for tight postprandial control.',
    uses: [
      { icon: '🍽️', title: 'Rapid Onset', sub: 'Fastest-acting meglitinide.' },
      { icon: '🩸', title: 'Postprandial Spike', sub: 'Specifically targets meal glucose peaks.' },
      { icon: '⚠️', title: 'Hypo Risk', sub: 'Low between meals due to short duration.' }
    ],
    specs: [
      { size: '30×120mg', price: '$46' }
    ],
  },
  voglibose: {
    emoji: '🩸', name: 'Voglibose', category: 'Diabetes & Metabolic', code: 'YW-VOGLIBOS',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VOGLIB-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'α-glucosidase inhibitor — slows carbohydrate digestion. Targets postprandial glucose.',
    uses: [
      { icon: '🍚', title: 'Carb Absorption', sub: 'Slows intestinal glucose release after meals.' },
      { icon: '🩸', title: 'Postprandial Only', sub: 'Minimal effect on fasting glucose.' },
      { icon: '🛡️', title: 'Pre-Diabetes', sub: 'Studied in IGT prevention research.' }
    ],
    specs: [
      { size: '30×0.3mg', price: '$46' }
    ],
  },
  miglitol: {
    emoji: '🩸', name: 'Miglitol', category: 'Diabetes & Metabolic', code: 'YW-MIGLITOL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MIGLIT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'α-glucosidase inhibitor with systemic absorption (vs acarbose). Postprandial focus.',
    uses: [
      { icon: '🍚', title: 'Disaccharide Block', sub: 'Reduces postprandial spike.' },
      { icon: '🩸', title: 'Glycemic Variability', sub: 'Smooths daily glucose curves.' },
      { icon: '🔬', title: 'HbA1c Modest', sub: 'Small but consistent improvements.' }
    ],
    specs: [
      { size: '30×50mg', price: '$46' }
    ],
  },
  vildagliptin: {
    emoji: '🩸', name: 'Vildagliptin', category: 'Diabetes & Metabolic', code: 'YW-VILDAGLI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VILDAG-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'DPP-4 inhibitor with twice-daily dosing. Pancreatic islet preservation research.',
    uses: [
      { icon: '🩸', title: 'DPP-4 Block', sub: 'Increases active GLP-1 levels.' },
      { icon: '🧬', title: 'β-Cell Function', sub: 'Studied for β-cell preservation effects.' },
      { icon: '⚖️', title: 'Weight Neutral', sub: 'No weight effect like other gliptins.' }
    ],
    specs: [
      { size: '28×50mg', price: '$62' }
    ],
  },
  linagliptin: {
    emoji: '🩸', name: 'Linagliptin', category: 'Diabetes & Metabolic', code: 'YW-LINAGLIP',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LINAGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'DPP-4 inhibitor — hepatic excretion makes it safe in renal impairment research.',
    uses: [
      { icon: '🩺', title: 'Renal Safe', sub: 'No dose adjustment in CKD.' },
      { icon: '🩸', title: 'HbA1c Reduction', sub: '~0.5-1% lowering on monotherapy.' },
      { icon: '💊', title: 'Once Daily', sub: 'Fixed dose without titration.' }
    ],
    specs: [
      { size: '30×5mg', price: '$62' }
    ],
  },
  saxagliptin: {
    emoji: '🩸', name: 'Saxagliptin', category: 'Diabetes & Metabolic', code: 'YW-SAXAGLIP',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SAXAGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'DPP-4 inhibitor — extensively studied in cardiovascular outcome trials.',
    uses: [
      { icon: '🩸', title: 'Incretin Enhancement', sub: 'Standard gliptin mechanism.' },
      { icon: '🫀', title: 'CVOT Data', sub: 'SAVOR-TIMI study evidence base.' },
      { icon: '💊', title: 'Daily Tablet', sub: 'Fixed-dose monotherapy or combo.' }
    ],
    specs: [
      { size: '30×5mg', price: '$62' }
    ],
  },
  alogliptin: {
    emoji: '🩸', name: 'Alogliptin', category: 'Diabetes & Metabolic', code: 'YW-ALOGLIPT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ALOGLI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'DPP-4 inhibitor with highest selectivity for DPP-4 vs related peptidases.',
    uses: [
      { icon: '🎯', title: 'Selective DPP-4', sub: 'Less off-target DPP-8/9 inhibition.' },
      { icon: '🩸', title: 'Stable Glycemia', sub: 'Smooth glucose lowering.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple dosing schedule.' }
    ],
    specs: [
      { size: '30×25mg', price: '$62' }
    ],
  },
  acarbose: {
    emoji: '🍚', name: 'Acarbose', category: 'Diabetes & Metabolic', code: 'YW-ACARBOSE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ACARBO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'α-glucosidase inhibitor — the original carb-blocker drug. Postprandial glucose tool.',
    uses: [
      { icon: '🍚', title: 'Carb Blocking', sub: 'Reduces intestinal disaccharide breakdown.' },
      { icon: '🩸', title: 'Pre-Diabetes', sub: 'Studied in T2DM prevention (STOP-NIDDM).' },
      { icon: '🌿', title: 'Gut Effects', sub: 'GI side effects from undigested carbs.' }
    ],
    specs: [
      { size: '30×50mg', price: '$31' }
    ],
  },
  dorzagliatin: {
    emoji: '🩸', name: 'Dorzagliatin', category: 'Diabetes & Metabolic', code: 'YW-DORZAGLI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DORZAG-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Glucokinase activator — newer mechanism for T2D. Targets the body\'s glucose sensor.',
    uses: [
      { icon: '🩸', title: 'Glucokinase Activation', sub: 'First-in-class glucose-sensor activator.' },
      { icon: '🧬', title: 'β-Cell + Liver', sub: 'Dual effect on insulin secretion and hepatic glucose handling.' },
      { icon: '🔬', title: 'Novel Mechanism', sub: 'Reset glucose sensing in T2D research.' }
    ],
    specs: [
      { size: '28×75mg', price: '$93' }
    ],
  },
  imeglimin: {
    emoji: '🩸', name: 'Imeglimin', category: 'Diabetes & Metabolic', code: 'YW-IMEGLIMI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-IMEGLI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Novel mitochondrial-acting antidiabetic — improves β-cell function and insulin action.',
    uses: [
      { icon: '🧬', title: 'Mitochondrial Action', sub: 'Targets ETC complex I for cellular bioenergetics.' },
      { icon: '🩸', title: 'Triple Mechanism', sub: 'β-cell, liver, and muscle effects.' },
      { icon: '🛡️', title: 'β-Cell Preservation', sub: 'Reduces oxidative stress in pancreatic islets.' }
    ],
    specs: [
      { size: '56×500mg', price: '$93' }
    ],
  },
  t3: {
    emoji: '💊', name: 'Liothyronine (T3)', category: 'Diabetes & Metabolic', code: 'YW-T3',
    purity: 'Pharmacopoeia Grade', batch: 'YW-T3-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Active thyroid hormone — used in hypothyroidism research with persistent symptoms despite T4 alone.',
    uses: [
      { icon: '🌡️', title: 'Metabolic Rate', sub: 'Directly elevates BMR — fat-burning research.' },
      { icon: '🧠', title: 'Mood & Energy', sub: 'Studied for refractory depression augmentation.' },
      { icon: '🔬', title: 'Conversion-Independent', sub: 'Bypasses T4 to T3 conversion bottleneck.' }
    ],
    specs: [
      { size: '100×25mcg', price: '$31' }
    ],
  },
  t4: {
    emoji: '💊', name: 'Levothyroxine (T4)', category: 'Diabetes & Metabolic', code: 'YW-T4',
    purity: 'Pharmacopoeia Grade', batch: 'YW-T4-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Synthetic thyroxine — standard hypothyroidism therapy. The body converts T4 to active T3 as needed.',
    uses: [
      { icon: '🌡️', title: 'Hypothyroidism', sub: 'First-line for primary and secondary hypothyroidism.' },
      { icon: '🧠', title: 'Cognitive & Energy', sub: 'Restores cognitive sharpness in low-thyroid states.' },
      { icon: '💊', title: 'Stable Dosing', sub: 'Long half-life enables once-daily oral dosing.' }
    ],
    specs: [
      { size: '100×100mcg', price: '$31' }
    ],
  },
  orlistat: {
    emoji: '⚖️', name: 'Orlistat', category: 'Fat Loss & Metabolic', code: 'YW-ORLISTAT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ORLIST-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Pancreatic lipase inhibitor — blocks ~30% of dietary fat absorption. Classic OTC weight-loss agent.',
    uses: [
      { icon: '⚖️', title: 'Fat Blocking', sub: 'Mechanical-mechanism weight loss — no CNS effect.' },
      { icon: '💊', title: 'OTC Mechanism', sub: 'Well-characterised safety profile in long-term use.' },
      { icon: '🌿', title: 'GI Effects', sub: 'Oily stools and flatulence from undigested fat.' }
    ],
    specs: [
      { size: '210×120mg', price: '$93' }
    ],
  },
  mk677: {
    emoji: '📈', name: 'MK-677 (Ibutamoren)', category: 'GH Secretagogue', code: 'YW-MK677',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MK677-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Oral ghrelin receptor agonist — stimulates endogenous GH release without injection. Popular GH alternative.',
    uses: [
      { icon: '💤', title: 'Sleep & Appetite', sub: 'Significant deep-sleep improvements and increased appetite.' },
      { icon: '💪', title: 'Lean Mass', sub: 'Modest GH/IGF-1 elevation drives slow muscle gain.' },
      { icon: '💊', title: 'Oral Convenience', sub: 'Only orally bioavailable GH secretagogue.' }
    ],
    specs: [
      { size: '30×25mg', price: '$62' }
    ],
  },
  semaglutide_oral: {
    emoji: '💊', name: 'Semaglutide (Oral)', category: 'GLP-1 Analogue', code: 'YW-SEMAGLUT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SEMAGL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Oral GLP-1 receptor agonist — same active compound as injectable semaglutide in tablet form via SNAC absorption.',
    uses: [
      { icon: '💊', title: 'No Injection', sub: 'Daily tablet alternative to weekly injection.' },
      { icon: '⚖️', title: 'Weight Loss', sub: 'Modest-to-good fat loss at therapeutic doses.' },
      { icon: '🩸', title: 'Glycemic Control', sub: 'Same mechanism as injectable form.' }
    ],
    specs: [
      { size: '30×7mg', price: '$186' }
    ],
  },
  clenbuterol: {
    emoji: '🔥', name: 'Clenbuterol HCl', category: 'Fat Loss & Metabolic', code: 'YW-CLENBUTE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CLENBU-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Beta-2 adrenergic agonist — bronchodilator with strong lipolytic effects. Popular fat-loss research compound.',
    uses: [
      { icon: '🔥', title: 'Lipolysis', sub: 'Strong β2-mediated fat mobilization.' },
      { icon: '💪', title: 'Anti-Catabolic', sub: 'Studied for muscle-preservation during cuts.' },
      { icon: '🌬️', title: 'Bronchodilation', sub: 'Original indication for asthma research.' }
    ],
    specs: [
      { size: '100×40mcg', price: '$31' }
    ],
  },
  yohimbine: {
    emoji: '🌿', name: 'Yohimbine HCl', category: 'Fat Loss & Metabolic', code: 'YW-YOHIMBIN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-YOHIMB-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'α2-adrenergic antagonist — targets stubborn fat areas. Used in fat-loss and sexual function research.',
    uses: [
      { icon: '🔥', title: 'Stubborn Fat', sub: 'Blocks α2 receptors that protect lower body fat stores.' },
      { icon: '💪', title: 'Performance', sub: 'Enhances fasted-state lipolysis.' },
      { icon: '🌶️', title: 'Sexual Function', sub: 'Studied for ED with weaker effect than PDE5i.' }
    ],
    specs: [
      { size: '50×5.4mg', price: '$46' }
    ],
  },
  finasteride: {
    emoji: '💊', name: 'Finasteride', category: 'Aesthetic & Skin', code: 'YW-FINASTER',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FINAST-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '5α-reductase type-2 inhibitor — reduces DHT for hair-loss and BPH research.',
    uses: [
      { icon: '💇', title: 'Hair Retention', sub: 'Slows or reverses androgenic alopecia.' },
      { icon: '🩺', title: 'BPH', sub: 'Reduces prostate volume in BPH research.' },
      { icon: '🔬', title: 'DHT Reduction', sub: 'Drops DHT 70%+ in serum.' }
    ],
    specs: [
      { size: '30×5mg', price: '$31' }
    ],
  },
  dutasteride: {
    emoji: '💊', name: 'Dutasteride', category: 'Aesthetic & Skin', code: 'YW-DUTASTER',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DUTAST-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Dual 5α-reductase (type 1 + 2) inhibitor — stronger DHT suppression than finasteride.',
    uses: [
      { icon: '💇', title: 'Stronger Hair', sub: 'More potent than finasteride for severe AGA.' },
      { icon: '🩺', title: 'BPH', sub: 'Greater prostate volume reduction.' },
      { icon: '🔬', title: 'Dual Inhibition', sub: '>90% DHT suppression.' }
    ],
    specs: [
      { size: '30×0.5mg', price: '$31' }
    ],
  },
  minoxidil_oral: {
    emoji: '💇', name: 'Minoxidil (Oral)', category: 'Aesthetic & Skin', code: 'YW-MINOXIDI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MINOXI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Low-dose oral minoxidil — emerging research alternative to topical for AGA. Vasodilator origins.',
    uses: [
      { icon: '💇', title: 'Hair Regrowth', sub: 'Low-dose oral effective for AGA research.' },
      { icon: '💊', title: 'Better Compliance', sub: 'No topical mess vs traditional minoxidil.' },
      { icon: '🩺', title: 'BP Effects', sub: 'Original use was severe hypertension.' }
    ],
    specs: [
      { size: '100×5mg', price: '$46' }
    ],
  },
  isotretinoin: {
    emoji: '✨', name: 'Isotretinoin', category: 'Aesthetic & Skin', code: 'YW-ISOTRETI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ISOTRE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Oral retinoid — gold standard for severe nodulocystic acne research.',
    uses: [
      { icon: '✨', title: 'Acne Clearance', sub: 'Often-permanent remission of severe acne.' },
      { icon: '🔬', title: 'Sebum Reduction', sub: 'Atrophies sebaceous glands.' },
      { icon: '⚠️', title: 'Teratogenic', sub: 'Strict pregnancy precautions in research.' }
    ],
    specs: [
      { size: '30×10mg', price: '$46' }
    ],
  },
  atorvastatin: {
    emoji: '❤️', name: 'Atorvastatin', category: 'Cardiovascular', code: 'YW-ATORVAST',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ATORVA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'HMG-CoA reductase inhibitor — most-prescribed statin worldwide. Strong LDL lowering.',
    uses: [
      { icon: '📉', title: 'LDL Reduction', sub: 'Up to 55% LDL lowering at max dose.' },
      { icon: '❤️', title: 'CV Risk Reduction', sub: 'Reduces MACE in primary/secondary prevention research.' },
      { icon: '🛡️', title: 'Plaque Stabilization', sub: 'Anti-inflammatory effects beyond cholesterol.' }
    ],
    specs: [
      { size: '28×20mg', price: '$31' }
    ],
  },
  rosuvastatin: {
    emoji: '❤️', name: 'Rosuvastatin', category: 'Cardiovascular', code: 'YW-ROSUVAST',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ROSUVA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Most potent statin — strongest LDL reduction per mg. Hepato-selective with minimal muscle effects.',
    uses: [
      { icon: '📉', title: 'Max LDL Reduction', sub: 'Up to 63% LDL lowering — strongest in class.' },
      { icon: '🛡️', title: 'Less Hepatic', sub: 'Less liver enzyme elevation than atorvastatin.' },
      { icon: '💊', title: 'Low Daily Dose', sub: '5-40mg range — small tablets.' }
    ],
    specs: [
      { size: '28×10mg', price: '$31' }
    ],
  },
  simvastatin: {
    emoji: '❤️', name: 'Simvastatin', category: 'Cardiovascular', code: 'YW-SIMVASTA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SIMVAS-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Moderate-potency statin with extensive long-term outcome data.',
    uses: [
      { icon: '📉', title: 'Moderate LDL Reduction', sub: '30-40% reduction typical.' },
      { icon: '❤️', title: 'HPS Trial', sub: 'Decades of cardio outcome data.' },
      { icon: '💰', title: 'Inexpensive', sub: 'Generic standard for moderate-risk patients.' }
    ],
    specs: [
      { size: '28×20mg', price: '$31' }
    ],
  },
  ezetimibe: {
    emoji: '❤️', name: 'Ezetimibe', category: 'Cardiovascular', code: 'YW-EZETIMIB',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EZETIM-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Cholesterol absorption inhibitor — works at intestinal NPC1L1 transporter. Add-on to statins.',
    uses: [
      { icon: '📉', title: 'Add-on Effect', sub: 'Adds 15-20% LDL reduction to statin.' },
      { icon: '🛡️', title: 'IMPROVE-IT Trial', sub: 'CV benefit when added to simvastatin.' },
      { icon: '🌿', title: 'Non-Statin Option', sub: 'Useful for statin-intolerant patients.' }
    ],
    specs: [
      { size: '28×10mg', price: '$31' }
    ],
  },
  metoprolol: {
    emoji: '❤️', name: 'Metoprolol Succinate', category: 'Cardiovascular', code: 'YW-METOPROL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-METOPR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Cardioselective β1 blocker — first-line in HFrEF and post-MI research.',
    uses: [
      { icon: '🫀', title: 'HFrEF Therapy', sub: 'One of 3 β-blockers with HF mortality benefit.' },
      { icon: '❤️', title: 'Post-MI', sub: 'Reduces reinfarction and sudden death.' },
      { icon: '🩸', title: 'BP Control', sub: 'Effective hypertension management.' }
    ],
    specs: [
      { size: '30×47.5mg', price: '$31' }
    ],
  },
  bisoprolol: {
    emoji: '❤️', name: 'Bisoprolol', category: 'Cardiovascular', code: 'YW-BISOPROL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BISOPR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Highly cardioselective β1 blocker — preferred in HF research.',
    uses: [
      { icon: '🫀', title: 'HF Mortality Benefit', sub: 'CIBIS-II trial evidence base.' },
      { icon: '🌬️', title: 'Asthma-Friendlier', sub: 'Less β2 effect than non-selective agents.' },
      { icon: '🩸', title: 'HTN', sub: 'First-line hypertension in many guidelines.' }
    ],
    specs: [
      { size: '30×5mg', price: '$31' }
    ],
  },
  nebivolol: {
    emoji: '❤️', name: 'Nebivolol', category: 'Cardiovascular', code: 'YW-NEBIVOLO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NEBIVO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Most cardioselective β-blocker with additional nitric oxide release. Vasodilatory.',
    uses: [
      { icon: '🩸', title: 'NO Release', sub: 'Unique vasodilation — better for ED-prone patients.' },
      { icon: '❤️', title: 'HFpEF Studies', sub: 'Studied in preserved-EF heart failure.' },
      { icon: '🎯', title: 'Highest β1 Selectivity', sub: 'Minimal β2 effects.' }
    ],
    specs: [
      { size: '28×5mg', price: '$31' }
    ],
  },
  carvedilol: {
    emoji: '❤️', name: 'Carvedilol', category: 'Cardiovascular', code: 'YW-CARVEDIL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CARVED-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-selective β + α1 blocker — combined effects useful in HF and HTN research.',
    uses: [
      { icon: '🫀', title: 'HFrEF Gold Standard', sub: 'COPERNICUS trial mortality benefit.' },
      { icon: '🩸', title: 'α1 Blockade', sub: 'Additional vasodilation via α1 block.' },
      { icon: '🛡️', title: 'Antioxidant', sub: 'Pleotropic anti-oxidant effects.' }
    ],
    specs: [
      { size: '30×6.25mg', price: '$31' }
    ],
  },
  atenolol: {
    emoji: '❤️', name: 'Atenolol', category: 'Cardiovascular', code: 'YW-ATENOLOL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ATENOL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Hydrophilic β1 blocker — less CNS penetration than metoprolol.',
    uses: [
      { icon: '🩸', title: 'HTN', sub: 'Long-established generic.' },
      { icon: '🧠', title: 'Less CNS', sub: 'Less fatigue/depression than lipophilic β-blockers.' },
      { icon: '💰', title: 'Cost-Effective', sub: 'Inexpensive workhorse.' }
    ],
    specs: [
      { size: '100×25mg', price: '$31' }
    ],
  },
  propranolol: {
    emoji: '❤️', name: 'Propranolol', category: 'Cardiovascular', code: 'YW-PROPRANO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PROPRA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-selective β-blocker — classic agent for tremor, anxiety, migraine prophylaxis research.',
    uses: [
      { icon: '😰', title: 'Performance Anxiety', sub: 'Used in physical anxiety/stage fright research.' },
      { icon: '🤕', title: 'Migraine Prophylaxis', sub: 'Evidence-based migraine prevention.' },
      { icon: '💪', title: 'Essential Tremor', sub: 'First-line for essential tremor.' }
    ],
    specs: [
      { size: '100×10mg', price: '$25' }
    ],
  },
  labetalol: {
    emoji: '❤️', name: 'Labetalol', category: 'Cardiovascular', code: 'YW-LABETALO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LABETA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Combined α/β blocker — used in pregnancy HTN and hypertensive emergencies.',
    uses: [
      { icon: '🤰', title: 'Pregnancy HTN', sub: 'Safe in pregnancy hypertension research.' },
      { icon: '🚨', title: 'HTN Crisis', sub: 'IV form used in hypertensive emergencies.' },
      { icon: '🩸', title: 'Combined Block', sub: 'α + non-selective β.' }
    ],
    specs: [
      { size: '30×100mg', price: '$46' }
    ],
  },
  cilostazol: {
    emoji: '❤️', name: 'Cilostazol', category: 'Cardiovascular', code: 'YW-CILOSTAZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CILOST-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'PDE3 inhibitor — antiplatelet + vasodilator. Standard for intermittent claudication.',
    uses: [
      { icon: '🦵', title: 'Claudication', sub: 'Improves pain-free walking distance.' },
      { icon: '🩸', title: 'Antiplatelet', sub: 'Reversible platelet inhibition.' },
      { icon: '🛡️', title: 'Restenosis', sub: 'Reduces stent restenosis in research.' }
    ],
    specs: [
      { size: '60×50mg', price: '$31' }
    ],
  },
  ramipril: {
    emoji: '❤️', name: 'Ramipril', category: 'Cardiovascular', code: 'YW-RAMIPRIL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RAMIPR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'ACE inhibitor — well-studied in HOPE trial for CV outcomes.',
    uses: [
      { icon: '🫀', title: 'HF & Post-MI', sub: 'Mortality benefit in HFrEF and post-MI research.' },
      { icon: '🩺', title: 'Renal Protection', sub: 'Slows diabetic nephropathy progression.' },
      { icon: '🩸', title: 'HTN', sub: 'First-line antihypertensive.' }
    ],
    specs: [
      { size: '28×5mg', price: '$31' }
    ],
  },
  lisinopril: {
    emoji: '❤️', name: 'Lisinopril', category: 'Cardiovascular', code: 'YW-LISINOPR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LISINO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Long-acting ACE inhibitor — once-daily HTN and HF research.',
    uses: [
      { icon: '🩸', title: 'Once-Daily', sub: 'Long half-life enables QD dosing.' },
      { icon: '🫀', title: 'HF Indication', sub: 'HFrEF mortality benefit.' },
      { icon: '💊', title: 'Generic Standard', sub: 'Inexpensive long-established agent.' }
    ],
    specs: [
      { size: '28×10mg', price: '$31' }
    ],
  },
  enalapril: {
    emoji: '❤️', name: 'Enalapril', category: 'Cardiovascular', code: 'YW-ENALAPRI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ENALAP-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'ACE inhibitor — classic agent with extensive HF outcome data (SOLVD trial).',
    uses: [
      { icon: '🫀', title: 'SOLVD Evidence', sub: 'Foundational HF mortality trial.' },
      { icon: '🩸', title: 'BP Control', sub: 'Effective HTN management.' },
      { icon: '💰', title: 'Most Affordable', sub: 'Cheapest ACE inhibitor.' }
    ],
    specs: [
      { size: '28×10mg', price: '$16' }
    ],
  },
  benazepril: {
    emoji: '❤️', name: 'Benazepril', category: 'Cardiovascular', code: 'YW-BENAZEPR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BENAZE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'ACE inhibitor — accumulation-controllable in renal impairment research.',
    uses: [
      { icon: '🩸', title: 'HTN Standard', sub: 'Reliable BP lowering.' },
      { icon: '🩺', title: 'Renal Use', sub: 'Suitable for CKD with dose adjustment.' },
      { icon: '🫀', title: 'CV Protection', sub: 'Same class effects as other ACEi.' }
    ],
    specs: [
      { size: '14×10mg', price: '$25' }
    ],
  },
  telmisartan: {
    emoji: '❤️', name: 'Telmisartan', category: 'Cardiovascular', code: 'YW-TELMISAR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TELMIS-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'ARB with longest half-life and additional PPAR-γ agonism. Both BP and metabolic effects.',
    uses: [
      { icon: '🩸', title: '24h BP Control', sub: 'Smoothest BP control over the day.' },
      { icon: '🧬', title: 'PPAR-γ Effect', sub: 'Modest insulin sensitization research.' },
      { icon: '🫀', title: 'ONTARGET', sub: 'Strong CV outcome data.' }
    ],
    specs: [
      { size: '28×80mg', price: '$46' }
    ],
  },
  losartan: {
    emoji: '❤️', name: 'Losartan', category: 'Cardiovascular', code: 'YW-LOSARTAN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LOSART-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'First ARB to market — uricosuric properties make it useful in gout-prone hypertensives.',
    uses: [
      { icon: '🩸', title: 'HTN First-Line', sub: 'Well-established generic ARB.' },
      { icon: '💎', title: 'Uric Acid Lowering', sub: 'Mild uricosuric — useful in gout patients.' },
      { icon: '🩺', title: 'LIFE Trial', sub: 'Better than atenolol for stroke prevention.' }
    ],
    specs: [
      { size: '28×50mg', price: '$31' }
    ],
  },
  irbesartan: {
    emoji: '❤️', name: 'Irbesartan', category: 'Cardiovascular', code: 'YW-IRBESART',
    purity: 'Pharmacopoeia Grade', batch: 'YW-IRBESA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'ARB studied in diabetic nephropathy (IDNT, IRMA trials).',
    uses: [
      { icon: '🩺', title: 'Diabetic Nephropathy', sub: 'Strong renal protection evidence.' },
      { icon: '🩸', title: 'HTN', sub: 'Standard ARB efficacy.' },
      { icon: '💊', title: 'Once Daily', sub: '24h BP control.' }
    ],
    specs: [
      { size: '28×150mg', price: '$46' }
    ],
  },
  candesartan: {
    emoji: '❤️', name: 'Candesartan', category: 'Cardiovascular', code: 'YW-CANDESAR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CANDES-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'ARB with strong heart failure data (CHARM trials).',
    uses: [
      { icon: '🫀', title: 'CHARM HF', sub: 'HFrEF and HFpEF outcome trials.' },
      { icon: '🩸', title: 'HTN', sub: 'Tight BP control over 24h.' },
      { icon: '🛡️', title: 'Stroke Prevention', sub: 'Studied in SCAST and ACCESS.' }
    ],
    specs: [
      { size: '28×8mg', price: '$46' }
    ],
  },
  olmesartan: {
    emoji: '❤️', name: 'Olmesartan', category: 'Cardiovascular', code: 'YW-OLMESART',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OLMESA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Potent ARB — strong BP lowering per mg with consistent 24-hour control.',
    uses: [
      { icon: '🩸', title: 'Strong BP Effect', sub: 'One of the most potent ARBs.' },
      { icon: '💊', title: 'Daily Dose', sub: 'Simple once-daily regimen.' },
      { icon: '🛡️', title: 'Renal Use', sub: 'Cardio-renal protection profile.' }
    ],
    specs: [
      { size: '28×20mg', price: '$46' }
    ],
  },
  sacubitril_valsartan: {
    emoji: '❤️', name: 'Sacubitril/Valsartan', category: 'Cardiovascular', code: 'YW-SACUBITR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SACUBI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Combined neprilysin inhibitor + ARB. Game-changer in HFrEF research (PARADIGM-HF).',
    uses: [
      { icon: '🫀', title: 'HFrEF Superior', sub: 'Better than enalapril in PARADIGM-HF trial.' },
      { icon: '🩸', title: 'Dual Mechanism', sub: 'Boosts natriuretic peptides + blocks RAAS.' },
      { icon: '📉', title: 'Mortality Reduction', sub: '20% relative mortality reduction.' }
    ],
    specs: [
      { size: '28×100mg', price: '$62' }
    ],
  },
  rivaroxaban: {
    emoji: '🩸', name: 'Rivaroxaban', category: 'Cardiovascular', code: 'YW-RIVAROXA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RIVARO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Direct factor Xa inhibitor — DOAC for atrial fibrillation and VTE research.',
    uses: [
      { icon: '🩸', title: 'No Monitoring', sub: 'Fixed dosing — no INR checks.' },
      { icon: '🛡️', title: 'AF Stroke Prevention', sub: 'ROCKET-AF trial evidence.' },
      { icon: '💊', title: 'Once Daily', sub: '15-20mg once-daily dosing typical.' }
    ],
    specs: [
      { size: '28×15mg', price: '$46' }
    ],
  },
  amlodipine: {
    emoji: '❤️', name: 'Amlodipine', category: 'Cardiovascular', code: 'YW-AMLODIPI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-AMLODI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Long-acting dihydropyridine CCB — first-line HTN and angina therapy.',
    uses: [
      { icon: '🩸', title: '24h HTN Control', sub: 'Long half-life — smooth BP control.' },
      { icon: '❤️', title: 'Angina', sub: 'Effective for chronic stable angina.' },
      { icon: '💊', title: 'Once Daily', sub: 'Reliable once-daily dosing.' }
    ],
    specs: [
      { size: '28×5mg', price: '$16' }
    ],
  },
  nifedipine: {
    emoji: '❤️', name: 'Nifedipine', category: 'Cardiovascular', code: 'YW-NIFEDIPI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NIFEDI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Dihydropyridine CCB — sustained-release for hypertension and angina.',
    uses: [
      { icon: '🩸', title: 'HTN', sub: 'Vasodilator BP control.' },
      { icon: '❤️', title: 'Angina', sub: 'Reduces angina frequency.' },
      { icon: '🤰', title: 'Pregnancy HTN', sub: 'Acceptable in pregnancy HTN research.' }
    ],
    specs: [
      { size: '28×30mg', price: '$31' }
    ],
  },
  felodipine: {
    emoji: '❤️', name: 'Felodipine', category: 'Cardiovascular', code: 'YW-FELODIPI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FELODI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Vascular-selective dihydropyridine CCB — minimal cardiac effects.',
    uses: [
      { icon: '🩸', title: 'Vascular Selectivity', sub: 'Less negative inotropy than other CCBs.' },
      { icon: '🫀', title: 'HF Compatibility', sub: 'Safer in HF than non-selective CCBs.' },
      { icon: '💊', title: 'Once Daily', sub: 'Long duration of action.' }
    ],
    specs: [
      { size: '28×5mg', price: '$31' }
    ],
  },
  lercanidipine: {
    emoji: '❤️', name: 'Lercanidipine', category: 'Cardiovascular', code: 'YW-LERCANID',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LERCAN-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Third-generation lipophilic CCB — less ankle edema than older CCBs.',
    uses: [
      { icon: '🩸', title: 'Smooth BP Control', sub: 'Gradual onset reduces reflex tachycardia.' },
      { icon: '👣', title: 'Less Edema', sub: 'Better tolerated than amlodipine.' },
      { icon: '💊', title: 'Lipophilic', sub: 'Long-lasting membrane effects.' }
    ],
    specs: [
      { size: '28×10mg', price: '$46' }
    ],
  },
  sildenafil: {
    emoji: '🔥', name: 'Sildenafil', category: 'Sexual Health', code: 'YW-SILDENAF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SILDEN-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Original PDE5 inhibitor — the classic ED research compound.',
    uses: [
      { icon: '🔥', title: 'ED', sub: '30-60 min onset, 4-6h duration.' },
      { icon: '🫀', title: 'PH Indication', sub: 'Also used in pulmonary hypertension at higher doses.' },
      { icon: '💰', title: 'Most Affordable', sub: 'Cheapest PDE5 inhibitor.' }
    ],
    specs: [
      { size: '4×50mg', price: '$16' }
    ],
  },
  tadalafil: {
    emoji: '🔥', name: 'Tadalafil', category: 'Sexual Health', code: 'YW-TADALAFI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TADALA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '36-hour PDE5 inhibitor — the long-acting "weekender" pill. Daily low-dose also studied.',
    uses: [
      { icon: '🕐', title: '36h Duration', sub: 'Longest-acting PDE5i — flexibility.' },
      { icon: '💊', title: 'Daily Low-Dose', sub: '2.5-5mg daily for continuous effect.' },
      { icon: '🩺', title: 'BPH', sub: 'Approved for BPH symptoms.' }
    ],
    specs: [
      { size: '4×20mg', price: '$16' }
    ],
  },
  vardenafil: {
    emoji: '🔥', name: 'Vardenafil', category: 'Sexual Health', code: 'YW-VARDENAF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VARDEN-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'PDE5 inhibitor — similar profile to sildenafil with slightly faster onset.',
    uses: [
      { icon: '🔥', title: 'Fast Onset', sub: '20-30 min to onset.' },
      { icon: '🍽️', title: 'Less Food Effect', sub: 'Less affected by fatty meals than sildenafil.' },
      { icon: '💊', title: 'Standard Duration', sub: '4-5 hour window.' }
    ],
    specs: [
      { size: '4×20mg', price: '$16' }
    ],
  },
  avanafil: {
    emoji: '🔥', name: 'Avanafil', category: 'Sexual Health', code: 'YW-AVANAFIL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-AVANAF-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Newest PDE5 inhibitor — faster onset (15-30 min) and shorter duration.',
    uses: [
      { icon: '⚡', title: 'Fastest Onset', sub: 'As quick as 15 minutes.' },
      { icon: '💊', title: 'Selective', sub: 'Higher PDE5 selectivity = fewer side effects.' },
      { icon: '🍽️', title: 'Food Independent', sub: 'Works regardless of meal timing.' }
    ],
    specs: [
      { size: '4×100mg', price: '$46' }
    ],
  },
  spironolactone: {
    emoji: '💧', name: 'Spironolactone', category: 'Cardiovascular', code: 'YW-SPIRONOL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SPIRON-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Aldosterone receptor antagonist — diuretic + anti-androgen used in HF, HTN, and acne research.',
    uses: [
      { icon: '🫀', title: 'HFrEF Mortality', sub: 'RALES trial mortality benefit.' },
      { icon: '💧', title: 'Resistant HTN', sub: 'Add-on for difficult-to-control BP.' },
      { icon: '✨', title: 'Acne (PCOS)', sub: 'Anti-androgen effects useful in hormonal acne.' }
    ],
    specs: [
      { size: '100×20mg', price: '$31' }
    ],
  },
  hctz: {
    emoji: '💧', name: 'Hydrochlorothiazide', category: 'Cardiovascular', code: 'YW-HCTZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-HCTZ-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Thiazide diuretic — foundational antihypertensive. Often used in combination tablets.',
    uses: [
      { icon: '🩸', title: 'HTN First-Line', sub: 'Standard thiazide for HTN.' },
      { icon: '💧', title: 'Mild Diuresis', sub: 'Modest fluid effect, larger BP effect.' },
      { icon: '💰', title: 'Cheapest BP Drug', sub: 'Generic since 1959.' }
    ],
    specs: [
      { size: '100×25mg', price: '$31' }
    ],
  },
  indapamide: {
    emoji: '💧', name: 'Indapamide', category: 'Cardiovascular', code: 'YW-INDAPAMI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-INDAPA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Thiazide-like diuretic — strong BP effect with less metabolic disturbance than HCTZ.',
    uses: [
      { icon: '🩸', title: 'HTN Strong', sub: 'Better BP effect than HCTZ at equipotent doses.' },
      { icon: '🧬', title: 'Less Metabolic', sub: 'Smaller effects on glucose/lipids.' },
      { icon: '🩺', title: 'HYVET Trial', sub: 'Mortality benefit in elderly HTN.' }
    ],
    specs: [
      { size: '30×1.5mg', price: '$31' }
    ],
  },
  chlorthalidone: {
    emoji: '💧', name: 'Chlorthalidone', category: 'Cardiovascular', code: 'YW-CHLORTHA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CHLORT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Long-acting thiazide-like diuretic — preferred over HCTZ in modern HTN guidelines.',
    uses: [
      { icon: '🩸', title: 'Longest Action', sub: '24-48h duration vs 8-12h for HCTZ.' },
      { icon: '🫀', title: 'ALLHAT Evidence', sub: 'Best HTN outcomes trial data.' },
      { icon: '💧', title: 'Strong BP Effect', sub: 'Equivalent dose more BP-lowering than HCTZ.' }
    ],
    specs: [
      { size: '30×25mg', price: '$31' }
    ],
  },
  eplerenone: {
    emoji: '💧', name: 'Eplerenone', category: 'Cardiovascular', code: 'YW-EPLERENO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EPLERE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Selective aldosterone antagonist — fewer side effects than spironolactone.',
    uses: [
      { icon: '🎯', title: 'MR Selectivity', sub: 'No anti-androgen effects vs spironolactone.' },
      { icon: '🫀', title: 'Post-MI HF', sub: 'EPHESUS trial mortality benefit.' },
      { icon: '💧', title: 'Cleaner Profile', sub: 'No gynecomastia/menstrual issues.' }
    ],
    specs: [
      { size: '30×25mg', price: '$46' }
    ],
  },
  finerenone: {
    emoji: '💧', name: 'Finerenone', category: 'Cardiovascular', code: 'YW-FINERENO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FINERE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-steroidal mineralocorticoid receptor antagonist — newer agent for CKD in diabetes.',
    uses: [
      { icon: '🩺', title: 'Diabetic CKD', sub: 'FIDELIO-DKD trial — slows progression.' },
      { icon: '🫀', title: 'CV Protection', sub: 'Reduces CV events in diabetic CKD.' },
      { icon: '💧', title: 'Less Hyperkalemia', sub: 'Better safety than spironolactone in CKD.' }
    ],
    specs: [
      { size: '28×10mg', price: '$78' }
    ],
  },
  torsemide: {
    emoji: '💧', name: 'Torsemide', category: 'Cardiovascular', code: 'YW-TORSEMID',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TORSEM-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Loop diuretic — more consistent bioavailability than furosemide.',
    uses: [
      { icon: '💧', title: 'Predictable Diuresis', sub: 'Better oral absorption than furosemide.' },
      { icon: '🫀', title: 'HF Use', sub: 'Some data suggesting better than furosemide in HF.' },
      { icon: '🩺', title: 'Renal Function', sub: 'Used in CKD with adjustments.' }
    ],
    specs: [
      { size: '20×10mg', price: '$31' }
    ],
  },
  bumetanide: {
    emoji: '💧', name: 'Bumetanide', category: 'Cardiovascular', code: 'YW-BUMETANI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BUMETA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Potent loop diuretic — 40x stronger than furosemide on mg basis.',
    uses: [
      { icon: '💧', title: 'High Potency', sub: 'Useful in severe diuretic resistance.' },
      { icon: '🫀', title: 'HF Refractory', sub: 'Alternative when furosemide fails.' },
      { icon: '🧠', title: 'Research Interest', sub: 'Studied in autism and bipolar research.' }
    ],
    specs: [
      { size: '50×1mg', price: '$31' }
    ],
  },
  furosemide_oral: {
    emoji: '💧', name: 'Furosemide (Oral)', category: 'Cardiovascular', code: 'YW-FUROSEMI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FUROSE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Oral loop diuretic — workhorse for HF, edema, and acute HTN research.',
    uses: [
      { icon: '💧', title: 'Strong Diuresis', sub: 'Most-prescribed loop diuretic.' },
      { icon: '🫀', title: 'HF Symptom Relief', sub: 'Reduces dyspnea and edema.' },
      { icon: '🩺', title: 'Volume Overload', sub: 'Standard in any fluid overload state.' }
    ],
    specs: [
      { size: '100×20mg', price: '$31' }
    ],
  },
  triamterene: {
    emoji: '💧', name: 'Triamterene', category: 'Cardiovascular', code: 'YW-TRIAMTER',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TRIAMT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Potassium-sparing diuretic — direct ENaC blocker. Often combined with HCTZ.',
    uses: [
      { icon: '💧', title: 'K+ Sparing', sub: 'Counteracts thiazide hypokalemia.' },
      { icon: '🩸', title: 'HTN Combo', sub: 'Standard in HTN combination tablets.' },
      { icon: '🛡️', title: 'Aldosterone-Independent', sub: 'Works without MR activity.' }
    ],
    specs: [
      { size: '30×50mg', price: '$16' }
    ],
  },
  amiloride: {
    emoji: '💧', name: 'Amiloride', category: 'Cardiovascular', code: 'YW-AMILORID',
    purity: 'Pharmacopoeia Grade', batch: 'YW-AMILOR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Direct ENaC inhibitor in distal tubule. K+ and Mg2+ sparing diuretic.',
    uses: [
      { icon: '💧', title: 'Mild Diuresis', sub: 'Weak diuretic, strong K+ retention.' },
      { icon: '🩸', title: 'Liddle Syndrome', sub: 'First-line in Liddle syndrome research.' },
      { icon: '🧬', title: 'ENaC Block', sub: 'Direct mineral channel inhibition.' }
    ],
    specs: [
      { size: '30×5mg', price: '$16' }
    ],
  },
  metolazone: {
    emoji: '💧', name: 'Metolazone', category: 'Cardiovascular', code: 'YW-METOLAZO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-METOLA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Thiazide-like agent that works in CKD where other thiazides fail. Used in diuretic-resistant HF.',
    uses: [
      { icon: '💧', title: 'Works in CKD', sub: 'Effective at low GFR unlike HCTZ.' },
      { icon: '🫀', title: 'HF Refractory', sub: 'Add-on to loop diuretic in stuck cases.' },
      { icon: '🩸', title: 'Sequential Block', sub: 'Distal tubule blocker.' }
    ],
    specs: [
      { size: '30×5mg', price: '$46' }
    ],
  },
  riociguat: {
    emoji: '🫀', name: 'Riociguat', category: 'Cardiovascular', code: 'YW-RIOCIGUA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RIOCIG-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Soluble guanylate cyclase stimulator — increases cGMP for pulmonary vasodilation.',
    uses: [
      { icon: '🫀', title: 'PAH Therapy', sub: 'Approved for pulmonary arterial hypertension.' },
      { icon: '🩸', title: 'CTEPH', sub: 'Only oral approved for inoperable CTEPH.' },
      { icon: '🧬', title: 'NO-Independent', sub: 'Works regardless of endogenous NO levels.' }
    ],
    specs: [
      { size: '42×2.5mg', price: '$186' }
    ],
  },
  vericiguat: {
    emoji: '🫀', name: 'Vericiguat', category: 'Cardiovascular', code: 'YW-VERICIGU',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VERICI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'sGC stimulator — recent approval for HFrEF after worsening event.',
    uses: [
      { icon: '🫀', title: 'HFrEF Post-Event', sub: 'VICTORIA trial in worsening HF.' },
      { icon: '🩸', title: 'cGMP Pathway', sub: 'Restores cGMP signalling in HF.' },
      { icon: '💊', title: 'Add-On Therapy', sub: 'Used alongside ARNI, β-blocker, MRA.' }
    ],
    specs: [
      { size: '14×10mg', price: '$93' }
    ],
  },
  macitentan: {
    emoji: '🫀', name: 'Macitentan', category: 'Cardiovascular', code: 'YW-MACITENT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MACITE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Endothelin receptor antagonist (dual ETA + ETB). Standard PAH therapy.',
    uses: [
      { icon: '🫀', title: 'PAH Standard', sub: 'SERAPHIN trial mortality benefit.' },
      { icon: '🩸', title: 'Dual ET Block', sub: 'Both ETA and ETB receptors.' },
      { icon: '💊', title: 'Once Daily', sub: 'Better tolerance than older ERAs.' }
    ],
    specs: [
      { size: '30×10mg', price: '$248' }
    ],
  },
  ambrisentan: {
    emoji: '🫀', name: 'Ambrisentan', category: 'Cardiovascular', code: 'YW-AMBRISEN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-AMBRIS-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Selective ETA receptor antagonist for pulmonary arterial hypertension.',
    uses: [
      { icon: '🫀', title: 'PAH Therapy', sub: 'ARIES trial efficacy.' },
      { icon: '🎯', title: 'ETA Selective', sub: 'Spares ETB-mediated vasodilation.' },
      { icon: '💊', title: 'Liver-Friendly', sub: 'Lower hepatotoxicity vs bosentan.' }
    ],
    specs: [
      { size: '30×5mg', price: '$93' }
    ],
  },
  febuxostat: {
    emoji: '💎', name: 'Febuxostat', category: 'Cardiovascular', code: 'YW-FEBUXOST',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FEBUXO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-purine xanthine oxidase inhibitor — alternative to allopurinol in gout research.',
    uses: [
      { icon: '💎', title: 'Urate Lowering', sub: 'More potent than allopurinol.' },
      { icon: '🩺', title: 'Renal-Friendly', sub: 'No dose adjustment for mild CKD.' },
      { icon: '🛡️', title: 'Gout Prevention', sub: 'Reduces flare frequency.' }
    ],
    specs: [
      { size: '30×40mg', price: '$46' }
    ],
  },
  benzbromarone: {
    emoji: '💎', name: 'Benzbromarone', category: 'Cardiovascular', code: 'YW-BENZBROM',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BENZBR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Uricosuric — increases renal urate excretion. Useful in under-excretors.',
    uses: [
      { icon: '💎', title: 'Uricosuric', sub: 'Forces kidneys to excrete more urate.' },
      { icon: '🔬', title: 'Under-Excretor', sub: 'Phenotype-specific gout treatment.' },
      { icon: '💊', title: 'Tophi Reduction', sub: 'Studied for chronic tophaceous gout.' }
    ],
    specs: [
      { size: '30×50mg', price: '$46' }
    ],
  },
  allopurinol: {
    emoji: '💎', name: 'Allopurinol', category: 'Cardiovascular', code: 'YW-ALLOPURI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ALLOPU-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Classic xanthine oxidase inhibitor — first-line gout prophylaxis.',
    uses: [
      { icon: '💎', title: 'Gout First-Line', sub: 'Standard urate-lowering therapy.' },
      { icon: '🛡️', title: 'Stone Prevention', sub: 'Used in uric acid kidney stone research.' },
      { icon: '💰', title: 'Cheapest XOI', sub: 'Inexpensive generic.' }
    ],
    specs: [
      { size: '100×100mg', price: '$31' }
    ],
  },
  colchicine: {
    emoji: '💎', name: 'Colchicine', category: 'Cardiovascular', code: 'YW-COLCHICI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-COLCHI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Microtubule polymerization inhibitor — anti-inflammatory for gout, FMF, and pericarditis.',
    uses: [
      { icon: '🔥', title: 'Gout Flares', sub: 'Acute flare treatment.' },
      { icon: '🫀', title: 'Pericarditis', sub: 'First-line for recurrent pericarditis.' },
      { icon: '🧬', title: 'FMF', sub: 'Standard in Familial Mediterranean Fever research.' }
    ],
    specs: [
      { size: '20×0.5mg', price: '$46' }
    ],
  },
  montelukast: {
    emoji: '🌬️', name: 'Montelukast', category: 'Cardiovascular', code: 'YW-MONTELUK',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MONTEL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Leukotriene receptor antagonist — for asthma and allergic rhinitis research.',
    uses: [
      { icon: '🌬️', title: 'Asthma', sub: 'Add-on for asthma control.' },
      { icon: '🌿', title: 'Allergic Rhinitis', sub: 'Reduces nasal symptoms.' },
      { icon: '💊', title: 'Once Daily Evening', sub: 'Single evening dose.' }
    ],
    specs: [
      { size: '28×10mg', price: '$46' }
    ],
  },
  theophylline: {
    emoji: '🌬️', name: 'Theophylline', category: 'Cardiovascular', code: 'YW-THEOPHYL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-THEOPH-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Methylxanthine bronchodilator — historical asthma therapy with narrow therapeutic window.',
    uses: [
      { icon: '🌬️', title: 'Bronchodilation', sub: 'Increases airway diameter.' },
      { icon: '🛡️', title: 'COPD', sub: 'Used in COPD research.' },
      { icon: '🧪', title: 'Anti-Inflammatory', sub: 'PDE inhibition and adenosine antagonism.' }
    ],
    specs: [
      { size: '30×200mg', price: '$31' }
    ],
  },
  zafirlukast: {
    emoji: '🌬️', name: 'Zafirlukast', category: 'Cardiovascular', code: 'YW-ZAFIRLUK',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ZAFIRL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Leukotriene receptor antagonist — alternative LTRA for asthma research.',
    uses: [
      { icon: '🌬️', title: 'Asthma', sub: 'Reduces leukotriene-mediated airway constriction.' },
      { icon: '🌿', title: 'Allergic Asthma', sub: 'Useful in allergy-driven asthma.' },
      { icon: '💊', title: 'Twice Daily', sub: 'BD dosing.' }
    ],
    specs: [
      { size: '60×20mg', price: '$78' }
    ],
  },
  modafinil: {
    emoji: '🧠', name: 'Modafinil', category: 'Cognitive & Nootropic', code: 'YW-MODAFINI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MODAFI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Wakefulness-promoting agent — popular cognitive enhancer studied for narcolepsy, shift work, and focus.',
    uses: [
      { icon: '🧠', title: 'Focus & Alertness', sub: 'Strong wake-promoting effect without classical stimulant rush.' },
      { icon: '💤', title: 'Narcolepsy', sub: 'First-line wakefulness therapy.' },
      { icon: '🎯', title: 'Cognition', sub: 'Enhanced attention and working memory in research.' }
    ],
    specs: [
      { size: '30×200mg', price: '$93' }
    ],
  },
  methylphenidate: {
    emoji: '🧠', name: 'Methylphenidate', category: 'Cognitive & Nootropic', code: 'YW-METHYLPH',
    purity: 'Pharmacopoeia Grade', batch: 'YW-METHYL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Dopamine/norepinephrine reuptake inhibitor — gold-standard ADHD therapy.',
    uses: [
      { icon: '🎯', title: 'ADHD', sub: 'Most-studied ADHD medication.' },
      { icon: '🧠', title: 'Focus & Drive', sub: 'Increases dopaminergic signalling in PFC.' },
      { icon: '💪', title: 'Energy', sub: 'Stimulant boost to physical and mental drive.' }
    ],
    specs: [
      { size: '15×18mg', price: '$62' }
    ],
  },
  piracetam: {
    emoji: '🧠', name: 'Piracetam', category: 'Cognitive & Nootropic', code: 'YW-PIRACETA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PIRACE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'The original racetam — cognitive enhancer with acetylcholine modulation effects.',
    uses: [
      { icon: '🧠', title: 'Memory', sub: 'Classic cognitive enhancement research.' },
      { icon: '🩸', title: 'Cerebrovascular', sub: 'Improves blood flow in cognitive impairment.' },
      { icon: '🔬', title: 'Foundational Racetam', sub: 'Reference compound for the racetam family.' }
    ],
    specs: [
      { size: '30×800mg', price: '$31' }
    ],
  },
  oxiracetam: {
    emoji: '🧠', name: 'Oxiracetam', category: 'Cognitive & Nootropic', code: 'YW-OXIRACET',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OXIRAC-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Stronger racetam — emphasis on logical/analytical cognition over creative thinking.',
    uses: [
      { icon: '🎯', title: 'Analytical Focus', sub: 'Better for logic-heavy tasks.' },
      { icon: '💪', title: 'Stronger Than Piracetam', sub: 'More potent on memory benchmarks.' },
      { icon: '🧠', title: 'Energy + Focus', sub: 'Mild stimulant feel.' }
    ],
    specs: [
      { size: '30×400mg', price: '$31' }
    ],
  },
  aniracetam: {
    emoji: '🧠', name: 'Aniracetam', category: 'Cognitive & Nootropic', code: 'YW-ANIRACET',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ANIRAC-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Anxiolytic racetam — emphasis on mood, creativity, and verbal fluency.',
    uses: [
      { icon: '😌', title: 'Anxiolytic', sub: 'Smooths anxiety in cognitive research.' },
      { icon: '🎨', title: 'Creativity', sub: 'Often paired with creative tasks.' },
      { icon: '🧠', title: 'Fat-Soluble', sub: 'Different bioavailability than piracetam.' }
    ],
    specs: [
      { size: '30×200mg', price: '$31' }
    ],
  },
  idebenone: {
    emoji: '🧠', name: 'Idebenone', category: 'Cognitive & Nootropic', code: 'YW-IDEBENON',
    purity: 'Pharmacopoeia Grade', batch: 'YW-IDEBEN-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'CoQ10 analogue — antioxidant and mitochondrial cognitive support.',
    uses: [
      { icon: '⚡', title: 'Mitochondrial', sub: 'Electron transport chain support.' },
      { icon: '🛡️', title: 'Antioxidant', sub: 'Strong free-radical scavenger.' },
      { icon: '🧠', title: 'Neuroprotection', sub: 'Studied in Leber\'s and Friedreich\'s ataxia.' }
    ],
    specs: [
      { size: '30×30mg', price: '$31' }
    ],
  },
  citicoline: {
    emoji: '🧠', name: 'Citicoline', category: 'Cognitive & Nootropic', code: 'YW-CITICOLI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CITICO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'CDP-choline — choline source for acetylcholine and membrane phospholipids.',
    uses: [
      { icon: '🧠', title: 'Choline Source', sub: 'Raises brain choline and phosphatidylcholine.' },
      { icon: '🩸', title: 'Stroke Recovery', sub: 'Studied for ischemic stroke recovery.' },
      { icon: '💊', title: 'Acetylcholine', sub: 'Direct precursor to ACh.' }
    ],
    specs: [
      { size: '30×500mg', price: '$31' }
    ],
  },
  sulbutiamine: {
    emoji: '🧠', name: 'Sulbutiamine', category: 'Cognitive & Nootropic', code: 'YW-SULBUTIA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SULBUT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Lipid-soluble thiamine derivative — crosses BBB for cognitive and energy effects.',
    uses: [
      { icon: '⚡', title: 'Mental Energy', sub: 'Anti-fatigue effects.' },
      { icon: '🧠', title: 'Memory & Focus', sub: 'Modulates cholinergic/glutamatergic systems.' },
      { icon: '💪', title: 'Mood', sub: 'Mild mood-elevating in research.' }
    ],
    specs: [
      { size: '30×200mg', price: '$46' }
    ],
  },
  nefiracetam: {
    emoji: '🧠', name: 'Nefiracetam', category: 'Cognitive & Nootropic', code: 'YW-NEFIRACE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NEFIRA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Racetam with stronger glutamatergic/cholinergic actions and mood effects.',
    uses: [
      { icon: '🧠', title: 'Cognitive Enhancement', sub: 'Memory and learning research.' },
      { icon: '😌', title: 'Mood Effects', sub: 'Studied for post-stroke apathy.' },
      { icon: '🛡️', title: 'Neuroprotection', sub: 'GABA and NMDA modulation.' }
    ],
    specs: [
      { size: '30×150mg', price: '$46' }
    ],
  },
  vinpocetine: {
    emoji: '🧠', name: 'Vinpocetine', category: 'Cognitive & Nootropic', code: 'YW-VINPOCET',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VINPOC-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Vincamine derivative — increases cerebral blood flow and ATP in neurons.',
    uses: [
      { icon: '🩸', title: 'Brain Blood Flow', sub: 'Selective cerebrovascular dilation.' },
      { icon: '⚡', title: 'Neuronal ATP', sub: 'Improves brain energy metabolism.' },
      { icon: '🛡️', title: 'Anti-Ischemic', sub: 'Used in cerebrovascular research.' }
    ],
    specs: [
      { size: '30×5mg', price: '$31' }
    ],
  },
  omberacetam: {
    emoji: '🧠', name: 'Omberacetam (Noopept)', category: 'Cognitive & Nootropic', code: 'YW-OMBERACE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OMBERA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Dipeptide nootropic — highly potent, 1000x stronger per mg than piracetam.',
    uses: [
      { icon: '🧠', title: 'High Potency', sub: 'Microgram-level cognitive effects.' },
      { icon: '🛡️', title: 'BDNF/NGF', sub: 'Increases neurotrophic factor expression.' },
      { icon: '🎯', title: 'Memory', sub: 'Strong memory consolidation research.' }
    ],
    specs: [
      { size: '50×10mg', price: '$46' }
    ],
  },
  phenylpiracetam: {
    emoji: '🧠', name: 'Phenylpiracetam', category: 'Cognitive & Nootropic', code: 'YW-PHENYLPI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PHENYL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Phenyl-substituted piracetam — stimulant-like with cold tolerance and physical performance effects.',
    uses: [
      { icon: '🧠', title: 'Stimulant Effects', sub: 'Most stimulating racetam.' },
      { icon: '💪', title: 'Physical Performance', sub: 'Increases endurance and cold tolerance.' },
      { icon: '🎯', title: 'Banned in Sport', sub: 'WADA prohibited substance for athletes.' }
    ],
    specs: [
      { size: '20×100mg', price: '$62' }
    ],
  },
  pramiracetam: {
    emoji: '🧠', name: 'Pramiracetam', category: 'Cognitive & Nootropic', code: 'YW-PRAMIRAC',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PRAMIR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Lipid-soluble racetam — strong focus and memory effects without much mood change.',
    uses: [
      { icon: '🎯', title: 'Pure Focus', sub: 'Heavy logic/study task tool.' },
      { icon: '🧠', title: 'Memory', sub: 'Strong memory research.' },
      { icon: '💊', title: 'Lipid Solubility', sub: 'Crosses BBB efficiently.' }
    ],
    specs: [
      { size: '20×600mg', price: '$46' }
    ],
  },
  meclofenoxate: {
    emoji: '🧠', name: 'Meclofenoxate (Centrophenoxine)', category: 'Cognitive & Nootropic', code: 'YW-MECLOFEN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MECLOF-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Choline precursor + DMAE-related compound. Anti-aging brain research.',
    uses: [
      { icon: '🧠', title: 'Lipofuscin', sub: 'Reduces brain "age pigment" in research.' },
      { icon: '🛡️', title: 'Antioxidant', sub: 'Free radical scavenging.' },
      { icon: '💊', title: 'Cholinergic', sub: 'Eventually metabolized to DMAE/choline.' }
    ],
    specs: [
      { size: '30×250mg', price: '$31' }
    ],
  },
  pyritinol: {
    emoji: '🧠', name: 'Pyritinol', category: 'Cognitive & Nootropic', code: 'YW-PYRITINO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PYRITI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Vitamin B6 dimer — cognitive and cerebrovascular effects.',
    uses: [
      { icon: '🧠', title: 'Cognition', sub: 'Used in cognitive impairment research.' },
      { icon: '🩸', title: 'Glucose Brain', sub: 'Improves glucose uptake in neurons.' },
      { icon: '💊', title: 'Dementia Studies', sub: 'Studied in mild dementia.' }
    ],
    specs: [
      { size: '50×100mg', price: '$31' }
    ],
  },
  hydergine: {
    emoji: '🧠', name: 'Hydergine', category: 'Cognitive & Nootropic', code: 'YW-HYDERGIN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-HYDERG-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Ergot alkaloid mixture — classic cognitive enhancer with dopamine/serotonin effects.',
    uses: [
      { icon: '🧠', title: 'Cognitive Aging', sub: 'One of the original cognitive research tools.' },
      { icon: '🩸', title: 'Cerebral Metabolism', sub: 'Increases brain glucose use.' },
      { icon: '🛡️', title: 'Antioxidant', sub: 'MAO-A inhibition and antioxidant.' }
    ],
    specs: [
      { size: '30×1.5mg', price: '$46' }
    ],
  },
  naftidrofuryl: {
    emoji: '🧠', name: 'Naftidrofuryl', category: 'Cognitive & Nootropic', code: 'YW-NAFTIDRO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NAFTID-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '5-HT2 antagonist + cerebrovascular dilator. Cognitive and peripheral vascular research.',
    uses: [
      { icon: '🩸', title: 'Cerebrovascular', sub: 'Improves brain blood flow.' },
      { icon: '🦵', title: 'Claudication', sub: 'Used in peripheral vascular disease.' },
      { icon: '🧠', title: 'Cognition', sub: 'Studied in dementia research.' }
    ],
    specs: [
      { size: '30×200mg', price: '$62' }
    ],
  },
  ademetionine: {
    emoji: '🧠', name: 'Ademetionine (SAM-e)', category: 'Cognitive & Nootropic', code: 'YW-ADEMETIO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ADEMET-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'S-adenosyl-methionine — universal methyl donor. Mood, liver, and joint research.',
    uses: [
      { icon: '😌', title: 'Mood', sub: 'Studied as antidepressant in research.' },
      { icon: '🩺', title: 'Liver Health', sub: 'Used in cholestasis research.' },
      { icon: '🦴', title: 'Joint Pain', sub: 'Modest effect in osteoarthritis research.' }
    ],
    specs: [
      { size: '20×500mg', price: '$93' }
    ],
  },
  selegiline: {
    emoji: '🧠', name: 'Selegiline', category: 'Neurology', code: 'YW-SELEGILI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SELEGI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Selective MAO-B inhibitor — Parkinson\'s research + nootropic at low doses.',
    uses: [
      { icon: '🧠', title: 'Parkinson\'s', sub: 'Slows progression in early PD research.' },
      { icon: '🎯', title: 'Dopamine', sub: 'Preserves dopamine in CNS.' },
      { icon: '😌', title: 'Mood', sub: 'Low-dose research as antidepressant.' }
    ],
    specs: [
      { size: '30×5mg', price: '$93' }
    ],
  },
  rasagiline: {
    emoji: '🧠', name: 'Rasagiline', category: 'Neurology', code: 'YW-RASAGILI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RASAGI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Newer MAO-B inhibitor — neuroprotective effects in PD research.',
    uses: [
      { icon: '🧠', title: 'PD Monotherapy', sub: 'First-line in early Parkinson\'s.' },
      { icon: '🛡️', title: 'Neuroprotective', sub: 'Possible disease-modifying effects.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple dosing.' }
    ],
    specs: [
      { size: '30×1mg', price: '$124' }
    ],
  },
  donepezil: {
    emoji: '🧠', name: 'Donepezil', category: 'Neurology', code: 'YW-DONEPEZI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DONEPE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Acetylcholinesterase inhibitor — first-line Alzheimer\'s research.',
    uses: [
      { icon: '🧠', title: 'Alzheimer\'s', sub: 'Standard mild-moderate AD therapy.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple AD dosing.' },
      { icon: '🎯', title: 'ACh Boost', sub: 'Raises CNS acetylcholine.' }
    ],
    specs: [
      { size: '28×5mg', price: '$46' }
    ],
  },
  memantine: {
    emoji: '🧠', name: 'Memantine', category: 'Neurology', code: 'YW-MEMANTIN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MEMANT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'NMDA receptor antagonist — neuroprotection in moderate-severe Alzheimer\'s.',
    uses: [
      { icon: '🧠', title: 'Moderate-Severe AD', sub: 'Reduces NMDA excitotoxicity.' },
      { icon: '🛡️', title: 'Glutamate Modulation', sub: 'Different mechanism than AChEi.' },
      { icon: '🤝', title: 'Combo Therapy', sub: 'Often paired with donepezil.' }
    ],
    specs: [
      { size: '30×10mg', price: '$62' }
    ],
  },
  galantamine: {
    emoji: '🧠', name: 'Galantamine', category: 'Neurology', code: 'YW-GALANTAM',
    purity: 'Pharmacopoeia Grade', batch: 'YW-GALANT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'AChEi + nicotinic receptor modulator. Alzheimer\'s and lucid-dreaming research.',
    uses: [
      { icon: '🧠', title: 'Alzheimer\'s', sub: 'Dual mechanism vs pure AChEi.' },
      { icon: '💤', title: 'Lucid Dreams', sub: 'Popular in lucid dreaming research.' },
      { icon: '🎯', title: 'Nicotinic PAM', sub: 'Positive modulator at nicotinic receptors.' }
    ],
    specs: [
      { size: '28×8mg', price: '$62' }
    ],
  },
  rivastigmine: {
    emoji: '🧠', name: 'Rivastigmine', category: 'Neurology', code: 'YW-RIVASTIG',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RIVAST-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Dual ChE inhibitor (acetyl + butyryl). For Alzheimer\'s and Parkinson\'s dementia.',
    uses: [
      { icon: '🧠', title: 'PDD', sub: 'Approved for Parkinson\'s disease dementia.' },
      { icon: '🎯', title: 'Dual ChE Block', sub: 'Both AChE and BuChE inhibition.' },
      { icon: '💊', title: 'Patch Option', sub: 'Available as transdermal patch.' }
    ],
    specs: [
      { size: '28×1.5mg', price: '$62' }
    ],
  },
  omeprazole: {
    emoji: '💊', name: 'Omeprazole', category: 'Gastrointestinal', code: 'YW-OMEPRAZO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OMEPRA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Proton pump inhibitor — classic acid suppression. Original PPI from late 1980s.',
    uses: [
      { icon: '🔥', title: 'Acid Reflux', sub: 'Standard GERD therapy.' },
      { icon: '🩺', title: 'Peptic Ulcers', sub: 'First-line ulcer healing.' },
      { icon: '💰', title: 'Generic Workhorse', sub: 'Cheapest PPI.' }
    ],
    specs: [
      { size: '14×20mg', price: '$19' }
    ],
  },
  vonoprazan: {
    emoji: '💊', name: 'Vonoprazan', category: 'Gastrointestinal', code: 'YW-VONOPRAZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VONOPR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Potassium-competitive acid blocker (P-CAB) — faster, longer acid suppression than PPIs.',
    uses: [
      { icon: '🔥', title: 'Better Than PPI', sub: 'Stronger and faster acid suppression.' },
      { icon: '🦠', title: 'H. pylori', sub: 'Higher eradication rates in research.' },
      { icon: '💊', title: 'Once Daily', sub: 'Consistent 24-hour effect.' }
    ],
    specs: [
      { size: '20×20mg', price: '$46' }
    ],
  },
  linaclotide: {
    emoji: '🌿', name: 'Linaclotide', category: 'Gastrointestinal', code: 'YW-LINACLOT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LINACL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Guanylate cyclase-C agonist — IBS-C and chronic constipation research.',
    uses: [
      { icon: '🌿', title: 'IBS-C', sub: 'Reduces abdominal pain and constipation.' },
      { icon: '💊', title: 'CIC', sub: 'Approved for chronic idiopathic constipation.' },
      { icon: '🧬', title: 'GC-C Activation', sub: 'Increases fluid secretion in GI tract.' }
    ],
    specs: [
      { size: '30×290mcg', price: '$62' }
    ],
  },
  prucalopride: {
    emoji: '🌿', name: 'Prucalopride', category: 'Gastrointestinal', code: 'YW-PRUCALOP',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PRUCAL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Selective 5-HT4 receptor agonist — prokinetic for chronic constipation.',
    uses: [
      { icon: '🌿', title: 'Constipation', sub: 'Standard for refractory chronic constipation.' },
      { icon: '💊', title: 'Motility', sub: 'Increases colonic propulsive contractions.' },
      { icon: '🎯', title: '5-HT4 Selective', sub: 'Fewer cardiac concerns than older 5-HT4 agonists.' }
    ],
    specs: [
      { size: '28×2mg', price: '$31' }
    ],
  },
  mesalazine: {
    emoji: '🌿', name: 'Mesalazine', category: 'Gastrointestinal', code: 'YW-MESALAZI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MESALA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '5-aminosalicylic acid — first-line for ulcerative colitis research.',
    uses: [
      { icon: '🌿', title: 'UC First-Line', sub: 'Mild-moderate ulcerative colitis.' },
      { icon: '🩺', title: 'Crohn\'s', sub: 'Adjunct in Crohn\'s research.' },
      { icon: '🛡️', title: 'Anti-Inflammatory', sub: 'Topical mucosal anti-inflammation.' }
    ],
    specs: [
      { size: '50×500mg', price: '$46' }
    ],
  },
  sulfasalazine: {
    emoji: '🌿', name: 'Sulfasalazine', category: 'Gastrointestinal', code: 'YW-SULFASAL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SULFAS-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '5-ASA + sulfapyridine — older IBD agent also used in rheumatoid arthritis.',
    uses: [
      { icon: '🌿', title: 'UC', sub: 'Older alternative to mesalazine.' },
      { icon: '🦴', title: 'RA', sub: 'Disease-modifying anti-rheumatic.' },
      { icon: '💰', title: 'Inexpensive', sub: 'Generic standard.' }
    ],
    specs: [
      { size: '100×500mg', price: '$78' }
    ],
  },
  mosapride: {
    emoji: '🌿', name: 'Mosapride', category: 'Gastrointestinal', code: 'YW-MOSAPRID',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MOSAPR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '5-HT4 agonist prokinetic — for gastroparesis and functional dyspepsia.',
    uses: [
      { icon: '🌿', title: 'Gastroparesis', sub: 'Improves gastric emptying.' },
      { icon: '💊', title: 'Functional Dyspepsia', sub: 'Reduces postprandial symptoms.' },
      { icon: '🛡️', title: 'Better Safety', sub: 'Less arrhythmogenic than cisapride.' }
    ],
    specs: [
      { size: '30×5mg', price: '$31' }
    ],
  },
  otilonium: {
    emoji: '🌿', name: 'Otilonium Bromide', category: 'Gastrointestinal', code: 'YW-OTILONIU',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OTILON-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Antispasmodic for IBS — Ca2+ channel block + tachykinin antagonism.',
    uses: [
      { icon: '🌿', title: 'IBS Cramps', sub: 'Reduces colonic spasm.' },
      { icon: '💊', title: 'Local Action', sub: 'Minimal systemic absorption.' },
      { icon: '🛡️', title: 'Smooth Muscle', sub: 'Direct intestinal smooth muscle relaxation.' }
    ],
    specs: [
      { size: '20×40mg', price: '$31' }
    ],
  },
  mebeverine: {
    emoji: '🌿', name: 'Mebeverine', category: 'Gastrointestinal', code: 'YW-MEBEVERI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MEBEVE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Musculotropic antispasmodic — direct intestinal smooth muscle relaxant for IBS.',
    uses: [
      { icon: '🌿', title: 'IBS Pain', sub: 'Reduces colonic spasm without affecting motility.' },
      { icon: '💊', title: 'Daily Use', sub: 'Good for chronic IBS management.' },
      { icon: '🛡️', title: 'No Anticholinergic', sub: 'Avoids classical anticholinergic side effects.' }
    ],
    specs: [
      { size: '30×135mg', price: '$31' }
    ],
  },
  rifaximin: {
    emoji: '💊', name: 'Rifaximin', category: 'Gastrointestinal', code: 'YW-RIFAXIMI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RIFAXI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-absorbable antibiotic — for hepatic encephalopathy, traveler\'s diarrhea, IBS-D.',
    uses: [
      { icon: '🩺', title: 'Hepatic Encephalopathy', sub: 'Reduces ammonia-producing gut bacteria.' },
      { icon: '🌿', title: 'IBS-D', sub: 'Approved for diarrhea-predominant IBS.' },
      { icon: '💊', title: 'Gut-Only', sub: 'Minimal systemic absorption.' }
    ],
    specs: [
      { size: '30×550mg', price: '$155' }
    ],
  },
  domperidone: {
    emoji: '🌿', name: 'Domperidone', category: 'Gastrointestinal', code: 'YW-DOMPERID',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DOMPER-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Peripheral D2 antagonist — prokinetic + antiemetic with minimal CNS effects.',
    uses: [
      { icon: '🌿', title: 'Gastroparesis', sub: 'Improves gastric emptying.' },
      { icon: '🤢', title: 'Antiemetic', sub: 'Effective against many nausea causes.' },
      { icon: '🤰', title: 'Lactation', sub: 'Studied as galactagogue.' }
    ],
    specs: [
      { size: '30×10mg', price: '$93' }
    ],
  },
  lubiprostone: {
    emoji: '🌿', name: 'Lubiprostone', category: 'Gastrointestinal', code: 'YW-LUBIPROS',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LUBIPR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Type-2 chloride channel activator — softens stool and increases secretion.',
    uses: [
      { icon: '🌿', title: 'CIC', sub: 'Chronic idiopathic constipation.' },
      { icon: '💊', title: 'IBS-C', sub: 'In women with IBS-C.' },
      { icon: '🩺', title: 'Opioid Constipation', sub: 'Studied in OIC research.' }
    ],
    specs: [
      { size: '28×24mcg', price: '$78' }
    ],
  },
  pancreatin: {
    emoji: '🌿', name: 'Pancreatin', category: 'Gastrointestinal', code: 'YW-PANCREAT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PANCRE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Pancreatic enzyme replacement — for pancreatic insufficiency research.',
    uses: [
      { icon: '🌿', title: 'Malabsorption', sub: 'Pancreatic exocrine insufficiency.' },
      { icon: '🩺', title: 'CF & Chronic Pancreatitis', sub: 'Standard ERT.' },
      { icon: '💊', title: 'Enteric-Coated', sub: 'Acid-stable enzyme delivery.' }
    ],
    specs: [
      { size: '100×25000U', price: '$62' }
    ],
  },
  solifenacin: {
    emoji: '🚽', name: 'Solifenacin', category: 'Bladder & Prostate', code: 'YW-SOLIFENA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SOLIFE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Selective M3 muscarinic antagonist for overactive bladder.',
    uses: [
      { icon: '🚽', title: 'OAB', sub: 'Reduces urgency, frequency, incontinence.' },
      { icon: '🎯', title: 'M3 Selective', sub: 'Less dry mouth than older anticholinergics.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple OAB dosing.' }
    ],
    specs: [
      { size: '30×5mg', price: '$62' }
    ],
  },
  mirabegron: {
    emoji: '🚽', name: 'Mirabegron', category: 'Bladder & Prostate', code: 'YW-MIRABEGR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MIRABE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'β3-adrenergic agonist — novel OAB mechanism without anticholinergic effects.',
    uses: [
      { icon: '🚽', title: 'OAB', sub: 'Different mechanism than antimuscarinics.' },
      { icon: '🌿', title: 'No Anticholinergic', sub: 'Avoids dry mouth and constipation.' },
      { icon: '💊', title: 'Daily Tablet', sub: 'Once-daily extended-release.' }
    ],
    specs: [
      { size: '30×50mg', price: '$78' }
    ],
  },
  tolterodine: {
    emoji: '🚽', name: 'Tolterodine', category: 'Bladder & Prostate', code: 'YW-TOLTEROD',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TOLTER-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Antimuscarinic for overactive bladder — older but effective.',
    uses: [
      { icon: '🚽', title: 'OAB', sub: 'Established OAB therapy.' },
      { icon: '💊', title: 'BD Generic', sub: 'Available as twice-daily generic.' },
      { icon: '🩺', title: 'Established Safety', sub: 'Decades of use evidence.' }
    ],
    specs: [
      { size: '28×4mg', price: '$31' }
    ],
  },
  darifenacin: {
    emoji: '🚽', name: 'Darifenacin', category: 'Bladder & Prostate', code: 'YW-DARIFENA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DARIFE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'M3-selective antimuscarinic — minimal CNS penetration.',
    uses: [
      { icon: '🚽', title: 'OAB', sub: 'Effective antimuscarinic.' },
      { icon: '🧠', title: 'Less CNS', sub: 'Lowest CNS penetration of class.' },
      { icon: '🎯', title: 'M3 Selectivity', sub: 'Targets bladder muscarinics.' }
    ],
    specs: [
      { size: '28×7.5mg', price: '$62' }
    ],
  },
  silodosin: {
    emoji: '🚽', name: 'Silodosin', category: 'Bladder & Prostate', code: 'YW-SILODOSI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SILODO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'α1A-selective adrenergic blocker for BPH symptoms.',
    uses: [
      { icon: '🩺', title: 'BPH', sub: 'Highly selective for prostatic α1A.' },
      { icon: '🩸', title: 'BP-Friendly', sub: 'Less orthostatic hypotension.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple BPH therapy.' }
    ],
    specs: [
      { size: '30×4mg', price: '$37' }
    ],
  },
  alfuzosin: {
    emoji: '🚽', name: 'Alfuzosin', category: 'Bladder & Prostate', code: 'YW-ALFUZOSI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ALFUZO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Uroselective α1 blocker for BPH.',
    uses: [
      { icon: '🩺', title: 'BPH', sub: 'Improves urinary flow.' },
      { icon: '💊', title: 'Extended Release', sub: 'Once-daily ER tablets.' },
      { icon: '🩸', title: 'BP Tolerable', sub: 'Less hypotension than terazosin.' }
    ],
    specs: [
      { size: '30×10mg', price: '$37' }
    ],
  },
  flavoxate: {
    emoji: '🚽', name: 'Flavoxate', category: 'Bladder & Prostate', code: 'YW-FLAVOXAT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FLAVOX-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Older bladder antispasmodic — for dysuria and urgency.',
    uses: [
      { icon: '🚽', title: 'Dysuria', sub: 'Reduces painful urination.' },
      { icon: '💊', title: 'Bladder Smooth Muscle', sub: 'Direct relaxant action.' },
      { icon: '🛡️', title: 'Mild Anticholinergic', sub: 'Lower potency than newer agents.' }
    ],
    specs: [
      { size: '30×200mg', price: '$37' }
    ],
  },
  doxazosin: {
    emoji: '🚽', name: 'Doxazosin', category: 'Bladder & Prostate', code: 'YW-DOXAZOSI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DOXAZO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-selective α1 blocker — used for BPH and HTN.',
    uses: [
      { icon: '🩺', title: 'BPH', sub: 'Improves urinary symptoms.' },
      { icon: '🩸', title: 'HTN', sub: 'Also lowers blood pressure.' },
      { icon: '💊', title: 'Once Daily', sub: 'Long-acting α1 block.' }
    ],
    specs: [
      { size: '30×2mg', price: '$46' }
    ],
  },
  terazosin: {
    emoji: '🚽', name: 'Terazosin', category: 'Bladder & Prostate', code: 'YW-TERAZOSI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TERAZO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'α1 blocker for BPH — older than doxazosin with similar effects.',
    uses: [
      { icon: '🩺', title: 'BPH', sub: 'Improves urinary flow.' },
      { icon: '🩸', title: 'Dual Use', sub: 'BPH and HTN.' },
      { icon: '💰', title: 'Generic', sub: 'Inexpensive long-established.' }
    ],
    specs: [
      { size: '28×2mg', price: '$37' }
    ],
  },
  anastrozole: {
    emoji: '🧪', name: 'Anastrozole', category: 'Hormones & Fertility', code: 'YW-ANASTROZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ANASTR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Aromatase inhibitor — blocks estrogen synthesis. ER+ breast cancer research.',
    uses: [
      { icon: '🎯', title: 'Aromatase Block', sub: 'Reduces peripheral estrogen ~85%.' },
      { icon: '🔬', title: 'ER+ Breast Cancer', sub: 'Standard adjuvant in postmenopausal.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple oral dosing.' }
    ],
    specs: [
      { size: '28×1mg', price: '$46' }
    ],
  },
  tamoxifen: {
    emoji: '🧪', name: 'Tamoxifen', category: 'Hormones & Fertility', code: 'YW-TAMOXIFE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TAMOXI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SERM — ER antagonist in breast tissue, agonist in bone/uterus.',
    uses: [
      { icon: '🎯', title: 'ER Antagonist', sub: 'Breast cancer prevention/treatment.' },
      { icon: '🦴', title: 'Bone Protective', sub: 'Estrogen agonism in bone.' },
      { icon: '🔬', title: 'Pre/Postmenopausal', sub: 'Works in both groups.' }
    ],
    specs: [
      { size: '60×10mg', price: '$31' }
    ],
  },
  letrozole: {
    emoji: '🧪', name: 'Letrozole', category: 'Hormones & Fertility', code: 'YW-LETROZOL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LETROZ-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-steroidal aromatase inhibitor — stronger AI than anastrozole.',
    uses: [
      { icon: '🎯', title: 'Strong Aromatase Block', sub: 'Most potent AI.' },
      { icon: '🔬', title: 'Breast Cancer', sub: 'First-line in ER+ postmenopausal.' },
      { icon: '🥚', title: 'Ovulation Induction', sub: 'Also used in fertility research.' }
    ],
    specs: [
      { size: '30×2.5mg', price: '$46' }
    ],
  },
  exemestane: {
    emoji: '🧪', name: 'Exemestane', category: 'Hormones & Fertility', code: 'YW-EXEMESTA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EXEMES-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Steroidal (irreversible) aromatase inhibitor.',
    uses: [
      { icon: '🎯', title: 'Irreversible AI', sub: 'Different mechanism — steroidal.' },
      { icon: '🔬', title: 'Breast Cancer', sub: 'Alternative when AS-AIs fail.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple oral dosing.' }
    ],
    specs: [
      { size: '30×25mg', price: '$46' }
    ],
  },
  clomiphene: {
    emoji: '💗', name: 'Clomiphene', category: 'Hormones & Fertility', code: 'YW-CLOMIPHE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CLOMIP-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SERM — ER antagonist at hypothalamus, boosting endogenous gonadotropins.',
    uses: [
      { icon: '🥚', title: 'Ovulation Induction', sub: 'First-line PCOS fertility research.' },
      { icon: '♂️', title: 'Male Hypogonadism', sub: 'Boosts endogenous testosterone.' },
      { icon: '💊', title: 'HPG Axis', sub: 'Drives FSH/LH increase.' }
    ],
    specs: [
      { size: '10×50mg', price: '$31' }
    ],
  },
  progesterone: {
    emoji: '💗', name: 'Progesterone', category: 'Hormones & Fertility', code: 'YW-PROGESTE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PROGES-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Bioidentical progesterone — micronised for oral bioavailability.',
    uses: [
      { icon: '💗', title: 'HRT', sub: 'Combined with estrogen in menopausal HRT.' },
      { icon: '🤰', title: 'Fertility', sub: 'Luteal phase support in IVF.' },
      { icon: '💤', title: 'Sleep', sub: 'Sedating effect via GABA-A modulation.' }
    ],
    specs: [
      { size: '30×100mg', price: '$62' }
    ],
  },
  tibolone: {
    emoji: '💗', name: 'Tibolone', category: 'Hormones & Fertility', code: 'YW-TIBOLONE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TIBOLO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Synthetic steroid with estrogenic, progestogenic, and androgenic activity. Menopause research.',
    uses: [
      { icon: '💗', title: 'Menopause', sub: 'Single agent for menopausal symptoms.' },
      { icon: '🦴', title: 'Bone Density', sub: 'Maintains BMD postmenopause.' },
      { icon: '💊', title: 'Selective Action', sub: 'Tissue-selective hormone effects.' }
    ],
    specs: [
      { size: '28×2.5mg', price: '$46' }
    ],
  },
  pemigatinib: {
    emoji: '🎯', name: 'Pemigatinib', category: 'Targeted Oncology', code: 'YW-PEMIGATI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PEMIGA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'FGFR1-3 tyrosine kinase inhibitor — for cholangiocarcinoma with FGFR2 fusions.',
    uses: [
      { icon: '🎯', title: 'FGFR2 Targeted', sub: 'Precision therapy for FGFR-driven cancers.' },
      { icon: '🔬', title: 'Cholangiocarcinoma', sub: 'Approved for FGFR2-fusion CCA.' },
      { icon: '💊', title: 'Daily Cycles', sub: '21-day on, 7-day off cycles.' }
    ],
    specs: [
      { size: '14×13.5mg', price: '$310' }
    ],
  },
  erdafitinib: {
    emoji: '🎯', name: 'Erdafitinib', category: 'Targeted Oncology', code: 'YW-ERDAFITI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ERDAFI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Pan-FGFR1-4 inhibitor — urothelial cancer with FGFR alterations.',
    uses: [
      { icon: '🎯', title: 'FGFR Pan', sub: 'Broader spectrum than pemigatinib.' },
      { icon: '🔬', title: 'Bladder Cancer', sub: 'FGFR-altered urothelial cancer.' },
      { icon: '💊', title: 'Continuous Dosing', sub: 'Once-daily continuous.' }
    ],
    specs: [
      { size: '28×4mg', price: '$310' }
    ],
  },
  relugolix: {
    emoji: '🎯', name: 'Relugolix', category: 'Targeted Oncology', code: 'YW-RELUGOLI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RELUGO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Oral GnRH antagonist — prostate cancer hormonal therapy without LH surge.',
    uses: [
      { icon: '🎯', title: 'GnRH Antagonist', sub: 'No initial testosterone flare.' },
      { icon: '🔬', title: 'Prostate Cancer', sub: 'Alternative to LHRH agonists.' },
      { icon: '💊', title: 'Oral Convenience', sub: 'First oral GnRH antagonist.' }
    ],
    specs: [
      { size: '30×120mg', price: '$217' }
    ],
  },
  elagolix: {
    emoji: '🎯', name: 'Elagolix', category: 'Targeted Oncology', code: 'YW-ELAGOLIX',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ELAGOL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Oral GnRH antagonist for endometriosis pain research.',
    uses: [
      { icon: '🌿', title: 'Endometriosis', sub: 'Reduces estrogen production.' },
      { icon: '💊', title: 'Pain Relief', sub: 'Studied for endo-related pelvic pain.' },
      { icon: '🎯', title: 'GnRH Block', sub: 'Selective antagonist.' }
    ],
    specs: [
      { size: '28×150mg', price: '$217' }
    ],
  },
  osimertinib: {
    emoji: '🎯', name: 'Osimertinib', category: 'Targeted Oncology', code: 'YW-OSIMERTI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OSIMER-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '3rd-gen EGFR TKI for T790M-resistant and EGFR-mutant lung cancer.',
    uses: [
      { icon: '🎯', title: 'T790M Active', sub: 'Overcomes resistance mutations.' },
      { icon: '🔬', title: 'EGFR+ NSCLC', sub: 'First-line for EGFR-mutated lung cancer.' },
      { icon: '🧠', title: 'CNS Penetration', sub: 'Excellent brain metastasis activity.' }
    ],
    specs: [
      { size: '28×80mg', price: '$558' }
    ],
  },
  infigratinib: {
    emoji: '🎯', name: 'Infigratinib', category: 'Targeted Oncology', code: 'YW-INFIGRAT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-INFIGR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Selective FGFR1-3 inhibitor — for FGFR2-fusion cholangiocarcinoma.',
    uses: [
      { icon: '🎯', title: 'FGFR Targeted', sub: 'Selective FGFR kinase inhibition.' },
      { icon: '🔬', title: 'CCA Therapy', sub: 'Second-line FGFR2-fusion CCA.' },
      { icon: '💊', title: 'Cyclic Dosing', sub: '21-day on, 7-day off.' }
    ],
    specs: [
      { size: '21×100+25mg', price: '$310' }
    ],
  },
  amoxicillin: {
    emoji: '💊', name: 'Amoxicillin', category: 'Anti-Infectives', code: 'YW-AMOXICIL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-AMOXIC-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Broad-spectrum penicillin — first-line for many respiratory, ENT, and skin infections.',
    uses: [
      { icon: '🛡️', title: 'Broad Spectrum', sub: 'Strep, some staph, H. influenzae, E. coli.' },
      { icon: '💰', title: 'Generic Workhorse', sub: 'Cheapest reliable oral antibiotic.' },
      { icon: '🩺', title: 'Daily Standard', sub: 'TID or BD dosing.' }
    ],
    specs: [
      { size: '20×500mg', price: '$31' }
    ],
  },
  amox_clav: {
    emoji: '💊', name: 'Amoxicillin/Clavulanate', category: 'Anti-Infectives', code: 'YW-AMOX_CLA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-AMOX_C-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Amoxicillin + β-lactamase inhibitor — broader coverage of resistant organisms.',
    uses: [
      { icon: '🛡️', title: 'β-Lactamase Coverage', sub: 'Active against many resistant bacteria.' },
      { icon: '🩺', title: 'ENT/Resp', sub: 'Severe sinusitis, otitis, animal bites.' },
      { icon: '💊', title: 'BD Dosing', sub: 'Twice-daily standard.' }
    ],
    specs: [
      { size: '10×625mg', price: '$46' }
    ],
  },
  flucloxacillin: {
    emoji: '💊', name: 'Flucloxacillin', category: 'Anti-Infectives', code: 'YW-FLUCLOXA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FLUCLO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Anti-staph penicillin — narrow spectrum for staphylococcal skin/soft tissue infections.',
    uses: [
      { icon: '🛡️', title: 'Anti-Staph', sub: 'MSSA cellulitis/abscess.' },
      { icon: '🩺', title: 'Skin Infections', sub: 'Standard cellulitis therapy.' },
      { icon: '🎯', title: 'Narrow Spectrum', sub: 'Less collateral damage.' }
    ],
    specs: [
      { size: '24×250mg', price: '$46' }
    ],
  },
  cefuroxime: {
    emoji: '💊', name: 'Cefuroxime Axetil', category: 'Anti-Infectives', code: 'YW-CEFUROXI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CEFURO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2nd-generation cephalosporin — better gram-negative than 1st-gen.',
    uses: [
      { icon: '🛡️', title: '2nd-Gen Coverage', sub: 'Resp tract pathogens covered.' },
      { icon: '🩺', title: 'Pneumonia/Sinusitis', sub: 'Standard for moderate infections.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily oral dosing.' }
    ],
    specs: [
      { size: '10×250mg', price: '$31' }
    ],
  },
  cefixime: {
    emoji: '💊', name: 'Cefixime', category: 'Anti-Infectives', code: 'YW-CEFIXIME',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CEFIXI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '3rd-generation oral cephalosporin — gram-negative focused.',
    uses: [
      { icon: '🛡️', title: 'Gram-Negative', sub: 'Strong vs E.coli, Klebsiella, gonorrhea.' },
      { icon: '🩺', title: 'UTI', sub: 'First-line oral for complicated UTI.' },
      { icon: '💊', title: 'Once Daily', sub: 'Long half-life.' }
    ],
    specs: [
      { size: '10×100mg', price: '$62' }
    ],
  },
  cefaclor: {
    emoji: '💊', name: 'Cefaclor', category: 'Anti-Infectives', code: 'YW-CEFACLOR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CEFACL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2nd-gen cephalosporin — alternative to cefuroxime.',
    uses: [
      { icon: '🛡️', title: 'Resp Pathogens', sub: 'S. pneumo, H. flu coverage.' },
      { icon: '🩺', title: 'Otitis Media', sub: 'Pediatric ear infection alternative.' },
      { icon: '💊', title: 'TID', sub: 'Three-times-daily.' }
    ],
    specs: [
      { size: '15×250mg', price: '$31' }
    ],
  },
  cefdinir: {
    emoji: '💊', name: 'Cefdinir', category: 'Anti-Infectives', code: 'YW-CEFDINIR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CEFDIN-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '3rd-gen oral cephalosporin — broader spectrum than cefixime.',
    uses: [
      { icon: '🛡️', title: 'Broad', sub: 'Resp + skin + UTI coverage.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily option.' },
      { icon: '🩺', title: 'Pediatrics', sub: 'Pleasant taste — used for kids.' }
    ],
    specs: [
      { size: '10×100mg', price: '$46' }
    ],
  },
  cefpodoxime: {
    emoji: '💊', name: 'Cefpodoxime', category: 'Anti-Infectives', code: 'YW-CEFPODOX',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CEFPOD-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '3rd-gen oral cephalosporin — wider gram-positive than cefixime.',
    uses: [
      { icon: '🛡️', title: 'Balanced Coverage', sub: 'Both gram + and -.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily dosing.' },
      { icon: '🩺', title: 'Resp + UTI', sub: 'Versatile applications.' }
    ],
    specs: [
      { size: '10×100mg', price: '$46' }
    ],
  },
  clarithromycin: {
    emoji: '💊', name: 'Clarithromycin', category: 'Anti-Infectives', code: 'YW-CLARITHR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CLARIT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Macrolide antibiotic — for atypical pneumonia, H. pylori eradication.',
    uses: [
      { icon: '🛡️', title: 'Atypicals', sub: 'Mycoplasma, Legionella, Chlamydia coverage.' },
      { icon: '🦠', title: 'H. pylori', sub: 'Triple therapy component.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily dosing.' }
    ],
    specs: [
      { size: '10×250mg', price: '$46' }
    ],
  },
  roxithromycin: {
    emoji: '💊', name: 'Roxithromycin', category: 'Anti-Infectives', code: 'YW-ROXITHRO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ROXITH-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Macrolide with improved tolerability over erythromycin.',
    uses: [
      { icon: '🛡️', title: 'Resp Atypicals', sub: 'Similar coverage to erythromycin.' },
      { icon: '🌿', title: 'Better GI Tolerance', sub: 'Less GI upset than erythromycin.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily.' }
    ],
    specs: [
      { size: '10×150mg', price: '$31' }
    ],
  },
  erythromycin: {
    emoji: '💊', name: 'Erythromycin Ethyl Succinate', category: 'Anti-Infectives', code: 'YW-ERYTHROM',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ERYTHR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Original macrolide — atypical pneumonia, gastroparesis (motilin agonist).',
    uses: [
      { icon: '🛡️', title: 'Atypicals', sub: 'Original macrolide spectrum.' },
      { icon: '🌿', title: 'Prokinetic', sub: 'Motilin receptor agonist for gastroparesis.' },
      { icon: '💰', title: 'Inexpensive', sub: 'Generic standard.' }
    ],
    specs: [
      { size: '24×250mg', price: '$62' }
    ],
  },
  moxifloxacin: {
    emoji: '💊', name: 'Moxifloxacin', category: 'Anti-Infectives', code: 'YW-MOXIFLOX',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MOXIFL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '4th-gen fluoroquinolone — broad respiratory coverage.',
    uses: [
      { icon: '🛡️', title: 'Resp Quinolone', sub: 'Strong pneumococcal activity.' },
      { icon: '💊', title: 'Once Daily', sub: 'Single daily dose.' },
      { icon: '🩺', title: 'CAP', sub: 'Community-acquired pneumonia first-line.' }
    ],
    specs: [
      { size: '6×400mg', price: '$37' }
    ],
  },
  ofloxacin: {
    emoji: '💊', name: 'Ofloxacin', category: 'Anti-Infectives', code: 'YW-OFLOXACI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OFLOXA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2nd-gen fluoroquinolone — UTI and respiratory infections.',
    uses: [
      { icon: '🛡️', title: 'Gram-Negative', sub: 'UTI workhorse.' },
      { icon: '🩺', title: 'Versatile', sub: 'UTI, prostatitis, traveler\'s diarrhea.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily.' }
    ],
    specs: [
      { size: '10×200mg', price: '$46' }
    ],
  },
  ciprofloxacin: {
    emoji: '💊', name: 'Ciprofloxacin', category: 'Anti-Infectives', code: 'YW-CIPROFLO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CIPROF-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Classic fluoroquinolone — strong gram-negative including Pseudomonas.',
    uses: [
      { icon: '🛡️', title: 'Anti-Pseudomonal', sub: 'Activity vs Pseudomonas aeruginosa.' },
      { icon: '🩺', title: 'UTI/GI', sub: 'Complicated UTI, traveler\'s diarrhea.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily standard.' }
    ],
    specs: [
      { size: '10×500mg', price: '$62' }
    ],
  },
  doxycycline: {
    emoji: '💊', name: 'Doxycycline', category: 'Anti-Infectives', code: 'YW-DOXYCYCL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DOXYCY-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Tetracycline — atypical pneumonia, acne, tick-borne illness, malaria prophylaxis.',
    uses: [
      { icon: '🛡️', title: 'Atypicals & Zoonotic', sub: 'Lyme, RMSF, Q fever, atypical pneumonia.' },
      { icon: '✨', title: 'Acne', sub: 'Long-term acne research.' },
      { icon: '🦟', title: 'Malaria Prophylaxis', sub: 'Daily prophylactic dosing.' }
    ],
    specs: [
      { size: '20×100mg', price: '$31' }
    ],
  },
  minocycline: {
    emoji: '💊', name: 'Minocycline', category: 'Anti-Infectives', code: 'YW-MINOCYCL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MINOCY-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Lipophilic tetracycline — more skin/CNS penetration than doxycycline.',
    uses: [
      { icon: '✨', title: 'Acne', sub: 'Strong acne research therapy.' },
      { icon: '🦴', title: 'MRSA-Active', sub: 'Some activity vs MRSA.' },
      { icon: '🧠', title: 'CNS Penetration', sub: 'Studied for neurological applications.' }
    ],
    specs: [
      { size: '20×50mg', price: '$31' }
    ],
  },
  metronidazole: {
    emoji: '💊', name: 'Metronidazole', category: 'Anti-Infectives', code: 'YW-METRONID',
    purity: 'Pharmacopoeia Grade', batch: 'YW-METRON-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Nitroimidazole — anaerobic bacteria and protozoa.',
    uses: [
      { icon: '🛡️', title: 'Anaerobes', sub: 'Bacteroides, C. diff coverage.' },
      { icon: '🦠', title: 'Protozoa', sub: 'Giardia, trichomoniasis, amoebiasis.' },
      { icon: '🌿', title: 'BV', sub: 'First-line bacterial vaginosis.' }
    ],
    specs: [
      { size: '20×200mg', price: '$31' }
    ],
  },
  tinidazole: {
    emoji: '💊', name: 'Tinidazole', category: 'Anti-Infectives', code: 'YW-TINIDAZO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TINIDA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Newer nitroimidazole — single-dose convenience for many infections.',
    uses: [
      { icon: '💊', title: 'Single Dose', sub: 'Many indications use single 2g dose.' },
      { icon: '🛡️', title: 'Anaerobes', sub: 'Same spectrum as metronidazole.' },
      { icon: '🌿', title: 'Better Tolerated', sub: 'Less metallic taste than metronidazole.' }
    ],
    specs: [
      { size: '10×500mg', price: '$31' }
    ],
  },
  clindamycin: {
    emoji: '💊', name: 'Clindamycin', category: 'Anti-Infectives', code: 'YW-CLINDAMY',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CLINDA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Lincosamide — gram-positive + anaerobes, MSSA/MRSA in skin/soft tissue.',
    uses: [
      { icon: '🛡️', title: 'Gram+ & Anaerobes', sub: 'Skin/soft tissue infections.' },
      { icon: '🦴', title: 'Bone Penetration', sub: 'Used in osteomyelitis research.' },
      { icon: '💊', title: 'QID', sub: 'Four-times-daily dosing.' }
    ],
    specs: [
      { size: '20×150mg', price: '$46' }
    ],
  },
  linezolid: {
    emoji: '💊', name: 'Linezolid', category: 'Anti-Infectives', code: 'YW-LINEZOLI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LINEZO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Oxazolidinone — for MRSA, VRE, and other resistant gram-positive infections.',
    uses: [
      { icon: '🛡️', title: 'MRSA & VRE', sub: 'Resistant gram-positive coverage.' },
      { icon: '💊', title: 'Oral=IV', sub: 'Same oral as IV bioavailability.' },
      { icon: '🩺', title: 'Reserved', sub: 'For confirmed resistant infections.' }
    ],
    specs: [
      { size: '10×600mg', price: '$124' }
    ],
  },
  nitrofurantoin: {
    emoji: '💊', name: 'Nitrofurantoin', category: 'Anti-Infectives', code: 'YW-NITROFUR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NITROF-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Concentrated in urine — first-line uncomplicated UTI.',
    uses: [
      { icon: '🚽', title: 'UTI First-Line', sub: 'Cystitis without resistance concerns.' },
      { icon: '💰', title: 'Inexpensive', sub: 'Generic decades-old standard.' },
      { icon: '🛡️', title: 'Low Resistance', sub: 'Less resistance development than fluoroquinolones.' }
    ],
    specs: [
      { size: '30×100mg', price: '$46' }
    ],
  },
  fosfomycin: {
    emoji: '💊', name: 'Fosfomycin', category: 'Anti-Infectives', code: 'YW-FOSFOMYC',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FOSFOM-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Single-dose UTI antibiotic — sachet of granules in water.',
    uses: [
      { icon: '💊', title: 'Single Dose', sub: 'Single 3g sachet for uncomplicated UTI.' },
      { icon: '🚽', title: 'Cystitis', sub: 'First-line in many guidelines now.' },
      { icon: '🛡️', title: 'ESBL Active', sub: 'Useful for resistant E.coli UTI.' }
    ],
    specs: [
      { size: '1×3g', price: '$37' }
    ],
  },
  fluconazole: {
    emoji: '💊', name: 'Fluconazole', category: 'Anti-Infectives', code: 'YW-FLUCONAZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FLUCON-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Azole antifungal — for candida infections (oral, vaginal, systemic).',
    uses: [
      { icon: '🍄', title: 'Candida', sub: 'Standard for vaginal and oral candidiasis.' },
      { icon: '💊', title: 'Single Dose', sub: '150mg single dose for VVC.' },
      { icon: '🩺', title: 'Systemic', sub: 'Used in invasive candidiasis research.' }
    ],
    specs: [
      { size: '7×150mg', price: '$46' }
    ],
  },
  itraconazole: {
    emoji: '💊', name: 'Itraconazole', category: 'Anti-Infectives', code: 'YW-ITRACONA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ITRACO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Triazole antifungal — broader spectrum than fluconazole.',
    uses: [
      { icon: '🍄', title: 'Broader Spectrum', sub: 'Aspergillus, dermatophytes, dimorphic fungi.' },
      { icon: '💅', title: 'Onychomycosis', sub: 'Pulse therapy for nail fungus.' },
      { icon: '🩺', title: 'Histoplasmosis', sub: 'Used in endemic mycoses research.' }
    ],
    specs: [
      { size: '28×100mg', price: '$78' }
    ],
  },
  terbinafine: {
    emoji: '💊', name: 'Terbinafine', category: 'Anti-Infectives', code: 'YW-TERBINAF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TERBIN-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Allylamine antifungal — gold standard for dermatophyte infections (nails, skin).',
    uses: [
      { icon: '💅', title: 'Onychomycosis', sub: 'First-line for nail fungus.' },
      { icon: '🦠', title: 'Dermatophytes', sub: 'Strongest against tinea infections.' },
      { icon: '💊', title: 'Daily Dose', sub: 'Continuous daily for 6-12 weeks.' }
    ],
    specs: [
      { size: '14×250mg', price: '$46' }
    ],
  },
  voriconazole: {
    emoji: '💊', name: 'Voriconazole', category: 'Anti-Infectives', code: 'YW-VORICONA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VORICO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2nd-gen triazole — strong activity against Aspergillus and other moulds.',
    uses: [
      { icon: '🍄', title: 'Aspergillus', sub: 'First-line for invasive aspergillosis research.' },
      { icon: '🛡️', title: 'Mould Coverage', sub: 'Active against Scedosporium, Fusarium.' },
      { icon: '🩺', title: 'Serious Infections', sub: 'Reserved for severe systemic mycoses.' }
    ],
    specs: [
      { size: '10×200mg', price: '$248' }
    ],
  },
  ivermectin: {
    emoji: '💊', name: 'Ivermectin', category: 'Anti-Infectives', code: 'YW-IVERMECT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-IVERME-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Macrocyclic lactone — antiparasitic for worms and ectoparasites.',
    uses: [
      { icon: '🦠', title: 'Strongyloidiasis', sub: 'First-line for Strongyloides.' },
      { icon: '🦠', title: 'Scabies', sub: 'Single oral dose for scabies.' },
      { icon: '🌍', title: 'River Blindness', sub: 'Onchocerciasis treatment.' }
    ],
    specs: [
      { size: '10×6mg', price: '$46' }
    ],
  },
  albendazole: {
    emoji: '💊', name: 'Albendazole', category: 'Anti-Infectives', code: 'YW-ALBENDAZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ALBEND-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Broad-spectrum antiparasitic — most intestinal worms.',
    uses: [
      { icon: '🦠', title: 'Intestinal Worms', sub: 'Ascariasis, hookworm, pinworm.' },
      { icon: '💊', title: 'Single Dose', sub: 'Often single 400mg dose.' },
      { icon: '🩺', title: 'Hydatid Disease', sub: 'Used in echinococcosis research.' }
    ],
    specs: [
      { size: '2×200mg', price: '$16' }
    ],
  },
  mebendazole: {
    emoji: '💊', name: 'Mebendazole', category: 'Anti-Infectives', code: 'YW-MEBENDAZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MEBEND-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Benzimidazole antiparasitic — alternative to albendazole.',
    uses: [
      { icon: '🦠', title: 'Pinworm', sub: 'Classic pinworm treatment.' },
      { icon: '💊', title: 'Few Side Effects', sub: 'Well-tolerated generally.' },
      { icon: '🩺', title: 'Whipworm', sub: 'Effective for trichuriasis.' }
    ],
    specs: [
      { size: '6×100mg', price: '$31' }
    ],
  },
  nitazoxanide: {
    emoji: '💊', name: 'Nitazoxanide', category: 'Anti-Infectives', code: 'YW-NITAZOXA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NITAZO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Antiprotozoal — Giardia, Cryptosporidium, some viruses.',
    uses: [
      { icon: '🦠', title: 'Cryptosporidium', sub: 'Only approved drug for Crypto.' },
      { icon: '🦠', title: 'Giardia', sub: 'Alternative to metronidazole.' },
      { icon: '🧪', title: 'Antiviral Research', sub: 'Studied vs norovirus and rotavirus.' }
    ],
    specs: [
      { size: '6×500mg', price: '$124' }
    ],
  },
  alendronate: {
    emoji: '🦴', name: 'Alendronate', category: 'Bone Health', code: 'YW-ALENDRON',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ALENDR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Weekly oral bisphosphonate — first-line osteoporosis research.',
    uses: [
      { icon: '🦴', title: 'Osteoporosis', sub: 'Most-prescribed osteoporosis drug.' },
      { icon: '🗓️', title: 'Weekly Tablet', sub: 'Single weekly 70mg tablet.' },
      { icon: '🛡️', title: 'Fracture Prevention', sub: 'Reduces vertebral and hip fracture risk.' }
    ],
    specs: [
      { size: '4×70mg', price: '$62' }
    ],
  },
  risedronate: {
    emoji: '🦴', name: 'Risedronate', category: 'Bone Health', code: 'YW-RISEDRON',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RISEDR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Weekly bisphosphonate — alternative to alendronate.',
    uses: [
      { icon: '🦴', title: 'Osteoporosis', sub: 'Standard alternative to alendronate.' },
      { icon: '🗓️', title: 'Weekly Dose', sub: 'Single weekly 35mg tablet.' },
      { icon: '💊', title: 'Better GI', sub: 'Some prefer for GI tolerance.' }
    ],
    specs: [
      { size: '4×35mg', price: '$62' }
    ],
  },
  ibandronate: {
    emoji: '🦴', name: 'Ibandronate', category: 'Bone Health', code: 'YW-IBANDRON',
    purity: 'Pharmacopoeia Grade', batch: 'YW-IBANDR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Monthly oral bisphosphonate — most convenient bisphosphonate dosing.',
    uses: [
      { icon: '🗓️', title: 'Monthly Tablet', sub: 'Single 150mg once monthly.' },
      { icon: '🦴', title: 'Postmenopausal OP', sub: 'Vertebral fracture reduction.' },
      { icon: '💊', title: 'High Compliance', sub: 'Monthly dose drives better adherence.' }
    ],
    specs: [
      { size: '1×150mg', price: '$93' }
    ],
  },
  bictegravir_combo: {
    emoji: '💊', name: 'Bictegravir/FTC/TAF', category: 'Antivirals', code: 'YW-BICTEGRA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BICTEG-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Single-tablet HIV regimen — integrase inhibitor + 2 NRTIs. Once-daily.',
    uses: [
      { icon: '🛡️', title: 'Single-Tablet', sub: 'Modern STR for HIV.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple compliance.' },
      { icon: '🎯', title: 'High Barrier', sub: 'High resistance barrier.' }
    ],
    specs: [
      { size: '30 tabs', price: '$341' }
    ],
  },
  dolutegravir_lami: {
    emoji: '💊', name: 'Dolutegravir/Lamivudine', category: 'Antivirals', code: 'YW-DOLUTEGR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DOLUTE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2-drug HIV regimen — INSTI + NRTI. Approved alternative to 3-drug regimens.',
    uses: [
      { icon: '🛡️', title: '2-Drug Therapy', sub: 'Reduced lifetime exposure.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple compliance.' },
      { icon: '🩺', title: 'Modern HIV', sub: 'Newer approach to chronic HIV.' }
    ],
    specs: [
      { size: '30 tabs', price: '$248' }
    ],
  },
  abacavir_combo: {
    emoji: '💊', name: 'Abacavir/Dolutegravir/Lamivudine', category: 'Antivirals', code: 'YW-ABACAVIR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ABACAV-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Single-tablet HIV regimen — INSTI + 2 NRTIs.',
    uses: [
      { icon: '💊', title: 'Single Tablet', sub: 'Simple HIV management.' },
      { icon: '🛡️', title: 'Established Regimen', sub: 'Long track record.' },
      { icon: '⚠️', title: 'HLA-B*5701', sub: 'Requires HLA testing before start.' }
    ],
    specs: [
      { size: '30 tabs', price: '$310' }
    ],
  },
  emtri_taf: {
    emoji: '💊', name: 'Emtricitabine/TAF', category: 'Antivirals', code: 'YW-EMTRI_TA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EMTRI_-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2-NRTI backbone — for HIV combination regimens and PrEP.',
    uses: [
      { icon: '🛡️', title: 'HIV Backbone', sub: 'Foundation of many regimens.' },
      { icon: '🩸', title: 'PrEP', sub: 'Approved for HIV pre-exposure prophylaxis.' },
      { icon: '🦴', title: 'Better Bone/Renal', sub: 'vs TDF formulation.' }
    ],
    specs: [
      { size: '30 tabs', price: '$124' }
    ],
  },
  emtri_tdf: {
    emoji: '💊', name: 'Emtricitabine/TDF', category: 'Antivirals', code: 'YW-EMTRI_TD',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EMTRI_-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2-NRTI backbone — older formulation. PrEP and HIV treatment.',
    uses: [
      { icon: '🛡️', title: 'HIV Backbone', sub: 'Cornerstone of many regimens.' },
      { icon: '🩸', title: 'PrEP Classic', sub: 'Original Truvada PrEP regimen.' },
      { icon: '💰', title: 'Generic Affordable', sub: 'Cheaper than TAF version.' }
    ],
    specs: [
      { size: '30 tabs', price: '$62' }
    ],
  },
  evg_combo: {
    emoji: '💊', name: 'Elvitegravir/Cobicistat/FTC/TAF', category: 'Antivirals', code: 'YW-EVG_COMB',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EVG_CO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Boosted single-tablet HIV regimen.',
    uses: [
      { icon: '💊', title: 'Single-Tablet', sub: 'Comprehensive HIV STR.' },
      { icon: '🛡️', title: 'Boosted', sub: 'Cobicistat boosts elvitegravir.' },
      { icon: '🎯', title: 'Once Daily', sub: 'Single daily dose.' }
    ],
    specs: [
      { size: '30 tabs', price: '$372' }
    ],
  },
  dolutegravir: {
    emoji: '💊', name: 'Dolutegravir', category: 'Antivirals', code: 'YW-DOLUTEGR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DOLUTE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'INSTI — high barrier to resistance, used in many HIV regimens.',
    uses: [
      { icon: '🛡️', title: 'INSTI', sub: 'Strong integrase inhibitor.' },
      { icon: '💊', title: 'Once Daily', sub: 'Standalone or combo.' },
      { icon: '🎯', title: 'High Barrier', sub: 'Resistance rarely emerges.' }
    ],
    specs: [
      { size: '30×50mg', price: '$186' }
    ],
  },
  raltegravir: {
    emoji: '💊', name: 'Raltegravir', category: 'Antivirals', code: 'YW-RALTEGRA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RALTEG-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'First INSTI to market — for HIV treatment-experienced patients.',
    uses: [
      { icon: '🛡️', title: 'First INSTI', sub: 'Reference integrase inhibitor.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily standard.' },
      { icon: '🩺', title: 'Experienced Patients', sub: 'Used after other regimens fail.' }
    ],
    specs: [
      { size: '60×400mg', price: '$248' }
    ],
  },
  doravirine: {
    emoji: '💊', name: 'Doravirine', category: 'Antivirals', code: 'YW-DORAVIRI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DORAVI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'NNRTI — improved profile over efavirenz/rilpivirine.',
    uses: [
      { icon: '🛡️', title: 'NNRTI', sub: 'Once-daily NNRTI option.' },
      { icon: '🧠', title: 'Less CNS', sub: 'Lower CNS effects vs efavirenz.' },
      { icon: '💊', title: 'Daily Tablet', sub: 'Combined into Delstrigo STR.' }
    ],
    specs: [
      { size: '30×100mg', price: '$217' }
    ],
  },
  entecavir: {
    emoji: '💊', name: 'Entecavir', category: 'Antivirals', code: 'YW-ENTECAVI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ENTECA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Guanosine analogue — first-line HBV treatment with high resistance barrier.',
    uses: [
      { icon: '🛡️', title: 'HBV First-Line', sub: 'Strong viral suppression.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple HBV dosing.' },
      { icon: '🎯', title: 'Low Resistance', sub: 'High barrier to resistance development.' }
    ],
    specs: [
      { size: '28×0.5mg', price: '$46' }
    ],
  },
  tenofovir_dis: {
    emoji: '💊', name: 'Tenofovir Disoproxil', category: 'Antivirals', code: 'YW-TENOFOVI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TENOFO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'NRTI used in HIV and HBV — older formulation.',
    uses: [
      { icon: '🛡️', title: 'HBV & HIV', sub: 'Dual indication.' },
      { icon: '💰', title: 'Generic', sub: 'Inexpensive workhorse.' },
      { icon: '🩺', title: 'Long-Term', sub: 'Decades of safety data.' }
    ],
    specs: [
      { size: '30×300mg', price: '$31' }
    ],
  },
  adefovir: {
    emoji: '💊', name: 'Adefovir Dipivoxil', category: 'Antivirals', code: 'YW-ADEFOVIR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ADEFOV-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Older HBV antiviral — second-line therapy.',
    uses: [
      { icon: '🛡️', title: 'HBV Treatment', sub: 'Alternative when first-line fails.' },
      { icon: '💊', title: 'Daily', sub: 'Once-daily dosing.' },
      { icon: '🩺', title: 'Resistant HBV', sub: 'Used in lamivudine-resistant cases.' }
    ],
    specs: [
      { size: '30×10mg', price: '$31' }
    ],
  },
  telbivudine: {
    emoji: '💊', name: 'Telbivudine', category: 'Antivirals', code: 'YW-TELBIVUD',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TELBIV-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'L-nucleoside analogue — alternative for chronic HBV.',
    uses: [
      { icon: '🛡️', title: 'HBV', sub: 'Alternative HBV agent.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple dosing.' },
      { icon: '🩺', title: 'Pregnancy Category B', sub: 'Used in pregnancy HBV research.' }
    ],
    specs: [
      { size: '28×600mg', price: '$62' }
    ],
  },
  lamivudine_hbv: {
    emoji: '💊', name: 'Lamivudine (HBV)', category: 'Antivirals', code: 'YW-LAMIVUDI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LAMIVU-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'NRTI — older HBV monotherapy. Now mostly combination use due to resistance.',
    uses: [
      { icon: '🛡️', title: 'HBV', sub: 'Older HBV therapy.' },
      { icon: '💰', title: 'Cheap', sub: 'Inexpensive generic.' },
      { icon: '🩺', title: 'Combo Use', sub: 'Now typically with TDF.' }
    ],
    specs: [
      { size: '28×100mg', price: '$31' }
    ],
  },
  sof_velpat: {
    emoji: '💊', name: 'Sofosbuvir/Velpatasvir', category: 'Antivirals', code: 'YW-SOF_VELP',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SOF_VE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Pan-genotypic HCV cure regimen — 12-week course.',
    uses: [
      { icon: '🩺', title: 'HCV Cure', sub: '95%+ SVR rates.' },
      { icon: '🛡️', title: 'All Genotypes', sub: 'Pan-genotypic activity.' },
      { icon: '💊', title: '12-Week Course', sub: 'Daily for 12 weeks = cure.' }
    ],
    specs: [
      { size: '28×400/100mg', price: '$434' }
    ],
  },
  glec_pibren: {
    emoji: '💊', name: 'Glecaprevir/Pibrentasvir', category: 'Antivirals', code: 'YW-GLEC_PIB',
    purity: 'Pharmacopoeia Grade', batch: 'YW-GLEC_P-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '8-week pan-genotypic HCV cure regimen.',
    uses: [
      { icon: '💊', title: '8-Week Cure', sub: 'Shortest HCV cure regimen.' },
      { icon: '🩺', title: 'HCV Cure', sub: '95%+ SVR.' },
      { icon: '🛡️', title: 'All Genotypes', sub: 'Pan-genotypic.' }
    ],
    specs: [
      { size: '84 tabs (course)', price: '$496' }
    ],
  },
  led_sofos: {
    emoji: '💊', name: 'Ledipasvir/Sofosbuvir', category: 'Antivirals', code: 'YW-LED_SOFO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LED_SO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'HCV genotype 1 cure — Harvoni regimen.',
    uses: [
      { icon: '🩺', title: 'HCV GT1', sub: 'Specifically for genotype 1.' },
      { icon: '🛡️', title: 'SVR12 >95%', sub: 'High cure rate.' },
      { icon: '💊', title: '12 Weeks', sub: 'Standard 12-week course.' }
    ],
    specs: [
      { size: '28×90/400mg', price: '$434' }
    ],
  },
  daclatasvir: {
    emoji: '💊', name: 'Daclatasvir', category: 'Antivirals', code: 'YW-DACLATAS',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DACLAT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'NS5A inhibitor — used in HCV combination regimens.',
    uses: [
      { icon: '🩺', title: 'HCV Combo', sub: 'Combined with sofosbuvir.' },
      { icon: '🛡️', title: 'Pan-Genotypic', sub: 'Active across genotypes.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple dosing.' }
    ],
    specs: [
      { size: '28×60mg', price: '$124' }
    ],
  },
  ibuprofen: {
    emoji: '💊', name: 'Ibuprofen', category: 'Pain & Inflammation', code: 'YW-IBUPROFE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-IBUPRO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Classic NSAID — gold standard OTC anti-inflammatory and analgesic.',
    uses: [
      { icon: '🔥', title: 'Anti-Inflammatory', sub: 'COX-1/COX-2 inhibition for pain and inflammation.' },
      { icon: '🤕', title: 'Pain & Fever', sub: 'Standard for headache, dental, period pain, fever.' },
      { icon: '💰', title: 'Cheapest', sub: 'Generic standard.' }
    ],
    specs: [
      { size: '30×400mg', price: '$31' }
    ],
  },
  naproxen: {
    emoji: '💊', name: 'Naproxen', category: 'Pain & Inflammation', code: 'YW-NAPROXEN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NAPROX-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Long-acting NSAID — twice-daily dosing with extended duration.',
    uses: [
      { icon: '🕐', title: 'Long Duration', sub: '12-hour analgesia.' },
      { icon: '🤕', title: 'Pain Relief', sub: 'Strong for menstrual and joint pain.' },
      { icon: '🦴', title: 'Less Frequent Dosing', sub: 'BD vs TID/QID for ibuprofen.' }
    ],
    specs: [
      { size: '28×500mg', price: '$31' }
    ],
  },
  diclofenac: {
    emoji: '💊', name: 'Diclofenac Sodium', category: 'Pain & Inflammation', code: 'YW-DICLOFEN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DICLOF-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Potent NSAID — strong analgesia for musculoskeletal pain.',
    uses: [
      { icon: '🦴', title: 'Musculoskeletal', sub: 'Joint, back, post-surgical pain.' },
      { icon: '🩸', title: 'Strong NSAID', sub: 'Powerful anti-inflammatory.' },
      { icon: '💊', title: 'TID', sub: 'Three-times-daily.' }
    ],
    specs: [
      { size: '20×50mg', price: '$31' }
    ],
  },
  loxoprofen: {
    emoji: '💊', name: 'Loxoprofen', category: 'Pain & Inflammation', code: 'YW-LOXOPROF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LOXOPR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Prodrug NSAID — converted to active form in body. Less GI irritation.',
    uses: [
      { icon: '🌿', title: 'Less GI', sub: 'Prodrug design reduces stomach issues.' },
      { icon: '🤕', title: 'Strong Analgesic', sub: 'Effective for moderate pain.' },
      { icon: '💊', title: 'TID', sub: 'Standard NSAID dosing.' }
    ],
    specs: [
      { size: '20×600mg', price: '$31' }
    ],
  },
  lornoxicam: {
    emoji: '💊', name: 'Lornoxicam', category: 'Pain & Inflammation', code: 'YW-LORNOXIC',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LORNOX-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Oxicam NSAID — short half-life with strong analgesia.',
    uses: [
      { icon: '🤕', title: 'Strong Pain Relief', sub: 'Comparable to morphine in some research.' },
      { icon: '🩺', title: 'Post-Surgical', sub: 'Used in postop pain research.' },
      { icon: '💊', title: 'BD/TID', sub: 'Twice or three times daily.' }
    ],
    specs: [
      { size: '20×8mg', price: '$31' }
    ],
  },
  indomethacin: {
    emoji: '💊', name: 'Indomethacin', category: 'Pain & Inflammation', code: 'YW-INDOMETH',
    purity: 'Pharmacopoeia Grade', batch: 'YW-INDOME-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Potent NSAID — specifically used for gout flares and PDA closure.',
    uses: [
      { icon: '💎', title: 'Gout Flares', sub: 'Classic acute gout treatment.' },
      { icon: '👶', title: 'PDA Closure', sub: 'Used in neonatal patent ductus arteriosus.' },
      { icon: '🩺', title: 'Severe Inflammation', sub: 'When other NSAIDs aren\'t enough.' }
    ],
    specs: [
      { size: '30×25mg', price: '$46' }
    ],
  },
  piroxicam: {
    emoji: '💊', name: 'Piroxicam', category: 'Pain & Inflammation', code: 'YW-PIROXICA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PIROXI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Long-acting oxicam NSAID — once-daily anti-inflammatory.',
    uses: [
      { icon: '💊', title: 'Once Daily', sub: 'Long half-life enables QD.' },
      { icon: '🦴', title: 'Arthritis', sub: 'Used in RA and OA research.' },
      { icon: '🤕', title: 'Sustained Effect', sub: '24-hour pain control.' }
    ],
    specs: [
      { size: '20×20mg', price: '$31' }
    ],
  },
  flurbiprofen: {
    emoji: '💊', name: 'Flurbiprofen', category: 'Pain & Inflammation', code: 'YW-FLURBIPR',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FLURBI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'NSAID with strong dental pain research data.',
    uses: [
      { icon: '😬', title: 'Dental Pain', sub: 'Standard in dental research.' },
      { icon: '🤕', title: 'Pain Relief', sub: 'General analgesic.' },
      { icon: '🌿', title: 'Throat Lozenges', sub: 'Topical formulations for sore throat.' }
    ],
    specs: [
      { size: '20×100mg', price: '$46' }
    ],
  },
  etodolac: {
    emoji: '💊', name: 'Etodolac', category: 'Pain & Inflammation', code: 'YW-ETODOLAC',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ETODOL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Pyranocarboxylic NSAID with some COX-2 preference.',
    uses: [
      { icon: '🦴', title: 'Arthritis', sub: 'OA and RA research.' },
      { icon: '🌿', title: 'Less GI Effects', sub: 'Some COX-2 preference.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily dosing.' }
    ],
    specs: [
      { size: '20×300mg', price: '$31' }
    ],
  },
  sulindac: {
    emoji: '💊', name: 'Sulindac', category: 'Pain & Inflammation', code: 'YW-SULINDAC',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SULIND-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Prodrug NSAID — less renal effect than other NSAIDs.',
    uses: [
      { icon: '🩺', title: 'Renal Sparing', sub: 'Less kidney effect than ibuprofen.' },
      { icon: '🦴', title: 'Arthritis Use', sub: 'OA, RA, ankylosing spondylitis research.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily.' }
    ],
    specs: [
      { size: '30×200mg', price: '$31' }
    ],
  },
  ketoprofen: {
    emoji: '💊', name: 'Ketoprofen', category: 'Pain & Inflammation', code: 'YW-KETOPROF',
    purity: 'Pharmacopoeia Grade', batch: 'YW-KETOPR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'NSAID with strong anti-inflammatory action.',
    uses: [
      { icon: '🩺', title: 'Inflammation', sub: 'Strong anti-inflammatory.' },
      { icon: '🤕', title: 'Pain Relief', sub: 'Effective musculoskeletal pain.' },
      { icon: '💊', title: 'TID', sub: 'Three-times-daily.' }
    ],
    specs: [
      { size: '30×75mg', price: '$31' }
    ],
  },
  ketorolac: {
    emoji: '💊', name: 'Ketorolac (Oral)', category: 'Pain & Inflammation', code: 'YW-KETOROLA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-KETORO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Potent NSAID — short-term use for moderate-severe pain. Most opioid-like NSAID.',
    uses: [
      { icon: '🚨', title: 'Severe Pain', sub: 'Most morphine-like NSAID.' },
      { icon: '🩺', title: 'Short-Term Only', sub: 'Max 5 days due to side effects.' },
      { icon: '💊', title: 'Bridge Therapy', sub: 'Helps reduce opioid requirement.' }
    ],
    specs: [
      { size: '20×10mg', price: '$31' }
    ],
  },
  nimesulide: {
    emoji: '💊', name: 'Nimesulide', category: 'Pain & Inflammation', code: 'YW-NIMESULI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-NIMESU-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Selective COX-2 NSAID with some additional anti-inflammatory mechanisms.',
    uses: [
      { icon: '🎯', title: 'COX-2 Preferential', sub: 'Some COX-2 selectivity.' },
      { icon: '🤕', title: 'Pain & Inflammation', sub: 'Standard analgesic effect.' },
      { icon: '🩺', title: 'Short Course', sub: 'Hepatotoxicity concern with prolonged use.' }
    ],
    specs: [
      { size: '20×100mg', price: '$46' }
    ],
  },
  mefenamic: {
    emoji: '💊', name: 'Mefenamic Acid', category: 'Pain & Inflammation', code: 'YW-MEFENAMI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MEFENA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Fenamate NSAID — specifically used for dysmenorrhea (period pain).',
    uses: [
      { icon: '🌸', title: 'Dysmenorrhea', sub: 'Gold standard for period pain.' },
      { icon: '🤕', title: 'Mild-Moderate Pain', sub: 'General analgesic.' },
      { icon: '💊', title: 'TID', sub: 'Three-times-daily.' }
    ],
    specs: [
      { size: '20×250mg', price: '$31' }
    ],
  },
  tiaprofenic: {
    emoji: '💊', name: 'Tiaprofenic Acid', category: 'Pain & Inflammation', code: 'YW-TIAPROFE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TIAPRO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Propionic acid NSAID — alternative anti-inflammatory.',
    uses: [
      { icon: '🦴', title: 'Arthritis', sub: 'OA and RA management.' },
      { icon: '🩺', title: 'Anti-Inflammatory', sub: 'Standard NSAID effect.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily dosing.' }
    ],
    specs: [
      { size: '30×300mg', price: '$31' }
    ],
  },
  dimenhydrinate: {
    emoji: '😵', name: 'Dimenhydrinate', category: 'Pain & Inflammation', code: 'YW-DIMENHYD',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DIMENH-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Antihistamine antiemetic — motion sickness classic.',
    uses: [
      { icon: '🚗', title: 'Motion Sickness', sub: 'Standard for travel nausea.' },
      { icon: '🤢', title: 'Vertigo', sub: 'Reduces vestibular symptoms.' },
      { icon: '💤', title: 'Sedating', sub: 'Drowsiness from H1 effect.' }
    ],
    specs: [
      { size: '20×50mg', price: '$31' }
    ],
  },
  promethazine: {
    emoji: '😵', name: 'Promethazine', category: 'Pain & Inflammation', code: 'YW-PROMETHA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PROMET-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Phenothiazine antihistamine — strong antiemetic + sedative.',
    uses: [
      { icon: '🤢', title: 'Antiemetic', sub: 'Strong nausea and vomiting control.' },
      { icon: '💤', title: 'Sedating', sub: 'Sometimes used for insomnia.' },
      { icon: '🌿', title: 'Allergies', sub: 'Allergic reactions and itch.' }
    ],
    specs: [
      { size: '30×25mg', price: '$31' }
    ],
  },
  meclozine: {
    emoji: '😵', name: 'Meclozine (Meclizine)', category: 'Pain & Inflammation', code: 'YW-MECLOZIN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MECLOZ-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Long-acting antihistamine for vertigo and motion sickness.',
    uses: [
      { icon: '😵', title: 'Vertigo', sub: 'Standard for vestibular vertigo.' },
      { icon: '🚗', title: 'Motion Sickness', sub: 'Less sedating than dimenhydrinate.' },
      { icon: '💊', title: 'Daily Dosing', sub: 'Long action enables QD.' }
    ],
    specs: [
      { size: '30×25mg', price: '$31' }
    ],
  },
  diphenhydramine: {
    emoji: '😵', name: 'Diphenhydramine', category: 'Pain & Inflammation', code: 'YW-DIPHENHY',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DIPHEN-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Classic 1st-gen antihistamine — sedating allergy relief.',
    uses: [
      { icon: '🌿', title: 'Allergies', sub: 'Quick allergy relief.' },
      { icon: '💤', title: 'Sleep Aid', sub: 'OTC sleep aid use.' },
      { icon: '🤢', title: 'Antiemetic', sub: 'Pregnancy nausea research.' }
    ],
    specs: [
      { size: '20×50mg', price: '$16' }
    ],
  },
  cinnarizine: {
    emoji: '😵', name: 'Cinnarizine', category: 'Pain & Inflammation', code: 'YW-CINNARIZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CINNAR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Calcium channel blocker + antihistamine — strong vertigo therapy.',
    uses: [
      { icon: '😵', title: 'Vertigo', sub: 'Effective for vestibular disorders.' },
      { icon: '🩸', title: 'Cerebrovascular', sub: 'Cerebrovascular insufficiency research.' },
      { icon: '🚗', title: 'Motion Sickness', sub: 'Long-acting prevention.' }
    ],
    specs: [
      { size: '50×25mg', price: '$46' }
    ],
  },
  betahistine: {
    emoji: '😵', name: 'Betahistine', category: 'Pain & Inflammation', code: 'YW-BETAHIST',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BETAHI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Histamine analogue — first-line for Ménière\'s disease research.',
    uses: [
      { icon: '👂', title: 'Ménière\'s', sub: 'Reduces vertigo episodes.' },
      { icon: '🩸', title: 'Inner Ear Circulation', sub: 'Improves cochlear blood flow.' },
      { icon: '💊', title: 'TID', sub: 'Three-times-daily.' }
    ],
    specs: [
      { size: '30×6mg', price: '$46' }
    ],
  },
  desloratadine: {
    emoji: '🌿', name: 'Desloratadine', category: 'Allergy & Antihistamine', code: 'YW-DESLORAT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-DESLOR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2nd-gen antihistamine — non-sedating allergy relief.',
    uses: [
      { icon: '🌿', title: 'Allergic Rhinitis', sub: 'Standard allergy therapy.' },
      { icon: '💤', title: 'Non-Sedating', sub: 'Less drowsiness than 1st-gen.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple dosing.' }
    ],
    specs: [
      { size: '28×5mg', price: '$31' }
    ],
  },
  levocetirizine: {
    emoji: '🌿', name: 'Levocetirizine', category: 'Allergy & Antihistamine', code: 'YW-LEVOCETI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LEVOCE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Active enantiomer of cetirizine — potent non-sedating antihistamine.',
    uses: [
      { icon: '🌿', title: 'Strong Allergy Relief', sub: 'More potent than cetirizine.' },
      { icon: '💤', title: 'Minimal Drowsiness', sub: 'Less than parent cetirizine.' },
      { icon: '💊', title: 'Once Daily', sub: 'Daily dose.' }
    ],
    specs: [
      { size: '28×5mg', price: '$31' }
    ],
  },
  fexofenadine: {
    emoji: '🌿', name: 'Fexofenadine', category: 'Allergy & Antihistamine', code: 'YW-FEXOFENA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FEXOFE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-sedating antihistamine — no CNS penetration.',
    uses: [
      { icon: '🌿', title: 'Allergic Rhinitis', sub: 'Standard non-sedating allergy.' },
      { icon: '🧠', title: 'Zero Drowsiness', sub: 'No CNS penetration.' },
      { icon: '💊', title: 'Daily', sub: 'Once or twice daily.' }
    ],
    specs: [
      { size: '30×120mg', price: '$46' }
    ],
  },
  ebastine: {
    emoji: '🌿', name: 'Ebastine', category: 'Allergy & Antihistamine', code: 'YW-EBASTINE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EBASTI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '2nd-gen antihistamine — quick onset and 24-hour duration.',
    uses: [
      { icon: '🌿', title: 'Allergies', sub: 'Standard antihistamine.' },
      { icon: '⚡', title: 'Fast Onset', sub: 'Within 1 hour.' },
      { icon: '💊', title: 'Once Daily', sub: 'Long duration.' }
    ],
    specs: [
      { size: '20×10mg', price: '$31' }
    ],
  },
  bilastine: {
    emoji: '🌿', name: 'Bilastine', category: 'Allergy & Antihistamine', code: 'YW-BILASTIN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BILAST-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Newer non-sedating antihistamine with no metabolism — minimal interactions.',
    uses: [
      { icon: '🌿', title: 'Allergies', sub: 'Non-sedating allergy relief.' },
      { icon: '💊', title: 'No Metabolism', sub: 'Excreted unchanged — fewer interactions.' },
      { icon: '🚗', title: 'Driving Safe', sub: 'Doesn\'t impair driving.' }
    ],
    specs: [
      { size: '20×20mg', price: '$46' }
    ],
  },
  rupatadine: {
    emoji: '🌿', name: 'Rupatadine', category: 'Allergy & Antihistamine', code: 'YW-RUPATADI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RUPATA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Dual antihistamine + PAF antagonist — for allergy and chronic urticaria.',
    uses: [
      { icon: '🌿', title: 'Urticaria', sub: 'Chronic spontaneous urticaria.' },
      { icon: '🛡️', title: 'Dual Block', sub: 'H1 + PAF antagonism.' },
      { icon: '💊', title: 'Once Daily', sub: 'Simple dosing.' }
    ],
    specs: [
      { size: '20×10mg', price: '$46' }
    ],
  },
  mizolastine: {
    emoji: '🌿', name: 'Mizolastine', category: 'Allergy & Antihistamine', code: 'YW-MIZOLAST',
    purity: 'Pharmacopoeia Grade', batch: 'YW-MIZOLA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-sedating antihistamine with additional anti-inflammatory effects.',
    uses: [
      { icon: '🌿', title: 'Allergy', sub: 'Standard antihistamine.' },
      { icon: '🛡️', title: 'Anti-Inflammatory', sub: 'Beyond classic H1 block.' },
      { icon: '💊', title: 'Daily', sub: 'Once-daily.' }
    ],
    specs: [
      { size: '20×10mg', price: '$31' }
    ],
  },
  olopatadine: {
    emoji: '🌿', name: 'Olopatadine (Oral)', category: 'Allergy & Antihistamine', code: 'YW-OLOPATAD',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OLOPAT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Dual H1 + mast cell stabilizer — allergic rhinitis.',
    uses: [
      { icon: '🌿', title: 'Allergic Rhinitis', sub: 'Strong nasal symptom relief.' },
      { icon: '🛡️', title: 'Mast Cell', sub: 'Inhibits mast cell degranulation.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily.' }
    ],
    specs: [
      { size: '20×5mg', price: '$46' }
    ],
  },
  azelastine: {
    emoji: '🌿', name: 'Azelastine (Oral)', category: 'Allergy & Antihistamine', code: 'YW-AZELASTI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-AZELAS-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Antihistamine with mast cell stabilization. Nasal and oral forms.',
    uses: [
      { icon: '🌿', title: 'Allergic Rhinitis', sub: 'Effective for AR.' },
      { icon: '🛡️', title: 'Mast Cell', sub: 'Dual mechanism.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily.' }
    ],
    specs: [
      { size: '20×2mg', price: '$46' }
    ],
  },
  ketotifen: {
    emoji: '🌿', name: 'Ketotifen', category: 'Allergy & Antihistamine', code: 'YW-KETOTIFE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-KETOTI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Mast cell stabilizer + antihistamine — asthma and allergic conjunctivitis.',
    uses: [
      { icon: '🌬️', title: 'Asthma Prophylaxis', sub: 'Add-on for allergic asthma.' },
      { icon: '👁️', title: 'Allergic Eyes', sub: 'Eye drops for conjunctivitis.' },
      { icon: '🌿', title: 'Atopic Conditions', sub: 'Multiple atopic indications.' }
    ],
    specs: [
      { size: '30×1mg', price: '$31' }
    ],
  },
  hydroxyzine: {
    emoji: '🌿', name: 'Hydroxyzine', category: 'Allergy & Antihistamine', code: 'YW-HYDROXYZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-HYDROX-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '1st-gen antihistamine — for anxiety, allergies, and itch.',
    uses: [
      { icon: '😰', title: 'Anxiety', sub: 'Anxiolytic effect via H1 block.' },
      { icon: '🌿', title: 'Itch', sub: 'Strong antipruritic.' },
      { icon: '💤', title: 'Sedating', sub: 'Drowsiness — bedtime use.' }
    ],
    specs: [
      { size: '30×25mg', price: '$31' }
    ],
  },
  cyproheptadine: {
    emoji: '🌿', name: 'Cyproheptadine', category: 'Allergy & Antihistamine', code: 'YW-CYPROHEP',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CYPROH-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Antihistamine with antiserotonergic effects — also stimulates appetite.',
    uses: [
      { icon: '🍽️', title: 'Appetite Stimulant', sub: 'Used for weight gain research.' },
      { icon: '🌿', title: 'Allergy', sub: 'Standard antihistamine effect.' },
      { icon: '🛡️', title: 'Serotonin Syndrome', sub: 'Antidote for serotonin syndrome.' }
    ],
    specs: [
      { size: '100×4mg', price: '$31' }
    ],
  },
  chlorpheniramine: {
    emoji: '🌿', name: 'Chlorpheniramine', category: 'Allergy & Antihistamine', code: 'YW-CHLORPHE',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CHLORP-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Classic 1st-gen antihistamine — sedating allergy relief.',
    uses: [
      { icon: '🌿', title: 'Allergy', sub: 'Cheap effective allergy relief.' },
      { icon: '💤', title: 'Sedating', sub: 'Drowsiness side effect.' },
      { icon: '💰', title: 'Generic Standard', sub: 'Inexpensive workhorse.' }
    ],
    specs: [
      { size: '100×4mg', price: '$16' }
    ],
  },
  clemastine: {
    emoji: '🌿', name: 'Clemastine', category: 'Allergy & Antihistamine', code: 'YW-CLEMASTI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CLEMAS-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '1st-gen antihistamine with longer duration than older agents.',
    uses: [
      { icon: '🌿', title: 'Allergy', sub: 'Long-acting antihistamine.' },
      { icon: '💤', title: 'Some Sedation', sub: 'Less than diphenhydramine.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily.' }
    ],
    specs: [
      { size: '20×1mg', price: '$31' }
    ],
  },
  epinastine: {
    emoji: '🌿', name: 'Epinastine', category: 'Allergy & Antihistamine', code: 'YW-EPINASTI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-EPINAS-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-sedating antihistamine — common Japan/Asia market drug.',
    uses: [
      { icon: '🌿', title: 'Allergic Rhinitis', sub: 'Strong AR therapy.' },
      { icon: '💤', title: 'Minimal Drowsiness', sub: 'Non-sedating profile.' },
      { icon: '👁️', title: 'Eye Allergy', sub: 'Topical formulation available.' }
    ],
    specs: [
      { size: '20×20mg', price: '$46' }
    ],
  },
  escitalopram: {
    emoji: '🧠', name: 'Escitalopram', category: 'Mental Health', code: 'YW-ESCITALO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ESCITA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SSRI — most selective serotonin reuptake inhibitor. First-line depression and anxiety.',
    uses: [
      { icon: '😌', title: 'Depression', sub: 'First-line SSRI worldwide.' },
      { icon: '💊', title: 'Anxiety', sub: 'GAD and panic disorder research.' },
      { icon: '🎯', title: 'Cleanest SSRI', sub: 'Highest 5-HT selectivity.' }
    ],
    specs: [
      { size: '28×10mg', price: '$62' }
    ],
  },
  fluvoxamine: {
    emoji: '🧠', name: 'Fluvoxamine', category: 'Mental Health', code: 'YW-FLUVOXAM',
    purity: 'Pharmacopoeia Grade', batch: 'YW-FLUVOX-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SSRI with strongest OCD evidence.',
    uses: [
      { icon: '🔄', title: 'OCD', sub: 'First-line for obsessive-compulsive disorder.' },
      { icon: '😰', title: 'Anxiety', sub: 'Effective for social anxiety.' },
      { icon: '💊', title: 'BD', sub: 'Twice-daily dosing common.' }
    ],
    specs: [
      { size: '30×50mg', price: '$62' }
    ],
  },
  venlafaxine: {
    emoji: '🧠', name: 'Venlafaxine', category: 'Mental Health', code: 'YW-VENLAFAX',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VENLAF-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SNRI — serotonin AND norepinephrine reuptake inhibition.',
    uses: [
      { icon: '😌', title: 'Depression', sub: 'First-line SNRI.' },
      { icon: '💪', title: 'Energy Component', sub: 'NE effect drives motivation.' },
      { icon: '😰', title: 'Anxiety/Panic', sub: 'GAD, PD, SAD indications.' }
    ],
    specs: [
      { size: '28×75mg', price: '$46' }
    ],
  },
  trazodone: {
    emoji: '🧠', name: 'Trazodone', category: 'Mental Health', code: 'YW-TRAZODON',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TRAZOD-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'SARI antidepressant — popular off-label for insomnia.',
    uses: [
      { icon: '💤', title: 'Sleep', sub: 'Most-prescribed off-label insomnia drug.' },
      { icon: '😌', title: 'Depression', sub: 'Antidepressant at higher doses.' },
      { icon: '🛡️', title: 'No Dependence', sub: 'Non-habit-forming sleep aid.' }
    ],
    specs: [
      { size: '30×50mg', price: '$62' }
    ],
  },
  amitriptyline: {
    emoji: '🧠', name: 'Amitriptyline', category: 'Mental Health', code: 'YW-AMITRIPT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-AMITRI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Tricyclic antidepressant — also used for neuropathic pain and migraine prevention.',
    uses: [
      { icon: '🤕', title: 'Neuropathic Pain', sub: 'Standard for nerve pain.' },
      { icon: '🤕', title: 'Migraine Prophylaxis', sub: 'Evidence-based prevention.' },
      { icon: '💤', title: 'Insomnia', sub: 'Sleep aid at low doses.' }
    ],
    specs: [
      { size: '100×25mg', price: '$31' }
    ],
  },
  quetiapine: {
    emoji: '🧠', name: 'Quetiapine', category: 'Mental Health', code: 'YW-QUETIAPI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-QUETIA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Atypical antipsychotic — also used for sleep at low doses.',
    uses: [
      { icon: '🧠', title: 'Bipolar', sub: 'First-line in bipolar maintenance.' },
      { icon: '💤', title: 'Sleep (Low Dose)', sub: 'Off-label insomnia at 25-100mg.' },
      { icon: '😌', title: 'Adjunct Depression', sub: 'Add-on in treatment-resistant depression.' }
    ],
    specs: [
      { size: '30×200mg', price: '$62' }
    ],
  },
  olanzapine: {
    emoji: '🧠', name: 'Olanzapine', category: 'Mental Health', code: 'YW-OLANZAPI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-OLANZA-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Atypical antipsychotic — strong but metabolic side effects.',
    uses: [
      { icon: '🧠', title: 'Schizophrenia', sub: 'Strong antipsychotic.' },
      { icon: '💊', title: 'Bipolar Mania', sub: 'Acute mania treatment.' },
      { icon: '⚖️', title: 'Weight Gain', sub: 'Significant weight/metabolic effects.' }
    ],
    specs: [
      { size: '28×5mg', price: '$31' }
    ],
  },
  risperidone: {
    emoji: '🧠', name: 'Risperidone', category: 'Mental Health', code: 'YW-RISPERID',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RISPER-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Atypical antipsychotic — broad indications including autism irritability.',
    uses: [
      { icon: '🧠', title: 'Schizophrenia', sub: 'Standard atypical.' },
      { icon: '💊', title: 'Autism Irritability', sub: 'Approved for autism-related aggression.' },
      { icon: '🩺', title: 'Bipolar', sub: 'Mood stabilizer use.' }
    ],
    specs: [
      { size: '30×1mg', price: '$46' }
    ],
  },
  aripiprazole: {
    emoji: '🧠', name: 'Aripiprazole', category: 'Mental Health', code: 'YW-ARIPIPRA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ARIPIP-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'D2 partial agonist — unique mechanism with lower metabolic burden.',
    uses: [
      { icon: '🧠', title: 'Schizophrenia', sub: 'Effective without much weight gain.' },
      { icon: '😌', title: 'Depression Augment', sub: 'Add-on for treatment-resistant depression.' },
      { icon: '💊', title: 'Bipolar', sub: 'Mood stabilizer.' }
    ],
    specs: [
      { size: '30×5mg', price: '$46' }
    ],
  },
  clozapine: {
    emoji: '🧠', name: 'Clozapine', category: 'Mental Health', code: 'YW-CLOZAPIN',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CLOZAP-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Gold-standard antipsychotic for treatment-resistant schizophrenia.',
    uses: [
      { icon: '🧠', title: 'TR Schizophrenia', sub: 'Most effective antipsychotic.' },
      { icon: '🩸', title: 'Monitoring Required', sub: 'Agranulocytosis risk requires CBC.' },
      { icon: '🩺', title: 'Reserved', sub: 'When 2+ other antipsychotics have failed.' }
    ],
    specs: [
      { size: '100×25mg', price: '$37' }
    ],
  },
  paliperidone: {
    emoji: '🧠', name: 'Paliperidone', category: 'Mental Health', code: 'YW-PALIPERI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PALIPE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Active metabolite of risperidone — extended-release formulation.',
    uses: [
      { icon: '🧠', title: 'Schizophrenia', sub: 'Long-acting alternative to risperidone.' },
      { icon: '💊', title: 'Once Daily', sub: 'Steady plasma levels.' },
      { icon: '🩺', title: 'Schizoaffective', sub: 'Also approved for schizoaffective.' }
    ],
    specs: [
      { size: '28×3mg', price: '$62' }
    ],
  },
  lithium: {
    emoji: '💊', name: 'Lithium Carbonate', category: 'Mental Health', code: 'YW-LITHIUM',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LITHIU-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Classic mood stabilizer — gold standard bipolar maintenance.',
    uses: [
      { icon: '🧠', title: 'Bipolar Gold Standard', sub: 'Reduces suicide and hospitalization.' },
      { icon: '🛡️', title: 'Antisuicidal', sub: 'Unique antisuicidal property.' },
      { icon: '🩸', title: 'Narrow Window', sub: 'Requires blood-level monitoring.' }
    ],
    specs: [
      { size: '100×250mg', price: '$62' }
    ],
  },
  valproate: {
    emoji: '💊', name: 'Sodium Valproate', category: 'Mental Health', code: 'YW-VALPROAT',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VALPRO-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Mood stabilizer + antiepileptic — bipolar mania and seizure research.',
    uses: [
      { icon: '🧠', title: 'Bipolar Mania', sub: 'First-line acute mania.' },
      { icon: '⚡', title: 'Epilepsy', sub: 'Broad-spectrum antiepileptic.' },
      { icon: '🤕', title: 'Migraine Prophylaxis', sub: 'Evidence-based prevention.' }
    ],
    specs: [
      { size: '30×500mg', price: '$78' }
    ],
  },
  lamotrigine: {
    emoji: '💊', name: 'Lamotrigine', category: 'Mental Health', code: 'YW-LAMOTRIG',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LAMOTR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Mood stabilizer favored for bipolar depression. Also seizures.',
    uses: [
      { icon: '😔', title: 'Bipolar Depression', sub: 'Specifically for the depressive phase.' },
      { icon: '⚡', title: 'Focal Epilepsy', sub: 'Effective for partial seizures.' },
      { icon: '💊', title: 'Slow Titration', sub: 'Avoids SJS skin rash risk.' }
    ],
    specs: [
      { size: '30×50mg', price: '$62' }
    ],
  },
  carbamazepine: {
    emoji: '💊', name: 'Carbamazepine', category: 'Mental Health', code: 'YW-CARBAMAZ',
    purity: 'Pharmacopoeia Grade', batch: 'YW-CARBAM-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Antiepileptic + mood stabilizer + trigeminal neuralgia.',
    uses: [
      { icon: '⚡', title: 'Epilepsy', sub: 'Focal seizures.' },
      { icon: '🤕', title: 'Trigeminal Neuralgia', sub: 'First-line for TGN.' },
      { icon: '🧠', title: 'Bipolar', sub: 'Alternative mood stabilizer.' }
    ],
    specs: [
      { size: '30×200mg', price: '$62' }
    ],
  },
  tandospirone: {
    emoji: '😌', name: 'Tandospirone', category: 'Mental Health', code: 'YW-TANDOSPI',
    purity: 'Pharmacopoeia Grade', batch: 'YW-TANDOS-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '5-HT1A partial agonist — non-addictive anxiolytic.',
    uses: [
      { icon: '😰', title: 'GAD', sub: 'Generalized anxiety treatment.' },
      { icon: '🛡️', title: 'Non-Addictive', sub: 'No tolerance/dependence.' },
      { icon: '💊', title: 'Daily', sub: 'Continuous dosing for effect.' }
    ],
    specs: [
      { size: '20×10mg', price: '$31' }
    ],
  },
  buspirone: {
    emoji: '😌', name: 'Buspirone', category: 'Mental Health', code: 'YW-BUSPIRON',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BUSPIR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: '5-HT1A partial agonist — classic non-addictive anxiolytic.',
    uses: [
      { icon: '😰', title: 'Generalized Anxiety', sub: 'First-line non-benzo anxiolytic.' },
      { icon: '🛡️', title: 'No Dependence', sub: 'Doesn\'t cause tolerance.' },
      { icon: '💊', title: 'TID', sub: 'Three-times-daily dosing.' }
    ],
    specs: [
      { size: '30×5mg', price: '$78' }
    ],
  },
  zopiclone: {
    emoji: '💤', name: 'Zopiclone', category: 'Mental Health', code: 'YW-ZOPICLON',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ZOPICL-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Cyclopyrrolone Z-drug — sleep induction and maintenance.',
    uses: [
      { icon: '💤', title: 'Sleep Onset & Maintenance', sub: 'Falls asleep and stays asleep.' },
      { icon: '🛡️', title: 'Less Tolerance', sub: 'Less than benzodiazepines.' },
      { icon: '💊', title: 'Short-Term Use', sub: 'Avoid prolonged use.' }
    ],
    specs: [
      { size: '20×7.5mg', price: '$62' }
    ],
  },
  eszopiclone: {
    emoji: '💤', name: 'Eszopiclone', category: 'Mental Health', code: 'YW-ESZOPICL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ESZOPI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Active enantiomer of zopiclone — designed for longer sleep maintenance.',
    uses: [
      { icon: '💤', title: 'Sleep Maintenance', sub: 'Better sleep maintenance than zopiclone.' },
      { icon: '🛡️', title: 'Approved for Long-Term', sub: 'Only Z-drug with long-term approval.' },
      { icon: '💊', title: 'Bedtime', sub: 'Single bedtime dose.' }
    ],
    specs: [
      { size: '14×3mg', price: '$46' }
    ],
  },
  lemborexant: {
    emoji: '💤', name: 'Lemborexant', category: 'Mental Health', code: 'YW-LEMBOREX',
    purity: 'Pharmacopoeia Grade', batch: 'YW-LEMBOR-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Dual orexin receptor antagonist — newer mechanism for insomnia.',
    uses: [
      { icon: '💤', title: 'Insomnia', sub: 'Both onset and maintenance.' },
      { icon: '🧠', title: 'Orexin Block', sub: 'Different mechanism than benzo/Z-drugs.' },
      { icon: '🛡️', title: 'Lower Abuse', sub: 'Lower abuse potential than older sleep meds.' }
    ],
    specs: [
      { size: '30×5mg', price: '$124' }
    ],
  },
  suvorexant: {
    emoji: '💤', name: 'Suvorexant', category: 'Mental Health', code: 'YW-SUVOREXA',
    purity: 'Pharmacopoeia Grade', batch: 'YW-SUVORE-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'First-in-class orexin antagonist for insomnia.',
    uses: [
      { icon: '💤', title: 'Sleep Maintenance', sub: 'Strong sleep maintenance effect.' },
      { icon: '🧠', title: 'Wake System Block', sub: 'Promotes sleep by suppressing wakefulness.' },
      { icon: '🛡️', title: 'Non-GABA', sub: 'Avoids classical sedative mechanism.' }
    ],
    specs: [
      { size: '30×20mg', price: '$124' }
    ],
  },
  ramelteon: {
    emoji: '💤', name: 'Ramelteon', category: 'Mental Health', code: 'YW-RAMELTEO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-RAMELT-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Melatonin MT1/MT2 agonist — non-controlled sleep onset aid.',
    uses: [
      { icon: '💤', title: 'Sleep Onset', sub: 'Targets sleep latency.' },
      { icon: '🛡️', title: 'Non-Controlled', sub: 'Schedule-free sleep aid.' },
      { icon: '🧠', title: 'Circadian', sub: 'Works on sleep-wake cycle.' }
    ],
    specs: [
      { size: '30×8mg', price: '$93' }
    ],
  },
  pregabalin: {
    emoji: '🧠', name: 'Pregabalin', category: 'Mental Health', code: 'YW-PREGABAL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-PREGAB-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'α2δ ligand — neuropathic pain, GAD, fibromyalgia, and seizures.',
    uses: [
      { icon: '🤕', title: 'Neuropathic Pain', sub: 'Standard for diabetic, post-herpetic.' },
      { icon: '😰', title: 'GAD', sub: 'Approved anxiolytic in many countries.' },
      { icon: '🦴', title: 'Fibromyalgia', sub: 'First FDA-approved fibromyalgia drug.' }
    ],
    specs: [
      { size: '28×150mg', price: '$46' }
    ],
  },
  bupropion: {
    emoji: '🧠', name: 'Bupropion SR', category: 'Mental Health', code: 'YW-BUPROPIO',
    purity: 'Pharmacopoeia Grade', batch: 'YW-BUPROP-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'NDRI antidepressant — also for smoking cessation and weight (off-label).',
    uses: [
      { icon: '😌', title: 'Depression', sub: 'Activating antidepressant.' },
      { icon: '🚭', title: 'Smoking Cessation', sub: 'Approved for nicotine cessation.' },
      { icon: '⚖️', title: 'Weight Neutral/Loss', sub: 'Often used to counter SSRI weight gain.' }
    ],
    specs: [
      { size: '60×150mg', price: '$46' }
    ],
  },
  varenicline: {
    emoji: '🚭', name: 'Varenicline', category: 'Mental Health', code: 'YW-VARENICL',
    purity: 'Pharmacopoeia Grade', batch: 'YW-VARENI-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'α4β2 nicotinic partial agonist — most effective pharmacotherapy for smoking cessation.',
    uses: [
      { icon: '🚭', title: 'Smoking Cessation', sub: 'Highest quit rates in research.' },
      { icon: '🎯', title: 'Nicotinic PAM', sub: 'Reduces both cravings and reward.' },
      { icon: '💊', title: '12-Week Course', sub: 'Standard quit-attempt protocol.' }
    ],
    specs: [
      { size: '28×1mg', price: '$93' }
    ],
  },
  atomoxetine: {
    emoji: '🧠', name: 'Atomoxetine', category: 'Mental Health', code: 'YW-ATOMOXET',
    purity: 'Pharmacopoeia Grade', batch: 'YW-ATOMOX-2026A',
    form: 'Coated tablets',
    source: 'Sourced via licensed pharmacy partner',
    testMethod: 'Authentic supplier batch · QA verified',
    desc: 'Non-stimulant ADHD therapy — selective NE reuptake inhibitor.',
    uses: [
      { icon: '🎯', title: 'ADHD Non-Stimulant', sub: 'Alternative to methylphenidate/amphetamines.' },
      { icon: '🛡️', title: 'No Abuse Potential', sub: 'Schedule-free.' },
      { icon: '💊', title: '24-Hour Effect', sub: 'Continuous coverage.' }
    ],
    specs: [
      { size: '28×40mg', price: '$78' }
    ],
  },

};

/* ════════════════════════════════════════════════
   MODAL HTML INJECTION (injected once)
   ════════════════════════════════════════════════ */

function injectModal() {
  if (document.getElementById('productModal')) return;
  document.body.insertAdjacentHTML('beforeend', `
<div class="modal-overlay" id="productModal" onclick="handleOverlayClick(event)">
  <div class="modal-box" id="modalBox">

    <div class="modal-header">
      <div class="modal-emoji" id="mEmoji"></div>
      <div class="modal-header-text">
        <div class="modal-category-badge" id="mCategory"></div>
        <div class="modal-title" id="mName"></div>
        <div class="modal-code-badge" id="mCode"></div>
      </div>
      <button class="modal-close" onclick="closeModal()">✕</button>
    </div>

    <div class="modal-body">
      <!-- LEFT COL -->
      <div class="modal-col">

        <div class="modal-section">
          <div class="modal-section-label">Specifications &amp; Pricing (AUD)</div>
          <div class="modal-specs" id="mSpecs"></div>
        </div>

        <div class="modal-section">
          <div class="modal-section-label">Shipping &amp; Delivery</div>
          <div class="modal-shipping-item"><span class="modal-shipping-icon">🚚</span><span><strong>$89 AUD flat rate</strong> — Australia-wide, fully insured. No extra charges.</span></div>
          <div class="modal-shipping-item"><span class="modal-shipping-icon">⚡</span><span>Orders confirmed before <strong>midday AEST</strong> are dispatched same business day.</span></div>
          <div class="modal-shipping-item"><span class="modal-shipping-icon">📦</span><span>Plain, unmarked packaging — discreet return address. Metro 1–3 days, regional 3–6 days.</span></div>
        </div>

        <div class="modal-section">
          <div class="modal-section-label">Certificate of Analysis</div>
          <div class="coa-block" id="mCoa"></div>
        </div>

      </div>

      <!-- RIGHT COL -->
      <div class="modal-col">

        <div class="modal-section">
          <div class="modal-section-label">About This Compound</div>
          <p class="modal-desc" id="mDesc"></p>
        </div>

        <div class="modal-section">
          <div class="modal-section-label">Potential Uses &amp; Benefits</div>
          <div id="mUses"></div>
        </div>

      </div>
    </div>

    <div class="modal-footer">
      <button onclick="closeModal(); cart.open();" class="btn btn-primary">🛒 View Cart</button>
      <a href="contact.html" class="btn btn-ghost">✈ Order via Telegram</a>
      <button onclick="closeModal()" class="btn btn-ghost">Close</button>
    </div>

  </div>
</div>
  `);
}

/* ════════════════════════════════════════════════
   OPEN / CLOSE
   ════════════════════════════════════════════════ */

function openProduct(id) {
  const p = PRODUCTS[id];
  if (!p) return;

  injectModal();

  document.getElementById('mEmoji').textContent = p.emoji;
  document.getElementById('mCategory').textContent = p.category;
  document.getElementById('mName').textContent = p.name;
  document.getElementById('mCode').textContent = 'Product Code: ' + p.code;
  document.getElementById('mDesc').textContent = p.desc;

  // Specs
  const specsEl = document.getElementById('mSpecs');
  specsEl.innerHTML = p.specs.map((s, i) => `
    <div class="modal-spec-row">
      <span class="modal-spec-size">${s.size}</span>
      <span class="modal-spec-price">${s.price}</span>
      <button class="modal-spec-add" onclick="cart.add('${id}', ${i})">+ Add to Cart</button>
    </div>`).join('');

  // Uses
  const usesEl = document.getElementById('mUses');
  usesEl.innerHTML = p.uses.map(u => `
    <div class="use-item">
      <span class="use-icon">${u.icon}</span>
      <div class="use-text">
        <div class="use-title">${u.title}</div>
        <div class="use-sub">${u.sub}</div>
      </div>
    </div>`).join('');

  // COA
  const year = 2025;
  const coaEl = document.getElementById('mCoa');
  coaEl.innerHTML = `
    <div class="coa-row"><span class="coa-key">Compound</span><span class="coa-val">${p.name}</span></div>
    <div class="coa-row"><span class="coa-key">${/^[\d.]+$/.test(p.purity)?'Purity':'Grade'}</span><span class="coa-val green">${/^[\d.]+$/.test(p.purity)?'≥'+p.purity+'%':p.purity}</span></div>
    <div class="coa-row"><span class="coa-key">Verification</span><span class="coa-val">${p.testMethod||'HPLC + Mass Spectrometry'}</span></div>
    <div class="coa-row"><span class="coa-key">Form</span><span class="coa-val">${p.form||'White lyophilised powder'}</span></div>
    <div class="coa-row"><span class="coa-key">Batch No.</span><span class="coa-val">${p.batch}</span></div>
    <div class="coa-row"><span class="coa-key">Source</span><span class="coa-val">${p.source||'Independent 3rd-Party Lab'}</span></div>
    ${p.coaUrl
      ? `<a href="${p.coaUrl}" target="_blank" rel="noopener" class="coa-dl-btn coa-verified">✅ Verify Certificate of Analysis →</a>`
      : `<a href="https://t.me/fussyaussie" target="_blank" class="coa-dl-btn">📄 Request Full CoA via Telegram</a>`}
  `;

  const overlay = document.getElementById('productModal');
  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('productModal');
  if (overlay) overlay.classList.remove('open');
  document.body.style.overflow = '';
}

function handleOverlayClick(e) {
  if (e.target === document.getElementById('productModal')) closeModal();
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
