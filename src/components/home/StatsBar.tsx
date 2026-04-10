import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { HeartPulse, TrendingUp, Users, ShieldCheck } from "lucide-react";

const stats = [
  { icon: HeartPulse, prefix: "", value: 97.3, suffix: "%", decimals: 1, label: "First-Pass Rate" },
  { icon: TrendingUp, prefix: "", value: 50, suffix: "%", decimals: 0, label: "AR Reduction" },
  { icon: Users, prefix: "", value: 100, suffix: "+", decimals: 0, label: "Active Practices" },
  { icon: ShieldCheck, prefix: "", value: 0, text: "Dual", suffix: "Certified", decimals: 0, label: "HIPAA + ISO" },
];

const StatsBar = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="relative z-30 -mt-12 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-white/60 shadow-xl rounded-2xl p-4 md:p-5 flex items-center gap-3 hover:translate-y-[-3px] transition-transform duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-primary/5 flex items-center justify-center shrink-0">
                <s.icon size={18} className="text-primary" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-extrabold text-primary leading-none">
                  {s.text ? (
                    <span className="flex items-baseline gap-1">
                      {s.text} <span className="text-xs font-bold text-secondary uppercase">{s.suffix}</span>
                    </span>
                  ) : (
                    inView ? (
                      <span className="flex items-baseline gap-0.5">
                        <CountUp end={s.value} duration={2.5} decimals={s.decimals} />
                        <span className="text-secondary text-lg">{s.suffix}</span>
                      </span>
                    ) : "0"
                  )}
                </span>
                <span className="text-muted-foreground text-[10px] font-semibold mt-0.5 uppercase tracking-wider">
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
