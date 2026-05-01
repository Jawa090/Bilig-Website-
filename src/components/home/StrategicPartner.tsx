import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const StrategicPartner = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const features = [
    {
      text: "Our global, wholly-owned infrastructure",
      highlight: "enables us to staff to our customers' needs today and the future."
    },
    {
      text: "Our purpose-built workflow and employee platform",
      highlight: "enable seamless client collaboration and provide unmatched transparency through real-time reports."
    },
    {
      text: "We anchor the transformation of your revenue cycle",
      highlight: "by applying our mature process engine, integrated workflow and client reporting technology, and our team of experienced revenue cycle professionals."
    },
    {
      text: "Our transition models mitigate risks",
      highlight: "and accelerate value realization to ensure your financial goals are met."
    }
  ];

  return (
    <section ref={ref} className="py-24 bg-[#f8fafb] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/4 -skew-x-12 transform translate-x-20 z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] rotate-3 z-0" />
              <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="/images/hero-2.png" 
                  alt="Strategic Revenue Cycle Services Team"
                  className="w-full h-[500px] object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800";
                  }}
                />
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-3xl shadow-2xl z-20"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <CheckCircle size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-black text-foreground">75+</p>
                    <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
              Strategic Partnership
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-8 leading-tight">
              We are the Strategic Revenue Cycle Services Partner for over{" "}
              <span className="text-primary italic">75+ Clients</span>.
            </h2>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-5 h-5 text-secondary" />
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    <span className="font-bold text-foreground">{feature.text}</span>{" "}
                    {feature.highlight}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
              >
                Get Your Free RCM Audit <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StrategicPartner;