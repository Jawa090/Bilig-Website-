import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, DollarSign, FileText, CheckCircle2 } from "lucide-react";

const tabs = [
  {
    icon: Shield,
    label: "Zero Disruption",
    title: "Your Cash Flow Doesn't Pause for a Transition",
    body: "We prevent transition gaps by running a parallel operation for the first 30 days. Your existing billing continues while we audit, onboard, and test every payer connection. We flip the switch only when we're at 98%+ clean claim readiness.",
    bullets: [
      "Parallel operation for the first 30 days",
      "Live testing before cutover",
      "Dedicated transition manager assigned day one",
    ],
  },
  {
    icon: DollarSign,
    label: "Performance Model",
    title: "We Get Paid When You Get Paid — That's It",
    body: "Our fee is a percentage of collections. No collection, no invoice. This model eliminates misaligned incentives and ensures we fight for every claim, every denial, and every underpayment.",
    bullets: [
      "No flat monthly fees regardless of performance",
      "No setup fees or hidden line items",
      "Rate tied to actual collected revenue only",
    ],
  },
  {
    icon: FileText,
    label: "Transparent Contracts",
    title: "Plain English. No Surprises. No Lock-In Traps.",
    body: "Our three-page contract is clear and simple. Every term is upfront — no hidden fees or software surcharges. We keep clients through quality work, not through restrictive legal bindings.",
    bullets: [
      "Month-to-month after initial 90-day period",
      "One agreed rate — no add-on charges",
      "Data returned within 48 hours on request",
    ],
  },
];

const ProcessTabs = () => {
  const [active, setActive] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
            Our Commitments
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-foreground">What Sets Us Apart</h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">

          {/* Tabs Sidebar */}
          <div className="flex flex-row lg:flex-col w-full lg:w-[220px] gap-2 shrink-0">
            {tabs.map((t, i) => (
              <button
                key={t.label}
                onClick={() => setActive(i)}
                className={`flex-1 lg:flex-none flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-300 text-left border ${
                  active === i
                    ? "bg-primary text-white shadow-lg shadow-primary/20 border-primary"
                    : "bg-white text-muted-foreground hover:bg-primary/5 border-primary/10 hover:border-primary/20"
                }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                  active === i ? "bg-white/20 text-white" : "bg-primary/5 text-primary"
                }`}>
                  <t.icon size={16} />
                </div>
                <span className="text-xs leading-tight">{t.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="flex-1 w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="bg-[#f8fafb] rounded-2xl p-6 md:p-8 border border-primary/5"
              >
                <h3 className="text-xl md:text-2xl font-black text-foreground mb-3 leading-tight">
                  {tabs[active].title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {tabs[active].body}
                </p>
                <div className="space-y-3">
                  {tabs[active].bullets.map((b) => (
                    <div key={b} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-primary/5">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={14} className="text-secondary" />
                      </div>
                      <span className="text-sm font-semibold text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProcessTabs;
