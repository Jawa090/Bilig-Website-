import { useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ClipboardList, Check, ArrowRight, DollarSign, TrendingUp,
  ShieldCheck, Clock, ChevronDown, ChevronUp, Star, Users, FileText
} from "lucide-react";
import { useState } from "react";

const features = [
  "Daily claim submission & tracking",
  "Specialty-specific claim scrubbing",
  "Aggressive A/R follow-up",
  "Patient statement generation",
  "Detailed monthly financial reporting",
  "Payment posting and reconciliation",
  "Insurance eligibility verification",
  "EOB & ERA processing",
];

const stats = [
  { icon: TrendingUp, value: "98%", label: "First-Pass Clean Claim Rate" },
  { icon: DollarSign, value: "30%", label: "Average Revenue Increase" },
  { icon: Clock, value: "24–48h", label: "Claim Submission Turnaround" },
  { icon: ShieldCheck, value: "HIPAA", label: "Fully Compliant & Secure" },
];

const process = [
  {
    step: "01",
    title: "Eligibility & Benefits Verification",
    desc: "We verify patient insurance eligibility and benefits before every visit to prevent claim rejections at the source.",
  },
  {
    step: "02",
    title: "Charge Capture & Entry",
    desc: "Our certified billers review all encounter notes and enter charges with precision, ensuring every billable service is captured.",
  },
  {
    step: "03",
    title: "Claim Scrubbing & Submission",
    desc: "Every claim passes through rigorous scrubbing checks to catch errors before submission to payers.",
  },
  {
    step: "04",
    title: "Payment Posting & Reconciliation",
    desc: "All insurance payments and patient payments are posted promptly and reconciled against expected amounts.",
  },
  {
    step: "05",
    title: "A/R Follow-Up & Appeals",
    desc: "Unpaid or underpaid claims are aggressively followed up, and denials are appealed with strong supporting documentation.",
  },
  {
    step: "06",
    title: "Reporting & Analytics",
    desc: "Monthly financial reports give you full visibility into your revenue cycle performance and opportunities for growth.",
  },
];

const faqs = [
  {
    q: "What specialties do you support for medical billing?",
    a: "We support over 40 medical specialties including Internal Medicine, Family Practice, Cardiology, Orthopedics, Mental Health, Physical Therapy, Dermatology, and many more. Our team is trained in specialty-specific coding and payer rules.",
  },
  {
    q: "How quickly can you start billing for my practice?",
    a: "Most practices are onboarded and fully operational within 5–7 business days. We work directly with your EHR/PM vendor to ensure a seamless transition with zero disruption to your cash flow.",
  },
  {
    q: "Do you work with all major EHR and practice management systems?",
    a: "Yes. We are experienced with all leading platforms including Epic, Athenahealth, eClinicalWorks, Kareo, AdvancedMD, DrChrono, Modernizing Medicine, and dozens more.",
  },
  {
    q: "What is your fee structure?",
    a: "We charge a competitive percentage of monthly collections with no hidden fees. You only pay when you get paid. Contact us for a customized quote based on your specialty and volume.",
  },
  {
    q: "How do you handle denied claims?",
    a: "Every denied claim is reviewed within 24 hours of receipt. Our denial management team performs root-cause analysis and submits timely appeals with full clinical documentation to maximize recovery.",
  },
];

const MedicalBilling = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const origin = typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com";
  const canonical = `${origin}/services/medical-billing/`;
  const title = "Medical Billing Services | Maximize Revenue & Reduce Denials | Optimum Solution";
  const description = "Professional medical billing services that maximize reimbursement, reduce denials, and accelerate cash flow for healthcare practices of all sizes. 98% first-pass clean claim rate.";
  const keywords = "medical billing services, healthcare billing, claim management, revenue cycle, denial management, medical billing company, practice billing, insurance claims";
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
              Medical Billing Services That <span className="text-secondary">Maximize</span> Your Revenue
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Comprehensive, end-to-end claim management from entry to final payment. We act as a seamless extension of your practice, handling every billing complexity so you can focus entirely on patient care.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Schedule Free Audit <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Call Us Now
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
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200"
                  alt="Medical billing specialist reviewing insurance claims at a computer"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp size={22} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">+30% Revenue</div>
                    <div className="text-slate-500 text-xs">Average client increase</div>
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
                <ClipboardList size={18} />
                <span>Revenue Cycle Excellence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Stop Leaving Money on the Table — We'll Recover It All
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our expert medical billing services are engineered to maximize your legitimate reimbursements while dramatically reducing denial rates. With certified billers who understand your specialty inside-out, we ensure every dollar you've earned is collected quickly and correctly.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                From initial patient registration to final payment reconciliation, our team integrates seamlessly with your practice — becoming an extension of your office without the overhead of in-house staff.
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
                Schedule Free Audit <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Why Practices Choose Optimum Billing</h2>
            <p className="text-slate-500 max-w-xl mx-auto">We're not just a billing company — we're your dedicated revenue partner committed to your financial success.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Star, title: "Certified Expertise", desc: "Our billing team holds active AAPC and AHIMA certifications with specialty-specific training across 40+ medical disciplines." },
              { icon: Users, title: "Dedicated Account Team", desc: "You get a dedicated billing manager who knows your practice, your payers, and your goals — not a rotating call center." },
              { icon: FileText, title: "Full Transparency", desc: "Access real-time dashboards and monthly reports that give you complete visibility into every dollar submitted and collected." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Proven 6-Step Billing Process</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A systematic approach that ensures maximum reimbursement at every stage of the revenue cycle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all"
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

      {/* Second Image Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-dark mb-5">Seamless Integration With Your Existing Workflow</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Switching billing companies doesn't have to be stressful. Our onboarding team handles every detail — EHR access setup, payer enrollment, patient data migration, and staff orientation — so you experience zero disruption to your daily operations or cash flow.
              </p>
              <ul className="space-y-3 mb-8">
                {["Compatible with all major EHR/PM systems", "Dedicated transition manager assigned", "Complete within 5–7 business days", "Zero downtime to your revenue cycle"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check size={16} className="text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md">
                Get Started Today <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200"
                alt="Healthcare team reviewing billing workflows and financial reports"
                className="w-full h-[380px] object-cover rounded-[2rem] shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500">Everything you need to know about our medical billing services.</p>
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
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Ready to Increase Your Practice Revenue?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Schedule a free, no-obligation billing audit and discover how much revenue your practice is leaving uncollected.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base"
              >
                Schedule Free Audit <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default MedicalBilling;
