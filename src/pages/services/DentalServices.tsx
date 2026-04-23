import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Activity, Check, ArrowRight, DollarSign, TrendingUp,
  ShieldCheck, Clock, ChevronDown, ChevronUp, Star,
  ClipboardList, Users, FileText, AlertCircle, CheckCircle2,
  BarChart2, Zap, PhoneCall, HeartPulse
} from "lucide-react";

const features = [
  "Full CDT code assignment & review",
  "Dental insurance eligibility verification",
  "Electronic claim submission within 24 hours",
  "Predetermination of benefits processing",
  "Coordination of benefits (COB) management",
  "Aggressive A/R follow-up & appeal management",
  "Fee schedule analysis & optimization",
  "Patient billing & statement management",
  "Missing tooth clause & frequency limitation review",
  "EOB reconciliation & payment posting",
  "Audit-ready documentation support",
  "Real-time reporting & revenue dashboards",
];

const stats = [
  { icon: TrendingUp, value: "97%", label: "First-Pass Acceptance Rate" },
  { icon: DollarSign, value: "25%", label: "Average Revenue Increase" },
  { icon: Clock, value: "24h", label: "Claim Submission Time" },
  { icon: ShieldCheck, value: "HIPAA", label: "Fully Compliant" },
];

const dentalSpecialties = [
  {
    title: "General Dentistry",
    icon: HeartPulse,
    color: "bg-blue-100 text-blue-600",
    desc: "Complete billing coverage for preventive care (D1000–D1999), restorations (D2000–D2999), oral surgery, and all general dental procedures under standard ADA CDT codes. We manage routine cleanings, fillings, extractions, and periodontal maintenance with 100% accuracy.",
    codes: ["D0120 – Periodic Oral Evaluation", "D1110 – Adult Prophylaxis", "D2140 – Amalgam Restoration", "D2391 – Composite Resin"]
  },
  {
    title: "Orthodontics",
    icon: Activity,
    color: "bg-purple-100 text-purple-600",
    desc: "Specialized orthodontic billing for banded and bracketed appliances, retainers, and complex staged payment plan management. We handle records charges, banding fees, and monthly observation charges with payer-specific rules for orthodontic benefit duration.",
    codes: ["D8010 – Limited Orthodontic Treatment", "D8080 – Comprehensive Ortho (Adolescent)", "D8660 – Pre-Orthodontic Exam", "D8670 – Periodic Orthodontic Treatment Visit"]
  },
  {
    title: "Oral & Maxillofacial Surgery",
    icon: ShieldCheck,
    color: "bg-red-100 text-red-600",
    desc: "Complex surgical billing with medical/dental coordination for procedures covered under both medical (ICD-10/CPT) and dental (CDT) benefits. We manage anesthesia billing, implant placement, wisdom tooth extractions, and jaw surgery cross-billing.",
    codes: ["D7110 – Single Tooth Extraction", "D7210 – Surgical Extraction", "D7240 – Removal of Impacted Tooth", "D7880 – Occlusal Orthotic Device"]
  },
  {
    title: "Periodontics",
    icon: ClipboardList,
    color: "bg-teal-100 text-teal-600",
    desc: "Precise coding for scaling and root planing (SRP), osseous surgery, soft tissue grafting, crown lengthening, and all periodontal maintenance services. We document medical necessity to support coverage approvals for periodontal treatments.",
    codes: ["D4341 – Scaling & Root Planing (≥4 teeth)", "D4342 – Scaling & Root Planing (1–3 teeth)", "D4267 – Guided Tissue Regeneration", "D4910 – Periodontal Maintenance"]
  },
  {
    title: "Endodontics",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
    desc: "Accurate root canal therapy billing including initial treatment, retreatment, apicoectomy, and pulpotomy under current CDT guidelines. We submit periapical X-rays and clinical documentation to justify procedures and reduce rejection rates.",
    codes: ["D3310 – Root Canal – Anterior", "D3330 – Root Canal – Molar", "D3346 – Retreatment – Anterior", "D3410 – Apicoectomy – Anterior"]
  },
  {
    title: "Prosthodontics & Implants",
    icon: BarChart2,
    color: "bg-green-100 text-green-600",
    desc: "Implant billing coordination covering both the surgical and restorative phases, including crowns, bridges, full arch cases, and dentures. We navigate implant coverage limitations, submit narrative letters, and maximize reimbursement from dental and medical payers.",
    codes: ["D6010 – Implant Body Placement", "D6065 – Implant Crown – Porcelain", "D5110 – Complete Upper Denture", "D6750 – Crown – Porcelain Fused to Metal"]
  },
];

const cdtCategories = [
  { range: "D0100–D0999", name: "Diagnostic", example: "Exams, X-rays, Pathology" },
  { range: "D1000–D1999", name: "Preventive", example: "Cleanings, Sealants, Fluoride" },
  { range: "D2000–D2999", name: "Restorative", example: "Fillings, Inlays, Crowns" },
  { range: "D3000–D3999", name: "Endodontics", example: "Root Canals, Pulpotomy" },
  { range: "D4000–D4999", name: "Periodontics", example: "SRP, Osseous Surgery" },
  { range: "D5000–D5899", name: "Prosthodontics – Removable", example: "Dentures, Partials" },
  { range: "D6000–D6199", name: "Implant Services", example: "Implant Placement, Crowns" },
  { range: "D7000–D7999", name: "Oral & Maxillofacial Surgery", example: "Extractions, Jaw Surgery" },
  { range: "D8000–D8999", name: "Orthodontics", example: "Braces, Retainers, Space Maintainers" },
  { range: "D9000–D9999", name: "Adjunctive Services", example: "Anesthesia, Sedation, TMJ" },
];

const insurancePayers = [
  { name: "Delta Dental", note: "Largest US dental network – alternate benefit rules apply" },
  { name: "MetLife Dental", note: "Participating & non-PAR billing, COB management" },
  { name: "Cigna Dental", note: "DHMO & DPPO plan differentiation expertise" },
  { name: "Aetna Dental", note: "Missing tooth clause & waiting period management" },
  { name: "United Concordia", note: "Military & TRICARE dental billing" },
  { name: "Guardian Dental", note: "Downgrade and alternate benefit appeal specialists" },
  { name: "Humana Dental", note: "HMO/PPO hybrid plan billing" },
  { name: "Ameritas", note: "Annual max tracking & rollover benefit management" },
  { name: "Principal Financial", note: "Group and individual plan coordination" },
  { name: "Medicaid – Dental", note: "State-by-state Medicaid dental billing compliance" },
];

const process = [
  {
    step: "01",
    title: "Insurance Verification & Benefits Check",
    icon: ShieldCheck,
    desc: "Before every appointment, we verify active dental coverage, benefit percentages (preventive/basic/major), annual deductible and maximum, remaining balance, waiting periods, missing tooth clauses, and frequency limitations. This eliminates billing surprises and allows your team to accurately quote patient responsibility upfront.",
  },
  {
    step: "02",
    title: "Predetermination Submission",
    icon: FileText,
    desc: "For major procedures (crowns, implants, bridges, orthodontics), we submit predetermination requests with supporting radiographs and clinical documentation to obtain advance payer approval. This locks in coverage estimates and dramatically reduces unexpected denials after treatment.",
  },
  {
    step: "03",
    title: "CDT Coding & Charge Entry",
    icon: ClipboardList,
    desc: "Our certified dental billing specialists assign the most accurate and clinically supported CDT codes for every procedure. We review procedure notes, X-rays, and periodontal charting to ensure complete and defensible code selection — minimizing undercoding and audit exposure simultaneously.",
  },
  {
    step: "04",
    title: "Electronic Claim Submission with Attachments",
    icon: Zap,
    desc: "Claims are submitted electronically within 24 hours of service. All required attachments — bitewing and periapical X-rays, clinical photographs, periodontal charting, narrative letters — are included at submission via our clearinghouse integration to reduce requests for information and accelerate payment.",
  },
  {
    step: "05",
    title: "ERA / EOB Posting & Patient Billing",
    icon: DollarSign,
    desc: "Electronic Remittance Advice (ERA) and paper EOBs are posted with precise patient balance calculations, including COB adjustments. Patient statements are generated with clear itemizations, and we manage payment plans, collections communication, and patient balance follow-up.",
  },
  {
    step: "06",
    title: "A/R Follow-Up, Downgrades & Appeals",
    icon: AlertCircle,
    desc: "Unpaid and underpaid dental claims are followed up aggressively at 30/60/90 day intervals. Payer downgrades (e.g., composite paid as amalgam), alternative benefit denials, and bundling issues are appealed with ADA clinical guidelines, peer-reviewed literature, and detailed clinical narratives — winning back revenue your practice is owed.",
  },
];

const challenges = [
  {
    problem: "Missing Tooth Clause Denials",
    impact: "Claims denied when the tooth was extracted before coverage started",
    solution: "We document extraction dates and cross-reference policy effective dates to appeal or pre-screen coverage before treatment planning.",
  },
  {
    problem: "Downgrade / Alternate Benefit Provisions",
    impact: "Composite restorations paid at amalgam rates, crowns downgraded to fillings",
    solution: "We identify downgrade-susceptible procedures upfront and prepare clinical justification narratives to contest least-expensive alternative treatment (LEAT) provisions.",
  },
  {
    problem: "Frequency Limitation Errors",
    impact: "Claims denied because payer believes a covered service was performed too recently",
    solution: "We track procedure history by tooth surface and service type, ensuring claims are submitted with correct dates and flagging potential frequency conflicts before submission.",
  },
  {
    problem: "Dual Coverage / COB Mistakes",
    impact: "Primary and secondary claims not coordinated — patients overcharged or practice underpaid",
    solution: "We process primary and secondary claims in correct sequence with proper COB methodology (Non-Duplication vs. Maintenance of Benefits) to maximize total reimbursement.",
  },
];

const testimonials = [
  {
    name: "Dr. Sarah Patel, DDS",
    role: "General Dentist – Multi-location Practice, Texas",
    quote: "Since switching to Optimum Billing, our collections jumped 31% in the first quarter. Their team caught $47,000 in downgrades we didn't even know we were losing. I wish we had made the switch years earlier.",
    stars: 5,
  },
  {
    name: "Dr. Michael Torres, DMD",
    role: "Oral Surgeon – Single Practice, California",
    quote: "Oral surgery billing across medical and dental is extremely complex. Optimum's team handles our medical/dental cross-billing flawlessly — our denial rate dropped from 18% to under 4% in 60 days.",
    stars: 5,
  },
  {
    name: "Jennifer Walsh, Office Manager",
    role: "Pediatric Dental Group – New York",
    quote: "We were spending 30+ hours a week on billing in-house. Now that's completely off our plate and our A/R under 90 days dropped to under 5%. The ROI is undeniable.",
    stars: 5,
  },
];

const faqs = [
  {
    q: "What dental software systems are you compatible with?",
    a: "We work with all major dental practice management systems including Dentrix, Eaglesoft, Open Dental, Curve Dental, Carestream Dental (WinOMS), Dolphin Management, Fuse, Dentimax, and many more. Our billers integrate directly into your existing workflow — no software change required.",
  },
  {
    q: "Do you handle dental insurance verification before appointments?",
    a: "Yes — pre-appointment insurance verification is a core component of our dental billing service. We verify active coverage, benefit levels (preventive/basic/major percentages), remaining annual maximum, deductibles, waiting periods, missing tooth clauses, and specific procedure coverage before every scheduled appointment. This eliminates billing surprises and allows you to quote accurate patient responsibility at check-in.",
  },
  {
    q: "Can you help with dental insurance downgrades and alternative benefit denials?",
    a: "Absolutely. Downgrades (e.g., composite billed but paid at amalgam rate) and alternative benefit provisions are among the most common — and costly — dental billing challenges. Our team identifies these situations during coding review, prepares clinical necessity documentation, and files formal appeals citing ADA clinical guidelines to maximize your reimbursement beyond the payer's 'least expensive alternative treatment' rule.",
  },
  {
    q: "Do you submit X-rays and clinical attachments with claims?",
    a: "Yes. We submit electronic attachments including bitewings, periapicals, panoramic X-rays, full-mouth series, clinical photographs, and periodontal charting directly with claims via our clearinghouse integration. Submitting supporting documentation at the time of initial claim dramatically reduces requests for additional information and accelerates payment timelines.",
  },
  {
    q: "How do you handle coordination of benefits (COB) for dual-coverage patients?",
    a: "COB is a specialized and frequently mishandled aspect of dental billing. We process primary and secondary claims in the correct sequence, applying the appropriate COB methodology (Non-Duplication, Maintenance of Benefits, or Birthday Rule for dependents) specific to each payer. Our team ensures maximum total benefit utilization while correctly calculating patient responsibility — preventing overpayment and under-collection.",
  },
  {
    q: "How quickly can you start managing our dental billing?",
    a: "Most practices go live within 5–10 business days. Our onboarding team will collect practice credentials, payer information, and access to your practice management software. We typically complete a billing audit during onboarding to identify immediate revenue recovery opportunities before regular billing begins.",
  },
  {
    q: "Do you handle Medicaid dental billing?",
    a: "Yes. We have extensive experience with state Medicaid dental programs across multiple states. Medicaid dental billing has unique documentation requirements, prior authorization rules, and fee schedule constraints that differ significantly from commercial payers. Our team ensures compliant billing that maximizes Medicaid reimbursement while protecting your practice from audit risk.",
  },
  {
    q: "What is your fee structure for dental billing services?",
    a: "We operate on a percentage-of-collections model with no monthly minimums or setup fees — meaning we only succeed when you get paid. This aligns our incentives with your practice's financial performance. Contact us for a custom quote based on your practice's volume and specialty.",
  },
];

const DentalServices = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Dental Billing Services | CDT Coding & Insurance Specialists | Optimum Billing Solutions";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      (meta as HTMLMetaElement).name = "description";
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "Expert dental billing services for all specialties — general dentistry, orthodontics, oral surgery, periodontics, endodontics, and implants. CDT coding, insurance verification, predetermination, A/R management, downgrade appeals, and COB coordination. HIPAA compliant. 97% first-pass acceptance rate.");

    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      (keywords as HTMLMetaElement).name = "keywords";
      document.head.appendChild(keywords);
    }
    keywords.setAttribute("content", "dental billing services, CDT coding, dental insurance billing, dental revenue cycle management, dental A/R management, dental claim submission, predetermination, coordination of benefits dental, dental billing company, orthodontic billing, implant billing, oral surgery billing, periodontics billing, dental credentialing");
  }, []);

  return (
    <Layout>

      {/* ── HERO ── */}
      <section className="bg-gradient-hero py-28 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/30 rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-white/20 mb-6">
              <HeartPulse size={14} /> Dental Billing Specialists
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Dental Billing Services Built to{" "}
              <span className="text-secondary">Maximize</span> Your Practice Revenue
            </h1>
            <p className="text-lg text-white/85 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
              Specialized revenue cycle management for dental practices of all sizes and specialties. From CDT coding and insurance verification to predetermination, claim submission, downgrade appeals, and patient collections — we handle every step so you can focus entirely on your patients' smiles.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-base"
              >
                Get a Free Dental Billing Audit <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                <PhoneCall size={17} /> Talk to a Dental Billing Specialist
              </a>
            </div>
            {/* trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {["HIPAA Compliant", "ADA CDT Certified Coders", "All 50 States", "No Setup Fees"].map((badge) => (
                <span key={badge} className="flex items-center gap-2 text-white/70 text-sm font-medium">
                  <CheckCircle2 size={15} className="text-secondary" /> {badge}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <s.icon size={24} className="text-primary" />
                </div>
                <div className="text-4xl font-extrabold text-dark mb-1">{s.value}</div>
                <div className="text-slate-500 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN CONTENT (image + copy) ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200"
                  alt="Dental billing specialist processing CDT codes and dental insurance claims at a dental practice"
                  className="w-full h-[480px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-13 h-13 rounded-xl bg-teal-100 flex items-center justify-center p-3">
                    <Activity size={22} className="text-teal-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">97% Clean Claims</div>
                    <div className="text-slate-500 text-xs">First-pass acceptance rate</div>
                  </div>
                </div>
                <div className="absolute -top-5 -left-5 bg-white rounded-2xl shadow-xl p-4 flex items-center gap-3 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp size={18} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark">+25% Revenue</div>
                    <div className="text-slate-500 text-xs">Average practice growth</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-100 text-teal-700 font-semibold text-sm mb-6">
                <Activity size={16} /> Dental Revenue Cycle Experts
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Dental Billing Is a Specialty — <span className="text-primary">We Know It Inside Out</span>
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Dental billing is fundamentally different from medical billing. It requires a unique mastery of CDT code sets, payer-specific rules, and coverage nuances that generalist billers regularly miss — missing tooth clauses, waiting periods, frequency limitations, downgrade provisions, dual coverage coordination, and medical/dental cross-billing for surgical cases.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                At Optimum Billing Solutions, our dental billing specialists are trained exclusively in dental RCM. We handle everything from pre-appointment verification and predetermination through CDT coding, electronic submission, payment posting, and aggressive appeals — so your practice collects every dollar it earns without the administrative burden.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-teal-600" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Maximizing Your Dental Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── DENTAL SPECIALTIES ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">All Specialties Covered</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Expert Billing for Every Dental Specialty</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From routine preventive care to complex implant and surgical cases, our dental billing team is trained in every dental specialty with deep expertise in specialty-specific CDT codes, payer rules, and documentation standards.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {dentalSpecialties.map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-lg hover:border-primary/20 transition-all group"
              >
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${spec.color}`}>
                  <spec.icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-dark mb-3 group-hover:text-primary transition-colors">{spec.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{spec.desc}</p>
                <div className="space-y-1.5">
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Common CDT Codes</p>
                  {spec.codes.map((code, ci) => (
                    <div key={ci} className="flex items-center gap-2 text-xs text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/40 shrink-0" />
                      {code}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CDT CODE CATEGORIES TABLE ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">ADA CDT Code Sets</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Complete CDT Code Coverage — All 10 Categories</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              The ADA's Current Dental Terminology (CDT) code set contains over 700 codes across 10 major categories. Our billers are proficient in all CDT categories and stay current with annual CDT updates.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="text-left px-6 py-4 font-semibold">CDT Range</th>
                  <th className="text-left px-6 py-4 font-semibold">Category</th>
                  <th className="text-left px-6 py-4 font-semibold hidden md:table-cell">Examples</th>
                </tr>
              </thead>
              <tbody>
                {cdtCategories.map((cat, i) => (
                  <motion.tr
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`border-t border-slate-100 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"} hover:bg-primary/5 transition-colors`}
                  >
                    <td className="px-6 py-4 font-mono text-primary font-semibold">{cat.range}</td>
                    <td className="px-6 py-4 font-semibold text-dark">{cat.name}</td>
                    <td className="px-6 py-4 text-slate-500 hidden md:table-cell">{cat.example}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── COMMON BILLING CHALLENGES ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-red-500 font-bold text-xs tracking-widest uppercase block mb-3">Revenue Leaks We Fix</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">The Costliest Dental Billing Challenges — Solved</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Dental billing has unique pitfalls that silently drain practice revenue. Here's how we tackle the four biggest revenue killers in dental billing:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            {challenges.map((ch, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-md transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                    <AlertCircle size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark text-base mb-1">{ch.problem}</h3>
                    <p className="text-red-500 text-sm font-medium">Impact: {ch.impact}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-teal-50 rounded-xl p-4">
                  <CheckCircle2 size={18} className="text-teal-600 shrink-0 mt-0.5" />
                  <p className="text-teal-800 text-sm leading-relaxed font-medium">{ch.solution}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE PAYERS ── */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">Payer Expertise</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">All Major Dental Insurance Payers</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We have deep, payer-specific knowledge of every major dental insurance carrier in the US — including their unique fee schedules, downgrade rules, and documentation requirements.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {insurancePayers.map((payer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-primary/5 hover:border-primary/20 transition-all"
              >
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <ShieldCheck size={17} className="text-primary" />
                </div>
                <div>
                  <p className="font-bold text-dark text-sm">{payer.name}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{payer.note}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-24 bg-gradient-to-br from-primary/5 to-teal-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">Our Workflow</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Dental Billing Process — Step by Step</h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              A proven, end-to-end revenue cycle workflow purpose-built for dental practices.
            </p>
          </div>
          <div className="space-y-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-7 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="shrink-0 flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white font-extrabold text-lg">
                    {p.step}
                  </div>
                  {i < process.length - 1 && <div className="w-0.5 h-8 bg-primary/20" />}
                </div>
                <div className="pt-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <p.icon size={16} className="text-primary" />
                    </div>
                    <h3 className="font-bold text-dark text-lg">{p.title}</h3>
                  </div>
                  <p className="text-slate-500 leading-relaxed text-sm">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOFTWARE INTEGRATIONS BANNER ── */}
      <section className="py-14 bg-white border-y border-slate-100">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-8">
            <p className="text-slate-400 font-semibold text-sm uppercase tracking-widest">Compatible with All Major Dental Software</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {["Dentrix", "Eaglesoft", "Open Dental", "Curve Dental", "Dolphin", "Carestream", "Fuse", "Dentimax", "WinOMS", "Orthotrac"].map((sw) => (
              <span key={sw} className="px-5 py-2.5 bg-slate-100 rounded-full text-sm font-semibold text-slate-600 hover:bg-primary/10 hover:text-primary transition-colors">
                {sw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── GIVE YOUR PRACTICE A BOOST ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Give Your Practice A Boost</h2>
            <p className="text-slate-500 max-w-xl mx-auto">We will help your practice reach its highest potential.</p>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                title: "Dental SEO",
                desc: "Our dental SEO experts will bring your website within reach of your potential patients, at no added cost of advertisement. Reach more patients looking out for dental treatments with EZDDS dental SEO services."
              },
              {
                title: "Dental PPC Advertising",
                desc: "We combine great SEO with smart dental PPC management (pay-per-click advertising) to get your website at the top of your potential patients' search results and bring newer patients into your clinic."
              },
              {
                title: "Dental Website Development",
                desc: "Get a stunning dental website design to captivates the visitors reading about your practice through your SEO and PPC. Our expert dental website designers create attractive and functional dental websites that quickly convert your visitors into patient appointments."
              },
              {
                title: "Branding and Design",
                desc: "EZDDS creates the logo and brand identity that is a true reflection of the values and vision of your dental practice. Distinguish yourself from your competition and attract more patients with incredible designs."
              },
              {
                title: "Dental Social Media Marketing",
                desc: "With latest techniques in social media for dental offices, EZDDS creates a social media dental marketing strategy designed to attract and convert potential patients near you."
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Activity size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-dark text-base mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">Client Results</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">What Dental Practices Say About Us</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Real results from dental practices that partnered with Optimum Billing Solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="flex gap-1 mb-5">
                  {[...Array(t.stars)].map((_, s) => (
                    <Star key={s} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users size={18} className="text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY DENTAL BILLING IS DIFFERENT ── */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100/60 border border-teal-200 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-3xl bg-teal-100 flex items-center justify-center shrink-0 shadow-inner">
              <Star size={32} className="text-teal-600" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-dark mb-3">Why Dental Billing Demands Specialized Expertise</h3>
              <p className="text-slate-600 leading-relaxed mb-3">
                Dental insurance operates on rules that don't exist in medical billing: annual maximums that reset on a calendar or policy year, missing tooth clauses that deny coverage for pre-existing extractions, frequency limitations that restrict prophylaxis to twice per year, and downgrade provisions that pay for "the least expensive alternative" rather than what was actually performed.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                Layered on top are dual-insurance coordination rules, orthodontic lifetime maximums, implant exclusions, and the complexity of billing surgical procedures under both dental (CDT) and medical (ICD-10/CPT) benefit simultaneously. Generalist billers miss these opportunities every day. Our dental billing specialists are trained exclusively on these nuances.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-teal-700 transition-all text-sm">
                Schedule a Free Dental Billing Consultation <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <span className="text-primary font-bold text-xs tracking-widest uppercase block mb-3">Common Questions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Dental Billing — Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know about our dental billing services.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="border border-slate-200 rounded-2xl overflow-hidden bg-white"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-dark hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="pr-4">{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={18} className="text-primary shrink-0" />
                    : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="px-6 pb-6 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4"
                  >
                    {faq.a}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING SECTIONS ── */}
      
      {/* ── DENTAL BILLING PRICING ── */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Pricing Plans
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Dental Billing Services <span className="text-primary italic">Pricing</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Transparent pricing based on your practice size and volume
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {["Dental Billing Services", "Dental Insurance Verification", "Dental Credentialing"].map((tab, i) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="px-8 py-3.5 rounded-xl bg-white border-2 border-primary text-primary font-bold hover:bg-primary hover:text-white transition-all shadow-sm hover:shadow-lg"
              >
                {tab}
              </motion.button>
            ))}
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { size: "Small", price: "$300", subtitle: "Monthly", claims: "Up to 60 per month", featured: true },
              { size: "Medium", price: "$450", subtitle: "Monthly", claims: "Up to 80 per month", featured: false },
              { size: "Large", price: "$650", subtitle: "Monthly", claims: "Up to 110 per month", featured: false },
              { size: "Enterprise", price: "$750", subtitle: "Monthly", claims: "Up to 150 per month", featured: false },
              { size: "Special Package", price: "Custom", subtitle: "Contact Us", claims: "150+ per month", featured: false }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 border-2 shadow-lg hover:shadow-2xl transition-all duration-300 group ${
                  plan.featured 
                    ? 'bg-gradient-to-br from-primary to-primary/90 text-white border-primary scale-105' 
                    : 'bg-white border-slate-200 hover:border-primary/50'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold">
                    POPULAR
                  </div>
                )}
                
                <h3 className={`text-xl font-bold mb-6 ${plan.featured ? 'text-white' : 'text-dark'}`}>
                  {plan.size}
                </h3>
                
                <div className="mb-6">
                  <div className={`text-5xl font-black mb-2 ${plan.featured ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-sm font-semibold ${plan.featured ? 'text-white/80' : 'text-slate-500'}`}>
                    {plan.subtitle}
                  </p>
                </div>
                
                <p className={`text-sm mb-8 ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                  {plan.claims}
                </p>
                
                <Link
                  to="/contact"
                  className={`block w-full py-3.5 rounded-xl font-bold transition-all text-center ${
                    plan.featured 
                      ? 'bg-white text-primary hover:bg-white/90 shadow-lg' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  GET STARTED
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSURANCE VERIFICATION PRICING ── */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Insurance Verification <span className="text-primary italic">Pricing</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Percentage-based pricing for insurance collections
            </p>
          </div>

          {/* Top 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { size: "Small", rate: "$1199", subtitle: "Monthly", condition: "If the office insurance collections are under $40,000 month", featured: true },
              { size: "Medium", rate: "3.24%", subtitle: "Monthly", condition: "If the office insurance collections are between $40,000 and $100,000", featured: false },
              { size: "Large", rate: "2.75%", subtitle: "Monthly", condition: "If the office insurance collections are between $100,000 and $150,000", featured: false }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative rounded-2xl p-8 border-2 shadow-lg hover:shadow-2xl transition-all duration-300 ${
                  plan.featured 
                    ? 'bg-gradient-to-br from-primary to-primary/90 text-white border-primary' 
                    : 'bg-white border-slate-200 hover:border-primary/50'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold">
                    BEST VALUE
                  </div>
                )}
                
                <h3 className={`text-xl font-bold mb-6 ${plan.featured ? 'text-white' : 'text-dark'}`}>
                  {plan.size}
                </h3>
                
                <div className="mb-6">
                  <div className={`text-5xl font-black mb-2 ${plan.featured ? 'text-white' : 'text-primary'}`}>
                    {plan.rate}
                  </div>
                  <p className={`text-sm font-semibold ${plan.featured ? 'text-white/80' : 'text-slate-500'}`}>
                    {plan.subtitle}
                  </p>
                </div>
                
                <p className={`text-sm leading-relaxed ${plan.featured ? 'text-white/90' : 'text-slate-600'}`}>
                  {plan.condition}
                </p>
                
                <Link
                  to="/contact"
                  className={`block w-full mt-8 py-3.5 rounded-xl font-bold transition-all text-center ${
                    plan.featured 
                      ? 'bg-white text-primary hover:bg-white/90 shadow-lg' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  GET STARTED
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { size: "Business", rate: "2.50%", subtitle: "Monthly", condition: "If the office insurance collections are between $150,000 and $200,000 per month" },
              { size: "Enterprise", rate: "2%", subtitle: "Monthly", condition: "If the office insurance collections are over $200,000 month" },
              { size: "Multi-Location / DSO", rate: "Custom", subtitle: "Contact Us", condition: "For multi-location dental practices, contact us for a tailored solution." }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + 0.3 }}
                className="bg-white rounded-2xl p-8 border-2 border-slate-200 shadow-lg hover:shadow-2xl hover:border-primary/50 transition-all duration-300"
              >
                <h3 className="text-xl font-bold mb-6 text-dark">{plan.size}</h3>
                
                <div className="mb-6">
                  <div className="text-4xl font-black mb-2 text-primary">{plan.rate}</div>
                  <p className="text-sm font-semibold text-slate-500">{plan.subtitle}</p>
                </div>
                
                <p className="text-sm text-slate-600 leading-relaxed">{plan.condition}</p>
                
                <Link
                  to="/contact"
                  className="block w-full mt-8 py-3.5 rounded-xl font-bold bg-primary text-white hover:bg-primary/90 transition-all text-center"
                >
                  GET STARTED
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CREDENTIALING PRICING ── */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-dark mb-6 leading-tight">
              Dental Credentialing <span className="text-primary italic">Pricing</span>
            </h2>
            <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
              Simple per-provider pricing for credentialing services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { type: "Commercial", price: "$199", subtitle: "Per PPO commercial", featured: true },
              { type: "HMO", price: "$299", subtitle: "Per insurance provider", featured: false }
            ].map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className={`relative rounded-2xl p-12 border-2 shadow-xl hover:shadow-2xl transition-all duration-300 text-center ${
                  plan.featured 
                    ? 'bg-gradient-to-br from-primary to-primary/90 text-white border-primary scale-105' 
                    : 'bg-white border-slate-200 hover:border-primary/50'
                }`}
              >
                {plan.featured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-xs font-bold">
                    RECOMMENDED
                  </div>
                )}
                
                <h3 className={`text-2xl font-bold mb-8 ${plan.featured ? 'text-white' : 'text-dark'}`}>
                  {plan.type}
                </h3>
                
                <div className="mb-8">
                  <div className={`text-6xl font-black mb-3 ${plan.featured ? 'text-white' : 'text-primary'}`}>
                    {plan.price}
                  </div>
                  <p className={`text-base font-semibold ${plan.featured ? 'text-white/80' : 'text-slate-500'}`}>
                    {plan.subtitle}
                  </p>
                </div>
                
                <Link
                  to="/contact"
                  className={`block w-full py-4 rounded-xl font-bold text-lg transition-all text-center ${
                    plan.featured 
                      ? 'bg-white text-primary hover:bg-white/90 shadow-lg' 
                      : 'bg-primary text-white hover:bg-primary/90'
                  }`}
                >
                  GET STARTED
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 bg-white/15 text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full border border-white/20 mb-6">
              <HeartPulse size={13} /> Start Today — No Contracts
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Let Your Dental Practice Focus on Smiles.<br className="hidden md:block" />
              <span className="text-secondary">We'll Handle the Billing.</span>
            </h2>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Get a free dental billing assessment and discover exactly how much revenue your practice is leaving behind from claim errors, undercoding, missed downgrades, and unworked A/R.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-9 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-xl text-base"
              >
                Get Free Dental Billing Audit <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-9 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                <PhoneCall size={17} /> Call a Specialist Now
              </a>
            </div>
            <p className="text-white/50 text-sm mt-8">No contracts • No setup fees • Percentage-based pricing — we only win when you get paid</p>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
};

export default DentalServices;
