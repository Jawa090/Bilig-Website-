import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Zap, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/images/hero-1.png",
    fallback: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600",
    tag: "New York's Only Performance-Based Billing Company",
    title: "Your Claims Deserve Better Than a 73% First-Pass Rate",
    description: "The national average first-pass claim acceptance is 73%. At Optimum Solution, we average 97.3%. That difference is real dollars sitting in your bank account instead of AR reports.",
    pills: ["97.3% First-Pass Acceptance", "AR Days Reduced by 50%", "HIPAA + ISO Certified"],
    cta: "Get Your Free Revenue Audit →",
    link: "/contact"
  },
  {
    image: "/images/hero-2.png",
    fallback: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1600",
    tag: "Certified & Compliant Solutions",
    title: "Revolutionize Your Revenue Cycle Management",
    description: "Our advanced billing technology and expert team handle everything from eligibility to payment posting, so your team can focus entirely on patient care.",
    pills: ["Electronic Claim Filing", "Dedicated Account Manager", "Real-time Reporting"],
    cta: "Explore Our Services →",
    link: "/services"
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[520px] md:h-[580px] flex items-center overflow-hidden bg-dark">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/60 to-dark/20 z-10" />
          <img
            src={slides[current].image}
            alt={slides[current].title}
            loading="eager"
            onError={(e) => { (e.target as HTMLImageElement).src = slides[current].fallback; }}
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      <div className="container mx-auto px-6 relative z-20">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md rounded-full px-3 py-1 text-primary-foreground text-xs mb-4 border border-white/10">
                <Zap size={12} className="text-secondary" />
                {slides[current].tag}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground leading-tight mb-4">
                {slides[current].title.split(" ").map((word, i) => (
                  <span key={i} className="inline-block mr-2">
                    {word === "73%" || word === "Revenue" ? (
                      <span className="text-secondary">{word}</span>
                    ) : (
                      word
                    )}
                  </span>
                ))}
              </h1>

              <p className="text-primary-foreground/75 text-base leading-relaxed mb-6 max-w-xl">
                {slides[current].description}
              </p>

              <div className="flex flex-wrap gap-3 mb-7">
                {slides[current].pills.map((pill) => (
                  <span key={pill} className="flex items-center gap-1.5 text-primary-foreground/85 text-xs font-medium">
                    <CheckCircle2 size={14} className="text-secondary" /> {pill}
                  </span>
                ))}
              </div>

              <Link
                to={slides[current].link}
                className="inline-block bg-gradient-green text-primary-foreground px-7 py-3 rounded-full font-bold text-sm shadow-lg hover:scale-105 transition-all duration-300"
              >
                {slides[current].cta}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-6 right-8 z-30 flex gap-3">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-primary-foreground hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronLeft size={18} />
        </button>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-primary-foreground hover:bg-white/10 transition-colors backdrop-blur-sm"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-300 ${
              current === i ? "w-6 bg-secondary" : "w-2.5 bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
