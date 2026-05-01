import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ResultsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const results = [
    {
      title: "COSTS REDUCED.",
      percentage: "50%",
      subtitle: "Up to",
      description: "reduction in costs of operations"
    },
    {
      title: "REVENUE LEAKS ARRESTED",
      percentage: "75%",
      subtitle: "Up to", 
      description: "reduction in DNFB cases."
    },
    {
      title: "REVENUE IMPROVED.",
      percentage: "15%",
      subtitle: "Over",
      description: "improvement in revenue through diligent billing."
    },
    {
      title: "PRODUCTIVITY IMPROVED.",
      percentage: "30%",
      subtitle: "Over",
      description: "improvement through better process control & automation."
    }
  ];

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      {/* Background decorative elements matching website theme */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/4 -skew-x-12 transform translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-black mb-4 leading-tight text-foreground">
            Get <span className="text-primary italic">Awesome Results</span>.
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed">
            Our clients consistently achieve measurable improvements across all key performance indicators
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-surface rounded-xl p-4 border border-primary/5 shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <h3 className="text-xs font-bold mb-3 text-muted-foreground uppercase tracking-wider">
                {result.title}
              </h3>
              
              <div className="mb-3">
                <p className="text-xs text-primary mb-1 font-semibold">{result.subtitle}</p>
                <div className="text-3xl md:text-4xl font-black text-foreground mb-1 leading-none group-hover:text-primary transition-colors">
                  {result.percentage}
                </div>
              </div>
              
              <p className="text-xs text-muted-foreground leading-relaxed">
                {result.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;