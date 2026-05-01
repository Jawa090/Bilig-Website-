import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  BadgeCheck, Check, ArrowRight, Clock, ShieldCheck,
  TrendingUp, AlertTriangle, ChevronDown, ChevronUp, Users, FileText
} from "lucide-react";

const features = [
  "New provider payer enrollment",
  "CAQH profile creation & maintenance",
  "Proactive expiration & re-validation tracking",
  "Re-credentialing & re-validation management",
  "Medicare and Medicaid enrollment (855I/B)",
  "Payer contract review & negotiations",
  "Hospital privileges & medical staff credentialing",
  "Group enrollment & NPI management",
];

const stats = [
  { icon: Clock, value: "30–60d", label: "Average Enrollment Timeline" },
  { icon: TrendingUp, value: "100%", label: "Application Follow-Through" },
  { icon: Users, value: "500+", label: "Providers Credentialed" },
  { icon: ShieldCheck, value: "Zero", label: "Network Gaps Allowed" },
];

const enrollmentTypes = [
  { title: "Medicare & Medicaid", desc: "Complete CMS enrollment including 855I, 855B, PECOS applications, and CLIA updates for all provider types." },
  { title: "Commercial Payers", desc: "In-network enrollment with BCBS, Aetna, Cigna, UnitedHealthcare, Humana, and hundreds of regional carriers." },
  { title: "CAQH ProView", desc: "Initial setup, attestation, and ongoing quarterly updates to keep your CAQH profile current and approved." },
  { title: "Hospital Privileges", desc: "Primary source verification (PSV), hospital credentialing applications, and medical staff committee processing." },
  { title: "Group Enrollment", desc: "Multi-provider group contracting, TIN management, and linking individual providers to group entities." },
  { title: "Managed Care Contracts", desc: "Review, negotiate, and manage your managed care payer contracts to maximize reimbursement rates." },
];

const timeline = [
  { step: "Week 1", title: "Information Gathering & Application Prep", desc: "We collect all required provider documentation: DEA, licenses, malpractice coverage, work history, and education records." },
  { step: "Week 2", title: "CAQH Setup & Primary Source Verification", desc: "CAQH profile is created or updated. Primary source verification is completed with all licensing and education boards." },
  { step: "Week 3–4", title: "Application Submission", desc: "Completed applications are submitted to all target payers simultaneously with tracking numbers recorded." },
  { step: "Week 4–8", title: "Active Follow-Up", desc: "Our team follows up with payers weekly, responds to requests for additional information, and monitors application status." },
  { step: "Week 8–12", title: "Approval & Effective Date Confirmation", desc: "We confirm effective dates, obtain par ID numbers, and ensure billing can commence without interruption." },
  { step: "Ongoing", title: "Maintenance & Expiration Tracking", desc: "We track all expiration dates — licenses, DEA, malpractice, CAQH attestations — and alert you 90 days in advance." },
];

const faqs = [
  {
    q: "How long does the credentialing process take?",
    a: "Credentialing timelines vary by payer, but typically range from 30–120 days for commercial payers and 60–90 days for Medicare/Medicaid. We use parallel processing and proactive follow-up to achieve the fastest possible approval times.",
  },
  {
    q: "Can you credential providers in all 50 states?",
    a: "Yes. We handle provider credentialing and enrollment nationwide across all states and U.S. territories. We are familiar with state-specific licensing requirements, Medicaid enrollment portals, and regional payer networks.",
  },
  {
    q: "What happens if a provider's credentialing lapses?",
    a: "A lapse in credentialing means the provider cannot be reimbursed by that payer — and any claims submitted during a lapse may be denied or clawed back. Our proactive renewal tracking prevents any lapse from occurring. We send alerts 90 days before any expiration.",
  },
  {
    q: "Do you handle CAQH updates and re-attestations?",
    a: "Yes. We manage the complete CAQH ProView lifecycle including initial setup, quarterly attestation deadlines, and updates to provider information such as address changes, new hospital affiliations, and malpractice updates.",
  },
  {
    q: "Can you help a new practice get in-network with multiple payers?",
    a: "Absolutely. New practice setup is one of our core specialties. We handle complete payer contracting from scratch, including NPI registration, group enrollment, Medicare enrollment, and simultaneous commercial payer applications.",
  },
];

const MedicalCredentialing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const origin = typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com";
  const canonical = `${origin}/services/medical-credentialing/`;
  const title = "Medical Credentialing Services | Payer Enrollment & CAQH | Optimum Solution";
  const description = "Professional medical credentialing and payer enrollment services. We handle Medicare, Medicaid, and commercial payer enrollment so your providers stay in-network and billing without interruption.";
  const keywords = "medical credentialing, payer enrollment, CAQH setup, provider credentialing, Medicare enrollment, Medicaid enrollment, insurance credentialing, hospital privileges";
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
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
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
              Medical Credentialing Services That Keep You <span className="text-secondary">In-Network</span> & Profitable
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Expert management of payer enrollment, CAQH maintenance, and primary source verification. We ensure your providers stay credentialed, in-network, and billing without a single gap or disruption.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Start Credentialing <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Speak to a Specialist
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
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200"
                  alt="Medical credentialing specialist managing provider payer enrollment applications"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <BadgeCheck size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">500+ Providers</div>
                    <div className="text-slate-500 text-xs">Successfully credentialed</div>
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
                <BadgeCheck size={18} />
                <span>Provider Enrollment</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Stay In-Network, Stay Profitable — Never Miss a Deadline
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Credentialing bottlenecks and enrollment lapses can completely paralyze a provider's ability to bill and collect from insurance. Our dedicated credentialing team manages the entire, complex lifecycle — from initial CAQH setup to ongoing re-credentialing — to eliminate gaps in your network participation status.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We track every expiration date, every application status, and every payer deadline — so you can focus on seeing patients instead of managing administrative chaos.
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
                Let's Get You Credentialed <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enrollment Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Complete Credentialing & Enrollment Services</h2>
            <p className="text-slate-500 max-w-xl mx-auto">We handle every type of payer enrollment and credentialing application across all payer types.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollmentTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <BadgeCheck size={20} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-orange-50 border border-orange-200 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">
              <AlertTriangle size={28} className="text-orange-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-2">A Credentialing Lapse Can Cost Thousands in Denied Claims</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                When a provider's enrollment lapses — even for a single day — any claims submitted during that period can be denied or clawed back by the payer. Retroactive credentialing is rarely granted. Our proactive tracking system prevents lapses entirely.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-700 transition-all text-sm">
                Audit Your Current Credentials <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Credentialing Process Timeline</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A clear, transparent roadmap from application prep to in-network billing.</p>
          </div>
          <div className="space-y-4">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 p-6 bg-white rounded-2xl border border-slate-100 hover:border-primary/30 transition-all"
              >
                <div className="shrink-0 text-center w-20">
                  <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1.5 rounded-xl">{item.step}</span>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Medical Credentialing — FAQs</h2>
            <p className="text-slate-500">Everything you need to know about the credentialing process.</p>
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
              Never Lose a Day of Billing to Credentialing Issues
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Let our credentialing experts manage your entire payer enrollment portfolio — so you can bill from day one and never experience a network lapse.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base">
                Start Credentialing Today <ArrowRight size={18} />
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

export default MedicalCredentialing;
