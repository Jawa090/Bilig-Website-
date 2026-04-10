import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Zap, Target,
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "97.9%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Activity, value: "33%", label: "Average Revenue Increase" },
  { icon: Shield, value: "12+", label: "Years PT Billing Experience" },
];

const features = [
  "8-minute rule — correct timed unit calculation per visit",
  "Timed code sequencing (most to least units billed)",
  "KX modifier for therapy cap exceptions",
  "GP/GO/GN modifier application (PT/OT/SLP)",
  "Plan-of-care certification (30-day cycle management)",
  "Manual therapy (97140), therapeutic exercise (97110) coding",
  "Neuromuscular re-education (97112) and gait training (97116)",
  "Ultrasound (97035) and electrical stimulation (97014/97032) billing",
  "Medicare Annual Wellness Visit add-on coding",
  "Medicare Advantage therapy billing compliance",
  "Functional Outcome Reporting (FOTO, OPTIMAL)",
  "Telehealth PT visit billing across commercial payers",
];

const services = [
  {
    icon: FileText, color: "bg-teal-100 text-teal-700",
    title: "Timed & Untimed CPT Code Billing",
    desc: "Physical therapy uses a mix of timed procedure codes (billed per 15-minute unit under the 8-minute rule) and untimed codes (billed once per session regardless of time). We correctly classify each service, calculate units using the 8-minute rule, sequence timed codes from most to least units, and distinguish them from always-billable untimed codes like therapeutic activities (97530) and aquatic therapy (97113).",
  },
  {
    icon: Shield, color: "bg-blue-100 text-blue-700",
    title: "Therapy Cap & KX Modifier Management",
    desc: "Medicare sets a therapy cap threshold ($2,230 per year per provider type as of 2024). When medically necessary services exceed the threshold, we apply the KX modifier with supporting documentation showing why continued therapy is medically necessary. We track cumulative therapy spending per beneficiary and alert your team before the cap is reached to avoid claim denials.",
  },
  {
    icon: Activity, color: "bg-green-100 text-green-600",
    title: "Plan of Care Certification",
    desc: "Medicare requires a signed plan of care from the referring or treating physician/NPP before PT services can be billed. We manage the 30-day certification cycle — generating POC documents, tracking certification expiration, and ensuring no claims are submitted without a valid, signed plan of care. We also handle recertification at 90-day intervals for ongoing therapy episodes.",
  },
  {
    icon: Target, color: "bg-purple-100 text-purple-700",
    title: "Modifier GP/GO/GN Application",
    desc: "Medicare requires discipline-specific modifiers on all outpatient rehabilitation claims: GP for physical therapy, GO for occupational therapy, and GN for speech-language pathology. When multiple disciplines treat the same patient, correct modifier assignment prevents cross-discipline bundling denials. We apply these modifiers accurately on every claim.",
  },
  {
    icon: Zap, color: "bg-amber-100 text-amber-700",
    title: "Payer-Specific Policy Compliance",
    desc: "PT billing policies vary dramatically by payer — commercial insurers have unique visit limits, pre-authorization thresholds, covered modality lists, and documentation requirements. We maintain payer-specific billing profiles for all major insurers (Aetna, BCBS, Cigna, UHC, Humana) and apply the correct rules for each payer on every claim, dramatically reducing claim-specific denials.",
  },
  {
    icon: TrendingUp, color: "bg-rose-100 text-rose-600",
    title: "Denial Management & Appeals",
    desc: "Physical therapy claims face high denial rates due to medical necessity challenges, insufficient documentation, and authorization lapses. Our PT-specific denial management team analyzes each denial reason, prepares clinical appeals with supporting functional outcome data, and tracks appeal outcomes. We maintain a 78% appeal overturn rate for medically necessary PT services.",
  },
];

const cptCodes = [
  { code: "97110", desc: "Therapeutic exercises — per 15 minutes (timed)", fee: "$35–$55" },
  { code: "97112", desc: "Neuromuscular re-education — per 15 minutes (timed)", fee: "$35–$55" },
  { code: "97140", desc: "Manual therapy — per 15 minutes (timed)", fee: "$40–$60" },
  { code: "97530", desc: "Therapeutic activities — per 15 minutes (timed)", fee: "$38–$58" },
  { code: "97116", desc: "Gait training — per 15 minutes (timed)", fee: "$35–$50" },
  { code: "97035", desc: "Ultrasound therapy — per 15 minutes (timed)", fee: "$25–$40" },
  { code: "97014", desc: "Electrical stimulation — unattended (untimed)", fee: "$20–$35" },
  { code: "97032", desc: "Electrical stimulation — attended (timed)", fee: "$30–$45" },
  { code: "97010", desc: "Hot/cold pack application (untimed)", fee: "$15–$25" },
  { code: "97150", desc: "Therapeutic procedure, group (2+ patients) — per 15 min", fee: "$20–$35" },
];

const billingChallenges = [
  {
    problem: "8-minute rule miscalculation — wrong number of units billed per timed code",
    solution: "We apply the correct 8-minute rule: a timed code requires at least 8 minutes to bill one unit, and each additional unit requires 8+ more minutes (not 15). For multiple timed codes, we calculate total timed minutes, determine total billable units, and sequence the units starting with the code having the highest number of minutes.",
  },
  {
    problem: "KX modifier applied without adequate documentation of medical necessity",
    solution: "The KX modifier certifies that services beyond the therapy cap are medically necessary. We verify that the medical record contains a clear statement of why continued therapy is medically necessary, functional goals with measurable progress, and a physician or NPP attestation before applying the KX modifier to any claim.",
  },
  {
    problem: "Plan of care certification expired — claims denied retroactively",
    solution: "We implement a proactive 30-day POC tracking system that alerts your team 10 days before certification expiration. When a POC lapses, we identify the gap period, obtain retroactive physician certification where payer policy allows, and write-off or appeal claims that cannot be remedied to prevent compliance exposure.",
  },
  {
    problem: "Timed and untimed codes bundled — modifier 59 not applied where needed",
    solution: "When timed and untimed codes are billed on the same claim, payer NCCI edits can bundle them inappropriately. We identify when modifier 59 (distinct procedural service) is clinically supported and apply it correctly to ensure separate reimbursement for genuinely distinct services performed at different times during the visit.",
  },
];

const faqs = [
  {
    q: "What is the 8-minute rule and how does it affect PT billing?",
    a: "The 8-minute rule (CMS policy) governs how many units of timed physical therapy services can be billed per session. A timed code (e.g., 97110, 97112, 97140) requires at least 8 minutes of direct, one-on-one service to bill one unit. Each additional unit requires at least 8 more minutes. For multiple timed codes in one session, you calculate total timed minutes, convert to units, and assign those units to the codes performed — starting with the code that had the most time. Correctly applying this rule prevents both underbilling (losing legitimate units) and overbilling (compliance risk).",
  },
  {
    q: "When should we apply the KX modifier on Medicare PT claims?",
    a: "Apply the KX modifier when a beneficiary's cumulative therapy charges reach the Medicare therapy cap threshold ($2,230 for PT/SLP combined, $2,230 for OT in 2024) and the treating therapist determines that continued therapy is medically necessary. The KX modifier certifies that documentation in the medical record supports that the services are medically necessary and that the services are reasonable and necessary. Never apply KX without adequate supporting documentation.",
  },
  {
    q: "What is a plan of care and why is certification timing critical?",
    a: "A plan of care (POC) is a physician or NPP-signed document authorizing physical therapy services. Medicare requires a valid POC before any PT services can be billed. The POC must be reviewed and re-certified at least every 90 days for ongoing therapy. If the POC is not signed or expires, claims are subject to denial and potentially recoupment. Our system tracks POC certification dates and triggers renewal workflows before expiration.",
  },
  {
    q: "How do commercial payer PT billing rules differ from Medicare?",
    a: "Commercial payers each have their own PT billing policies that may differ substantially from Medicare. Key differences include: (1) visit limits per year (often 20–60 visits), (2) pre-authorization thresholds (often required after 10–15 visits), (3) covered modalities list (some payers don't cover certain modalities like hot packs), (4) documentation requirements (some require functional outcome measures), and (5) telehealth coverage for PT (varies widely). We maintain payer-specific billing profiles to apply the correct rules for each insurer.",
  },
  {
    q: "Can physical therapists bill for telehealth services?",
    a: "Medicare expanded telehealth coverage for PT during the COVID-19 public health emergency, and some of those waivers have been extended through 2024 and beyond through legislation. Commercial payer coverage varies — many large insurers (Aetna, BCBS, UHC, Cigna) have permanent telehealth benefits for PT. We track telehealth coverage changes by payer and apply correct POS codes (02 or 10), GT/95 modifiers, and state-specific telehealth originating-site rules to ensure compliant billing for virtual PT sessions.",
  },
  {
    q: "What is the correct way to bill therapeutic exercise vs. manual therapy on the same visit?",
    a: "Both 97110 (therapeutic exercise) and 97140 (manual therapy) are timed codes that can be billed on the same day when both services are genuinely performed. Calculate the minutes spent on each, determine units for each code, and list them separately on the claim. If a payer's NCCI edits bundle them, applying modifier 59 may be appropriate when the services are clinically distinct and separated in time during the visit. Document start/stop times for each service in the medical record to support the separate billing.",
  },
];

const PhysicalTherapy = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Physical Therapy Billing Services | 8-Minute Rule, KX Modifier & PT Billing | Optimum Billing Suite";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      (desc as HTMLMetaElement).name = "description";
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", "Expert physical therapy billing services — 8-minute rule compliance, KX modifier management, therapy cap tracking, plan-of-care certification, timed code sequencing, and payer-specific PT billing. Maximize revenue for your physical therapy practice.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) {
      kw = document.createElement("meta");
      (kw as HTMLMetaElement).name = "keywords";
      document.head.appendChild(kw);
    }
    kw.setAttribute("content", "physical therapy billing services, PT billing, 8-minute rule, KX modifier, therapy cap billing, plan of care certification, timed CPT codes, 97110 billing, 97140 manual therapy billing, PT medical coding");
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Activity className="w-4 h-4" /> Physical Therapy Billing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Physical Therapy Billing Built on 8-Minute Rule Precision
              </h1>
              <p className="text-xl text-teal-100 mb-8 leading-relaxed">
                From timed unit sequencing and KX modifier management to therapy cap tracking and plan-of-care certification — our PT billing specialists ensure every unit, every modality, and every session is billed correctly and reimbursed fully.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-teal-900 font-semibold px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors">
                  Get Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+1234567890" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                {["HIPAA Compliant", "97.9% First-Pass Rate", "Medicare Therapy Specialist", "All Payers"].map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-teal-200">
                    <CheckCircle2 className="w-4 h-4 text-green-400" /> {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center py-8 px-4 text-center">
                <Icon className="w-7 h-7 text-teal-600 mb-2" />
                <span className="text-3xl font-bold text-gray-900">{value}</span>
                <span className="text-sm text-gray-500 mt-1">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Physical therapy billing specialists managing timed CPT codes and therapy cap"
                className="rounded-2xl shadow-2xl w-full object-cover h-[480px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Activity className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">33%</div>
                    <div className="text-xs text-gray-500">Average Revenue Increase</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-teal-600 font-semibold text-sm uppercase tracking-wide">Comprehensive PT Billing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Specialized Billing for Physical Therapy Clinics &amp; Hospital-Based PT
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Physical therapy billing is technically demanding — timed code sequencing, the 8-minute rule, therapy cap management, and plan-of-care certification create constant compliance exposure. Our PT billing team navigates every rule so your revenue is protected.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Physical Therapy Billing Services</h2>
            <p className="text-gray-600 text-lg">Complete PT revenue cycle management from timed unit calculation to denial appeals.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CPT Codes Table */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Physical Therapy CPT Codes</h2>
            <p className="text-gray-600">Key PT procedure codes — correctly applied using the 8-minute rule and sequencing guidelines.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-teal-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">CPT Code</th>
                  <th className="px-6 py-4 text-left font-semibold">Description</th>
                  <th className="px-6 py-4 text-left font-semibold">Typical Fee</th>
                </tr>
              </thead>
              <tbody>
                {cptCodes.map(({ code, desc, fee }, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-teal-50/40"}>
                    <td className="px-6 py-4 font-mono font-semibold text-teal-700">{code}</td>
                    <td className="px-6 py-4 text-gray-700">{desc}</td>
                    <td className="px-6 py-4 text-gray-600">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Billing Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common PT Billing Challenges — Solved</h2>
            <p className="text-gray-600">The most frequent errors physical therapy practices face and exactly how we resolve them.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {billingChallenges.map(({ problem, solution }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-700 font-semibold text-sm">{problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-green-800 text-sm leading-relaxed">{solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Physical Therapy Billing FAQs</h2>
            <p className="text-gray-600">Answers to the most common PT billing questions from clinic owners and practice managers.</p>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-gray-900 pr-4">{q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-teal-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-700 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Recover Every Billable PT Unit?</h2>
            <p className="text-teal-100 text-lg mb-8">Get a free billing audit and discover how much revenue your clinic is losing to 8-minute rule errors, missed KX modifiers, and expired plan-of-care certifications.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-teal-800 font-semibold px-8 py-3 rounded-lg hover:bg-teal-50 transition-colors">
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" /> Speak to a Specialist
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default PhysicalTherapy;
