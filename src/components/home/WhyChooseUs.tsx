import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Zap, BarChart3, UserCheck, Stethoscope } from "lucide-react";

const features = [
  { icon: Zap, title: "Parallel Start — No Downtime", desc: "Our onboarding team works alongside your current setup. We audit, configure, and test before the switch, ensuring zero cash flow interruption." },
  { icon: BarChart3, title: "Total Transparency, 24/7", desc: "Real-time dashboards showing Net Collection Rate, Days in AR, and daily deposits. No more waiting for monthly reports to see your performance." },
  { icon: UserCheck, title: "Dedicated Account Manager", desc: "You get a named expert who knows your practice personally. Not a call center or ticket queue, but a partner who picks up the phone." },
  { icon: Stethoscope, title: "Specialty-Specific Billers", desc: "Your account is handled by experts who have billed your clinical field for years, knowing exactly which modifiers and codes payers require." },
];

const WhyChooseUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              The Optimum Edge
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">
              Four Promises Every <span className="text-primary italic">Client Holds Us To</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex flex-col items-start group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-lg shadow-primary/5 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <f.icon size={22} className="text-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{f.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] -rotate-3 z-0" />
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Modern office team"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                    <UserCheck size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-foreground">98%</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Client Retention</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
