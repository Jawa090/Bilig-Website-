import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Heart, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Star, Users
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "98.2%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Heart, value: "40%", label: "Average Revenue Increase" },
  { icon: Shield, value: "15+", label: "Years Cardiology Experience" },
];

const features = [
  "Interventional cardiology CPT coding (PCI, TAVR, stenting)",
  "EP studies and ablation procedure billing",
  "ICD/pacemaker implantation and follow-up coding",
  "Cardiac catheterization (left/right/combined) billing",
  "Nuclear stress test and cardiac imaging claims",
  "Modifier 26/TC professional vs. technical component splits",
  "Global period conflict resolution on surgical cardiology",
  "Prior authorization for advanced cardiac imaging",
  "Medicare OPPS rule compliance for cardiac procedures",
  "Payer-specific LCD/NCD policy tracking",
  "Same-day E&M and diagnostic bundling edits",
  "Denial appeal with clinical documentation support",
];

const services = [
  {
    icon: FileText,
    color: "bg-red-100 text-red-600",
    title: "Interventional Cardiology Coding",
    desc: "Precise CPT coding for PCI (92920–92944), TAVR (33361–33366), EP studies (93600–93662), ablations, ICD/pacemaker implants, and cardiac catheterizations with all required modifiers. We know the difference between a diagnostic and an interventional cath — and your reimbursement depends on it.",
  },
  {
    icon: Shield,
    color: "bg-blue-100 text-blue-600",
    title: "Payer Policy & LCD Management",
    desc: "We track cardiology-specific LCD/NCD policy updates quarterly across Medicare, Medicaid, and all major commercial payers — Aetna, UHC, BCBS, Cigna. Your claims won't fall to outdated policy compliance issues because we stay ahead of every payer update.",
  },
  {
    icon: TrendingUp,
    color: "bg-green-100 text-green-600",
    title: "Denial Recovery & Appeals",
    desc: "Cardiology denials frequently involve bundling disputes, medical necessity challenges, and global period conflicts. Our appellate team prepares comprehensive clinical documentation packages — including operative reports, imaging results, and physician attestations — to systematically overturn denials.",
  },
  {
    icon: Clock,
    color: "bg-purple-100 text-purple-600",
    title: "Prior Authorization Management",
    desc: "We manage the full prior authorization workflow for nuclear cardiology, cardiac CT, cardiac MRI, TEE, and advanced echo procedures — eliminating delays that cost your practice revenue and disrupt patient care schedules.",
  },
  {
    icon: Heart,
    color: "bg-orange-100 text-orange-600",
    title: "Echocardiography & Imaging Billing",
    desc: "Complete billing for transthoracic, transesophageal, and stress echocardiography with proper modifier 26/TC splits for technical vs. professional components, and bundling management for same-day interpretation services.",
  },
  {
    icon: Users,
    color: "bg-teal-100 text-teal-600",
    title: "Hospital & Outpatient Cardiology",
    desc: "We manage billing across all care settings — physician office, hospital outpatient (HOPD), ambulatory surgery center (ASC), and inpatient — ensuring each setting's billing rules are applied correctly for maximum reimbursement.",
  },
];

const cptCodes = [
  { code: "92920", desc: "Percutaneous Coronary Intervention (PCI) — single vessel" },
  { code: "92928", desc: "PCI with stent placement — single vessel" },
  { code: "93458", desc: "Left heart catheterization with coronary angiography" },
  { code: "93306", desc: "Transthoracic echocardiography with Doppler & color flow" },
  { code: "93000", desc: "Electrocardiogram (ECG) routine with interpretation" },
  { code: "93017", desc: "Cardiovascular stress test — technical component" },
  { code: "93303", desc: "Transthoracic echocardiography — congenital cardiac anomalies" },
  { code: "33361", desc: "TAVR — transfemoral approach" },
  { code: "93650", desc: "Intracardiac catheter ablation of AV node" },
  { code: "93260", desc: "ICD programming evaluation — single/dual chamber" },
];

const challenges = [
  { problem: "Global Period Conflicts", desc: "Post-op services billed outside global period triggers recoupment", fix: "We track every surgical global period and flag post-op visits that qualify for separate billing" },
  { problem: "Modifier Misuse (26/TC/59)", desc: "Incorrect modifier application leads to denials and audits", fix: "Our coders apply modifiers with clinical documentation review on every claim" },
  { problem: "Bundling NCCI Edits", desc: "Same-day E&M + diagnostic procedure bundled incorrectly", fix: "We apply modifier 25 with documented medical necessity for all same-day service pairs" },
  { problem: "Outdated LCD Policies", desc: "Cardiology LCDs update quarterly — stale policies trigger denials", fix: "Monthly policy tracking ensures every claim is compliant with current payer requirements" },
];

const faqs = [
  {
    q: "What cardiology billing systems do you work with?",
    a: "We integrate with all major cardiology EMR and practice management systems including Epic, Cerner, Meditech, eClinicalWorks, Athenahealth, NextGen, and specialty cardiology platforms like Merge Cardiology and Philips ISCV. No software change is required.",
  },
  {
    q: "How do you handle interventional vs. diagnostic cardiology billing differently?",
    a: "Diagnostic catheterizations (93454–93461) and interventional procedures (92920–92944) have very different coding rules. We review cath lab reports, hemodynamic data, and imaging findings to assign the most accurate CPT codes. When a diagnostic cath proceeds to intervention on the same day, we apply the correct add-on code structure rather than billing separately.",
  },
  {
    q: "Can you manage global period tracking for cardiac surgeons?",
    a: "Yes. Cardiac surgery global periods (typically 90 days) require careful management to ensure legitimate post-op services outside the global are billed separately with modifier 24, while services within the global are not billed. We maintain a surgical case tracker for every provider and flag billable encounters automatically.",
  },
  {
    q: "Do you handle billing for hospital-employed cardiologists?",
    a: "Yes. We manage billing for both private practice and hospital-employed cardiologist models. For employed physicians, we coordinate with hospital billing departments to ensure proper professional fee (26 modifier) billing is captured separately from facility fees.",
  },
  {
    q: "How quickly can you recover denied cardiology claims?",
    a: "Our average denial-to-resolution cycle is 14–21 days for standard cardiology denials. For complex bundling disputes or medical necessity appeals, we target 30–45 days. We track all appeals in our denial management dashboard and provide monthly recovery reporting.",
  },
  {
    q: "What is your experience with Medicare Advantage cardiology billing?",
    a: "Medicare Advantage plans have their own prior authorization, step therapy, and coverage determination rules that differ from traditional Medicare. We maintain payer-specific knowledge bases for all major MA plans and apply the correct requirements for each patient's coverage.",
  },
];

const Cardiology = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const origin = typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com";
  const canonical = `${origin}/specialities/cardiology/`;
  const title = "Cardiology Medical Billing Services | CPT Coding Specialists | Optimum Solution";
  const description = "Expert cardiology billing services for interventional cardiologists, electrophysiologists, and cardiovascular practices. PCI, TAVR, EP study, cath lab, and echocardiography billing with 98.2% first-pass rate. Prior auth, denial appeals, and LCD compliance.";
  const keywords = "cardiology medical billing, interventional cardiology billing, cardiac catheterization billing, CPT coding cardiology, echocardiography billing, EP study billing, TAVR billing, cardiology denial management, prior authorization cardiology";
  const image = `${origin}/1.png`;

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      {/* HERO */}
      <section className="bg-gradient-hero py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl mx-auto">
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-white/20 mb-6">
              <Heart size={14} /> Cardiology Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Cardiology Medical Billing Services Built for <span className="text-secondary">Maximum Revenue</span>
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Specialized billing for cardiologists, interventional cardiologists, electrophysiologists, and cardiovascular practices. We navigate the complex CPT codes, global period rules, and payer policies that make cardiology billing one of the most challenging — and highest-value — specialties in medicine.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Cardiology Billing Audit <ArrowRight size={18} />
              </Link>
              <a href="tel:7373076234" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">
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

      {/* STATS */}
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

      {/* MAIN CONTENT */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?auto=format&fit=crop&q=80&w=1200"
                  alt="Cardiology billing specialist coding cardiac catheterization and interventional cardiology procedures"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center"><Heart size={22} className="text-red-600" /></div>
                  <div><div className="font-bold text-dark text-lg">40% Revenue Boost</div><div className="text-slate-500 text-xs">Average cardiology practice gain</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold text-sm mb-6"><Heart size={16} /> Cardiology Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Why Cardiology Billing Requires a <span className="text-primary">Specialist</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Cardiology is one of the most complex and highest-reimbursement specialties in medicine — and correspondingly one of the most heavily audited. A single miscoded cardiac catheterization or missed global period rule can trigger thousands of dollars in recoupment from CMS or commercial payers.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our cardiology billing team is trained exclusively on cardiovascular procedures. They know when to apply modifier 26 for professional components, how to bill the technical component of diagnostic imaging, how to navigate Medicare's OPPS rules for outpatient cardiology, and how to structure appeals for bundled procedure denials that payers routinely reject incorrectly.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((f, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5"><Check size={13} className="text-secondary" /></div>
                    <span className="text-slate-700 font-medium text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:-translate-y-0.5">
                Start Maximizing Cardiology Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">What We Handle</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Cardiology Billing Services We Provide</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">End-to-end cardiology revenue cycle management — from coding through collections.</p>
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

      {/* CPT CODES TABLE */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">Code Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Key Cardiology CPT Codes We Master</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our coders are proficient in the full range of cardiovascular CPT codes with payer-specific billing rules for each.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead><tr className="bg-primary text-white"><th className="text-left px-6 py-4 font-semibold">CPT Code</th><th className="text-left px-6 py-4 font-semibold">Procedure Description</th></tr></thead>
              <tbody>
                {cptCodes.map((c, i) => (
                  <motion.tr key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-primary/5 transition-colors`}>
                    <td className="px-6 py-4 font-mono text-primary font-bold">{c.code}</td>
                    <td className="px-6 py-4 text-slate-600">{c.desc}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* BILLING CHALLENGES */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-red-500 font-bold text-xs tracking-widest uppercase block mb-3">Common Problems We Fix</span>
            <h2 className="text-3xl font-bold text-dark mb-4">Top Cardiology Billing Revenue Leaks</h2>
          </div>
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

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Cardiology Billing — FAQs</h2>
            <p className="text-slate-500">Everything you need to know about our cardiology billing services.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
                <button className="w-full flex items-center justify-between p-6 text-left font-semibold text-dark hover:bg-slate-50 transition-colors" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                </button>
                {openFaq === i && <motion.div initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-4">{faq.a}</motion.div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to Maximize Your <span className="text-secondary">Cardiology Revenue?</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free billing audit and discover where your cardiovascular practice is leaving money on the table — from missed modifier opportunities to unworked denial appeals.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Cardiology Audit <ArrowRight size={18} />
              </Link>
              <Link to="/specialities" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">
                View All Specialties
              </Link>
            </div>
            <p className="text-white/50 text-sm mt-8">No contracts • No setup fees • Percentage-based pricing</p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Cardiology;
