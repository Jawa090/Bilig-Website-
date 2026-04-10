import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, MapPin, Globe, CheckCircle } from "lucide-react";

const miniStats = [
  { icon: Calendar, number: "2018", label: "Founded" },
  { icon: MapPin, number: "New York", label: "HQ" },
  { icon: Globe, number: "50", label: "States" },
];

const highlights = [
  "AAPC & AHIMA certified billing specialists",
  "NYS Certified Minority Business Enterprise",
  "100+ healthcare practices served nationwide",
];

const AboutIntro = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-[#f8fafb] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/4 -skew-x-12 transform translate-x-20 z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left — Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=700"
                alt="Medical team"
                className="w-full h-[360px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* #1 Badge */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="absolute -bottom-4 -right-4 bg-secondary text-white px-5 py-3 rounded-xl shadow-lg flex flex-col items-center"
            >
              <span className="text-2xl font-black leading-none">#1</span>
              <span className="text-[9px] uppercase font-bold tracking-widest text-white/80 mt-0.5">NYS MBE</span>
            </motion.div>

            {/* Years Badge */}
            <div className="absolute top-4 -left-4 bg-white px-4 py-2 rounded-xl shadow-md border border-primary/10 flex items-center gap-2 hidden md:flex">
              <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <ArrowRight size={14} />
              </div>
              <div>
                <p className="text-sm font-bold text-primary leading-none">7+ Years</p>
                <p className="text-[9px] text-muted-foreground uppercase tracking-wide">of Excellence</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Our Legacy
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4 leading-tight">
              We Built This Company Because{" "}
              <span className="text-primary italic">Billing Was Broken</span>
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Optimum Solution was founded in 2018 by experts who watched doctors get underpaid due to systemic inefficiencies. Today we serve 100+ practices across all 50 states with top-tier certified professionals.
            </p>

            {/* Highlights */}
            <ul className="space-y-2 mb-6">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle size={16} className="text-secondary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            {/* Mini Stats */}
            <div className="grid grid-cols-3 gap-3 mb-7">
              {miniStats.map((s) => (
                <div key={s.label} className="bg-white border border-primary/5 shadow-sm rounded-xl p-4 flex flex-col items-center text-center">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center mb-2">
                    <s.icon size={16} className="text-primary" />
                  </div>
                  <p className="text-lg font-black text-foreground leading-none">{s.number}</p>
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md shadow-primary/20 hover:bg-primary/90 transition-colors"
            >
              Learn More About Us <ArrowRight size={16} />
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
