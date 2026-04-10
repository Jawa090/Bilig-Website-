import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Stethoscope, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Heart
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "98.5%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Stethoscope, value: "32%", label: "Average Revenue Increase" },
  { icon: Shield, value: "14+", label: "Years Internal Med Experience" },
];

const features = [
  "E&M leveling by MDM or total time (99202–99215)",
  "Annual Wellness Visit (G0438/G0439) billing",
  "Chronic Care Management (99490/99491/99487)",
  "Transitional Care Management (99495/99496)",
  "Advance Care Planning (99497/99498)",
  "Prolonged services add-on (99417) billing",
  "Same-day preventive + problem visit (modifier 25)",
  "Behavioral counseling add-on capture",
  "HCC chronic disease risk-adjustment coding",
  "Inpatient and observation visit coding",
  "Hospital discharge service coding (99238/99239)",
  "Telehealth E&M compliance by payer",
];

const services = [
  {
    icon: FileText, color: "bg-indigo-100 text-indigo-600",
    title: "E&M Level Optimization",
    desc: "We review documentation against the 2021 AMA E&M guidelines to assign the highest clinically supportable level based on Medical Decision Making (MDM) or total physician time. For complex internal medicine patients with multiple chronic conditions, most visits qualify for 99214 or 99215 — but documentation must explicitly support the MDM level or time claim.",
  },
  {
    icon: Heart, color: "bg-red-100 text-red-600",
    title: "Chronic Care Management Programs",
    desc: "We establish and manage CCM billing programs — CPT 99490 (20+ minutes/month), 99491 (physician 30+ min), 99487 (complex CCM 60+ min), 99489 (additional 30 min). With 60–70% of internal medicine patients having multiple chronic conditions, CCM programs represent $100,000–$200,000+ in annual additional revenue for the average practice.",
  },
  {
    icon: TrendingUp, color: "bg-green-100 text-green-600",
    title: "Wellness & Preventive Billing",
    desc: "Accurate coding for Medicare AWV (G0438/G0439), IPPE (G0402), and commercial preventive E&M visits (99381–99397). We ensure AWV documentation meets all CMS checklist requirements and capture every preventive service element to prevent partial payments and documentation deficiency denials.",
  },
  {
    icon: Clock, color: "bg-purple-100 text-purple-600",
    title: "Hospitalist & Inpatient Billing",
    desc: "For internists with hospital privileges, we manage inpatient initial care (99221–99223), subsequent care (99231–99233), discharge services (99238–99239), observation care, and critical care codes — each with MDM-based documentation standards and time-based alternatives.",
  },
  {
    icon: Shield, color: "bg-orange-100 text-orange-600",
    title: "Transitional Care Management",
    desc: "TCM codes reimburse 50–75% more than a standard established E&M for the same face-to-face visit. We track discharge notifications, create 2-business-day contact documentation, and bill 99495 or 99496 based on the patient's condition complexity and contact timeline.",
  },
  {
    icon: Users, color: "bg-teal-100 text-teal-600",
    title: "Chronic Disease & HCC Coding",
    desc: "For value-based contracts and Medicare Advantage capitation arrangements, accurate HCC coding is directly tied to per-member payment rates. We review documentation to ensure all chronic conditions — diabetes with complications, CKD staging, CHF classification — are coded with their correct ICD-10 specificity every visit year.",
  },
];

const cptCodes = [
  { code: "99213–99215", desc: "Office visit — established patient (various MDM levels)" },
  { code: "99202–99205", desc: "Office visit — new patient (various MDM levels)" },
  { code: "G0438 / G0439", desc: "Initial / Subsequent Annual Wellness Visit" },
  { code: "99490", desc: "Chronic Care Management — first 20 min/month" },
  { code: "99487", desc: "Complex CCM — 60+ min/month with physician involvement" },
  { code: "99495 / 99496", desc: "Transitional Care Management — moderate/high complexity" },
  { code: "99221–99223", desc: "Initial hospital care — low/moderate/high complexity" },
  { code: "99231–99233", desc: "Subsequent hospital care" },
  { code: "99238–99239", desc: "Hospital discharge services — 30 min / >30 min" },
  { code: "99417", desc: "Prolonged services add-on — each additional 15 min" },
];

const challenges = [
  { problem: "E&M Under-leveling", desc: "Documenting 99213 when 99214 or 99215 is fully supported — chronic underpayment", fix: "Documentation audits with provider education on 2021 MDM table application" },
  { problem: "CCM Not Implemented", desc: "Large chronic disease patient panels with no CCM program = $100K+ annual missed revenue", fix: "We build and manage the entire CCM program infrastructure — consent, time logs, billing" },
  { problem: "AWV Not Billed Annually", desc: "Medicare patients eligible for yearly AWV seen without billing the preventive code", fix: "Annual AWV eligibility tracker flags every patient due for their yearly preventive visit" },
  { problem: "TCM Windows Missed", desc: "Post-discharge TCM window expires — 50-75% higher reimbursement lost", fix: "Discharge notification alerts trigger TCM workflow within 2 business days of every discharge" },
];

const faqs = [
  {
    q: "How does the 2021 AMA E&M guideline change affect internal medicine billing?",
    a: "The 2021 guidelines eliminated counting bullets (history and exam elements) in favor of Medical Decision Making (MDM) complexity or total physician time as the primary level determinants. For internal medicine, this is beneficial — complex chronic disease management inherently involves high-complexity MDM, meaning most established patient visits qualify for 99214–99215 when documented correctly with accurate diagnoses, treatment options, and risk of complications.",
  },
  {
    q: "What revenue can a typical internal medicine practice add from CCM billing?",
    a: "A practice with 2,000 Medicare patients where 30% (600 patients) are enrolled in CCM at 99490 generates approximately $37,200/month or $446,400/year in additional revenue. Practices with complex patients can also bill higher-level CCM codes (99487) at $130+/month per patient. We handle all the program administration — consent forms, care plan templates, monthly time logs, and billing.",
  },
  {
    q: "Can you help with billing for inpatient and outpatient internal medicine?",
    a: "Yes. Many internists split time between office and hospital settings. We manage billing across both settings — office E&M visits, hospital initial and subsequent care, observation care, and discharge services. Each setting uses different fee schedules (facility vs. non-facility) and different documentation requirements that we apply automatically.",
  },
  {
    q: "How do you handle billing for internal medicine subspecialties like nephrology or endocrinology?",
    a: "When internal medicine subspecialists (nephrologists, endocrinologists, rheumatologists) are part of the same practice, we apply subspecialty-specific billing rules for procedure codes, infusion coding, and specialty-specific LCD policies while maintaining consistent E&M billing standards across all providers.",
  },
  {
    q: "Do you manage prior authorizations for specialist referrals and imaging?",
    a: "Yes. We manage prior authorization for advanced imaging (cardiac MRI, PET scans), specialist consultations requiring PA, and procedure referrals. We track auth numbers, expiration dates, and units-approved vs. units-used — and reauthorize proactively before coverage lapses.",
  },
];

const InternalMedicine = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Internal Medicine Billing Services | E&M, CCM & AWV Specialists | Optimum Billing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Expert internal medicine billing — E&M optimization, AWV, CCM, TCM, hospitalist billing, and HCC coding. 98.5% first-pass rate. Unlock hidden revenue in your internal medicine practice.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "internal medicine billing, E&M coding, chronic care management billing, AWV billing, TCM billing, hospitalist billing, internal medicine revenue cycle, HCC coding internal medicine");
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
              <Stethoscope size={14} /> Internal Medicine Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Internal Medicine Billing: <span className="text-secondary">Capture Every Dollar</span> Your Practice Earns
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Specialized billing for internists managing complex chronic disease populations. We optimize E&M levels, build CCM programs, manage AWV workflows, and capture TCM revenue — unlocking significant hidden revenue in practices of all sizes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Internal Medicine Audit <ArrowRight size={18} />
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
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
                  alt="Internal medicine billing specialist optimizing E&M coding and chronic care management billing"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center"><Stethoscope size={22} className="text-indigo-600" /></div>
                  <div><div className="font-bold text-dark text-lg">+32% Revenue</div><div className="text-slate-500 text-xs">Average practice revenue increase</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm mb-6"><Stethoscope size={16} /> Internal Medicine Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Capturing Every Dollar in <span className="text-primary">Internal Medicine</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Internal medicine practices manage the most complex, highest-acuity patients in outpatient medicine — but most practices are leaving significant revenue uncollected. The combination of under-coded E&M visits, missed CCM opportunities, uncaptured AWV codes, and expired TCM windows represents $100,000–$300,000+ in annual lost revenue for the average internal medicine practice.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our internal medicine billing team reviews documentation for every visit to capture the highest defensible E&M level, builds complete CCM program infrastructure, ensures AWV visits are billed annually for every eligible Medicare patient, and tracks TCM windows after every hospital discharge.
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
                Maximize Internal Medicine Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Internal Medicine Billing Services We Provide</h2>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Key Internal Medicine Billing Codes</h2></div>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Top Internal Medicine Billing Revenue Leaks</h2></div>
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
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Internal Medicine Billing — FAQs</h2></div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Maximize Revenue From Your <span className="text-secondary">Internal Medicine Practice</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free audit and see exactly how much revenue you're missing from E&M under-coding, uncaptured CCM, and missed AWV billing.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Internal Medicine Audit <ArrowRight size={18} />
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

export default InternalMedicine;
