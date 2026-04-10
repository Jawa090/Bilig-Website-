import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FileCode, Check, ArrowRight, BadgeCheck, BookOpen,
  ShieldCheck, TrendingUp, ChevronDown, ChevronUp, AlertTriangle, Award
} from "lucide-react";

const features = [
  "Certified AAPC/AHIMA coding specialists",
  "Regular clinical documentation audits",
  "Payer rule updates & compliance tracking",
  "99% coding accuracy guarantee",
  "ICD-10, CPT & HCPCS proficiency",
  "Rapid 24–48 hour turnaround times",
  "HCC risk adjustment coding",
  "Modifier application & review",
];

const stats = [
  { icon: BadgeCheck, value: "99%", label: "Coding Accuracy Rate" },
  { icon: TrendingUp, value: "25%", label: "Reduction in Denials" },
  { icon: BookOpen, value: "40+", label: "Specialties Supported" },
  { icon: ShieldCheck, value: "HIPAA", label: "Fully Compliant" },
];

const codingTypes = [
  { code: "ICD-10-CM", title: "Diagnosis Coding", desc: "Accurate mapping of patient diagnoses to the current ICD-10-CM code set for all payers." },
  { code: "CPT / HCPCS", title: "Procedure Coding", desc: "Precise CPT and HCPCS coding for all professional services, procedures, and supplies." },
  { code: "E&M", title: "Evaluation & Management", desc: "Complex E&M level selection based on the latest AMA guidelines to optimize reimbursement." },
  { code: "HCC", title: "Risk Adjustment Coding", desc: "Hierarchical Condition Category coding to support proper risk-adjustment for Medicare Advantage plans." },
  { code: "DRG", title: "Inpatient / Facility Coding", desc: "Accurate DRG assignment and inpatient facility coding for hospitals and surgical centers." },
  { code: "CDT", title: "Dental Procedure Coding", desc: "Current Dental Terminology coding for dental practices and oral surgery specialties." },
];

const process = [
  { step: "01", title: "Document Receipt & Review", desc: "We securely receive clinical notes, op reports, and encounter documentation through HIPAA-compliant channels." },
  { step: "02", title: "Code Assignment", desc: "Certified coders assign the most accurate and complete set of ICD-10, CPT, and HCPCS codes supported by the documentation." },
  { step: "03", title: "Compliance & Edit Checks", desc: "Every coded encounter is scrubbed for NCI edits, LCD/NCD compliance, and payer-specific rules before submission." },
  { step: "04", title: "Quality Assurance Review", desc: "A senior coder performs a second-level QA review on a statistically significant sample to maintain our 99% accuracy guarantee." },
  { step: "05", title: "Delivery & Integration", desc: "Completed codes are delivered directly into your PM/EHR system, ready for claim generation and submission." },
  { step: "06", title: "Ongoing Education & Feedback", desc: "We provide regular feedback to providers on documentation improvement opportunities to support both accuracy and compliance." },
];

const faqs = [
  {
    q: "What certifications do your coders hold?",
    a: "All our coders are certified through AAPC (CPC, COC, CIC, CRC) or AHIMA (RHIA, RHIT, CCS) and maintain active certifications with annual CEU requirements. Many also hold specialty-specific credentials such as CPC-P, CPMA, and CCS-P.",
  },
  {
    q: "How do you stay current with coding guideline changes?",
    a: "Our coding team participates in ongoing education through AAPC, AHIMA, CMS updates, and specialty-specific payer bulletins. We conduct internal quarterly training sessions and distribute coding updates to all team members within 48 hours of release.",
  },
  {
    q: "Can you handle both facility and professional coding?",
    a: "Yes. We have dedicated teams for professional fee coding, outpatient facility coding, inpatient DRG coding, and ambulatory surgery center (ASC) coding.",
  },
  {
    q: "What is your turnaround time for coding?",
    a: "Standard turnaround is 24–48 hours from document receipt. We also offer same-day rush coding for urgent cases at no additional charge for established clients.",
  },
  {
    q: "Do you offer coding audits for existing practices?",
    a: "Absolutely. We provide prospective (pre-billing) and retrospective (post-payment) coding audits that identify revenue opportunities and compliance risks with a detailed remediation roadmap.",
  },
];

const MedicalCoding = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Medical Coding Services | Optimum Billing Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", "Certified AAPC/AHIMA medical coding services with 99% accuracy. ICD-10, CPT, HCPCS, and HCC coding for all specialties. Reduce denials and stay compliant.");
    }
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl" />
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
              Medical Coding Services With <span className="text-secondary">99% Accuracy</span>
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              Certified AAPC/AHIMA coders ensure that every patient encounter is translated into the most precise and complete codes — maximizing reimbursement while eliminating compliance risk.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Get a Free Coding Review <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Speak to a Coder
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
                  src="https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=1200"
                  alt="Certified medical coder reviewing clinical documentation with coding manuals"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Award size={22} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">AAPC / AHIMA</div>
                    <div className="text-slate-500 text-xs">Certified coding team</div>
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
                <FileCode size={18} />
                <span>Precision Coding</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Coding Errors Cost Your Practice — We Eliminate Them
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Inaccurate coding is the single largest contributor to claim denials, delayed payments, and compliance risk. Our certified specialists are trained in the most current coding guidelines and payer-specific requirements, ensuring every code submitted is defensible, accurate, and optimized.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Whether you're struggling with under-coding, over-coding, or simply need a partner to keep pace with constantly evolving guidelines, our team delivers the precision and speed your revenue cycle demands.
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
                Get a Free Coding Audit <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coding Types */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Complete Coding Coverage Across All Code Sets</h2>
            <p className="text-slate-500 max-w-xl mx-auto">Our coders are proficient in every major coding system used in healthcare today.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingTypes.map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-slate-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="inline-block text-xs font-bold text-primary bg-primary/10 px-3 py-1 rounded-full mb-4">{type.code}</span>
                <h3 className="text-lg font-bold text-dark mb-2">{type.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Alert */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="bg-amber-50 border border-amber-200 rounded-3xl p-10 flex flex-col md:flex-row items-center gap-8">
            <div className="w-16 h-16 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle size={28} className="text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-2">Is Your Practice at Risk from Coding Errors?</h3>
              <p className="text-slate-600 leading-relaxed mb-4">Up to 80% of medical bills contain errors according to industry studies. Coding inaccuracies can lead to OIG audits, recoupment demands, and significant financial penalties. Our proactive coding audits identify and correct these risks before they escalate.</p>
              <Link to="/contact" className="inline-flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-amber-700 transition-all text-sm">
                Schedule a Compliance Review <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Medical Coding Workflow</h2>
            <p className="text-slate-500 max-w-xl mx-auto">A rigorous, multi-step process that guarantees accuracy at every stage.</p>
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
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Medical Coding — Frequently Asked Questions</h2>
            <p className="text-slate-500">Answers to the most common questions about our coding services.</p>
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
              Precision Coding Starts Today
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Let our certified coders audit your current process and show you exactly where revenue is being lost.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base">
                Get a Free Quote <ArrowRight size={18} />
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

export default MedicalCoding;
