import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Microscope, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Activity
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "98.7%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Microscope, value: "28%", label: "Average Revenue Increase" },
  { icon: Shield, value: "10+", label: "Years Laboratory Experience" },
];

const features = [
  "Clinical lab CPT coding — panels, individual tests, reflex",
  "PAMA fee schedule compliance (2024 rates)",
  "ABN (Advance Beneficiary Notice) management",
  "Modifier QW for CLIA-waived point-of-care tests",
  "Molecular diagnostics — Tier 1/Tier 2/PLA codes",
  "Next-gen sequencing (NGS) billing compliance",
  "Reference lab and split-billing NPI management",
  "Hospital outpatient lab (HOPD) billing rules",
  "Reflex testing billing policies per payer",
  "Specimen collection fee billing (G0001)",
  "CLIA certificate maintenance and compliance",
  "Lab denial management and ADR response",
];

const services = [
  {
    icon: FileText, color: "bg-cyan-100 text-cyan-600",
    title: "Clinical Lab CPT Coding",
    desc: "Accurate coding for the full range of diagnostic laboratory tests — chemistry panels, hematology, coagulation, urinalysis, microbiology, immunology, toxicology, and molecular assays. We code complex panels, reflex testing protocols, and add-on tests with payer-specific bundling rules to prevent incorrect automatic denials.",
  },
  {
    icon: Shield, color: "bg-blue-100 text-blue-600",
    title: "PAMA Compliance & Fee Schedule",
    desc: "We bill all lab services at correct PAMA-mandated Clinical Laboratory Fee Schedule rates with proper NPI assignment distinguishing reference labs from performing entities. PAMA rates updated every 3 years require proactive fee schedule management — using outdated rates triggers underpayments and reimbursement clawbacks.",
  },
  {
    icon: TrendingUp, color: "bg-green-100 text-green-600",
    title: "ABN & Non-Covered Test Management",
    desc: "We manage Advance Beneficiary Notices for tests Medicare may not cover — including low medical necessity tests, frequency-limited tests, and non-covered indications. Proper ABN issuance protects the lab from financial liability and allows collection from patients when Medicare denies.",
  },
  {
    icon: Clock, color: "bg-purple-100 text-purple-600",
    title: "Molecular & Genomic Test Billing",
    desc: "Billing for next-generation sequencing panels, molecular pathology Tier 1/Tier 2 codes (81200–81408), proprietary laboratory assay (PLA) codes, and pharmacogenomics testing with correct Medically Unlikely Edit (MUE) compliance and prior authorization for advanced molecular diagnostics.",
  },
  {
    icon: Microscope, color: "bg-orange-100 text-orange-600",
    title: "Point-of-Care & CLIA Waived Testing",
    desc: "Correct application of modifier QW for CLIA-waived point-of-care tests (rapid flu, strep, glucose, HbA1c, UA dipstick, etc.) with proper documentation that the test was performed on a CLIA-waived instrument per laboratory certificate. QW modifier errors are among the most common reasons for POC test denials.",
  },
  {
    icon: Activity, color: "bg-red-100 text-red-600",
    title: "Reference Lab & Split-Billing",
    desc: "When tests are referred to a reference laboratory, we manage the complex split-billing rules — determining whether the ordering lab or the reference lab bills Medicare directly, applying the correct NPI, and managing the technical vs. professional component split for pathology services.",
  },
];

const cptCodes = [
  { code: "80048", desc: "Basic Metabolic Panel (8 tests including glucose, BUN, creatinine)" },
  { code: "80053", desc: "Comprehensive Metabolic Panel (14 tests)" },
  { code: "85025", desc: "Complete Blood Count (CBC) with differential" },
  { code: "87491", desc: "Chlamydia — NAAT/PCR detection" },
  { code: "81003", desc: "Urinalysis — automated without microscopy" },
  { code: "84443", desc: "TSH (Thyroid Stimulating Hormone)" },
  { code: "83036", desc: "Hemoglobin A1C" },
  { code: "81228", desc: "Comparative analysis — genomic sequencing cytogenomics" },
  { code: "G0001", desc: "Routine venipuncture for specimen collection" },
  { code: "Modifier QW", desc: "CLIA-waived test — required for all waived POC tests billed to Medicare" },
];

const challenges = [
  { problem: "Outdated PAMA Rates", desc: "Billing at pre-PAMA rates or not updating after triennial rate reductions", fix: "Annual PAMA rate review and fee schedule updates for all clinical lab codes before new year billing begins" },
  { problem: "ABN Not Issued", desc: "Lab financially liable for denied tests when ABN wasn't collected from patient", fix: "Diagnosis-specific ABN trigger lists identify every order requiring advance patient notice before processing" },
  { problem: "Molecular Code Selection Errors", desc: "Tier 1 vs. Tier 2 vs. PLA code selection errors trigger MUE denials or underpayment", fix: "Molecular pathology code matrix review ensures correct CPT selection for every assay type and analyte" },
  { problem: "QW Modifier Omitted", desc: "CLIA-waived POC tests denied when QW modifier missing on Medicare claims", fix: "Waived test identification workflow ensures QW is applied to every CLIA-waived result before claim submission" },
];

const faqs = [
  {
    q: "What is PAMA and how does it affect laboratory reimbursement?",
    a: "The Protecting Access to Medicare Act (PAMA) requires CMS to base Clinical Laboratory Fee Schedule rates on market-based pricing data collected from private payer contracts. Rates are updated every 3 years, with rate reductions phased in over 5 years. Labs that fail to report private payer data during collection periods face penalties, and labs that don't update their fee schedules to PAMA rates overbill or underbill compared to current allowed amounts.",
  },
  {
    q: "When is an Advance Beneficiary Notice (ABN) required?",
    a: "An ABN is required when a lab expects Medicare to deny or reduce payment for a service — typically because (1) the test does not meet Medicare's medical necessity criteria for the diagnosis billed, (2) the test exceeds Medicare's frequency limitations, or (3) the service is not covered under Medicare. The ABN must be given to the patient before the test is performed, allow time for the patient to make an informed decision, and be signed and dated.",
  },
  {
    q: "How do you bill for molecular diagnostic tests under PAMA?",
    a: "Molecular pathology tests are coded using Tier 1 codes (81200–81383 for specific gene/analyte combinations), Tier 2 codes (81400–81408 for tests by methodology complexity), or Proprietary Laboratory Assay (PLA) codes for specific commercial assays. The correct selection depends on the exact analyte, methodology, and whether the test is a specific named assay with its own PLA code. PAMA caps most molecular test reimbursement, and MUEs limit the number of units per claim.",
  },
  {
    q: "Do you handle outreach lab billing for hospital-owned labs?",
    a: "Yes. Hospital outreach labs (reference labs operated by hospital systems) bill under different rules than independent labs in some settings — particularly for HOPD vs. physician office testing. We manage the billing distinctions between 14x TOB (lab), 13x TOB (hospital outpatient), and professional fee billing for pathology interpretation services.",
  },
  {
    q: "Can you help with laboratory denial management and audit responses?",
    a: "Yes. Lab claim audits — particularly RAC and MAC audits for molecular diagnostics and genetic testing — require detailed medical necessity documentation responses, NCD/LCD compliance evidence, and sometimes pathologist attestation letters. We prepare comprehensive ADR responses and appeal packages within required timeframes to maximize recovery.",
  },
];

const Laboratory = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Laboratory Medical Billing Services | PAMA, Molecular & CLIA Experts | Optimum Billing";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) { meta = document.createElement("meta"); (meta as HTMLMetaElement).name = "description"; document.head.appendChild(meta); }
    meta.setAttribute("content", "Expert laboratory billing services — PAMA fee schedule compliance, molecular diagnostics billing, ABN management, CLIA-waived test coding, reference lab split-billing. 98.7% first-pass rate.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) { kw = document.createElement("meta"); (kw as HTMLMetaElement).name = "keywords"; document.head.appendChild(kw); }
    kw.setAttribute("content", "laboratory billing, lab billing services, PAMA billing, molecular diagnostics billing, ABN management, CLIA billing, reference lab billing, clinical laboratory revenue cycle, lab denial management");
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
              <Microscope size={14} /> Laboratory Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Laboratory Billing Services: <span className="text-secondary">High Volume,</span> High Accuracy
            </h1>
            <p className="text-lg text-white/85 leading-relaxed max-w-3xl mx-auto mb-10">
              Specialized billing for clinical labs, reference labs, pathology groups, and hospital outreach programs. We master PAMA compliance, molecular diagnostics coding, ABN management, and high-volume claim accuracy — because in laboratory billing, every repeated error is multiplied across thousands of claims.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Lab Billing Audit <ArrowRight size={18} />
              </Link>
              <a href="tel:7373076234" className="inline-flex items-center gap-2 bg-white/10 text-white border border-white/30 px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">
                <Phone size={17} /> Call a Specialist
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-10">
              {["HIPAA Compliant", "CLIA Expertise", "All Payers", "No Setup Fees"].map(b => (
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
                <img src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200"
                  alt="Laboratory billing specialist managing PAMA compliance and molecular diagnostics CPT coding for clinical lab"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl" />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center"><Microscope size={22} className="text-cyan-600" /></div>
                  <div><div className="font-bold text-dark text-lg">+28% Revenue</div><div className="text-slate-500 text-xs">Average lab revenue increase</div></div>
                </div>
              </div>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold text-sm mb-6"><Microscope size={16} /> Laboratory Revenue Experts</div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">Laboratory Billing: <span className="text-primary">Complex Rules, High Volume</span></h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Laboratory billing operates under a unique regulatory framework — PAMA-mandated fee schedules, strict ABN requirements for non-covered tests, complex molecular diagnostics code sets, and split-billing rules between ordering and reference labs. High claim volume means every billing error is amplified across thousands of claims.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Our lab billing team knows CLIA regulations, applies modifier QW correctly for every waived test, manages ABN workflows to protect your lab from uncollectible write-offs, and codes everything from a basic metabolic panel to a complex pharmacogenomics panel accurately every time.
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
                Optimize Your Lab Revenue Cycle <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Laboratory Billing Services We Provide</h2>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Key Laboratory Billing Codes</h2></div>
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
          <div className="text-center mb-12"><h2 className="text-3xl font-bold text-dark mb-4">Lab Billing Revenue Leaks — Solved</h2></div>
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
          <div className="text-center mb-14"><h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Laboratory Billing — FAQs</h2></div>
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
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Optimize Your <span className="text-secondary">Lab's Revenue Cycle</span></h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">Get a free audit and uncover where high-volume claim errors are costing your laboratory revenue every day.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base">
                Get Free Lab Billing Audit <ArrowRight size={18} />
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

export default Laboratory;
