import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, CheckCircle2, Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const states = [
  "New York", "Florida", "Texas", "California", "New Jersey",
  "Illinois", "Pennsylvania", "Georgia", "Ohio", "Massachusetts",
  "North Carolina", "Virginia", "Michigan", "Arizona", "Washington",
  "Colorado", "Tennessee", "Nevada", "Minnesota", "Missouri",
];

const coverageStats = [
  { value: "50", label: "States Covered", sub: "Nationwide Reach" },
  { value: "100+", label: "Active Practices", sub: "Across All Specialties" },
  { value: "All", label: "Payer Types", sub: "Medicare, Medicaid & Commercial" },
  { value: "24/7", label: "Support Available", sub: "Dedicated Account Managers" },
];

const USACoverage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-[#f8fafb] overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <MapPin size={14} /> Our Footprint
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Serving Providers in <span className="text-primary italic">All 50 States</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
            From New York to California, our teams provide localized payer expertise and state-specific compliance knowledge for healthcare practices of all sizes.
          </p>
        </motion.div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {coverageStats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white rounded-3xl p-6 md:p-8 border border-primary/5 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 text-center group hover:-translate-y-1"
            >
              <p className="text-4xl md:text-5xl font-black text-primary mb-2 group-hover:text-secondary transition-colors duration-300">
                {s.value}
              </p>
              <p className="text-sm font-black text-foreground mb-1">{s.label}</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">{s.sub}</p>
            </motion.div>
          ))}
        </div>

        {/* Main Content: States + Visual */}
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* Left: States Tags */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-[2.5rem] p-8 md:p-10 border border-primary/5 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center">
                  <MapPin size={20} className="text-primary" />
                </div>
                <div>
                  <p className="font-black text-foreground text-lg">Active Coverage Map</p>
                  <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">All Major States + 30 More</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 md:gap-2.5">
                {states.map((s, i) => (
                  <motion.span
                    key={s}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.3 + i * 0.03 }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[#f8fafb] border border-primary/5 text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 cursor-default shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary inline-block" />
                    {s}
                  </motion.span>
                ))}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + states.length * 0.03 }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-black rounded-xl bg-secondary text-white shadow-lg shadow-secondary/20 uppercase tracking-widest"
                >
                  + 30 More States
                </motion.span>
              </div>

              <div className="mt-8 pt-6 border-t border-primary/5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-105"
                >
                  Check Your State Coverage <ArrowRight size={16} />
                </Link>
                <a
                  href="tel:7373076234"
                  className="inline-flex items-center gap-2 text-muted-foreground font-bold text-sm hover:text-primary transition-colors"
                >
                  <Phone size={16} className="text-secondary" />
                  +1 (737) 307-6234
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-5"
          >
            <div className="bg-primary rounded-[2.5rem] p-8 md:p-10 text-white relative overflow-hidden shadow-2xl shadow-primary/20">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0)",
                backgroundSize: "32px 32px"
              }} />
              {/* Glow blobs */}
              <div className="absolute -top-16 -right-16 w-48 h-48 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-secondary/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center mb-6">
                  <MapPin size={28} className="text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black text-white mb-2 leading-tight">
                  Nationwide<br />Coverage
                </h3>
                <p className="text-white/70 text-sm font-medium mb-8 leading-relaxed">
                  Wherever your practice is located, our billing experts understand your state's payer rules, Medicaid programs, and compliance requirements.
                </p>

                <div className="space-y-3">
                  {[
                    "State-specific Medicaid expertise",
                    "MAC & LCD policy compliance",
                    "Local payer contract knowledge",
                    "Multi-state group practice support",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-secondary" />
                      </div>
                      <span className="text-sm font-bold text-white/90">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {["NY", "TX", "CA", "FL"].map((abbr, i) => (
                      <div
                        key={abbr}
                        className="w-9 h-9 rounded-full bg-white/20 border-2 border-white/30 flex items-center justify-center text-[10px] font-black text-white"
                        style={{ zIndex: 4 - i }}
                      >
                        {abbr}
                      </div>
                    ))}
                    <div className="w-9 h-9 rounded-full bg-secondary border-2 border-white/30 flex items-center justify-center text-[10px] font-black text-white">
                      +46
                    </div>
                  </div>
                  <p className="text-xs font-bold text-white/70">Active in all 50 states</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default USACoverage;
