import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Clock, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Users,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Heart, Star
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "97.5%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Users, value: "31%", label: "Average Revenue Increase" },
  { icon: Shield, value: "11+", label: "Years Geriatrics Experience" },
];

const features = [
  "SNF Part A consolidated billing compliance",
  "Part B separately billable services in SNF settings",
  "Advance Care Planning (CPT 99497/99498)",
  "Medicare Advantage plan billing nuances",
  "Annual Wellness Visit for geriatric populations",
  "HCC risk-adjustment coding for value-based contracts",
  "Hospice election and revocation benefit period rules",
  "MDS / PDPM grouping documentation support",
  "Nursing facility E&M visits (99304–99318)",
  "Domiciliary and rest home visit coding",
  "Cognitive assessment and care planning (99483)",
  "End-of-life care and palliative billing",
];

const services = [
  {
    icon: FileText, color: "bg-amber-100 text-amber-600",
    title: "SNF & Long-Term Care Billing",
    desc: "Expert billing for skilled nursing facility Part A claims and separately billable Part B services. Medicare's consolidated billing rule restricts most services during a Part A stay — but certain services remain separately billable by the physician. We know exactly which services qualify and ensure none are missed.",
  },
  {
    icon: Heart, color: "bg-red-100 text-red-600",
    title: "Advance Care Planning Billing",
    desc: "We bill CPT 99497 (first 30 minutes) and 99498 (each additional 30 minutes) for advance care planning discussions with proper time documentation, informed consent, and care plan review. ACP is consistently the most underbilled service in geriatric practice — most geriatricians never bill it at all.",
  },
  {
    icon: TrendingUp, color: "bg-green-100 text-green-600",
    title: "Medicare Advantage Navigation",
    desc: "MA plans have payer-specific prior authorization rules, benefit structures, and care setting limitations that differ significantly from traditional Medicare. We maintain active knowledge of all major MA plans and apply the correct requirements for your patients' individual coverage.",
  },
  {
    icon: Clock, color: "bg-purple-100 text-purple-600",
    title: "HCC Risk Adjustment Coding",
    desc: "Comprehensive chronic disease coding to capture all diagnosis codes eligible for Hierarchical Condition Category (HCC) risk adjustment. For geriatric practices with value-based contracts, accurate HCC coding directly determines capitation payment rates — under-coded diagnoses = under-payment.",
  },
  {
    icon: Shield, color: "bg-blue-100 text-blue-600",
    title: "Nursing Facility Visit Coding",
    desc: "Precise coding for initial nursing facility care (99304–99306), subsequent nursing facility care (99307–99310), and nursing facility discharge services (99315–99316) based on MDM complexity and documented patient status — maximizing every facility visit's reimbursement.",
  },
  {
    icon: Users, color: "bg-teal-100 text-teal-600",
    title: "Hospice & Palliative Billing",
    desc: "We navigate the complex billing rules around hospice election, concurrent care billing, and palliative medicine services — ensuring physician claims for hospice-attending and consulting physicians are processed correctly alongside hospice agency billing.",
  },
];

const cptCodes = [
  { code: "99497", desc: "Advance Care Planning — first 30 minutes face-to-face" },
  { code: "99483", desc: "Cognitive impairment assessment & care planning" },
  { code: "99304–99306", desc: "Initial nursing facility care — low/moderate/high complexity" },
  { code: "99307–99310", desc: "Subsequent nursing facility care visits" },
  { code: "99315–99316", desc: "Nursing facility discharge services" },
  { code: "G0438", desc: "Initial Annual Wellness Visit — Medicare" },
  { code: "99490", desc: "Chronic Care Management — 20+ min/month" },
  { code: "99358", desc: "Prolonged evaluation & management service" },
  { code: "99341–99345", desc: "Home visit — new patient, various complexity" },
  { code: "G0179", desc: "Physician certification for Medicare home health plan of care" },
];

const challenges = [
  { problem: "SNF Consolidated Billing Errors", desc: "Part B claims denied because services are bundled into Part A SNF stay", fix: "We maintain a current list of separately billable Part B services under SNF consolidated billing and apply them correctly" },
  { problem: "ACP Never Billed", desc: "Most geriatric practices lose $500–$1,500/month by never billing ACP codes", fix: "We embed ACP identification in the charge capture workflow and ensure time documentation supports billing" },
  { problem: "HCC Under-coding", desc: "Chronic conditions not coded annually = reduced capitation in value-based arrangements", fix: "Annual HCC coding audits identify chronic conditions documented but not coded, with provider education to correct" },
  { problem: "MA Plan Denials", desc: "Medicare Advantage prior auth requirements missed — claims denied post-service", fix: "Payer-specific MA plan authorization matrices ensure pre-service approval for every covered service" },
];

const faqs = [
  {
    q: "What is the difference between Part A and Part B SNF billing?",
    a: "During a Medicare Part A SNF stay, most services are bundled into the consolidated billing rate paid to the SNF. However, certain services remain separately billable under Part B — including physician and NPP professional services, certain dialysis services, and specific therapeutic services not covered by consolidated billing. Our geriatric billing team knows exactly which services qualify and ensures physician claims are filed correctly.",
  },
  {
    q: "How do you help geriatric practices implement an ACP billing program?",
    a: "We start with a patient population review to identify Medicare patients with advanced illness, dementia, or complex chronic conditions who are good candidates for ACP conversations. We then work with your clinical team to integrate ACP time documentation into encounter notes, establish consent documentation workflows, and build the billing process for 99497/99498 codes. Most practices can add $800–$2,000/month in ACP revenue within 60 days of implementation.",
  },
  {
    q: "Can you help with billing for geriatricians who see patients in multiple settings?",
    a: "Yes. Geriatricians often see patients across office, SNF, nursing home, assisted living, and home settings — each with distinct billing codes and rules. We manage multi-setting billing, ensuring the correct place-of-service codes, facility vs. non-facility fee schedules, and setting-specific documentation requirements are applied for every encounter.",
  },
  {
    q: "How do Medicare Advantage plans differ from traditional Medicare for geriatric services?",
    a: "Medicare Advantage plans may require prior authorization for SNF stays, home health services, DME, and specialist consultations that traditional Medicare covers without prior auth. They also may have step therapy requirements, formulary restrictions for medications, and site-of-care limitations. We maintain payer-specific authorization matrices and apply MA requirements proactively.",
  },
  {
    q: "What is cognitive impairment assessment billing (CPT 99483)?",
    a: "CPT 99483 is a comprehensive cognitive assessment and care planning code for patients with suspected or confirmed cognitive impairment. It requires a 50+ minute visit with structured cognitive testing, functional status review, medication management, safety assessment, caregiver consultation, and a written care plan. It reimburses approximately $280 and is significantly underbilled in geriatric practices.",
  },
];

const GeriatricsMedicine = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Geriatrics Medicine Billing Services | SNF, ACP & Medicare Experts | Optimum Billing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Expert geriatrics medicine billing — SNF consolidated billing, Advance Care Planning, Medicare Advantage navigation, HCC risk adjustment, and nursing facility visit coding. 97.5% first-pass rate.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "geriatrics billing, geriatric medicine billing, SNF billing, advance care planning billing, Medicare Advantage billing, nursing facility billing, HCC coding geriatrics, long-term care billing");
  }, []);

  return (
    <Layout>
      <section className="bg-gradient-hero py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-white/20 mb-6">
              <Clock size={14} /> Geriatrics Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Geriatrics Medicine Billing: <span className="text-secondary">Navigate Complexity,</span> Maximize Revenue
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Specialized billing for geriatricians, long-term care physicians, and practices serving elderly populations. We navigate SNF consolidated billing, Medicare Advantage nuances, advance care planning, and HCC risk adjustment — capturing every dollar across every care setting.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Geriatrics Billing Audit <ArrowRight size={18} />
              </Link>
              <a href="tel:7373076234" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">
                <Phone size={17} /> Call a Specialist
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {["HIPAA Compliant", "CPC Certified Coders", "All Payers", "No Setup Fees"].map(b => (
                <span key={b} className="flex items-center gap-2 text-white/70 text-sm"><CheckCircle2 size={14} className="text-secondary" />{b}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"><s.icon size={24} className="text-primary" /></div>
                <div className="text-4xl font-extrabold text-dark mb-1">{s.value}</div>
                <div className="text-slate-500 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="relative">
                <img src="https://images.unsplash.com/photo-1576765974256-b2e0f10e7b17?auto=format&fit=crop&q=80&w=1200"
                  alt="Geriatrics billing specialist managing SNF billing and advance care planning codes for elderly patients"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center"><Clock size={22} className="text-amber-600" /></div>
                  <div><div className="font-bold text-dark text-lg">+31% Revenue</div><div className="text-slate-500 text-xs">Average practice revenue increase</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 font-semibold text-sm mb-6"><Clock size={16} /> Geriatrics Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Geriatric Billing: Multiple Settings, <span className="text-primary">Complex Payer Rules</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Geriatric medicine billing spans multiple care settings — office, SNF, nursing home, assisted living, home visits — each with their own billing codes, fee schedules, and documentation requirements. Add the complexity of Medicare Advantage plans, consolidated billing rules, and HCC risk adjustment, and it becomes one of the most challenging billing environments in medicine.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our geriatrics billing team understands consolidated billing rules at SNFs, knows which Part B services can be billed separately during a Part A stay, captures advance care planning codes that most geriatricians never bill, and codes HCC diagnoses comprehensively for value-based payment maximization.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5"><Check size={13} className="text-secondary" /></div>
                    <span className="text-slate-700 font-medium text-sm">{f}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-0.5">
                Maximize Geriatric Practice Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Geriatrics Billing Services We Provide</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Comprehensive billing support across every geriatric care setting.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all group">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${s.color}`}><s.icon size={22} /></div>
                <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Key Geriatrics Billing Codes</h2></div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead><tr className="bg-primary text-white"><th className="text-left px-6 py-4 font-semibold">Code</th><th className="text-left px-6 py-4 font-semibold">Description</th></tr></thead>
              <tbody>
                {cptCodes.map((c, i) => (
                  <tr key={i} className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-primary/5 transition-colors`}>
                    <td className="px-6 py-4 font-mono text-primary font-bold">{c.code}</td>
                    <td className="px-6 py-4 text-slate-600">{c.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Top Geriatric Billing Revenue Leaks — Solved</h2></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {challenges.map((ch, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-9 h-9 rounded-xl bg-red-100 flex items-center justify-center shrink-0"><AlertCircle size={18} className="text-red-500" /></div>
                  <div><p className="font-bold text-dark">{ch.problem}</p><p className="text-red-500 text-xs mt-1">{ch.desc}</p></div>
                </div>
                <div className="flex items-start gap-3 bg-green-50 rounded-xl p-4">
                  <CheckCircle2 size={16} className="text-green-600 shrink-0 mt-0.5" />
                  <p className="text-green-800 text-sm font-medium">{ch.fix}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Geriatrics Billing — FAQs</h2></div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between p-6 text-left font-semibold text-dark hover:bg-slate-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                </button>
                {openFaq === i && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.a}</motion.div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Optimize Your <span className="text-secondary">Geriatric Practice Revenue</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free audit and discover the billing opportunities your geriatric practice is missing across SNF settings, ACP, and Medicare Advantage.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Geriatrics Audit <ArrowRight size={18} />
              </Link>
              <Link to="/specialities" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">View All Specialties</Link>
            </div>
            <p className="text-white/50 text-sm mt-8">No contracts • No setup fees • Percentage-based pricing</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default GeriatricsMedicine;
