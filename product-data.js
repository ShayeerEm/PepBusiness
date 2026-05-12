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

};

/* ════════════════════════════════════════════════
   MODAL HTML (injected once)
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
      <a href="contact.html" class="btn btn-primary">✈ Order via Telegram</a>
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
  specsEl.innerHTML = p.specs.map(s => `
    <div class="modal-spec-row">
      <span class="modal-spec-size">${s.size}</span>
      <span class="modal-spec-price">${s.price}</span>
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
    <div class="coa-row"><span class="coa-key">Purity</span><span class="coa-val green">≥${p.purity}%</span></div>
    <div class="coa-row"><span class="coa-key">Test Method</span><span class="coa-val">HPLC + Mass Spectrometry</span></div>
    <div class="coa-row"><span class="coa-key">Appearance</span><span class="coa-val">White lyophilised powder</span></div>
    <div class="coa-row"><span class="coa-key">Batch No.</span><span class="coa-val">${p.batch}</span></div>
    <div class="coa-row"><span class="coa-key">Tested By</span><span class="coa-val">Independent 3rd-Party Lab</span></div>
    <a href="https://t.me/fussyaussie" target="_blank" class="coa-dl-btn">📄 Request Full CoA via Telegram</a>
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
