import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  RefreshCcw, Check, ArrowRight, DollarSign, TrendingUp,
  ShieldCheck, Clock, ChevronDown, ChevronUp, Users, BarChart3, Activity
} from "lucide-react";

const features = [
  "Total financial oversight & auditing",
  "Integrated patient eligibility verification",
  "Comprehensive performance analytics",
  "Quarterly strategic review sessions",
  "Seamless EHR / EMR integrations",
  "End-to-end claim lifecycle management",
  "Prior authorization management",
  "Underpayment identification & recovery",
];

const stats = [
  { icon: DollarSign, value: "35%", label: "Average Net Collection Increase" },
  { icon: TrendingUp, value: "< 30", label: "Days in A/R (avg.)" },
  { icon: Clock, value: "48h", label: "Claim Submission Time" },
  { icon: ShieldCheck, value: "100%", label: "HIPAA & Compliance Secured" },
];

const rcmStages = [
  { num: "1", title: "Pre-Authorization & Scheduling", desc: "Insurance eligibility verification, prior authorization requests, and referral coordination before every patient visit." },
  { num: "2", title: "Patient Registration & Intake", desc: "Accurate collection of demographic and insurance data at intake to eliminate downstream billing errors." },
  { num: "3", title: "Charge Capture", desc: "Real-time charge capture and review ensuring every billable service provided is documented and coded correctly." },
  { num: "4", title: "Claim Submission", desc: "Clean, error-free claims submitted electronically to all payers within 24–48 hours of the patient encounter." },
  { num: "5", title: "Payment Posting", desc: "Timely and accurate posting of all insurance and patient payments with variance analysis and reconciliation." },
  { num: "6", title: "A/R Management", desc: "Proactive follow-up on unpaid and underpaid claims, with escalating actions to recover every dollar owed." },
  { num: "7", title: "Denial Management", desc: "Systematic denial tracking, root-cause analysis, and appeal submission to reverse denials efficiently." },
  { num: "8", title: "Reporting & Optimization", desc: "Monthly and quarterly reporting with strategic insights to continuously optimize your revenue cycle performance." },
];

const benefits = [
  { icon: BarChart3, title: "Improved Cash Flow", desc: "Faster claim turnaround and aggressive A/R follow-up means money in your account faster — predictably every month." },
  { icon: Users, title: "Reduced Overhead", desc: "Eliminate the cost and complexity of in-house billing staff, training, and technology with a single outsourced partner." },
  { icon: Activity, title: "Real-Time Visibility", desc: "Custom dashboards and reports give you 24/7 visibility into your practice's complete financial performance." },
  { icon: ShieldCheck, title: "Compliance Assurance", desc: "Our RCM processes are built on a foundation of regulatory compliance, protecting your practice from audits and penalties." },
];

const faqs = [
  {
    q: "What exactly is Revenue Cycle Management (RCM)?",
    a: "RCM is the comprehensive financial process that healthcare practices use to manage the administrative and clinical functions associated with claims processing, payment, and revenue generation. It covers every step from patient scheduling and registration through final payment collection.",
  },
  {
    q: "How is outsourced RCM better than an in-house billing team?",
    a: "Outsourced RCM provides access to specialized expertise, advanced technology, and scalable resources at a fraction of the cost of maintaining an in-house team. You eliminate HR overhead, ongoing training costs, software licensing, and the risk of staff turnover disrupting your revenue cycle.",
  },
  {
    q: "How long does it take to see results after switching to your RCM services?",
    a: "Most practices see measurable improvements within the first 60–90 days. This includes faster claim turnaround, reduced denial rates, and improved collections. Full optimization typically occurs within 3–6 months as we fine-tune our approach to your specific payer mix and specialty.",
  },
  {
    q: "Do you handle prior authorizations as part of RCM?",
    a: "Yes. Prior authorization management is a critical component of our RCM services. We handle the entire authorization process — from submission to follow-up and approval confirmation — to prevent claim denials due to missing authorizations.",
  },
  {
    q: "Will I still have visibility into my practice's finances?",
    a: "Absolutely. We provide real-time access to custom dashboards and comprehensive monthly reports. You'll have more visibility into your finances than ever before, with key metrics like collection rates, denial rates, A/R aging, and net revenue clearly presented.",
  },
];

const RevenueCycleManagement = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Revenue Cycle Management Services | Optimum Billing Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "End-to-end Revenue Cycle Management (RCM) services that maximize collections, reduce A/R days, and eliminate administrative burden for healthcare practices.");
    }
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-80 h-80 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-white rounded-full blur-3xl" />
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
              End-to-End Revenue Cycle Management That <span className="text-secondary">Transforms</span> Your Practice
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              A complete financial lifecycle solution covering every touchpoint from patient scheduling to final payment. We treat your revenue as our own mission — maximizing collections while eliminating administrative burden.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Discover RCM Solutions <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Talk to an RCM Expert
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
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200"
                  alt="Healthcare revenue cycle management analytics dashboard showing financial performance"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp size={22} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">+35% Revenue</div>
                    <div className="text-slate-500 text-xs">Average RCM client result</div>
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
                <RefreshCcw size={18} />
                <span>Full-Spectrum RCM</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Master Your Practice's Complete Financial Health
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our holistic approach to Revenue Cycle Management ensures that no dollar slips through the cracks. From the moment a patient books an appointment to the moment the final balance is settled, every process is optimized to drive cash flow, reduce overhead, and eliminate revenue leakage.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Unlike traditional billing companies that only handle claim submission, we manage the complete financial lifecycle — including pre-authorization, eligibility, patient billing, denial management, and strategic analytics.
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
                Discover RCM Solutions <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">The Business Case for Outsourced RCM</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Why hundreds of practices choose to partner with a specialized RCM company instead of managing billing in-house.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <b.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-3">{b.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8-Stage RCM Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our 8-Stage Revenue Cycle Process</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Every stage is managed with precision and accountability to maximize your financial outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {rcmStages.map((stage, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-bold shrink-0 text-sm">{stage.num}</div>
                <div>
                  <h3 className="font-bold text-dark mb-2">{stage.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{stage.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Image */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-dark mb-5">Technology-Powered RCM for Modern Practices</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                We combine certified human expertise with advanced revenue cycle technology to deliver results that neither can achieve alone. Our proprietary workflows and real-time reporting tools give you complete financial transparency and control.
              </p>
              <ul className="space-y-3 mb-8">
                {["Real-time eligibility & benefits verification", "Automated claim status tracking", "AI-assisted denial pattern recognition", "Custom KPI dashboards for leadership"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check size={16} className="text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md">
                Start Your RCM Journey <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200"
                alt="Healthcare financial team analyzing revenue cycle performance metrics"
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">RCM — Frequently Asked Questions</h2>
            <p className="text-slate-500">Common questions about Revenue Cycle Management.</p>
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
              Transform Your Revenue Cycle Today
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Stop managing revenue cycle piecemeal. Let our experts handle every stage while you focus on delivering exceptional patient care.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base">
                Get Your Free RCM Assessment <ArrowRight size={18} />
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

export default RevenueCycleManagement;
