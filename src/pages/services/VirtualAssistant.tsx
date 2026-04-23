import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  Bot, Check, ArrowRight, DollarSign, Clock,
  ShieldCheck, Users, ChevronDown, ChevronUp, Headphones, Calendar, FileText
} from "lucide-react";

const features = [
  "Pre-appointment eligibility & benefits verification",
  "Prior authorization requests & follow-up",
  "EHR/EMR-integrated daily operations",
  "Appointment scheduling & rescheduling",
  "Post-visit follow-up calls & care coordination",
  "Cost-effective remote medical staffing",
  "Strict HIPAA compliance protocols",
  "Inbound & outbound patient communication",
];

const stats = [
  { icon: DollarSign, value: "60%", label: "Reduction in Staffing Costs" },
  { icon: Clock, value: "Same-Day", label: "VA Onboarding Possible" },
  { icon: ShieldCheck, value: "HIPAA", label: "Fully Trained & Certified" },
  { icon: Users, value: "24/7", label: "Availability Options" },
];

const vaRoles = [
  { icon: Headphones, title: "Front Desk & Patient Coordinator", desc: "Handle inbound calls, patient inquiries, scheduling, appointment reminders, and check-in coordination remotely with full EHR integration." },
  { icon: FileText, title: "Insurance Verification Specialist", desc: "Complete pre-visit eligibility verification, benefits check, and copay/deductible confirmation for every scheduled patient before their appointment." },
  { icon: ShieldCheck, title: "Prior Authorization Coordinator", desc: "Submit, track, and follow up on all prior authorization requests to ensure approvals are in place before services are rendered." },
  { icon: Calendar, title: "Scheduling & Recall Coordinator", desc: "Manage appointment scheduling, cancellation recovery, recall programs, and waitlist management to maximize your schedule utilization." },
  { icon: Bot, title: "Medical Records & Admin Support", desc: "Handle records requests, referral coordination, specialist follow-ups, and administrative documentation to reduce provider and office staff burden." },
  { icon: Users, title: "Patient Billing Support", desc: "Assist with patient payment inquiries, payment plan setup, balance follow-up, and insurance explanation calls to improve patient satisfaction and collections." },
];

const savings = [
  { position: "Full-Time Biller (In-House)", annual: "$45,000–$65,000", note: "Plus benefits, PTO, taxes, training" },
  { position: "Front Desk Coordinator", annual: "$35,000–$50,000", note: "Plus benefits, PTO, taxes, equipment" },
  { position: "Prior Auth Coordinator", annual: "$40,000–$55,000", note: "Plus benefits, turnover replacement costs" },
  { position: "Medical Virtual Assistant (Optimum)", annual: "Fraction of the cost", note: "No benefits, no PTO, no training overhead", highlight: true },
];

const process = [
  { step: "01", title: "Needs Assessment", desc: "We assess your practice's workflow, staffing gaps, volume, and EHR system to identify the ideal VA role and responsibilities." },
  { step: "02", title: "VA Selection & Matching", desc: "We match you with a VA who has relevant specialty experience, EHR proficiency, and the communication skills your practice requires." },
  { step: "03", title: "HIPAA Onboarding & Compliance Training", desc: "Your VA completes our comprehensive HIPAA compliance training program and signs BAA and confidentiality agreements before beginning work." },
  { step: "04", title: "EHR & Workflow Integration", desc: "We configure EHR access, set up communication protocols, and conduct a structured workflow orientation with your in-office team." },
  { step: "05", title: "Supervised Launch Period", desc: "Your VA begins with a supervised 2-week ramp-up period with daily check-ins to ensure quality, accuracy, and seamless integration." },
  { step: "06", title: "Ongoing Management & QA", desc: "We conduct regular performance reviews, provide refresher training, and are available to address any concerns or workflow adjustments in real time." },
];

const faqs = [
  {
    q: "How is a Medical Virtual Assistant different from a regular virtual assistant?",
    a: "Medical Virtual Assistants (MVAs) are specifically trained in healthcare workflows, EHR systems, medical terminology, insurance verification, prior authorization processes, and strict HIPAA compliance. They are not general-purpose VAs — they function as specialized remote healthcare administrative staff.",
  },
  {
    q: "What EHR systems can your virtual assistants work in?",
    a: "Our VAs are trained and proficient in all major EHR platforms including Epic, Athenahealth, eClinicalWorks, Kareo, AdvancedMD, DrChrono, Practice Fusion, Modernizing Medicine, and many more. We match each VA to the specific platform your practice uses.",
  },
  {
    q: "Is my patient data safe with a virtual assistant?",
    a: "Absolutely. Every VA undergoes mandatory HIPAA training, signs a Business Associate Agreement (BAA), and works through secure, encrypted platforms only. We enforce strict protocols including secure screen sharing, VPN access, and regular compliance audits.",
  },
  {
    q: "Can we hire a virtual assistant on a part-time basis?",
    a: "Yes. We offer flexible VA engagements from 20 hours/week to full-time. You only pay for the hours you need, with no long-term commitment required. Many practices start part-time and expand hours as they see the value.",
  },
  {
    q: "What if our assigned VA doesn't work out?",
    a: "We offer a rapid replacement guarantee. If your assigned VA is not meeting performance expectations, we will replace them with a new, pre-vetted VA within 5 business days at no additional cost. Your satisfaction is our commitment.",
  },
];

const VirtualAssistant = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const origin = typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com";
  const canonical = `${origin}/services/virtual-assistant/`;
  const title = "Medical Virtual Assistant Services | HIPAA-Trained Remote Support | Optimum Solution";
  const description = "HIPAA-trained medical virtual assistant services for healthcare practices. Remote front desk support, insurance verification, prior auth, scheduling, and more — at a fraction of in-house staffing costs. Save 60%.";
  const keywords = "medical virtual assistant, healthcare virtual assistant, remote medical staff, HIPAA virtual assistant, medical VA, front desk support, insurance verification, prior authorization";
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
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-white rounded-full blur-3xl" />
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
              Medical Virtual Assistants — <span className="text-secondary">Expert Support</span> at a Fraction of the Cost
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Extend your practice team with HIPAA-trained, EHR-proficient virtual assistants who handle front desk operations, prior authorizations, insurance verification, and patient communication — seamlessly, remotely, and affordably.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Hire a Virtual Assistant <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Talk to Our Team
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
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200"
                  alt="Medical virtual assistant working remotely providing healthcare administrative support via computer"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <DollarSign size={22} className="text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">Save 60%</div>
                    <div className="text-slate-500 text-xs">vs. in-house staffing costs</div>
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
                <Bot size={18} />
                <span>Remote Practice Support</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Stop Letting Staffing Shortages Disrupt Your Practice
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                In-house staffing shortages, high turnover, and rising employment costs are among the biggest operational challenges facing healthcare practices today. Our medical virtual assistants integrate seamlessly into your existing EHR infrastructure — delivering the quality of an experienced in-house employee at a fraction of the traditional overhead cost.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you need front desk support, insurance verification, prior authorization management, or patient communication, our HIPAA-trained VAs are ready to start contributing from day one.
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
                Hire a Virtual Assistant <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VA Roles */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Medical VA Roles We Fill for Your Practice</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From front desk to billing support, our VAs are trained for every administrative role in a healthcare practice.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {vaRoles.map((role, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <role.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{role.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{role.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost Comparison */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">The Real Cost of In-House Staff vs. a Medical VA</h2>
            <p className="text-slate-500 max-w-xl mx-auto">See how much your practice saves by partnering with Optimum for virtual staffing.</p>
          </div>
          <div className="space-y-4">
            {savings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 rounded-2xl border ${item.highlight ? "bg-primary/5 border-primary/30" : "bg-slate-50 border-slate-200"}`}
              >
                <div>
                  <div className={`font-bold text-base mb-1 ${item.highlight ? "text-primary" : "text-dark"}`}>{item.position}</div>
                  <div className="text-slate-500 text-sm">{item.note}</div>
                </div>
                <div className={`text-right mt-3 sm:mt-0 font-extrabold text-xl ${item.highlight ? "text-primary" : "text-dark"}`}>{item.annual}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Image */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-dark mb-5">Your Practice's Virtual Team Member — From Day One</h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Our onboarding process is fast, structured, and designed for practices that can't afford disruption. Within days of engagement, your VA is in your EHR, handling your workflows, and communicating with your patients — all with zero disruption to your current operations.
              </p>
              <ul className="space-y-3 mb-8">
                {["Full HIPAA BAA signed before start date", "EHR access configured within 24 hours", "Supervised ramp-up period included", "Real-time performance monitoring & feedback"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check size={16} className="text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md">
                Start Hiring Today <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=1200"
                alt="Remote healthcare virtual assistant team providing medical administrative support services"
                className="w-full h-[380px] object-cover rounded-[2rem] shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">How We Onboard Your Medical VA</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A fast, structured process to get your virtual assistant contributing from day one.</p>
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

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Medical Virtual Assistant — FAQs</h2>
            <p className="text-slate-500">Everything you need to know before hiring your first medical VA.</p>
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
              Build Your Remote Healthcare Team Today
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Get experienced, HIPAA-certified virtual support for your practice at up to 60% less than in-house hiring — with zero risk and rapid onboarding.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base">
                Hire a Medical VA Now <ArrowRight size={18} />
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

export default VirtualAssistant;
