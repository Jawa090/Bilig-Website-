import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Eye, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Zap
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "98.3%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Eye, value: "36%", label: "Average Revenue Increase" },
  { icon: Shield, value: "11+", label: "Years Dermatology Experience" },
];

const features = [
  "Lesion excision coding by exact size (cm) and anatomic site",
  "Mohs surgery stage-by-stage billing (17311–17315)",
  "Medical necessity documentation vs. cosmetic exclusions",
  "Shave vs. punch vs. incisional biopsy CPT selection",
  "Photodynamic therapy (PDT) billing compliance",
  "Cryotherapy destruction coding by number of lesions",
  "E&M + same-day minor procedure billing with modifier 25",
  "Pathology send-out billing coordination",
  "Skin substitute and biologic dressing billing",
  "Laser procedure coding and cosmetic denial prevention",
  "Payer-specific dermatology LCD policy compliance",
  "Audit-ready documentation for procedure-heavy claims",
];

const services = [
  {
    icon: FileText, color: "bg-pink-100 text-pink-600",
    title: "Lesion & Excision Coding",
    desc: "We code lesion removals, excisions, and destruction procedures with precise size-based CPT selection (11400–11646) and anatomic site documentation. A difference of a few millimeters changes the code and the reimbursement — our coders review pathology reports to ensure exact size capture on every claim.",
  },
  {
    icon: Shield, color: "bg-purple-100 text-purple-600",
    title: "Mohs Surgery Billing",
    desc: "Complete stage-by-stage Mohs billing (17311–17315) with pathology tissue processing codes, same-day repair coding, and reconstruction procedure billing. We know the Mohs rules cold — including how to bill multiple Mohs stages correctly and coordinate with pathology for the tissue processing component.",
  },
  {
    icon: TrendingUp, color: "bg-green-100 text-green-600",
    title: "Medical Necessity Documentation",
    desc: "We review each dermatology procedure to ensure medical necessity is clearly documented in the record, preventing payers from reclassifying medically necessary procedures (actinic keratosis treatment, seborrheic keratosis removal) as cosmetic and denying coverage.",
  },
  {
    icon: Clock, color: "bg-blue-100 text-blue-600",
    title: "E&M + Procedure Unbundling",
    desc: "We correctly apply modifier 25 when a separately identifiable E&M service is provided on the same day as a minor dermatology procedure — recovering revenue that most practices leave on the table by incorrectly bundling the visit into the procedure.",
  },
  {
    icon: Eye, color: "bg-orange-100 text-orange-600",
    title: "Biopsy & Pathology Coordination",
    desc: "Proper billing for shave biopsies (11102–11107), punch biopsies (11104–11107), and incisional biopsies with correct anatomic site modifiers. We coordinate with your pathology lab to ensure professional interpretation fees are captured separately from the technical processing component.",
  },
  {
    icon: Users, color: "bg-teal-100 text-teal-600",
    title: "Cosmetic vs. Medical Determination",
    desc: "We maintain payer-specific coverage determination matrices for borderline procedures like lipoma removal, epidermal cysts, mole excision for cosmetic reasons vs. atypical nevi removal for medical reasons — ensuring claims are submitted with the strongest possible coverage rationale.",
  },
];

const cptCodes = [
  { code: "11400–11406", desc: "Excision benign lesion — trunk/extremities by size" },
  { code: "11600–11606", desc: "Excision malignant lesion — trunk/extremities by size" },
  { code: "17311", desc: "Mohs surgery — first stage (up to 5 tissue blocks)" },
  { code: "17313", desc: "Mohs surgery — face/scalp/neck first stage" },
  { code: "11102", desc: "Tangential (shave) biopsy — single lesion" },
  { code: "11104", desc: "Punch biopsy — single lesion" },
  { code: "17000", desc: "Destruction premalignant lesion — first lesion" },
  { code: "17110", desc: "Destruction benign lesions — up to 14 lesions" },
  { code: "96567", desc: "Photodynamic therapy — external lesions" },
  { code: "99213–99215", desc: "Office E&M visit — established patient, various complexity levels" },
];

const challenges = [
  { problem: "Size-Based Coding Errors", desc: "Wrong lesion size = wrong CPT code = underpayment or audit", fix: "We review pathology reports and operative notes to capture exact lesion dimensions before coding" },
  { problem: "Mohs Stage Miscounting", desc: "Billing incorrect number of Mohs stages triggers audits and recoupment", fix: "Stage-by-stage documentation review ensures each tissue stage is coded with the correct CPT and tissue block count" },
  { problem: "Cosmetic Denial Risk", desc: "Medically necessary procedures denied as cosmetic cost practices thousands", fix: "Pre-submission documentation review with medical necessity language protects every claim" },
  { problem: "Modifier 25 Missed Revenue", desc: "Same-day E&M not billed separately from minor procedures", fix: "We identify every encounter where modifier 25 applies and capture the additional E&M revenue" },
];

const faqs = [
  {
    q: "Do you work with all dermatology EMR systems?",
    a: "Yes. We integrate with all major dermatology practice management systems including Modernizing Medicine (EMA), Nextech, Epic, Athenahealth, AdvancedMD, Kareo, DrChrono, and others. Our team works directly in your existing system — no software migration required.",
  },
  {
    q: "How do you determine which excision CPT code to use?",
    a: "Excision CPT codes are determined by lesion size (measured in centimeters including margins), anatomic site (face/neck/ears vs. trunk/extremities vs. scalp/hands/feet), and malignant vs. benign pathology. We review the operative note and pathology report for every procedure to ensure the CPT code precisely matches the documented size and location.",
  },
  {
    q: "Can you handle billing for multi-provider dermatology groups?",
    a: "Absolutely. We manage billing for solo dermatologists, group practices, and multi-location dermatology networks. For groups with multiple provider types (dermatologist + PA + NP), we handle incident-to billing rules, split/shared visit requirements, and individual provider credentialing.",
  },
  {
    q: "How do you handle Mohs surgery reconstruction billing on the same day?",
    a: "Mohs reconstruction (repair, flap, or graft) is billed separately from the Mohs excision itself using the appropriate repair CPT codes (12001–14302 or 15000 series). We ensure the reconstruction complexity level matches the documentation and that wound size matches defect size to support the CPT selection.",
  },
  {
    q: "Do you help with prior authorizations for dermatology procedures?",
    a: "Yes. We manage prior authorizations for biologics (dupilumab, secukinumab for psoriasis), PDT, and high-cost dermatologic procedures requiring pre-certification. We track auth expiration dates, renewal timelines, and units-used tracking to prevent mid-treatment denials.",
  },
];

const Dermatology = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Dermatology Medical Billing Services | Mohs Surgery & Excision Coding | Optimum Billing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Specialized dermatology billing services — Mohs surgery, lesion excision, biopsy coding, PDT, and cryotherapy billing. Expert medical necessity documentation to prevent cosmetic denials. 98.3% first-pass rate.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "dermatology billing, Mohs surgery billing, lesion excision coding, dermatology CPT codes, biopsy billing, PDT billing, cryotherapy billing, dermatology medical billing company, cosmetic vs medical necessity billing");
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
              <Eye size={14} /> Dermatology Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Dermatology Billing Services with <span className="text-secondary">Millimeter Precision</span>
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Expert billing for dermatologists, dermatologic surgeons, and Mohs surgeons. From size-based excision coding and Mohs stage billing to PDT, cryotherapy, and biopsy claims — we capture every dollar with the clinical accuracy dermatology billing demands.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Dermatology Billing Audit <ArrowRight size={18} />
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
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=1200"
                  alt="Dermatology billing specialist reviewing Mohs surgery documentation and excision CPT codes"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center"><Eye size={22} className="text-pink-600" /></div>
                  <div><div className="font-bold text-dark text-lg">36% Revenue Boost</div><div className="text-slate-500 text-xs">Average dermatology practice gain</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 text-pink-700 font-semibold text-sm mb-6"><Eye size={16} /> Dermatology Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Dermatology Billing: <span className="text-primary">Precision in Every Millimeter</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Dermatology billing is driven by size, anatomic location, and depth — a difference of just a few millimeters in excision size can change the CPT code and the reimbursement significantly. Most generalist billers don't know these rules, and the losses are invisible until a billing audit reveals them.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our dermatology billing specialists are trained to read pathology reports, measure against CPT size thresholds, identify the correct excision CPT for every anatomic site, bill Mohs stages accurately, and document medical necessity for every borderline cosmetic/medical procedure.
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
                Maximize Dermatology Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Dermatology Billing Services We Provide</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Full-spectrum billing support built for dermatology and dermatologic surgery practices.</p>
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
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">Code Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Key Dermatology CPT Codes We Master</h2>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead><tr className="bg-primary text-white"><th className="text-left px-6 py-4 font-semibold">CPT Code</th><th className="text-left px-6 py-4 font-semibold">Procedure Description</th></tr></thead>
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
            <span className="text-red-500 font-bold text-xs tracking-widest uppercase block mb-3">Revenue Leaks We Fix</span>
            <h2 className="text-3xl font-bold text-dark mb-4">Top Dermatology Billing Challenges — Solved</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Dermatology Billing — FAQs</h2>
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

      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Maximize Your <span className="text-secondary">Dermatology Practice Revenue</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free audit and discover exactly where your dermatology claims are undercoded, incorrectly bundled, or denied for preventable reasons.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Dermatology Audit <ArrowRight size={18} />
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

export default Dermatology;
