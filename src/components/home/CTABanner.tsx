import { Link } from "react-router-dom";
import { Phone, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const CTABanner = () => (
  <section className="py-20 bg-dark relative overflow-hidden">
    {/* Subtle dot pattern */}
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{
      backgroundImage: "radial-gradient(circle at 2px 2px, rgba(92,184,0,0.5) 1px, transparent 0)",
      backgroundSize: "36px 36px"
    }} />
    {/* Glow blobs */}
    <motion.div
      animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.35, 0.2] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-[-30%] right-[-5%] w-[40%] aspect-square bg-primary/20 blur-[100px] rounded-full pointer-events-none"
    />
    <motion.div
      animate={{ scale: [1.15, 1, 1.15], opacity: [0.15, 0.3, 0.15] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-[-30%] left-[-5%] w-[40%] aspect-square bg-secondary/15 blur-[100px] rounded-full pointer-events-none"
    />

    <div className="container mx-auto px-6 relative z-10">
      <div className="max-w-3xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-secondary/20">
          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
          Performance-Based Billing
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4 leading-tight tracking-tight">
          Ready to Maximize Your{" "}
          <span className="text-secondary italic">Practice Revenue?</span>
        </h2>

        {/* Subtext */}
        <p className="text-base text-white/55 mb-8 max-w-xl mx-auto font-medium leading-relaxed">
          Join 100+ medical practices nationwide. High-performance billing with zero hidden fees and full transparency.
        </p>

        {/* Trust pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {["No Setup Fees", "15-Day Onboarding", "No Long-Term Lock-In"].map((item) => (
            <div key={item} className="flex items-center gap-1.5 text-white/50 text-xs font-bold">
              <CheckCircle2 size={13} className="text-secondary shrink-0" />
              {item}
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/contact"
            className="group px-8 py-4 bg-primary text-white rounded-xl font-black text-base shadow-xl shadow-primary/20 flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Get Started Free
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="tel:7373076234"
            className="px-8 py-4 rounded-xl border border-white/15 text-white font-black text-base hover:bg-white hover:text-dark transition-all duration-300 flex items-center gap-2.5"
          >
            <Phone size={18} className="text-secondary shrink-0" />
            +1 (737) 307-6234
          </a>
        </div>

      </div>
    </div>
  </section>
);

export default CTABanner;
