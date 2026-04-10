import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  HeartHandshake, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Brain
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "97.6%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: HeartHandshake, value: "35%", label: "Average Revenue Increase" },
  { icon: Shield, value: "12+", label: "Years Mental Health Experience" },
];

const features = [
  "Psychotherapy time-based CPT coding (90832/90834/90837)",
  "Telehealth mental health billing — video and audio-only",
  "Psychiatrist E&M + psychotherapy add-on billing",
  "Group therapy (90853) and family therapy (90846/90847)",
  "Crisis intervention coding (90839/90840)",
  "LCSW, LMFT, LPC credential billing by payer",
  "Partial hospitalization program (PHP) billing",
  "Intensive outpatient program (IOP) billing",
  "Mental health parity law compliance",
  "Psychological testing billing (96130–96139)",
  "Medication management visit coding (99213–99215)",
  "Multi-provider group practice credential management",
];

const services = [
  {
    icon: FileText, color: "bg-violet-100 text-violet-600",
    title: "Psychotherapy Code Selection",
    desc: "Correct CPT coding for individual psychotherapy by documented session time — 90832 (16–37 min), 90834 (38–52 min), 90837 (53+ min) — plus group therapy (90853), family therapy (90846/90847), and interactive complexity add-on (90785). Time documentation in the clinical note must match the code billed.",
  },
  {
    icon: Shield, color: "bg-blue-100 text-blue-600",
    title: "Telehealth Mental Health Billing",
    desc: "We navigate the complex and constantly evolving telehealth billing landscape for behavioral health — applying correct place-of-service codes (02 for telehealth facility, 10 for patient's home), required modifiers (95, GT), audio-only vs. video distinction, and payer-specific telehealth mental health parity coverage requirements.",
  },
  {
    icon: TrendingUp, color: "bg-green-100 text-green-600",
    title: "Multi-Credential Provider Billing",
    desc: "Mental health practices often have providers with different license types — psychiatrists, psychologists, LCSWs, LMFTs, LPCs, APRNs. Each credential type is credentialed by different payers at different rates. We manage billing for each provider type correctly, preventing credential-mismatch denials that are common in multi-disciplinary practices.",
  },
  {
    icon: Clock, color: "bg-orange-100 text-orange-600",
    title: "PHP & IOP Billing",
    desc: "Partial hospitalization programs (CPT H0035/S9480 or revenue code 0912) and intensive outpatient programs (H0015/S9480 or revenue code 0906) have complex per-diem and per-service coding requirements. We bill PHP and IOP under both Medicare (OPPS) and commercial payer requirements with correct day and service counting.",
  },
  {
    icon: Brain, color: "bg-purple-100 text-purple-600",
    title: "Psychiatric E&M + Psychotherapy",
    desc: "When a psychiatrist provides both medication management (E&M) and psychotherapy in the same session, correct billing requires separate coding — the appropriate E&M level (99212–99215) plus the psychotherapy add-on code (90833/90836/90838). This combined billing recovers significantly more revenue than billing psychotherapy alone.",
  },
  {
    icon: Users, color: "bg-pink-100 text-pink-600",
    title: "Mental Health Parity Compliance",
    desc: "The Mental Health Parity and Addiction Equity Act (MHPAEA) requires payers to cover mental health services at parity with medical/surgical benefits. When payers apply more restrictive prior auth, visit limits, or utilization management to behavioral health, we file parity complaints and appeals — recovering access and revenue your patients are entitled to.",
  },
];

const cptCodes = [
  { code: "90832", desc: "Psychotherapy — 16–37 minutes (patient/family member)" },
  { code: "90834", desc: "Psychotherapy — 38–52 minutes" },
  { code: "90837", desc: "Psychotherapy — 53+ minutes" },
  { code: "90833", desc: "Psychotherapy add-on with E&M — 16–37 minutes (psychiatrist)" },
  { code: "90836", desc: "Psychotherapy add-on with E&M — 38–52 minutes" },
  { code: "90853", desc: "Group psychotherapy (not family therapy)" },
  { code: "90839", desc: "Psychotherapy for crisis — first 60 minutes" },
  { code: "90785", desc: "Interactive complexity add-on (use with 90832–90838)" },
  { code: "96130", desc: "Psychological testing evaluation by psych/QHP — first hour" },
  { code: "99213–99215", desc: "Office E&M — medication management (psychiatrist)" },
];

const challenges = [
  { problem: "Session Time Not Documented", desc: "Psychotherapy time-based codes billed without documented start/stop time in note", fix: "Pre-billing audit confirms time documentation is present before code selection — prevents audit exposure" },
  { problem: "Telehealth Payer Rule Changes", desc: "Incorrect POS code or missing modifier for telehealth visits — systematic denials", fix: "Monthly telehealth rule matrix updates ensure correct POS 02/10 and modifier 95/GT for each payer" },
  { problem: "Credential-Mismatch Denials", desc: "LCSW claims submitted to payers that only credential LPCs — mass denials", fix: "Provider-payer credentialing matrix prevents claims from being submitted to non-credentialing payers" },
  { problem: "PHP/IOP Billing Errors", desc: "PHP services billed per visit instead of per diem or coded incorrectly by service type", fix: "PHP/IOP billing workflow review aligns claim submission with each payer's specific program billing rules" },
];

const faqs = [
  {
    q: "How do you handle telehealth billing for mental health services after the PHE?",
    a: "Post-public health emergency telehealth rules vary significantly by payer. Medicare extended many telehealth flexibilities through 2026. Commercial payers vary from maintaining full telehealth parity to imposing visit limits or geographic restrictions. Audio-only mental health services are covered by most payers under mental health parity laws but may require specific modifiers. We maintain current knowledge for every payer your providers are credentialed with.",
  },
  {
    q: "What is the correct way to bill when a psychiatrist provides both medication management and therapy?",
    a: "When a psychiatrist provides a E&M service (medication management) and psychotherapy in the same visit, you bill the appropriate E&M code (99212–99215) plus the psychotherapy add-on code (90833 for 16–37 min, 90836 for 38–52 min, or 90838 for 53+ min). The E&M must have separately documented medical decision-making beyond the psychotherapy, and the total time for each component must be documented separately.",
  },
  {
    q: "Which license types can bill Medicare for mental health services?",
    a: "Medicare covers mental health services billed by physicians (MDs/DOs), clinical psychologists (PhDs/PsyDs), clinical social workers (LCSWs/LICSWs), marriage and family therapists (LMFTs), mental health counselors (LPCs/LMHCs) — the last two were added under the Consolidated Appropriations Act 2023. Each license type has specific Medicare provider enrollment requirements and scope-of-service limitations.",
  },
  {
    q: "Do you manage prior authorizations for mental health services?",
    a: "Yes. Behavioral health prior authorizations are often time-limited (e.g., 8 sessions at a time), requiring frequent renewal requests. We manage the initial authorization, track sessions against authorized amounts, submit renewal requests before sessions expire, and file parity appeals when payers impose visit limits or prior auth requirements that are more restrictive than medical/surgical benefits.",
  },
  {
    q: "How do you handle billing for group therapy practices with multiple clinicians?",
    a: "For group practices, we manage provider-specific billing for each clinician based on their individual credentialing status with each payer. This includes tracking individual provider NPI enrollment, credential type, in-network status, and payer-specific billing rules. We submit claims under the correct billing provider, distinguish between 'incident-to' billing scenarios, and manage split-billing for shared services.",
  },
];

const MentalHealth = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Mental Health Billing Services | Telehealth & Multi-Credential Specialists | Optimum Billing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Expert mental health billing — psychotherapy coding, telehealth compliance, multi-credential billing, PHP/IOP billing, mental health parity appeals. 97.6% first-pass rate for behavioral health practices.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "mental health billing, behavioral health billing, psychotherapy billing, telehealth mental health billing, LCSW billing, psychiatry billing, PHP billing, IOP billing, mental health parity compliance");
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
              <HeartHandshake size={14} /> Mental Health Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Mental Health Billing: <span className="text-secondary">Credential Expertise,</span> Telehealth Compliance
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Expert billing for psychiatrists, psychologists, LCSWs, LMFTs, and behavioral health practices. We navigate evolving telehealth rules, multi-credential billing complexities, PHP/IOP billing, and mental health parity laws — so your practice gets paid for every session you provide.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Mental Health Billing Audit <ArrowRight size={18} />
              </Link>
              <a href="tel:7373076234" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">
                <Phone size={17} /> Call a Specialist
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {["HIPAA Compliant", "Mental Health Parity", "All Payers", "No Setup Fees"].map(b => (
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
                <img src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=1200"
                  alt="Mental health billing specialist managing psychotherapy coding and telehealth compliance for behavioral health practice"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center"><HeartHandshake size={22} className="text-violet-600" /></div>
                  <div><div className="font-bold text-dark text-lg">+35% Revenue</div><div className="text-slate-500 text-xs">Average practice revenue increase</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-100 text-violet-700 font-semibold text-sm mb-6"><HeartHandshake size={16} /> Mental Health Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Mental Health Billing: <span className="text-primary">Complex Credentials, Evolving Rules</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Mental health billing has become significantly more complex — telehealth coverage rules change quarterly, audio-only billing is state-specific, and the patchwork of credential-based coverage differences across payers creates constant denial risk. Add PHP/IOP billing complexity and mental health parity law compliance, and it's among the most challenging billing environments in healthcare.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our mental health billing team stays current on every payer's telehealth rules, maintains a credential-to-payer coverage matrix for every license type, applies correct psychotherapy time codes, and files mental health parity appeals when payers restrict behavioral health coverage below medical/surgical parity.
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
                Maximize Mental Health Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Mental Health Billing Services We Provide</h2>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Key Mental Health Billing Codes</h2></div>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Mental Health Billing Revenue Leaks — Solved</h2></div>
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
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Mental Health Billing — FAQs</h2></div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Maximize Your <span className="text-secondary">Mental Health Practice Revenue</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free audit and find out where your behavioral health claims are being denied, undercoded, or lost to telehealth compliance gaps.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Mental Health Audit <ArrowRight size={18} />
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

export default MentalHealth;
