import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Brain, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Activity
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "97.8%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Brain, value: "35%", label: "Average Revenue Increase" },
  { icon: Shield, value: "12+", label: "Years Neurology Experience" },
];

const features = [
  "EEG/EMG billing with modifier 26/TC splits",
  "Nerve conduction study (NCS) CPT coding",
  "IV infusion unit counting and billing (96365–96368)",
  "Botulinum toxin (J0585/J0586) billing",
  "Time-based E&M level optimization",
  "Neurodiagnostic testing bundling management",
  "Prior authorization for neuroimaging (MRI/PET)",
  "Polysomnography and sleep study billing",
  "Lumbar puncture and procedure coding",
  "Evoked potential study billing",
  "Specialty pharmaceutical J-code selection",
  "Neurology-specific LCD/NCD compliance",
];

const services = [
  {
    icon: FileText, color: "bg-indigo-100 text-indigo-600",
    title: "Neurodiagnostic Testing Coding",
    desc: "Accurate CPT coding for EEG (95812–95827), EMG (95860–95866), nerve conduction studies (95907–95913), evoked potentials (95925–95940), and sleep studies (95800–95811) with proper professional/technical component splits. Many neurology practices lose revenue by billing the wrong component or not billing the interpretation separately.",
  },
  {
    icon: Activity, color: "bg-red-100 text-red-600",
    title: "Infusion & Injection Billing",
    desc: "Neurology infusion billing is among the most miscoded areas in medicine. We correctly count IV infusion units (96365 initial, 96366 additional hour), distinguish concurrent from sequential infusions, and apply hydration codes (96360/96361). Botulinum toxin (J0585/J0586) billing requires precise unit counting based on documented vials used.",
  },
  {
    icon: TrendingUp, color: "bg-green-100 text-green-600",
    title: "Time-Based E&M Optimization",
    desc: "Complex neurology patients with multiple conditions, medication management, and counseling components qualify for high-level E&M (99215) when the visit is 40+ minutes total time. We review documentation against time thresholds and MDM complexity to capture the highest defensible level for every complex neurology visit.",
  },
  {
    icon: Clock, color: "bg-purple-100 text-purple-600",
    title: "Prior Authorization Management",
    desc: "Neurology imaging (brain MRI, spine MRI, PET scans) and specialty medications (natalizumab, ocrelizumab, erenumab for migraine prevention) require prior authorization from most commercial payers. We manage the complete auth workflow and appeal step-therapy requirements for established patients on specialty neurologic medications.",
  },
  {
    icon: Shield, color: "bg-orange-100 text-orange-600",
    title: "Specialty Pharmaceutical Billing",
    desc: "Neurologic specialty medications — MS disease-modifying therapies, migraine preventives, spasticity treatments — require correct J-code selection, units billing, and average sales price (ASP) compliance. We manage buy-and-bill programs, specialty pharmacy coordination, and prior authorization for all neurologic infusion and injectable medications.",
  },
  {
    icon: Users, color: "bg-teal-100 text-teal-600",
    title: "Bundling & NCCI Edit Management",
    desc: "Neurology has complex NCCI bundling edits — particularly for same-day EMG and NCS studies, EEG with E&M, and infusion with diagnostic procedures. We apply the correct modifier (59, XU, XS) where clinically appropriate to override erroneous bundling edits while maintaining complete compliance documentation.",
  },
];

const cptCodes = [
  { code: "95812", desc: "EEG — awake and drowsy, up to 40 minutes" },
  { code: "95860", desc: "EMG — one extremity with or without paraspinal muscles" },
  { code: "95907", desc: "Nerve conduction studies — 1–2 studies" },
  { code: "95913", desc: "Nerve conduction studies — 13+ studies" },
  { code: "96365", desc: "IV infusion therapy — initial up to 1 hour" },
  { code: "96366", desc: "IV infusion — each additional hour" },
  { code: "95800", desc: "Sleep study — unattended, minimum 4 channels" },
  { code: "95810", desc: "Polysomnography — sleep staging with 4+ additional parameters" },
  { code: "J0585", desc: "Botulinum toxin type A (onabotulinumtoxinA) — per unit" },
  { code: "99215", desc: "Office visit — high complexity MDM or 40+ min total time" },
];

const challenges = [
  { problem: "Infusion Unit Counting Errors", desc: "Over- or under-counting infusion hours = incorrect billing and audit exposure", fix: "Time-documented infusion log review ensures unit count exactly matches clinical documentation before billing" },
  { problem: "EEG/EMG Component Errors", desc: "Technical component billed by physician instead of professional component only", fix: "Provider-facility arrangement review determines correct 26 vs. TC vs. global billing for every test setting" },
  { problem: "Neurodiagnostic Bundling Denials", desc: "Same-day EMG + NCS bundled incorrectly — legitimate services denied", fix: "NCCI edit review with modifier 59/XU applied where clinically appropriate and documented" },
  { problem: "Botox Unit Miscounting", desc: "Botulinum toxin J-code billed in incorrect units vs. vials used", fix: "Injection documentation review confirms vial count and units administered match J-code billing" },
];

const faqs = [
  {
    q: "How should nerve conduction studies and EMG be billed together?",
    a: "Nerve conduction studies (NCS, 95907–95913) and needle EMG (95860–95872) are frequently performed in the same session. While NCCI edits don't necessarily bundle them, the total number of studies and muscles studied must be accurately counted. NCS codes are selected by the number of individual studies performed. EMG codes are selected by the number of extremities examined. The documented findings must support the number and type of studies billed.",
  },
  {
    q: "What are the most common infusion billing errors in neurology?",
    a: "The most common errors include: (1) not billing initial vs. additional hour codes correctly — 96365 for first hour, 96366 for each additional 30 minutes meeting threshold; (2) billing concurrent infusions as sequential or vice versa; (3) not separating medication push from infusion; (4) incorrect unit counting for botulinum toxin. Our billers review infusion nursing notes and physician documentation together before every infusion claim.",
  },
  {
    q: "Can you handle billing for neurologists who do hospital rounds?",
    a: "Yes. Many neurologists provide consultations, subsequent hospital visits, and critical care in addition to outpatient services. We manage inpatient neurology billing including initial hospital care (99221–99223), subsequent visits (99231–99233), critical care (99291–99292), and neurology consultation codes where applicable under payer rules.",
  },
  {
    q: "How do you manage prior authorization for multiple sclerosis medications?",
    a: "MS disease-modifying therapies (interferons, natalizumab, ocrelizumab, etc.) require prior authorization that often includes step therapy requirements (trying less expensive agents first), MRI evidence of disease activity, JC virus antibody testing for natalizumab, and periodic reauthorization. We manage the complete prior auth workflow, track reauthorization timelines, and file step-therapy exception appeals when clinically appropriate.",
  },
  {
    q: "Do you have experience with epilepsy monitoring unit (EMU) billing?",
    a: "Yes. Extended video EEG monitoring in inpatient EMUs (95951, 95953, 95956) has specific daily unit billing rules. We manage the technical and professional component split for EMU recordings, long-term ambulatory EEG (95953), and physician review/interpretation billing for extended monitoring periods.",
  },
];

const Neurology = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Neurology Medical Billing Services | EEG, EMG & Infusion Specialists | Optimum Billing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Expert neurology billing — EEG/EMG coding, infusion billing, nerve conduction studies, botulinum toxin billing, and neuroimaging prior auth. 97.8% first-pass rate for neurology practices.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "neurology billing, EEG billing, EMG billing, nerve conduction study billing, neurology infusion billing, botox billing neurology, neuroimaging billing, neurology medical billing company");
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
              <Brain size={14} /> Neurology Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Neurology Billing Services Built for <span className="text-secondary">Complex Precision</span>
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Expert billing for neurologists, neurosurgeons, and neurodiagnostic labs. We master infusion unit counting, EEG/EMG component billing, nerve conduction study coding, and specialty pharmaceutical claims — preventing the errors that cost neurology practices thousands per month.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Neurology Billing Audit <ArrowRight size={18} />
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
                <img src="https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=1200"
                  alt="Neurology billing specialist coding EEG, EMG and infusion services for neurology practice"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center"><Brain size={22} className="text-indigo-600" /></div>
                  <div><div className="font-bold text-dark text-lg">+35% Revenue</div><div className="text-slate-500 text-xs">Average practice revenue increase</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-6"><Brain size={16} /> Neurology Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Why Neurology Billing <span className="text-primary">Demands Expertise</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Neurology billing carries unique and high-stakes complexity — from time-based infusion unit counting to split-billing neurodiagnostic tests between professional and technical components. Infusion miscounts and component billing errors happen on every claim when generalist billers handle neurology — and every error costs real revenue.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our neurology billing specialists understand the difference between 96365 and 96366, when modifier 59 is appropriate for bundled nerve conduction studies, and how to document medical necessity for payer-specific imaging prior authorization policies. We manage the complete revenue cycle — from charge capture to denial appeal.
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
                Maximize Neurology Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Neurology Billing Services We Provide</h2></div>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Key Neurology Billing Codes</h2></div>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Neurology Billing Revenue Leaks — Solved</h2></div>
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
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Neurology Billing — FAQs</h2></div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Optimize Your <span className="text-secondary">Neurology Practice Revenue</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Start with a free billing audit to uncover missed charges and coding errors in your neurology claims.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Neurology Audit <ArrowRight size={18} />
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

export default Neurology;
