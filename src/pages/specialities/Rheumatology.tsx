import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Zap, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock,
  ChevronDown, ChevronUp, CheckCircle2, AlertCircle, Users, Activity, FlaskConical,
} from "lucide-react";

const stats = [
  { icon: TrendingUp, value: "97.3%", label: "First-Pass Claim Rate" },
  { icon: Clock, value: "<24h", label: "Claim Submission Time" },
  { icon: Zap, value: "37%", label: "Average Revenue Increase" },
  { icon: Shield, value: "11+", label: "Years Rheumatology Experience" },
];

const features = [
  "Biologic DMARD J-code selection (Humira, Enbrel, Remicade, Orencia, etc.)",
  "Infusion vs. injection vs. subcutaneous administration coding",
  "Initial/concurrent/sequential infusion unit billing",
  "Prior authorization management for all biologic agents",
  "Step therapy documentation and appeal support",
  "ASP+6% drug cost billing under Part B",
  "In-office infusion suite billing (96413, 96415, 96365)",
  "E&M and infusion same-day bundling rules",
  "Methotrexate and DMARD monitoring lab billing",
  "Joint injection coding (20600, 20605, 20610, 20611)",
  "IVIG administration for inflammatory conditions",
  "Site-of-care billing rules (office vs. infusion center vs. hospital)",
];

const services = [
  {
    icon: FlaskConical, color: "bg-violet-100 text-violet-700",
    title: "Biologic Infusion J-Code Billing",
    desc: "Accurate J-code selection for every biologic medication administered by IV infusion in your rheumatology practice — adalimumab (J0135), infliximab (J1745), abatacept (J0129), tocilizumab (J3262), rituximab (J9312), and more. We pair each drug J-code with the correct infusion administration CPT codes (96413, 96415) and calculate the exact units based on the dose administered and drug's per-unit billing denominator.",
  },
  {
    icon: Shield, color: "bg-blue-100 text-blue-700",
    title: "Prior Authorization Management",
    desc: "Biologic DMARDs require prior authorization from virtually every payer, and approvals often carry step therapy requirements (try methotrexate first, fail, then approve biologic). We manage the full PA workflow — submitting clinical documentation, step therapy failure evidence, and physician attestation letters. When payers deny or require step therapy for patients already on established biologics, we file continuity-of-care exception appeals.",
  },
  {
    icon: Zap, color: "bg-amber-100 text-amber-700",
    title: "In-Office Infusion Suite Billing",
    desc: "For practices with dedicated infusion suites, we bill infusion services at the correct physician office level — initial infusion (96413), subsequent hours (96415), concurrent infusions (96417), and sequential infusions (96368). We apply the correct hierarchy when multiple drugs are infused sequentially, bill nursing time correctly, and ensure E&M services on the same day as infusion are billed with appropriate modifiers.",
  },
  {
    icon: Activity, color: "bg-green-100 text-green-600",
    title: "Drug Cost & ASP Billing",
    desc: "Under Medicare Part B, physician-administered drugs (including biologics) are reimbursed at Average Sales Price plus 6% (ASP+6%). We calculate exact drug units based on the dose administered vs. the billing unit size in the drug's HCPCS descriptor, bill at correct ASP rates, and manage waste billing for single-dose vials with non-wasteable units. For commercial payers, we apply WAC or invoice-based cost billing as required by each payer contract.",
  },
  {
    icon: FileText, color: "bg-rose-100 text-rose-600",
    title: "Joint Injection Coding",
    desc: "Rheumatology joint injections use CPT 20600 (small joint), 20605 (intermediate joint), 20610 (major joint), and 20611 (major joint with ultrasound guidance). We correctly assign joint size category per injection, apply ultrasound guidance codes (76942) when performed, and manage bilateral billing rules. Steroid and hyaluronic acid injection codes are correctly differentiated by anatomical site and injection type.",
  },
  {
    icon: TrendingUp, color: "bg-teal-100 text-teal-700",
    title: "Step Therapy Appeals & Exceptions",
    desc: "Payer step therapy policies frequently require patients to try and fail cheaper medications before approving expensive biologics. When your patients' clinical history supports a biologic directly — severe disease, contraindications to first-line agents, prior treatment failures — we prepare clinical appeal letters with supporting literature and submit step therapy exception requests to get your patients the treatment they need while protecting your revenue.",
  },
];

const cptCodes = [
  { code: "J0135", desc: "Adalimumab (Humira) — per 20 mg injection", fee: "ASP+6%" },
  { code: "J1745", desc: "Infliximab (Remicade) — per 10 mg IV infusion", fee: "ASP+6%" },
  { code: "J0129", desc: "Abatacept (Orencia) — per 10 mg IV infusion", fee: "ASP+6%" },
  { code: "96413", desc: "Chemotherapy infusion — initial, up to 1 hour", fee: "$110–$180" },
  { code: "96415", desc: "Chemotherapy infusion — each additional hour", fee: "$45–$80" },
  { code: "96365", desc: "IV infusion — initial, up to 1 hour (non-chemo)", fee: "$90–$150" },
  { code: "96366", desc: "IV infusion — each additional hour (non-chemo)", fee: "$35–$65" },
  { code: "20610", desc: "Arthrocentesis — major joint (knee, shoulder, hip)", fee: "$80–$140" },
  { code: "20611", desc: "Arthrocentesis — major joint with ultrasound guidance", fee: "$120–$180" },
  { code: "20605", desc: "Arthrocentesis — intermediate joint (wrist, ankle, elbow)", fee: "$65–$110" },
];

const billingChallenges = [
  {
    problem: "Wrong J-code billed for biologic — dose unit miscalculation",
    solution: "Each biologic J-code has a specific billing unit (e.g., J1745 for infliximab is per 10 mg). If a 400 mg dose is administered, 40 units of J1745 must be billed. We calculate exact billing units from each patient's actual administered dose and the drug's per-unit descriptor to prevent underbilling or overbilling.",
  },
  {
    problem: "Prior auth denied — step therapy not satisfied or documentation insufficient",
    solution: "We prepare comprehensive prior authorization packages including diagnosis codes, disease activity scores (DAS28, CDAI), prior treatment history, contraindications to step therapy agents, and published clinical guidelines supporting direct biologic initiation. For step therapy exceptions, we document previous DMARD failures with objective clinical evidence.",
  },
  {
    problem: "Same-day E&M and infusion — E&M denied as bundled with infusion",
    solution: "CMS allows billing a significant, separately identifiable E&M on the same day as an infusion when a physician personally evaluates the patient for a medically necessary reason beyond infusion supervision. Apply modifier 25 to the E&M code and document the distinct evaluation in the medical record. We manage this distinction carefully on every infusion day claim.",
  },
  {
    problem: "Sequential infusion hierarchy billing error — initial code applied to subsequent drug",
    solution: "CMS infusion hierarchy rules require the most resource-intensive drug to be billed as the initial infusion. When two biologics are administered sequentially in a single visit, the first drug in time gets the initial infusion code only if it is also the most resource-intensive. We apply the correct hierarchy and code the most resource-intensive drug as initial regardless of infusion order.",
  },
];

const faqs = [
  {
    q: "How do we correctly bill for biologic infusions in the office setting?",
    a: "For in-office biologic infusions, you bill both the drug (J-code) and the administration (infusion CPT code) on the same claim. The drug J-code is billed with units corresponding to the actual dose administered divided by the per-unit size in the HCPCS descriptor. The administration is billed as 96413 for the first hour and 96415 for each additional hour. When a physician evaluates the patient on the same day, modifier 25 is applied to the E&M code to distinguish it from routine infusion supervision.",
  },
  {
    q: "What is the correct approach to prior authorization for biologic DMARDs?",
    a: "Prior authorization for biologics typically requires: (1) diagnosis confirmation with ICD-10 code, (2) disease severity documentation (disease activity scores, functional limitations), (3) prior treatment history showing DMARD inadequacy, (4) contraindications or intolerance to step therapy agents if applicable, and (5) treating physician attestation. We maintain biologic-specific PA templates for all major payers and track PA approval and expiration dates to ensure uninterrupted treatment authorization.",
  },
  {
    q: "How is drug waste handled for biologic infusions?",
    a: "When a single-dose vial of a biologic cannot be split between patients and a portion is discarded, the full vial contents can be billed — including the wasted portion — with the JW modifier appended to the J-code line to indicate discarded drug. The JW modifier is required by Medicare and many commercial payers and prevents recoupment of claims where the billed units exceed the administered dose. We track single-dose vs. multi-dose vial status for every biologic product.",
  },
  {
    q: "What is step therapy and how do we handle payer step therapy requirements?",
    a: "Step therapy is a cost-management strategy where payers require patients to try (and fail) less expensive medications before approving more expensive biologics. For new patients requiring a biologic, we document the clinical rationale and DMARD failure history that supports direct biologic initiation. For patients switching from one biologic to another due to inadequate response, we document objective evidence of disease activity despite treatment. Most states now have step therapy transparency laws requiring payers to grant exceptions for clinically appropriate cases.",
  },
  {
    q: "How are joint injections billed correctly in rheumatology?",
    a: "Joint injection CPT codes are assigned by joint size: 20600 for small joints (finger, toe, wrist), 20605 for intermediate joints (elbow, wrist, ankle), and 20610 for major joints (knee, hip, shoulder). When ultrasound guidance is used for needle placement, add 20611 instead of 20610 for major joints with ultrasound. Steroid injections and hyaluronic acid injections use the same CPT codes but different drug codes. Bilateral injections on the same day require modifier 50 or separate line entries per payer preference.",
  },
  {
    q: "Can we bill an office visit on the same day as an infusion?",
    a: "Yes — when a physician performs a significant, separately identifiable evaluation and management service for a reason distinct from infusion supervision, both the E&M and infusion codes can be billed on the same day. The E&M must be appended with modifier 25, and the medical record must document the distinct evaluation with its own history, exam, and medical decision-making. Routine pre-infusion checks and vital sign monitoring do not qualify as a separately billable E&M.",
  },
];

const Rheumatology = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Rheumatology Billing Services | Biologic Infusion, J-Code & Prior Auth Billing | Optimum Billing Suite";
    let desc = document.querySelector('meta[name="description"]');
    if (!desc) {
      desc = document.createElement("meta");
      (desc as HTMLMetaElement).name = "description";
      document.head.appendChild(desc);
    }
    desc.setAttribute("content", "Expert rheumatology billing services — biologic DMARD J-code billing, infusion administration coding, prior authorization management, step therapy appeals, joint injection coding, and ASP+6% drug cost billing. Maximize revenue for your rheumatology practice.");
    let kw = document.querySelector('meta[name="keywords"]');
    if (!kw) {
      kw = document.createElement("meta");
      (kw as HTMLMetaElement).name = "keywords";
      document.head.appendChild(kw);
    }
    kw.setAttribute("content", "rheumatology billing services, biologic infusion billing, J-code billing, Humira Remicade billing, prior authorization biologics, infusion coding 96413, joint injection billing, rheumatology medical coding, DMARD billing");
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-violet-900 via-violet-800 to-purple-700 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur px-4 py-1.5 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4" /> Rheumatology Billing
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Rheumatology Billing Built Around Biologic Infusions &amp; Prior Auth Mastery
              </h1>
              <p className="text-xl text-violet-100 mb-8 leading-relaxed">
                From biologic J-code precision and ASP+6% drug billing to prior authorization workflows and step therapy appeals — our rheumatology billing specialists protect your infusion revenue and keep your patients' therapy authorized without interruption.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-violet-900 font-semibold px-6 py-3 rounded-lg hover:bg-violet-50 transition-colors">
                  Get Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+1234567890" className="inline-flex items-center gap-2 border-2 border-white/60 text-white font-semibold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" /> Call Now
                </a>
              </div>
              <div className="flex flex-wrap gap-6 text-sm">
                {["HIPAA Compliant", "97.3% First-Pass Rate", "Biologic Billing Certified", "All Payers"].map(b => (
                  <span key={b} className="flex items-center gap-1.5 text-violet-200">
                    <CheckCircle2 className="w-4 h-4 text-green-400" /> {b}
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
                <Icon className="w-7 h-7 text-violet-600 mb-2" />
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
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80"
                alt="Rheumatology billing specialists managing biologic infusion J-codes and prior authorizations"
                className="rounded-2xl shadow-2xl w-full object-cover h-[480px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-violet-100 rounded-lg flex items-center justify-center">
                    <Zap className="w-6 h-6 text-violet-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">37%</div>
                    <div className="text-xs text-gray-500">Average Revenue Increase</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="text-violet-600 font-semibold text-sm uppercase tracking-wide">Comprehensive Rheumatology Billing</span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
                Specialized Billing for Rheumatology Practices &amp; Infusion Centers
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Rheumatology billing involves some of the highest-cost medications in medicine — biologics that cost thousands per infusion. Incorrect J-code unit calculation, lapsed prior authorizations, or infusion hierarchy errors can cost your practice tens of thousands in lost or denied revenue. Our rheumatology billing team prevents every one of these losses.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <Check className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Rheumatology Billing Services</h2>
            <p className="text-gray-600 text-lg">End-to-end revenue cycle management for every rheumatology service from infusions to joint injections.</p>
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
      <section className="py-20 bg-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Rheumatology Billing Codes</h2>
            <p className="text-gray-600">Key J-codes and CPT codes used in rheumatology — accurately applied to capture full drug and administration reimbursement.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-violet-700 text-white">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Code</th>
                  <th className="px-6 py-4 text-left font-semibold">Description</th>
                  <th className="px-6 py-4 text-left font-semibold">Reimbursement Basis</th>
                </tr>
              </thead>
              <tbody>
                {cptCodes.map(({ code, desc, fee }, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-violet-50/40"}>
                    <td className="px-6 py-4 font-mono font-semibold text-violet-700">{code}</td>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Common Rheumatology Billing Challenges — Solved</h2>
            <p className="text-gray-600">The most costly billing errors in rheumatology and exactly how our specialists prevent them.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Rheumatology Billing FAQs</h2>
            <p className="text-gray-600">Answers to the most common rheumatology billing questions from practice administrators and physicians.</p>
          </div>
          <div className="space-y-4">
            {faqs.map(({ q, a }, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <button className="w-full flex items-center justify-between px-6 py-5 text-left" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <span className="font-semibold text-gray-900 pr-4">{q}</span>
                  {openFaq === i ? <ChevronUp className="w-5 h-5 text-violet-600 shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 shrink-0" />}
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
      <section className="py-20 bg-gradient-to-r from-violet-700 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Protect Your Biologic Infusion Revenue?</h2>
            <p className="text-violet-100 text-lg mb-8">Get a free billing audit and find out if your practice is correctly billing J-codes, administration units, and drug waste — before a payer audit does.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-white text-violet-800 font-semibold px-8 py-3 rounded-lg hover:bg-violet-50 transition-colors">
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

export default Rheumatology;
