import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShieldCheck, Check, ArrowRight, Phone, FileText, Shield, TrendingUp, Clock } from "lucide-react";

const challenges = [
  "Debridement coding by wound depth — selective vs. non-selective, surgical vs. mechanical",
  "Skin substitute product billing — high-cost biologics require invoice-based billing",
  "Hyperbaric oxygen therapy (HBO) coding and Medicare coverage criteria",
  "Wound measurement documentation — size must be documented to support coding",
  "Negative pressure wound therapy (NPWT) billing and DME crossover claims",
  "Cellular and tissue-based products (CTPs) — complex prior auth and billing rules",
];

const services = [
  { icon: FileText, title: "Debridement & Wound Care Coding", desc: "Precise CPT selection for wound debridement based on depth (skin, subcutaneous, muscle, bone) and method (selective vs. non-selective) to maximize appropriate reimbursement." },
  { icon: Shield, title: "Skin Substitute Billing", desc: "We bill cellular and tissue-based products (CTPs) correctly, managing invoice-based cost billing for high-cost skin substitutes and prior authorizations for biologic products." },
  { icon: TrendingUp, title: "HBO Therapy Billing", desc: "Accurate billing for hyperbaric oxygen therapy under Medicare's covered diagnosis list, with proper physician supervision documentation and off-label coverage appeals." },
  { icon: Clock, title: "NPWT & DME Coordination", desc: "We coordinate negative pressure wound therapy billing across the professional, hospital outpatient, and DME settings to ensure no revenue falls through the cracks." },
];

const stats = [
  { value: "97.6%", label: "First-Pass Claim Rate" },
  { value: "<24h", label: "Claim Submission Time" },
  { value: "42%", label: "Average Revenue Increase" },
  { value: "10+", label: "Years Wound Care Experience" },
];

const WoundCare = () => {
  return (
    <Layout>
      <section className="bg-gradient-hero py-24 text-center relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Specialty Billing Services</span>
          <div className="w-20 h-20 mx-auto rounded-full bg-white/10 flex items-center justify-center mb-6">
            <ShieldCheck size={40} className="text-secondary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight max-w-4xl mx-auto">
            Wound Care Medical Billing Services
          </h1>
          <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
            Specialized billing for wound care centers, mobile wound care practices, and hospital outpatient wound clinics. We handle debridement coding, skin substitute billing, and HBO therapy claims.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
              Book Free Consultation <ArrowRight size={18} />
            </Link>
            <a href="tel:7373076234" className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all">
              <Phone size={18} /> Call Us Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&q=80&w=1200"
                alt="Wound Care Billing"
                className="w-full h-[420px] object-cover rounded-[2rem] shadow-2xl"
              />
            </div>
            <div className="w-full lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <ShieldCheck size={16} /> Wound Care Billing Experts
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Wound Care Billing: High Stakes, High Complexity</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wound care practices deal with some of the most expensive products in medicine — skin substitutes, biologic dressings, and hyperbaric oxygen — and the billing for these products is correspondingly complex. One error in a skin substitute claim can cost thousands of dollars.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our wound care billing team knows how to document wound measurements that support debridement coding, invoice-bill biologic skin substitutes correctly, and manage Medicare's complex HBO coverage criteria to minimize denials on these high-cost services.
              </p>
              <div className="space-y-3">
                {challenges.map((c, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={12} className="text-secondary" />
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Wound Care Billing Services We Provide</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Comprehensive billing designed for the high-cost, high-complexity nature of wound care medicine.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary transition-colors">
                  <s.icon size={26} className="text-primary group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-hero text-white text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Protect Your Wound Care Revenue</h2>
          <p className="text-white/80 mb-10 text-lg">Get a free audit of your wound care billing and identify where high-cost product claims are being lost to preventable errors.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">
              Get Free Audit <ArrowRight size={18} />
            </Link>
            <Link to="/specialities" className="inline-flex items-center gap-2 bg-white/10 text-white px-10 py-4 rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all">
              View All Specialties
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WoundCare;
