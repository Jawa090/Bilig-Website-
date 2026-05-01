import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  BarChart3, Check, ArrowRight, TrendingUp, DollarSign,
  ShieldCheck, Clock, ChevronDown, ChevronUp, PieChart, LineChart, Activity, Target
} from "lucide-react";

const features = [
  "Customizable real-time dashboards",
  "Comprehensive A/R trend analysis",
  "Provider productivity scorecard reporting",
  "Actionable executive financial summaries",
  "Key performance indicator (KPI) tracking",
  "Quarterly strategic consulting sessions",
  "Denial rate trending & category analysis",
  "Payer performance benchmarking",
];

const stats = [
  { icon: TrendingUp, value: "360°", label: "Financial Visibility" },
  { icon: DollarSign, value: "20%", label: "Avg. Revenue Uplift via Insights" },
  { icon: Clock, value: "Real-Time", label: "Dashboard Updates" },
  { icon: ShieldCheck, value: "HIPAA", label: "Secure & Compliant" },
];

const reportTypes = [
  { icon: BarChart3, title: "A/R Aging Reports", desc: "Track your accounts receivable aging buckets (0–30, 31–60, 61–90, 90+ days) by payer, provider, and service type to prioritize collections." },
  { icon: PieChart, title: "Payer Mix Analysis", desc: "Understand your payer distribution, average payment rates by payer, and identify low-reimbursing contracts that may need renegotiation." },
  { icon: LineChart, title: "Revenue Trend Reports", desc: "Month-over-month and year-over-year revenue trending to track growth, identify seasonal patterns, and forecast cash flow." },
  { icon: Target, title: "KPI Performance Dashboards", desc: "Custom KPI scorecards tracking clean claim rate, first-pass payment rate, denial rate, days in A/R, and net collection rate." },
  { icon: Activity, title: "Denial & Rejection Analysis", desc: "Root-cause analysis reports on denial patterns by code, payer, and provider to drive systematic billing improvement." },
  { icon: TrendingUp, title: "Provider Productivity Reports", desc: "Individual provider billing performance including collections, RVUs, charges, and payment-to-charge ratios." },
];

const kpis = [
  { metric: "Days in A/R", benchmark: "< 30 days", desc: "The average number of days from claim submission to payment receipt." },
  { metric: "Clean Claim Rate", benchmark: "> 98%", desc: "Percentage of claims accepted on first submission without any edits or rejections." },
  { metric: "Denial Rate", benchmark: "< 3%", desc: "Percentage of submitted claims denied by payers on first submission." },
  { metric: "Net Collection Rate", benchmark: "> 96%", desc: "Percentage of collectible revenue actually collected after adjustments." },
  { metric: "First-Pass Payment Rate", benchmark: "> 95%", desc: "Percentage of claims paid in full on the first submission without rework." },
  { metric: "Adjusted Collection Rate", benchmark: "> 97%", desc: "Total collected as a percentage of net charges after all contractual adjustments." },
];

const faqs = [
  {
    q: "How do I access my practice's analytics dashboards?",
    a: "We provide secure, web-based access to your custom analytics portal 24/7. You and your designated team members can log in from any device to view real-time dashboards, pull reports, and download financial summaries at any time.",
  },
  {
    q: "Can you create custom reports specific to our practice's needs?",
    a: "Absolutely. While we provide a comprehensive standard report library, we also build custom reports tailored to your specific specialty, payer mix, provider structure, or executive reporting needs. Custom reports are typically delivered within 5–7 business days of request.",
  },
  {
    q: "How often are reports updated?",
    a: "Core KPI dashboards are updated daily. Transaction-level reports (payment posting, claim status) are updated in real-time. Monthly summary reports are delivered within 5 business days of month-end close.",
  },
  {
    q: "Can your analytics help us identify which payers are underperforming?",
    a: "Yes. Our payer performance benchmarking reports directly compare your contractual rates, payment timeliness, and denial rates across all your payers — helping you identify underperforming contracts and supporting renegotiation with data-backed evidence.",
  },
  {
    q: "Do you provide consulting along with the reporting?",
    a: "Yes. Our analytics service includes quarterly strategic review sessions with a dedicated financial analyst who walks through your data, explains trends, and provides actionable recommendations to improve your revenue cycle performance.",
  },
];

const AnalyticsReporting = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const origin = typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com";
  const canonical = `${origin}/services/analytics-reporting/`;
  const title = "Healthcare Analytics & Reporting Services | Real-Time Dashboards | Optimum Solution";
  const description = "Healthcare analytics and reporting services providing real-time financial dashboards, KPI tracking, A/R analysis, and strategic insights to grow your practice revenue. 20% average revenue uplift.";
  const keywords = "healthcare analytics, medical billing reports, RCM analytics, financial dashboards, KPI tracking, A/R analysis, payer performance, revenue reporting";
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
              Healthcare Analytics & Reporting That <span className="text-secondary">Drive Growth</span>
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Turn raw billing data into clear, actionable financial intelligence. Our real-time dashboards and strategic reports give practice leadership complete visibility to make faster, smarter, and more profitable decisions.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Explore Reporting Tools <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Request a Demo
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
                  alt="Healthcare analytics dashboard showing revenue cycle KPIs and financial performance metrics"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp size={22} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">+20% Revenue</div>
                    <div className="text-slate-500 text-xs">From data-driven decisions</div>
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
                <BarChart3 size={18} />
                <span>Data-Driven Insights</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                You Can't Fix What You Can't See — We Give You Full Visibility
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our advanced analytics platform eliminates the guesswork from managing your practice's finances. Instead of waiting for month-end spreadsheets, you get real-time access to every key metric — collections, denials, A/R aging, payer performance, and provider productivity — in one clear, intuitive dashboard.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We don't just deliver reports — we pair them with expert analysis and strategic consulting to ensure your leadership team can act on the data immediately and effectively.
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
                See Your Data in Action <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Report Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Comprehensive Report Library</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Every report you need to manage and grow a financially healthy practice.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reportTypes.map((rt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <rt.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{rt.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{rt.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* KPI Benchmarks */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Industry Benchmark KPIs We Track for You</h2>
            <p className="text-slate-500 max-w-xl mx-auto">We measure your performance against industry best-practice benchmarks and show you the path to achieving them.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {kpis.map((kpi, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-slate-50 border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="shrink-0">
                  <span className="inline-block bg-primary text-white text-xs font-bold px-3 py-1.5 rounded-xl">{kpi.benchmark}</span>
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-1">{kpi.metric}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{kpi.desc}</p>
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
            >
              <h2 className="text-3xl font-bold text-dark mb-5">Strategic Consulting Included with Every Report</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Data without interpretation is just noise. Our quarterly strategic review sessions pair your reports with expert guidance from a dedicated financial analyst who understands your specialty, your payer mix, and your growth goals.
              </p>
              <ul className="space-y-3 mb-8">
                {["Monthly performance review calls available", "Quarterly in-depth strategic sessions", "Actionable recommendations with each report", "Benchmarking against specialty industry standards"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check size={16} className="text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md">
                Schedule a Consulting Call <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="Healthcare financial analyst presenting revenue cycle analytics and performance reports"
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Analytics & Reporting — FAQs</h2>
            <p className="text-slate-500">Common questions about our analytics and reporting services.</p>
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
              Make Every Financial Decision with Confidence
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Get real-time visibility into your practice's financial performance and the expert guidance to act on it.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base">
                Request a Demo <ArrowRight size={18} />
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

export default AnalyticsReporting;
