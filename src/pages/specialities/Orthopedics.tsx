import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Bone, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Activity
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "97.5%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Bone, value: "38%", label: "Average Revenue Increase" },
  { icon: Shield, value: "15+", label: "Years Orthopedics Experience" },
];

const features = [
  "Surgical global period tracking (10-day and 90-day)",
  "Implant and hardware pass-through billing",
  "Modifier 59, 51, 76 correct usage",
  "Arthroscopic vs. open procedure code selection",
  "Fracture care coding (manipulation vs. casting)",
  "NCCI bundling edit management",
  "Prior authorization for elective orthopedic surgeries",
  "Joint replacement (TKA/THA) billing optimization",
  "Workers' compensation billing by state",
  "Post-op E&M within global period billing",
  "Sports medicine procedure coding",
  "ASC vs. hospital billing fee schedule management",
];

const services = [
  {
    icon: FileText, color: "bg-slate-100 text-slate-700",
    title: "Surgical Procedure Coding",
    desc: "Precise CPT coding for arthroscopies, joint replacements, fracture repairs, spinal surgeries, ACL reconstructions, rotator cuff repairs, and soft-tissue procedures with all required modifiers. Each orthopedic case is reviewed against operative report documentation to ensure every procedure performed is accurately billed.",
  },
  {
    icon: Shield, color: "bg-blue-100 text-blue-600",
    title: "Global Period Management",
    desc: "Orthopedic surgeries carry 10-day or 90-day global periods during which routine post-op care is bundled into the surgical fee. We track every surgical global period, identify services that fall outside the global (new problems, unrelated procedures), and bill them with the correct modifier (24, 25, or 78) to capture legitimate additional revenue.",
  },
  {
    icon: TrendingUp, color: "bg-green-100 text-green-600",
    title: "Implant & Hardware Billing",
    desc: "Orthopedic implants — screws, plates, intramedullary nails, joint prostheses — represent significant cost centers. We bill hardware as separate line items with invoice-based cost documentation, ensuring your practice receives proper reimbursement for implant costs beyond the base surgical code payment.",
  },
  {
    icon: Clock, color: "bg-purple-100 text-purple-600",
    title: "Prior Authorization Management",
    desc: "Elective orthopedic procedures — joint replacements, spinal surgeries, ACL reconstruction, rotator cuff repair — require prior authorization from most commercial and Medicare Advantage payers. We manage the complete PA workflow including peer-to-peer reviews when initial requests are denied.",
  },
  {
    icon: Bone, color: "bg-orange-100 text-orange-600",
    title: "Fracture Care Coding",
    desc: "Fracture care billing is frequently miscoded — distinguishing closed treatment without manipulation (simple splinting), closed treatment with manipulation, and open treatment with fixation dramatically changes reimbursement. We review X-rays, manipulation documentation, and casting records to ensure accurate fracture care CPT selection.",
  },
  {
    icon: Activity, color: "bg-red-100 text-red-600",
    title: "Workers' Compensation Billing",
    desc: "Orthopedic practices treating work-related injuries must navigate state-specific workers' compensation fee schedules, treatment plans, functional capacity evaluations, and impairment rating reports. We manage WC billing with correct state fee schedule application and documentation requirements.",
  },
];

const cptCodes = [
  { code: "27447", desc: "Total knee arthroplasty (TKA) — primary" },
  { code: "27130", desc: "Total hip arthroplasty (THA) — primary" },
  { code: "29881", desc: "Arthroscopy knee — with meniscectomy (medial or lateral)" },
  { code: "29827", desc: "Arthroscopy shoulder — with rotator cuff repair" },
  { code: "27540", desc: "ORIF — knee (distal femur fracture)" },
  { code: "27759", desc: "ORIF — tibia fracture" },
  { code: "29888", desc: "ACL reconstruction — arthroscopically aided" },
  { code: "20610", desc: "Arthrocentesis — major joint (knee, shoulder, hip)" },
  { code: "20680", desc: "Removal of implant — deep (under muscle or bone)" },
  { code: "99213–99215", desc: "Post-op E&M — new problem or unrelated (modifier 24)" },
];

const challenges = [
  { problem: "Global Period Billing Losses", desc: "Legitimate post-op new problems billed without modifier 24 — systematically denied", fix: "Global period tracker flags all encounters within global window and applies correct modifier for separately billable services" },
  { problem: "Implant Cost Not Recovered", desc: "Hardware billed as part of surgical code — high-cost implants not reimbursed separately", fix: "Invoice-based implant billing with per-case cost documentation captures full implant reimbursement" },
  { problem: "Wrong Arthroscopy Code", desc: "Arthroscopic diagnostic procedure vs. therapeutic procedure coded incorrectly", fix: "Operative report review confirms whether diagnostic or therapeutic arthroscopy was performed — different CPT and fee" },
  { problem: "Modifier 51 Multiple Surgery Rules", desc: "Multiple procedures on same day billed without 51 modifier — denied or paid incorrectly", fix: "Primary and secondary procedure identification with correct modifier 51 application maximizes multi-procedure reimbursement" },
];

const faqs = [
  {
    q: "What is a surgical global period and how does it affect billing?",
    a: "A surgical global period is the time frame following a procedure during which routine post-operative care is included in the surgical fee. Major surgeries have a 90-day global; minor surgeries have 10-day or 0-day globals. During the global period, routine post-op visits cannot be billed separately. However, services for new problems unrelated to the surgery (modifier 24), complications requiring a return to surgery (modifier 78), or unrelated procedures (modifier 79) can be billed separately with the correct modifier.",
  },
  {
    q: "How do you handle billing for orthopedic implants and hardware?",
    a: "For implants, we bill the base surgical CPT code plus a separate line for the implant using the appropriate L-code or cost-based billing depending on payer requirements. Most commercial payers reimburse implants at invoice cost plus a percentage markup or at a fixed schedule. We maintain invoice documentation for every case and submit implant costs as a separately identifiable charge with supporting documentation.",
  },
  {
    q: "What modifiers are most important in orthopedic billing?",
    a: "The most critical modifiers include: Modifier 59/XU (distinct procedure — overrides NCCI bundling when clinically appropriate), Modifier 51 (multiple procedures — applies to the secondary procedure when multiple surgeries are performed the same day), Modifier 24 (post-op E&M for new problem within global), Modifier 78 (return to OR for complication during global), and Modifier LT/RT (bilateral procedures — left/right distinction).",
  },
  {
    q: "Can you manage billing for both ASC and hospital-based orthopedic procedures?",
    a: "Yes. Orthopedic procedures performed in an ASC are billed under a different CPT payment system than hospital outpatient department (HOPD) procedures. We manage both settings — applying the facility's appropriate fee schedule, billing the professional component separately from the facility component, and ensuring correct place-of-service code assignment for each procedure location.",
  },
  {
    q: "Do you have experience with workers' compensation orthopedic billing?",
    a: "Yes. Workers' compensation billing for orthopedic practices requires state-specific fee schedules, treatment authorization requirements, independent medical examination (IME) billing, functional capacity evaluation (FCE) coding, and impairment rating documentation. We manage WC billing in all states where your practice operates, with correct state fee schedule application and DWC/WC payer-specific claim submission formats.",
  },
];

const Orthopedics = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Orthopedics Medical Billing Services | Surgical & Implant Coding Specialists | Optimum Billing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Expert orthopedic billing — surgical procedure coding, global period management, implant billing, fracture care coding, and workers' comp billing. 97.5% first-pass rate for orthopedic practices.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "orthopedics billing, orthopedic surgery billing, joint replacement billing, global period billing, implant billing, fracture care billing, arthroscopy billing, orthopedic medical billing company");
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
              <Bone size={14} /> Orthopedics Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Orthopedic Billing Where <span className="text-secondary">Every Error</span> Is Expensive
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Expert billing for orthopedic surgeons and practices. High-dollar surgical claims, global period management, implant cost recovery, and complex modifier requirements — we protect your orthopedic revenue with the clinical billing expertise your practice demands.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Orthopedics Billing Audit <ArrowRight size={18} />
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
                <img src="https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&q=80&w=1200"
                  alt="Orthopedic billing specialist coding surgical procedures, implants and global period management"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center"><Bone size={22} className="text-slate-700" /></div>
                  <div><div className="font-bold text-dark text-lg">+38% Revenue</div><div className="text-slate-500 text-xs">Average practice revenue increase</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 font-semibold text-sm mb-6"><Bone size={16} /> Orthopedics Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Orthopedic Billing: <span className="text-primary">High Stakes, High Complexity</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Orthopedic surgery billing involves high-dollar claims, complex global period rules, and significant implant and hardware costs. A billing error in orthopedics doesn't just mean a denied claim — it can mean thousands of dollars lost per surgical case. Global period mismanagement alone can cost an active surgical practice $200,000+ annually.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our orthopedic billing team tracks surgical global periods meticulously, bills implant costs as separate line items with invoice documentation, applies the correct modifier combination for every multi-procedure case, and manages the prior authorization workflow for all elective surgical cases.
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
                Protect Your Orthopedic Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Orthopedic Billing Services We Provide</h2></div>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Key Orthopedic Billing Codes</h2></div>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Orthopedic Billing Revenue Leaks — Solved</h2></div>
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
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Orthopedics Billing — FAQs</h2></div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Protect Your <span className="text-secondary">Orthopedic Practice Revenue</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free billing audit and find out how much your practice is losing to global period errors, missed implant billing, and incorrect modifier usage.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Orthopedics Audit <ArrowRight size={18} />
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

export default Orthopedics;
