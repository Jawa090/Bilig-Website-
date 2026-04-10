import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ClipboardList, Settings, Send, TrendingUp } from "lucide-react";

const steps = [
  { icon: ClipboardList, step: "01", title: "Free Revenue Audit", desc: "Detailed review of 90 days of claims data to identify denial patterns and missed revenue." },
  { icon: Settings, step: "02", title: "System Integration", desc: "Seamless EHR integration and dashboard configuration in just 15 business days." },
  { icon: Send, step: "03", title: "Daily Billing Cycle", desc: "Our 97.3% first-pass rate ensures your money arrives in record time, every single day." },
  { icon: TrendingUp, step: "04", title: "Strategic Growth", desc: "Quarterly strategy calls to align your billing performance with your practice's long-term goals." },
];

const HowItWorks = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block bg-secondary/20 text-secondary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4 border border-secondary/30">
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            From First Call to <span className="text-secondary italic">Full Revenue Flow</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
            We've streamlined our onboarding and billing operations to ensure minimum friction and maximum performance from day one.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-secondary/30 to-transparent z-0" />

          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-500 transform group-hover:rotate-6 shadow-2xl">
                    <s.icon size={32} className="text-secondary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-secondary border-4 border-dark flex items-center justify-center text-dark text-sm font-black shadow-lg">
                    {s.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-secondary transition-colors">{s.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed font-medium transition-colors group-hover:text-white/70">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
