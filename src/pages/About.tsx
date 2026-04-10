import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, Target, Eye, Handshake,
  Award, Users, MapPin, Calendar, ShieldCheck, TrendingUp, HeartPulse, Zap
} from "lucide-react";

const timeline = [
  { year: "2018", title: "Founded in New York", desc: "Launched with a single focus: fixing the denial problem in local medical practices." },
  { year: "2019", title: "Expanded Specialty Teams", desc: "Added billing experts for Cardiology, Orthopedics, and Mental Health specialties." },
  { year: "2021", title: "Nationwide Operations", desc: "Expanded our certified billing and coding teams to serve all 50 states." },
  { year: "2023", title: "ISO 27001 Certified", desc: "Achieved ISO 27001 certification for professional-grade data protection standards." },
  { year: "2026", title: "100+ Active Practices", desc: "Providing dependable RCM solutions to over 100 practices nationwide." },
];

const values = [
  {
    icon: Target,
    title: "Accuracy Over Speed",
    body: "We focus on clean claim submission to ensure your practice remains financially stable and compliant."
  },
  {
    icon: Eye,
    title: "Total Transparency",
    body: "Your data is always yours. We provide clear, real-time reporting for complete financial visibility."
  },
  {
    icon: Handshake,
    title: "Partnership First",
    body: "We act as an extension of your own office, fully dedicated to your long-term financial success."
  },
];

const stats = [
  { icon: Calendar, value: "2018", label: "Founded" },
  { icon: MapPin, value: "New York", label: "Headquarters" },
  { icon: Users, value: "100+", label: "Active Practices" },
  { icon: ShieldCheck, value: "HIPAA + ISO", label: "Certified" },
];

const certifications = [
  "AAPC Certified Professional Coders",
  "AHIMA Certified Health Information",
  "ISO 27001 Data Security",
  "HIPAA Compliant Operations",
  "NYS Minority Business Enterprise",
  "Performance-Based Billing Model",
];

const About = () => {
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const { ref: timelineRef, inView: timelineInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: valuesRef, inView: valuesInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout>

      {/* ── Hero ── */}
      <section className="relative bg-dark py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-dark to-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/20 text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5">
              <Zap size={12} className="text-secondary" />
              About Optimum Solution
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-5 leading-tight max-w-4xl mx-auto">
              Dependable Medical Billing <br className="hidden md:block" />
              <span className="text-secondary">Since 2018</span>
            </h1>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              A performance-based RCM partner dedicated to the financial health of your medical practice — built by billers who experienced the system's failures firsthand.
            </p>

            {/* Inline Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
              {stats.map((s) => (
                <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 text-left">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <s.icon size={15} className="text-secondary" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm leading-none">{s.value}</p>
                    <p className="text-white/50 text-[10px] uppercase tracking-wide mt-0.5">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Mission / Who We Are ── */}
      <section ref={missionRef} className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=900"
                  alt="Medical billing team"
                  className="w-full h-[380px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
              </div>
              {/* Float badge */}
              <div className="absolute -bottom-4 -right-4 bg-secondary text-white px-5 py-3 rounded-xl shadow-lg text-center">
                <p className="text-2xl font-black leading-none">97.3%</p>
                <p className="text-[9px] uppercase font-bold tracking-wider text-white/80 mt-0.5">First-Pass Rate</p>
              </div>
              <div className="absolute top-4 -left-4 bg-white border border-primary/10 px-4 py-2 rounded-xl shadow-md hidden md:flex items-center gap-2">
                <Award size={16} className="text-primary" />
                <p className="text-xs font-bold text-primary">NYS Certified MBE</p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Our Mission
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                We're Specialized Billers.<br />
                <span className="text-primary">Dedicated to Your Practice.</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 text-base">
                Optimum Solution was founded to solve the ongoing financial challenges faced by modern medical practices. We combine AAPC/AHIMA-certified expertise with a performance model — we only earn when you collect.
              </p>

              <div className="space-y-2.5 mb-7">
                {[
                  "Measurable results and performance-based billing goals",
                  "Certified specialists for every medical specialty",
                  "Clear, real-time financial reporting and reviews",
                  "Dedicated account manager from day one",
                ].map((text) => (
                  <div key={text} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-secondary shrink-0 mt-0.5" size={16} />
                    <span className="text-sm font-medium text-foreground">{text}</span>
                  </div>
                ))}
              </div>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-primary/90 transition-all"
              >
                Contact Our Team <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section ref={timelineRef} className="py-16 bg-[#f8fafb]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              Our Journey
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Growth Through Excellence
            </h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-px bg-primary/15 -translate-x-1/2" />

            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={timelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-[18px] md:left-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full -translate-x-1/2 mt-1 z-10 shrink-0" />

                  {/* Card */}
                  <div className={`ml-10 md:ml-0 w-full md:w-[45%] bg-white rounded-xl p-5 border border-primary/8 shadow-sm ${
                    idx % 2 === 0 ? "md:mr-[10%]" : "md:ml-[10%]"
                  }`}>
                    <span className="text-secondary font-extrabold text-lg leading-none block mb-1">{item.year}</span>
                    <h4 className="text-base font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Values ── */}
      <section ref={valuesRef} className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              What We Stand For
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={valuesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-[#f8fafb] border border-primary/5 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  <v.icon size={20} />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 bg-[#f8fafb]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Our Credentials
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
                Certified, Compliant &<br />
                <span className="text-primary">Fully Accountable</span>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Every member of our billing team carries active AAPC or AHIMA certifications. Our operations are HIPAA-compliant and ISO 27001 certified for the highest data security standards in the industry.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-primary/90 transition-all"
              >
                Get a Free Audit <ArrowRight size={16} />
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert) => (
                <div key={cert} className="flex items-center gap-2.5 bg-white border border-primary/8 rounded-xl p-3.5 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={13} className="text-secondary" />
                  </div>
                  <span className="text-xs font-semibold text-foreground leading-tight">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Performance Stats Banner ── */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            {[
              { icon: HeartPulse, value: "97.3%", label: "First-Pass Rate" },
              { icon: TrendingUp, value: "50%", label: "AR Reduction" },
              { icon: Users, value: "100+", label: "Active Practices" },
              { icon: ShieldCheck, value: "7+", label: "Years of Excellence" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center mb-2">
                  <s.icon size={18} className="text-white/80" />
                </div>
                <p className="text-2xl md:text-3xl font-black text-secondary leading-none">{s.value}</p>
                <p className="text-white/70 text-xs uppercase tracking-wider font-semibold mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-14 bg-dark">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
            Ready to Work with a Billing Partner <span className="text-secondary">That Performs?</span>
          </h2>
          <p className="text-white/60 text-sm mb-7 leading-relaxed">
            Get a free, no-obligation review of your practice's billing performance. We'll show you exactly where revenue is being left on the table.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-secondary text-white px-7 py-3 rounded-full font-bold text-sm shadow-lg hover:bg-secondary/90 transition-all"
            >
              Schedule a Free Review <ArrowRight size={16} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-white/20 transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>

    </Layout>
  );
};

export default About;
