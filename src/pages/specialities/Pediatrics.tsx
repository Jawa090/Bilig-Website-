import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Baby, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Activity, Heart,
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "98.0%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Baby, value: "30%", label: "Average Revenue Increase" },
  { icon: Shield, value: "13+", label: "Years Pediatrics Experience" },
];

const features = [
  "EPSDT well-child visit coding (99381–99385 / 99391–99395)",
  "Modifier 25 for same-day sick visit with preventive",
  "Vaccine administration coding (90460/90461 with counseling)",
  "Vaccine administration (90471/90472 without counseling)",
  "Developmental screening billing (96110, M-CHAT, ASQ)",
  "Behavioral/emotional assessment CPT coding",
  "Medicaid & CHIP state-specific rule compliance",
  "Newborn hospital care coding (99460–99463)",
  "Telehealth pediatric visit billing compliance",
  "Prolonged service coding (99358, 99359, 99415, 99416)",
  "Depression and anxiety screening add-on codes",
  "Lead screening and vision/hearing screening billing",
];

const services = [
  {
    icon: FileText, color: "bg-blue-100 text-blue-700",
    title: "Well-Child Visit (EPSDT) Coding",
    desc: "Accurate coding for all preventive pediatric visits (99381–99395 by age) with correct handling of separately billable same-day sick-visit components using modifier 25. We ensure EPSDT screening elements are documented to satisfy Medicaid EPSDT requirements and capture every reimbursable service performed during the visit.",
  },
  {
    icon: Shield, color: "bg-green-100 text-green-600",
    title: "Vaccine Administration Billing",
    desc: "Complete vaccine and immunization administration CPT coding — 90460/90461 for counseling-based administration and 90471/90472 for non-counseling administration. We apply the correct code per vaccine, per patient age, and per counseling status, capturing every unit of vaccine administration revenue your practice is entitled to.",
  },
  {
    icon: Baby, color: "bg-pink-100 text-pink-600",
    title: "Medicaid & CHIP Compliance",
    desc: "Medicaid and CHIP billing rules vary significantly across states, covering everything from covered preventive services to telehealth restrictions and prior auth requirements. Our team stays current with each state's Medicaid fee schedule and EPSDT benefit requirements so your pediatric claims are compliant on first submission.",
  },
  {
    icon: Activity, color: "bg-purple-100 text-purple-600",
    title: "Developmental & Behavioral Screening",
    desc: "Developmental screenings using standardized tools (96110), autism screening (96110 M-CHAT), depression screenings (G0444), and behavioral assessments are separately billable when performed. We ensure these high-value preventive services are coded and billed independently rather than bundled into the E&M visit without reimbursement.",
  },
  {
    icon: Heart, color: "bg-rose-100 text-rose-600",
    title: "Newborn & Neonatal Care Billing",
    desc: "Hospital newborn care (99460–99463), subsequent hospital care (99462), discharge services (99463), and neonatal intensive care coding (99468–99480) require precise CPT selection based on setting and acuity. We manage all transitions from delivery through discharge, ensuring no newborn care service goes unbilled.",
  },
  {
    icon: TrendingUp, color: "bg-amber-100 text-amber-700",
    title: "Telehealth Pediatric Billing",
    desc: "Pediatric telehealth billing requires compliance with state Medicaid telehealth policies, commercial payer rules, and federal guidelines. We apply correct POS codes (02/10), GT modifiers, and originating-site billing rules so your virtual pediatric visits reimburse at the correct rate across every payer.",
  },
];

const cptCodes = [
  { code: "99383", desc: "Preventive visit — new patient age 5–11", fee: "$120–$160" },
  { code: "99393", desc: "Preventive visit — established patient age 5–11", fee: "$100–$140" },
  { code: "99213", desc: "Office visit — established patient, low complexity", fee: "$80–$110" },
  { code: "99214", desc: "Office visit — established patient, moderate complexity", fee: "$110–$150" },
  { code: "90460", desc: "Vaccine administration with counseling — first vaccine", fee: "$25–$35" },
  { code: "90461", desc: "Vaccine administration with counseling — each additional", fee: "$15–$25" },
  { code: "90471", desc: "Vaccine administration without counseling — first vaccine", fee: "$18–$28" },
  { code: "96110", desc: "Developmental screening with scoring and documentation", fee: "$30–$45" },
  { code: "99460", desc: "Initial hospital newborn care — per day", fee: "$140–$200" },
  { code: "99213-25", desc: "Same-day sick visit with preventive (modifier 25)", fee: "$80–$110" },
];

const billingChallenges = [
  {
    problem: "EPSDT visit bundling — sick visit billed separately denied",
    solution: "Apply modifier 25 to the E&M code to indicate a significant, separately identifiable service was performed on the same day as the preventive visit. Document the sick complaint separately in the medical record.",
  },
  {
    problem: "Vaccine administration undercoding — only one admin code billed for multiple vaccines",
    solution: "Bill 90460 for the first vaccine with counseling, then 90461 for each additional vaccine with counseling. Switch to 90471/90472 when counseling is not provided. Each vaccine administered generates its own administration fee.",
  },
  {
    problem: "Medicaid developmental screening claims denied as bundled",
    solution: "96110 is separately billable when a standardized screening tool (M-CHAT, ASQ, PEDS) is used, scored, and documented in the chart. Ensure the screening tool result and interpretation are documented to support separate reimbursement.",
  },
  {
    problem: "Telehealth pediatric visits denied by state Medicaid",
    solution: "Each state Medicaid program has unique telehealth benefit rules. We track state-specific covered services, eligible patient populations, audio-only vs. video requirements, and originating-site rules to ensure compliance before claim submission.",
  },
];

const faqs = [
  {
    q: "Can we bill a sick visit and a well-child visit on the same day?",
    a: "Yes — when a significant, separately identifiable problem is addressed during a well-child visit, you can bill both the preventive E&M (99381–99395) and a problem-oriented E&M (99213/99214) with modifier 25 appended to the problem E&M. The sick complaint must be documented separately in the medical record with its own history, exam, and medical decision-making.",
  },
  {
    q: "How do we bill vaccine administration correctly for multiple vaccines?",
    a: "Bill 90460 for the first vaccine when counseling is provided (for patients under 19), then 90461 for each additional vaccine with counseling. If counseling is not provided, use 90471 for the first vaccine and 90472 for each additional vaccine. Each vaccine product (90633, 90700, etc.) is also billed separately on its own line.",
  },
  {
    q: "Is developmental screening (M-CHAT, ASQ) separately billable?",
    a: "Yes — 96110 is separately billable when a standardized, validated screening tool is administered, scored, and the results documented in the medical record. Many pediatric practices leave this revenue on the table by not coding screenings separately. Medicaid typically covers this service at a preventive well-child visit without requiring modifier 25.",
  },
  {
    q: "How does Medicaid EPSDT billing work versus commercial insurance?",
    a: "EPSDT (Early and Periodic Screening, Diagnostic, and Treatment) is a mandatory Medicaid benefit for children under 21 that covers comprehensive preventive and medically necessary services. EPSDT claims must include the appropriate age-specific preventive CPT code and may require state-specific EPSDT screening documentation. Commercial insurers follow ACA preventive services guidelines, which differ from EPSDT in scope and documentation requirements.",
  },
  {
    q: "What newborn care codes apply for hospital-based pediatricians?",
    a: "Initial hospital newborn care is billed as 99460 (normal newborn) or 99461 (other than normal) per day. Subsequent hospital newborn care is 99462. Discharge services are 99463 when admitted and discharged on the same day, or 99238/99239 for multi-day stays. Neonatal critical care uses 99468–99469 for initial/subsequent days and 99471–99480 for pediatric intensive care at various weight thresholds.",
  },
  {
    q: "Can telehealth visits be billed for pediatric patients under Medicaid?",
    a: "Yes, but rules vary significantly by state Medicaid program. Most states cover telehealth for pediatric E&M visits, but some restrict coverage to specific services, specialties, or geographic areas. We track each state's Medicaid telehealth policy, apply the correct place-of-service code (02 for telehealth/non-home, 10 for patient home), and apply the GT modifier where required to ensure compliant reimbursement.",
  },
];

const Pediatrics = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Pediatric Billing Services | EPSDT, Vaccine & Medicaid Billing | Optimum Billing Suite";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      (desc as HTMLMetaElement).name = "description";
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", "Expert pediatric medical billing services — EPSDT well-child visit coding, vaccine administration billing (90460/90471), Medicaid & CHIP compliance, developmental screening billing, and newborn care coding. Maximize revenue for your pediatric practice.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) {
      kw = document.createElement("meta");
      (kw as HTMLMetaElement).name = "keywords";
      document.head.appendChild(kw);
    }
    kw.setAttribute("content", "pediatric billing services, EPSDT billing, well-child visit coding, vaccine administration billing, 90460 CPT code, Medicaid CHIP billing, developmental screening billing, newborn care billing, pediatric medical coding");
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-hero text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Baby className="w-4 h-4" /> Pediatric Medical Billing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Pediatric Billing That Captures Every Preventive &amp; Vaccine Revenue
              </h1>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                From EPSDT well-child visits and vaccine administration to Medicaid/CHIP compliance and developmental screening billing — our pediatric billing specialists ensure your practice receives full reimbursement for every service delivered to your youngest patients.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-6 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                  Get Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+1234567890" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                {["HIPAA Compliant", "98% First-Pass Rate", "Medicaid & CHIP Certified", "All 50 States"].map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-primary-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-secondary" /> {b}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-gray-100">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col items-center py-8 px-4 text-center">
                <Icon className="w-7 h-7 text-primary mb-2" />
                <span className="text-3xl font-bold text-gray-900">{value}</span>
                <span className="text-sm text-gray-500 mt-1">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image + Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&w=800&q=80"
                alt="Pediatric billing specialists managing well-child visit claims"
                className="rounded-2xl shadow-2xl w-full object-cover h-[480px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Baby className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">98.0%</div>
                    <div className="text-xs text-gray-500">First-Pass Claim Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-primary font-semibold text-sm uppercase tracking-wide">Comprehensive Pediatric Billing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Specialized Billing for Pediatric Practices of Every Size
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Pediatric billing is uniquely complex — EPSDT requirements, multi-vaccine billing, state-by-state Medicaid variation, and modifier 25 rules trip up even experienced practices. Our pediatric billing team handles every nuance so you can focus on your patients.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Pediatric Billing Services</h2>
            <p className="text-gray-600 text-lg">End-to-end billing support for every pediatric specialty, from well-child visits to complex neonatal care.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ icon: Icon, color, title, desc }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow border border-gray-100">
                <div className={`w-12 h-12 ${color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CPT Codes Table */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Pediatric CPT Codes</h2>
            <p className="text-gray-600">Key CPT codes used in pediatric billing — accurately applied to maximize your reimbursement.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gradient-hero text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">CPT Code</th>
                  <th className="px-6 py-4 text-left font-semibold">Description</th>
                  <th className="px-6 py-4 text-left font-semibold">Typical Fee</th>
                </tr>
              </thead>
              <tbody>
                {cptCodes.map(({ code, desc, fee }, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-muted/40"}>
                    <td className="px-6 py-4 font-mono font-semibold text-primary">{code}</td>
                    <td className="px-6 py-4 text-gray-700">{desc}</td>
                    <td className="px-6 py-4 text-gray-600">{fee}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Billing Challenges */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Pediatric Billing Challenges — Solved</h2>
            <p className="text-gray-600">The most frequent billing errors pediatric practices face, and exactly how we fix them.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {billingChallenges.map(({ problem, solution }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                  <p className="text-red-700 font-semibold text-sm">{problem}</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-green-800 text-sm leading-relaxed">{solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pediatric Billing FAQs</h2>
            <p className="text-gray-600">Answers to the most common pediatric billing questions from practice managers and providers.</p>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-gray-900 pr-4">{q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-primary shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Maximize Your Pediatric Practice Revenue?</h2>
            <p className="text-white/80 text-lg mb-8">Get a free billing audit and discover how much revenue your practice is leaving on the table with uncoded vaccine administrations and missed EPSDT services.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-primary/10 transition-colors">
                Get Free Audit <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="tel:+1234567890" className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-white/10 transition-colors">
                <Phone className="w-4 h-4" /> Speak to a Specialist
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Pediatrics;
