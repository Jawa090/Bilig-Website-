import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How much does medical billing cost?", a: "We charge a percentage of collections, typically 4–7% depending on specialty and volume. No setup or hidden fees." },
  { q: "Do you handle Medicare and Medicaid?", a: "Yes, we have deep experience with government payers, LCD policies, and MAC-specific rules across all states." },
  { q: "How do you reduce claim denials?", a: "Through 100% eligibility verification, automated scrubbing, and root-cause analysis of every single denial." },
  { q: "What EHR systems do you work with?", a: "We integrate with all major platforms (Epic, Cerner, Athena, etc.) and many specialty-specific systems." },
  { q: "What is your average clean claim rate?", a: "Our average is 97.3%, significantly higher than the industry standard, ensuring faster and more reliable revenue." },
  { q: "How long does onboarding take?", a: "Standard onboarding takes 15 business days, including full EHR integration and custom dashboard setup." },
  { q: "Is outsourcing better than in-house?", a: "Outsourcing eliminates risk from staff turnover, reduces overhead, and provides consistent, expert-level performance." },
  { q: "Do you offer flat-fee pricing?", a: "No, we only use performance-based pricing to ensure our incentives are perfectly aligned with your success." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-[#f8fafb] relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">Questions We Get <span className="text-primary italic">Asked Every Week</span></h2>
        </motion.div>

        <div className="grid gap-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className={`rounded-[2rem] border transition-all duration-300 overflow-hidden ${
                openIndex === i ? "border-primary bg-primary/[0.02] shadow-xl shadow-primary/5" : "border-primary/5 bg-white hover:border-primary/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-7 text-left group"
              >
                <span className={`text-lg font-bold transition-colors ${openIndex === i ? "text-primary" : "text-foreground group-hover:text-primary"}`}>
                  {faq.q}
                </span>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === i ? "bg-primary text-white rotate-180" : "bg-primary/5 text-primary"
                }`}>
                  <ChevronDown size={20} />
                </div>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                  >
                    <div className="px-7 pb-7">
                      <div className="h-px bg-primary/10 mb-6" />
                      <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
