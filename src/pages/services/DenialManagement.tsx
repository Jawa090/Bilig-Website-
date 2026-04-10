import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  XCircle, Check, ArrowRight, TrendingUp, DollarSign,
  ShieldCheck, AlertTriangle, ChevronDown, ChevronUp, RefreshCcw, Search
} from "lucide-react";

const features = [
  "100% denial review and categorization",
  "Comprehensive root-cause analysis",
  "Extensive payer appeal expertise",
  "Exceptional denied-to-paid recovery rates",
  "Proactive front-end feedback loop",
  "Detailed denial analytics & trend reporting",
  "Timely appeal filing within payer deadlines",
  "Medicare & Medicaid appeal specialization",
];

const stats = [
  { icon: TrendingUp, value: "95%", label: "Appeal Success Rate" },
  { icon: DollarSign, value: "$0", label: "Revenue Left Uncontested" },
  { icon: RefreshCcw, value: "7–14d", label: "Average Appeal Turnaround" },
  { icon: ShieldCheck, value: "100%", label: "Denials Reviewed" },
];

const denialTypes = [
  { type: "Clinical", color: "bg-red-100 text-red-700", title: "Medical Necessity Denials", desc: "We compile clinical documentation, physician attestation letters, and payer-specific LCD/NCD criteria to build compelling medical necessity appeals." },
  { type: "Coding", color: "bg-orange-100 text-orange-700", title: "Coding & Bundling Denials", desc: "Our certified coders review and correct all coding errors, unbundling issues, and modifier disputes before resubmission or formal appeal." },
  { type: "Admin", color: "bg-blue-100 text-blue-700", title: "Administrative & Eligibility Denials", desc: "We address eligibility discrepancies, coverage termination issues, missing authorizations, and coordination of benefits denials promptly." },
  { type: "Timely", color: "bg-purple-100 text-purple-700", title: "Timely Filing Denials", desc: "We manage strict payer filing deadlines and have documented processes to recover timely filing denials when filing proof exists." },
  { type: "Duplicate", color: "bg-teal-100 text-teal-700", title: "Duplicate Claim Denials", desc: "We identify and resolve duplicate claim flags caused by system errors, resubmission confusion, or clearinghouse duplications." },
  { type: "Network", color: "bg-indigo-100 text-indigo-700", title: "Out-of-Network Denials", desc: "We escalate and negotiate out-of-network payment disputes including surprise billing protections under the No Surprises Act." },
];

const process = [
  { step: "01", title: "Denial Receipt & Categorization", desc: "Every denial is captured, categorized by denial code and reason, and assigned to a specialist within 24 hours of receipt." },
  { step: "02", title: "Root-Cause Analysis", desc: "We investigate the underlying cause — whether coding, eligibility, authorization, or clinical documentation — to address the issue, not just the symptom." },
  { step: "03", title: "Appeal Strategy Development", desc: "A targeted appeal strategy is built for each denial type, including clinical criteria, coding rationale, or administrative evidence as required." },
  { step: "04", title: "Appeal Submission", desc: "Well-documented appeals are submitted to the appropriate payer department within regulatory and contractual deadlines." },
  { step: "05", title: "Follow-Up & Escalation", desc: "We track every open appeal and escalate to peer-to-peer reviews, external IRO, or state insurance commissioner when necessary." },
  { step: "06", title: "Feedback & Prevention Loop", desc: "Denial trends are reported monthly with actionable upstream recommendations to prevent the same denials from recurring." },
];

const faqs = [
  {
    q: "What is your denial appeal success rate?",
    a: "Our overall appeal success rate is 95% for clinically appealable denials. For administrative denials with correctable errors (coding, eligibility, authorization), our recovery rate is even higher. We track and report success rates by denial category and payer.",
  },
  {
    q: "How quickly do you begin working on denied claims?",
    a: "All denied claims are reviewed within 24 hours of receipt. Appeals are typically submitted within 3–5 business days of denial receipt, well within most payer appeal filing windows.",
  },
  {
    q: "Do you handle both Medicare and commercial payer denials?",
    a: "Yes. We specialize in appeals for all payer types including Medicare, Medicaid, BCBS, Aetna, Cigna, UnitedHealthcare, Humana, and hundreds of regional and specialty payers. Each payer has unique appeal requirements, and our team knows them all.",
  },
  {
    q: "Can you help with denials from before we started working together?",
    a: "Absolutely. We conduct a comprehensive A/R analysis of your historical denials and recover revenue for any claims that are still within the appeal window. Many practices recover significant backlogged revenue in the first 90 days.",
  },
  {
    q: "What information do you need to start working on our denials?",
    a: "We need access to your practice management/billing system, EOBs/ERAs, and relevant clinical documentation. Our onboarding team handles all access setup and works alongside your staff to ensure a smooth start.",
  },
];

const DenialManagement = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Denial Management Services | Optimum Billing Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Expert medical claim denial management with 95% appeal success rate. We recover denied revenue, fix root causes, and prevent future denials for healthcare practices.");
    }
  }, []);

  return (
    <Layout>
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
              Denial Management That <span className="text-secondary">Recovers</span> Every Dollar You've Earned
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              We don't just appeal — we identify root causes, fix upstream problems, and build systemic prevention so the same denial never costs you twice.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Recover Lost Revenue <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Talk to a Specialist
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
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200"
                  alt="Medical billing denial management specialist reviewing denied insurance claims"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp size={22} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">95% Win Rate</div>
                    <div className="text-slate-500 text-xs">On appealed claims</div>
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
                <XCircle size={18} />
                <span>Denial Recovery</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Turn Every Denial Into Recovered Revenue
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Unresolved claim denials silently drain your practice's revenue month after month. Our forensic billing specialists scrutinize every denied claim — building strong, well-documented appeals while simultaneously implementing systemic corrections to prevent the same issue from recurring.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We go beyond appeals. Our denial prevention analytics identify patterns and feed actionable intelligence back to your coding, documentation, and scheduling workflows — so your denial rate continuously decreases over time.
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
                Recover Lost Revenue <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Denial Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">We Handle Every Type of Claim Denial</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our specialists are trained in all denial categories across every payer type.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {denialTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${type.color}`}>{type.type}</span>
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
          <div className="bg-red-50 border border-red-200 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle size={28} className="text-red-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-2">The Hidden Cost of Ignoring Claim Denials</h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                The average healthcare practice loses 3–5% of annual revenue to unresolved denials. For a practice billing $2M/year, that's up to $100,000 walking out the door every year. Don't let payer bureaucracy keep money that you've rightfully earned.
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-red-700 transition-all text-sm">
                Get a Free Denial Analysis <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Denial Management Process</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A systematic approach that recovers revenue and prevents future denials.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Denial Management — FAQs</h2>
            <p className="text-slate-500">Answers to common questions about our denial recovery process.</p>
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
              Stop Accepting Denials — Start Recovering Revenue
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Let our denial specialists audit your current denials and show you exactly how much revenue is recoverable right now.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base">
                Get Free Denial Audit <ArrowRight size={18} />
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

export default DenialManagement;
