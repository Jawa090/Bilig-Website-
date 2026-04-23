import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Search, Check, ArrowRight, ShieldCheck, TrendingUp,
  DollarSign, AlertTriangle, ChevronDown, ChevronUp, FileText, BookOpen, Target
} from "lucide-react";

const features = [
  "Comprehensive charge capture identification",
  "Regulatory compliance risk assessment",
  "Payer contract auditing & verification",
  "Clinical documentation gap analysis",
  "Actionable remediation plans with ROI",
  "Pre-payment and post-payment reviews",
  "E&M level validation & optimization",
  "Modifier usage accuracy review",
];

const stats = [
  { icon: DollarSign, value: "15–20%", label: "Average Revenue Uncovered" },
  { icon: ShieldCheck, value: "100%", label: "Compliance Protection" },
  { icon: TrendingUp, value: "ROI+", label: "Positive Return Guaranteed" },
  { icon: Target, value: "OIG", label: "Audit Risk Reduction" },
];

const auditTypes = [
  { icon: Search, title: "Prospective (Pre-Billing) Audit", desc: "Review claims before submission to catch coding errors, documentation deficiencies, and compliance issues — preventing denials and protecting against future audits." },
  { icon: FileText, title: "Retrospective (Post-Payment) Audit", desc: "Systematic review of paid claims to identify under-coding, missed charges, and overpayment risk — with a full remediation roadmap." },
  { icon: BookOpen, title: "E&M Audit", desc: "In-depth evaluation of Evaluation & Management coding levels against documentation to ensure accurate and compliant level selection." },
  { icon: ShieldCheck, title: "Compliance Audit", desc: "Comprehensive review of billing practices against OIG guidelines, LCD/NCD policies, and payer-specific billing rules to identify and mitigate risk." },
  { icon: DollarSign, title: "Payer Contract Audit", desc: "Verification that payers are reimbursing according to your contracted rates, with identification of underpayments and systematic underpayment recovery." },
  { icon: AlertTriangle, title: "RAC Audit Preparation", desc: "Pre-audit preparation to ensure your documentation, coding, and billing practices are fully defensible against Recovery Audit Contractor (RAC) review." },
];

const riskAreas = [
  { risk: "Under-Coding", color: "bg-blue-100 text-blue-700 border-blue-200", desc: "Consistently coding visits at lower E&M levels than documented can cost a single-physician practice $50,000–$100,000 per year in lost revenue." },
  { risk: "Over-Coding", color: "bg-red-100 text-red-700 border-red-200", desc: "Billing at higher levels than documentation supports creates significant OIG audit risk, resulting in recoupment, penalties, and potential exclusion." },
  { risk: "Upcoding", color: "bg-orange-100 text-orange-700 border-orange-200", desc: "Billing for a more complex or expensive procedure than was actually performed is a False Claims Act violation with severe legal consequences." },
  { risk: "Unbundling", color: "bg-purple-100 text-purple-700 border-purple-200", desc: "Billing component procedures separately when they should be bundled into a comprehensive code triggers NCCI edit violations and payer audits." },
];

const process = [
  { step: "01", title: "Audit Scope & Sample Selection", desc: "We define the audit scope, time period, and select a statistically valid random sample of claims for review using industry-standard sampling methodology." },
  { step: "02", title: "Documentation Retrieval", desc: "Clinical notes, encounter documentation, orders, and supporting records are retrieved for each sampled claim for comprehensive review." },
  { step: "03", title: "Code & Documentation Review", desc: "Certified auditors compare submitted codes against clinical documentation, applying current coding guidelines, LCD/NCD policies, and payer rules." },
  { step: "04", title: "Error Rate Calculation", desc: "Error rates are calculated by category (under-coding, over-coding, compliance, documentation) and extrapolated to estimate total financial impact." },
  { step: "05", title: "Findings Report & ROI Analysis", desc: "A comprehensive audit report is delivered with all findings, error rates, financial impact analysis, and prioritized remediation recommendations." },
  { step: "06", title: "Education & Implementation Support", desc: "We provide targeted provider education, documentation templates, and ongoing monitoring to implement corrections and prevent recurrence." },
];

const faqs = [
  {
    q: "How often should a medical practice conduct a billing audit?",
    a: "The OIG recommends annual billing audits as part of a robust compliance program. High-risk specialties or practices that have recently received a denial letter, overpayment demand, or government inquiry should conduct audits more frequently — quarterly or semi-annually.",
  },
  {
    q: "What is the typical ROI on a medical billing audit?",
    a: "Audits consistently yield significant positive ROI. Through recovered under-coded revenue alone, most practices recover 3–5x the cost of the audit within the first billing cycle. Compliance protection from potential audit penalties represents additional immeasurable value.",
  },
  {
    q: "Will an audit disrupt my practice's daily operations?",
    a: "No. Our audit process is designed to be minimally disruptive. We work off-hours when possible, use electronic record access, and coordinate with your billing team to ensure zero interference with your normal patient care and billing workflows.",
  },
  {
    q: "What happens if our audit finds compliance issues?",
    a: "Audit findings are delivered confidentially with a prioritized remediation roadmap. We work with you to implement corrective actions immediately, including provider education, documentation improvement, and process changes. Finding and self-correcting issues proactively is always preferable to a payer or government audit.",
  },
  {
    q: "Can you help us prepare for a RAC or OIG audit?",
    a: "Yes. We specialize in pre-audit preparation including risk assessment, documentation strengthening, and mock audit exercises. We also provide representation support and response preparation if you've already received an audit notice.",
  },
];

const MedicalAudit = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const origin = typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com";
  const canonical = `${origin}/services/medical-audit/`;
  const title = "Medical Billing Audit Services | Compliance & Revenue Recovery | Optimum Solution";
  const description = "Professional medical billing audit services that identify lost revenue, protect against compliance risk, and provide actionable improvement plans for healthcare practices. 15-20% revenue uncovered.";
  const keywords = "medical billing audit, compliance audit, coding audit, E&M audit, RAC audit preparation, billing compliance, revenue audit, OIG compliance";
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
      {/* Hero */}
      <section className="bg-gradient-hero py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Optimum Billing Solutions</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Medical Billing Audit Services That <span className="text-secondary">Protect</span> & Grow Your Practice
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Identify lost revenue opportunities and eliminate compliance risks before they become costly problems. Our professional audits safeguard your practice's financial health and regulatory standing.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Schedule a Free Audit <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Speak to an Auditor
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div className="text-3xl font-extrabold text-dark mb-1">{s.value}</div>
                <div className="text-slate-500 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
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
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                  alt="Medical billing auditor reviewing clinical documentation and coding compliance records"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <DollarSign size={22} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">15–20% More Revenue</div>
                    <div className="text-slate-500 text-xs">Typically uncovered per audit</div>
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <Search size={18} />
                <span>Billing Compliance & Audit</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Protect Your Practice from Compliance Risk & Revenue Loss
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Operating without periodic billing audits is operating blind. Our specialized auditors perform deep-dive reviews of your billing practices — simultaneously uncovering missed revenue opportunities from under-coding and protecting you from the severe penalties associated with over-coding and compliance violations.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Every audit comes with a clear, prioritized remediation roadmap and provider education to ensure identified issues are permanently corrected — not just documented.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-secondary" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule a Free Audit <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Audit Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Comprehensive Audit Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Every type of billing audit your practice needs, performed by certified specialists.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {auditTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <type.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Areas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Common Billing Risk Areas We Identify</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our audits specifically target the highest-impact risk areas that affect your revenue and compliance posture.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {riskAreas.map((area, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-6 border ${area.color}`}
              >
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-3 ${area.color}`}>{area.risk}</span>
                <p className="text-slate-700 text-sm leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Systematic Audit Methodology</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A rigorous, evidence-based audit process that delivers actionable results.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="text-3xl font-extrabold text-primary/20 leading-none shrink-0 w-10">{p.step}</div>
                <div>
                  <h3 className="font-bold text-dark mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Medical Billing Audit — FAQs</h2>
            <p className="text-slate-500">Answers to common questions about our audit process.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-dark hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? <ChevronUp size={18} className="text-primary shrink-0" /> : <ChevronDown size={18} className="text-slate-400 shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">{faq.a}</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Find Out What Your Billing Audit Will Reveal
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Most practices are surprised by both the revenue they're missing and the compliance risks they're unknowingly carrying. A professional audit changes that.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base">
                Schedule a Free Audit <ArrowRight size={18} />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base">
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MedicalAudit;
