import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Users, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Heart, Zap
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "98.4%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Users, value: "34%", label: "Average Revenue Increase" },
  { icon: Shield, value: "14+", label: "Years Family Med Experience" },
];

const features = [
  "AWV (G0438/G0439) and IPPE (G0402) billing",
  "Chronic Care Management (CPT 99490/99491/99487)",
  "Transitional Care Management (99495/99496)",
  "Advance Care Planning (99497/99498) with time docs",
  "E&M leveling by MDM or total time (99202–99215)",
  "Preventive + problem-focused visit split with modifier 25",
  "Behavioral counseling add-ons (smoking, obesity, depression)",
  "HCC risk-adjustment coding for value-based contracts",
  "Telehealth visit billing and audio-only compliance",
  "Vaccine administration coding (90460/90471)",
  "Prolonged services add-on billing (99417)",
  "Annual deductible and eligibility verification",
];

const services = [
  {
    icon: FileText, color: "bg-blue-100 text-blue-600",
    title: "Annual Wellness Visit Billing",
    desc: "Accurate coding for G0438 (initial AWV), G0439 (subsequent AWV), and G0402 (IPPE) — capturing all Medicare preventive visit opportunities. Most family medicine practices miss 20–30% of eligible AWV patients. We identify every qualifying patient and ensure the visit documentation meets Medicare's specific AWV requirements.",
  },
  {
    icon: Heart, color: "bg-red-100 text-red-600",
    title: "Chronic Care Management Programs",
    desc: "We manage CPT 99490, 99491, 99487, and 99489 billing with proper monthly time documentation (20+ min/month), patient consent tracking, care plan requirements, and comprehensive vs. complex CCM billing. A 2,000-patient panel with 30% CCM enrollment represents $150,000+ in annual additional revenue.",
  },
  {
    icon: TrendingUp, color: "bg-green-100 text-green-600",
    title: "Transitional Care Management",
    desc: "Complete TCM billing with accurate 7-day vs. 14-day discharge window tracking, required patient contact documentation within 2 business days, and face-to-face visit compliance. TCM codes reimburse 50–75% higher than a standard established patient E&M for the same visit.",
  },
  {
    icon: Clock, color: "bg-purple-100 text-purple-600",
    title: "Behavioral Counseling Add-Ons",
    desc: "We capture separately billable behavioral counseling services that most primary care practices never bill: smoking cessation (G0436/G0437), intensive behavioral therapy for obesity (G0447), depression screening (G0444), and alcohol misuse counseling (G0443). These add-ons can generate $30–80 per visit.",
  },
  {
    icon: Shield, color: "bg-orange-100 text-orange-600",
    title: "E&M Level Optimization",
    desc: "We review documentation against the 2021+ AMA E&M guidelines to assign the highest defensible level based on either Medical Decision Making (MDM) complexity or total physician time. Most family medicine practices underlevel by 1–2 levels due to uncertainty about the updated guidelines.",
  },
  {
    icon: Users, color: "bg-teal-100 text-teal-600",
    title: "Preventive + Problem Visit Billing",
    desc: "When a patient presents for an AWV or preventive visit but also has a new or worsening problem addressed, we correctly split the encounter into a preventive code and a problem-focused E&M with modifier 25 — capturing both service components rather than billing just one.",
  },
];

const cptCodes = [
  { code: "G0438", desc: "Initial Annual Wellness Visit (AWV) — Medicare preventive benefit" },
  { code: "G0439", desc: "Subsequent Annual Wellness Visit — yearly Medicare benefit" },
  { code: "99213–99215", desc: "Office/outpatient E&M — established patient (various complexity)" },
  { code: "99490", desc: "Chronic Care Management — first 20 minutes/month" },
  { code: "99491", desc: "CCM — physician/QHP 30 minutes/month" },
  { code: "99495", desc: "Transitional Care Management — moderate complexity, 14-day" },
  { code: "99496", desc: "TCM — high complexity, 7-day contact window" },
  { code: "99497", desc: "Advance Care Planning — first 30 minutes" },
  { code: "G0447", desc: "Behavioral counseling — obesity (IBT), 15 min" },
  { code: "G0444", desc: "Annual depression screening — Medicare benefit" },
];

const challenges = [
  { problem: "Missed AWV Opportunities", desc: "Eligible Medicare patients seen without billing AWV — $200+ per visit left uncollected", fix: "We flag every eligible AWV patient and track yearly visit dates to capture every Medicare preventive opportunity" },
  { problem: "CCM Billing Compliance Gaps", desc: "CCM billed without proper consent documentation or monthly time logs = audit risk", fix: "We maintain CCM consent tracking and monthly time documentation reviews before billing" },
  { problem: "E&M Under-leveling", desc: "Physicians documenting 99213 when 99214 or 99215 is clinically supported", fix: "Monthly documentation audits identify under-leveled visits with education for sustainable improvement" },
  { problem: "Behavioral Add-On Omissions", desc: "Counseling codes G0436, G0444, G0447 never billed despite services being provided", fix: "We embed counseling service identification into the charge capture workflow" },
];

const faqs = [
  {
    q: "How much additional revenue can CCM billing add to our practice?",
    a: "For a typical family medicine practice with 2,000+ Medicare patients, enrolling 25–30% in CCM generates $75,000–$150,000+ in additional annual revenue. CPT 99490 reimburses approximately $62/month per enrolled patient, and complex CCM (99487) reimburses $130+/month. Most practices have the patient population to qualify — they simply aren't billing for it.",
  },
  {
    q: "What documentation is required to bill AWV codes?",
    a: "Medicare's AWV requires a health risk assessment, medical/family/social history, list of current providers and medications, height/weight/BMI measurement, blood pressure, cognitive assessment, depression screening, functional ability review, and a 5–10 year written screening schedule. Our team reviews AWV documentation against this checklist before billing.",
  },
  {
    q: "Can we bill both a preventive visit and an E&M on the same day?",
    a: "Yes, using modifier 25. When a patient presents for a preventive visit (AWV or annual physical) but a separate, distinctly identifiable medical problem is also addressed during the same visit, both the preventive code and a problem-focused E&M (99202–99215) can be billed. The E&M must be significant, separately documented, and beyond the preventive exam itself.",
  },
  {
    q: "Do you handle telehealth billing for family medicine?",
    a: "Yes. We manage telehealth E&M billing including proper place-of-service codes (02 for telehealth, 10 for patient's home), required modifiers (95), audio-only visit compliance, and payer-specific telehealth coverage requirements. Telehealth rules vary significantly by payer and state — we maintain current knowledge of each.",
  },
  {
    q: "How do you handle TCM billing after a hospital discharge?",
    a: "TCM billing requires contact with the patient within 2 business days of discharge (by phone, email, or face-to-face), a face-to-face visit within 7 days (99496 — high complexity) or 14 days (99495 — moderate complexity), medication reconciliation, and care coordination documentation. We track discharge notifications and create TCM alerts so no eligible TCM visit is missed.",
  },
];

const FamilyMedicine = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Family Medicine Billing Services | AWV, CCM & TCM Specialists | Optimum Billing Solutions";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Expert family medicine billing — Annual Wellness Visits, Chronic Care Management, Transitional Care Management, E&M optimization, and behavioral counseling add-ons. 98.4% first-pass rate. Unlock hidden Medicare revenue.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "family medicine billing, AWV billing, chronic care management billing, TCM billing, CCM billing, family practice billing, E&M coding, preventive visit billing, primary care billing company");
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
              <Users size={14} /> Family Medicine Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Family Medicine Billing: <span className="text-secondary">Unlock Every</span> Hidden Revenue Source
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Comprehensive billing for family medicine and primary care practices. We capture AWV, CCM, TCM, behavioral counseling add-ons, and E&M optimization — revenue streams most practices miss entirely — so your practice earns every dollar it deserves.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Family Medicine Audit <ArrowRight size={18} />
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
                <img src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200"
                  alt="Family medicine billing specialist managing AWV and CCM program billing for primary care practice"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center"><Users size={22} className="text-blue-600" /></div>
                  <div><div className="font-bold text-dark text-lg">+34% Revenue</div><div className="text-slate-500 text-xs">Average practice revenue increase</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6"><Users size={16} /> Family Medicine Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Family Medicine Has <span className="text-primary">More Billable Revenue</span> Than Most Practices Realize</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Family medicine practices see high patient volumes and manage complex chronic disease populations — but most are leaving significant Medicare reimbursement unclaimed. Missed AWV opportunities, under-utilized CCM programs, unbilled TCM codes, and incorrectly bundled preventive visits represent tens of thousands in annual lost revenue.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our family medicine billing team identifies every Medicare wellness visit opportunity, builds and manages CCM programs, tracks TCM windows after every discharge, and unbundles preventive + problem-focused visits correctly — transforming previously invisible revenue into consistent monthly income.
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
                Unlock Your Practice Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Family Medicine Billing Services We Provide</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Revenue-focused billing services for every encounter type in family medicine.</p>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Key Family Medicine Billing Codes</h2>
          </div>
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
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-dark mb-4">Top Family Medicine Billing Revenue Leaks</h2>
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

      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Family Medicine Billing — FAQs</h2>
          </div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Unlock <span className="text-secondary">Hidden Revenue</span> in Your Family Medicine Practice</h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free billing audit and discover how much your practice can earn from AWV, CCM, TCM, and behavioral counseling programs alone.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Family Medicine Audit <ArrowRight size={18} />
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

export default FamilyMedicine;
