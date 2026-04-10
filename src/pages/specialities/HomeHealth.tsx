import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Home, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Activity
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "97.8%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Home, value: "39%", label: "Average Revenue Increase" },
  { icon: Shield, value: "12+", label: "Years Home Health Experience" },
];

const features = [
  "PDGM episode billing — all 432 payment groups",
  "OASIS assessment accuracy review before submission",
  "LUPA visit count monitoring and threshold alerts",
  "RAP submission timing compliance",
  "Co-morbidity coding for episode grouping",
  "Face-to-face physician certification management",
  "Medicare Advantage plan home health billing",
  "Functional impairment level scoring accuracy",
  "Home health agency cost report preparation support",
  "Denial management and Medicare appeals",
  "CAHPS and quality measure billing coordination",
  "Therapy visit counting and NTA scoring",
];

const services = [
  {
    icon: FileText, color: "bg-blue-100 text-blue-600",
    title: "PDGM Episode Billing",
    desc: "We manage Patient-Driven Groupings Model episode billing end-to-end — from OASIS clinical grouping through final claim submission. All 432 PDGM payment groups (clinical + functional + comorbidity) are optimized by ensuring complete diagnosis capture and accurate functional scoring on every episode.",
  },
  {
    icon: Shield, color: "bg-green-100 text-green-600",
    title: "OASIS Documentation Review",
    desc: "We review OASIS assessments for accuracy and completeness before every submission. OASIS scoring directly determines your clinical group assignment and episodic payment rate — an inaccurate OASIS M-item can cost $500–$2,000 per episode. Our clinical reviewers catch errors before they become payment reductions.",
  },
  {
    icon: TrendingUp, color: "bg-orange-100 text-orange-600",
    title: "LUPA Prevention Monitoring",
    desc: "We track visit counts against LUPA thresholds for every active episode and generate alerts when a patient is at risk of falling below the minimum visit threshold. A LUPA converts a per-episode payment to per-visit payment — often reducing revenue by 40–60% for that episode. Prevention is far more valuable than correction.",
  },
  {
    icon: Clock, color: "bg-purple-100 text-purple-600",
    title: "Face-to-Face & Physician Orders",
    desc: "We manage the physician order and face-to-face certification workflow to ensure all Medicare home health claims are backed by compliant physician documentation. Missing or late face-to-face certifications remain one of the top reasons for home health claim denials and OIG audit flags.",
  },
  {
    icon: Home, color: "bg-teal-100 text-teal-600",
    title: "Co-Morbidity Capture & NTA Scoring",
    desc: "PDGM's Non-Therapy Ancillary (NTA) payment adjustment rewards agencies with high-acuity patients requiring medication management and complex clinical care. We code all qualifying comorbidities to maximize the NTA score and the resulting payment adjustment for every eligible episode.",
  },
  {
    icon: Activity, color: "bg-red-100 text-red-600",
    title: "Denial Management & RAC Appeals",
    desc: "Home health agencies face heightened scrutiny from Medicare RAC and OIG auditors. We manage denial appeals with complete medical record documentation, homebound status evidence, clinical necessity narratives, and physician attestation letters to systematically recover denied episodes.",
  },
];

const cptCodes = [
  { code: "G0179", desc: "Physician certification — home health plan of care" },
  { code: "G0180", desc: "Physician recertification — home health plan of care" },
  { code: "G0181", desc: "Physician supervision of home health care plan" },
  { code: "G0182", desc: "Physician supervision of hospice care plan" },
  { code: "99341–99345", desc: "Home visit — new patient (various complexity)" },
  { code: "99347–99350", desc: "Home visit — established patient (various complexity)" },
  { code: "OASIS SOC", desc: "Start of Care assessment — clinical/functional grouping" },
  { code: "OASIS ROC", desc: "Resumption of Care assessment after hospitalization" },
  { code: "RAP", desc: "Request for Anticipated Payment — episode initiation" },
  { code: "Final Claim", desc: "Episode final claim submission upon episode close" },
];

const challenges = [
  { problem: "OASIS Scoring Inaccuracies", desc: "Incorrect M-item responses change clinical group assignment and reduce episodic payment", fix: "Pre-submission OASIS clinical review catches scoring errors before they affect payment grouping" },
  { problem: "LUPA Breaches", desc: "Insufficient visit counts convert episode payment to per-visit — 40-60% revenue loss", fix: "Real-time LUPA threshold monitoring with clinical team alerts to schedule visits before episode close" },
  { problem: "Face-to-Face Documentation Missing", desc: "Claims denied for missing F2F certification — retroactive recoupment risk", fix: "F2F tracking workflow ensures physician certifications are obtained and documented before claim submission" },
  { problem: "Comorbidity Under-coding", desc: "Unrecognized NTA-qualifying diagnoses reduce episode payment adjustment", fix: "Systematic comorbidity review against PDGM NTA scoring rubric at every OASIS assessment" },
];

const faqs = [
  {
    q: "What is PDGM and how does it affect home health reimbursement?",
    a: "The Patient-Driven Groupings Model (PDGM) replaced the older therapy-hour-based PPS system in January 2020. Under PDGM, home health episodes are split into 30-day payment periods, each classified into one of 432 payment groups based on (1) admission source, (2) clinical grouping from OASIS diagnoses, (3) functional impairment level, and (4) comorbidity adjustment. Accurate OASIS coding and comprehensive comorbidity capture directly determine your payment rate.",
  },
  {
    q: "What is a LUPA and how do you prevent it?",
    a: "A Low Utilization Payment Adjustment (LUPA) occurs when a home health episode has fewer visits than the LUPA threshold for its payment group (typically 2–6 visits for a 30-day period). LUPAs convert your per-episode payment into a per-visit payment, typically reducing revenue by 40–60% for that period. We monitor visit counts in real-time and generate alerts when any patient is at risk of reaching LUPA threshold before the episode end.",
  },
  {
    q: "How important is the OASIS assessment for payment accuracy?",
    a: "Extremely. The OASIS M-items directly determine all three of your payment-relevant groupings — clinical group, functional impairment level, and comorbidity adjustment. A single incorrect M-item can change the clinical grouping tier, reducing payment by $300–$2,000 per episode. Our clinical reviewers check every OASIS against the patient's medical record and physician orders before submission.",
  },
  {
    q: "Do you work with Medicare Advantage home health plans?",
    a: "Yes. Medicare Advantage home health coverage varies significantly by plan — some use similar criteria to traditional Medicare, while others have stricter homebound definitions, visit limits, or prior authorization requirements. We maintain plan-specific knowledge for all major MA payers and apply their requirements proactively to prevent denials.",
  },
  {
    q: "What face-to-face documentation is required for Medicare home health?",
    a: "Medicare requires that a physician (or qualified NPP) who has a face-to-face encounter with the patient within 90 days before or 30 days after the home health start of care certify that the encounter is related to the home health diagnoses. The certification must include the date of the encounter, a narrative confirming the patient's homebound status and clinical need for skilled care, and the physician's signature. Missing or incomplete F2F documentation is a primary trigger for RAC audits.",
  },
];

const HomeHealth = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Home Health Billing Services | PDGM, OASIS & LUPA Experts | Optimum Billing Solutions";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Expert home health billing services — PDGM episode billing, OASIS review, LUPA prevention, face-to-face certification, and Medicare home health claims. 97.8% first-pass rate. Prevent revenue loss from OASIS errors.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "home health billing, PDGM billing, OASIS billing, LUPA prevention, home health agency billing, Medicare home health billing, home health revenue cycle, face-to-face certification billing");
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
              <Home size={14} /> Home Health Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Home Health Billing: <span className="text-secondary">PDGM Expertise,</span> Maximum Revenue
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Expert billing for Medicare-certified home health agencies. We master PDGM episode management, OASIS accuracy, LUPA prevention, and face-to-face compliance — ensuring your agency collects every dollar its patients' care is worth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Home Health Billing Audit <ArrowRight size={18} />
              </Link>
              <a href="tel:7373076234" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">
                <Phone size={17} /> Call a Specialist
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {["HIPAA Compliant", "PDGM Certified", "All 50 States", "No Setup Fees"].map(b => (
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
                <img src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&q=80&w=1200"
                  alt="Home health billing specialist reviewing PDGM episode billing and OASIS documentation for Medicare home health agency"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center"><Home size={22} className="text-blue-600" /></div>
                  <div><div className="font-bold text-dark text-lg">+39% Revenue</div><div className="text-slate-500 text-xs">Average agency revenue increase</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6"><Home size={16} /> Home Health Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Home Health Billing Under PDGM: <span className="text-primary">Every Detail Matters</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Medicare's Patient-Driven Groupings Model (PDGM) changed everything about how home health agencies are paid. Most agencies are still leaving significant money on the table due to OASIS inaccuracies, LUPA breaches, incomplete comorbidity coding, and missing face-to-face documentation.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our home health billing specialists understand PDGM's 432-group payment structure. We review OASIS before submission, track visit counts against thresholds, maximize NTA scoring through comprehensive comorbidity capture, and manage physician certification workflows — so your agency gets paid accurately for every episode of care.
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
                Maximize Home Health Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Home Health Billing Services We Provide</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">End-to-end revenue cycle management for Medicare-certified home health agencies under PDGM.</p>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Home Health Billing Codes & Forms</h2></div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead><tr className="bg-primary text-white"><th className="text-left px-6 py-4 font-semibold">Code / Form</th><th className="text-left px-6 py-4 font-semibold">Description</th></tr></thead>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Home Health Billing Revenue Leaks — Solved</h2></div>
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
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Home Health Billing — FAQs</h2></div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Maximize Your <span className="text-secondary">Home Health Agency Revenue</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free PDGM billing audit and find out how much your agency is losing to OASIS inaccuracies, LUPA breaches, and incomplete comorbidity coding.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free PDGM Billing Audit <ArrowRight size={18} />
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

export default HomeHealth;
