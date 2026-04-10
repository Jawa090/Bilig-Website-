import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useEmblaCarousel from "embla-carousel-react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Margaret Chen",
    role: "Internal Medicine",
    location: "New Jersey",
    quote: "Optimum Solution's audit showed we were leaving $40,000 per year in uncollected claims. Within 90 days of switching, that money was in our accounts.",
    initials: "MC",
    color: "#0d6e7e",
    result: "$40K Recovered",
    resultLabel: "in 90 days",
  },
  {
    name: "Dr. James Okafor",
    role: "Cardiology",
    location: "New York",
    quote: "My account manager actually understands cardiology. When I have a question about a modifier, I get an answer in an hour — not a ticket number and a three-day wait.",
    initials: "JO",
    color: "#5cb800",
    result: "1-Hour",
    resultLabel: "response time",
  },
  {
    name: "Dr. Sarah Whitman",
    role: "Physical Therapy",
    location: "Texas",
    quote: "The dashboard alone was worth switching. I can see my AR by payer, provider, and CPT code from my phone. It's a different world from monthly PDF reports.",
    initials: "SW",
    color: "#094f5c",
    result: "Real-Time",
    resultLabel: "AR visibility",
  },
  {
    name: "Dr. Kevin Patel",
    role: "Orthopedic Surgery",
    location: "California",
    quote: "We reduced our days in AR from 52 to 24 within the first quarter. The team is proactive, responsive, and genuinely cares about our practice's financial health.",
    initials: "KP",
    color: "#7c3aed",
    result: "52→24",
    resultLabel: "days in AR",
  },
];

const Testimonials = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start", skipSnaps: false });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
    setSelectedIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
    setSelectedIndex((prev) => (prev + 1) % testimonials.length);
  }, [emblaApi]);

  return (
    <section ref={ref} className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px] -mr-64 -mt-64 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] -ml-64 -mb-64 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{
        backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.5) 1px, transparent 0)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container mx-auto px-6 relative z-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-5 border border-white/10 backdrop-blur-sm">
              <Star size={12} fill="#5cb800" className="text-secondary" />
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4">
              What Our Clients <span className="text-secondary italic">Actually Say</span>
            </h2>
            <p className="text-lg text-white/50 font-medium leading-relaxed">
              Real results from real practices — the tangible financial impact we deliver to our partners.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <button
              onClick={scrollPrev}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-dark transition-all duration-300 shadow-xl"
            >
              <ChevronLeft size={22} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { emblaApi?.scrollTo(i); setSelectedIndex(i); }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    selectedIndex === i ? "w-8 bg-secondary" : "w-3 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={scrollNext}
              className="w-14 h-14 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-dark transition-all duration-300 shadow-xl"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
          <div className="flex -ml-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-6 min-w-0"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[2.5rem] p-8 h-full flex flex-col justify-between hover:bg-white/[0.08] hover:border-white/20 transition-all duration-500 group"
                >
                  <div>
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} size={16} fill="#5cb800" className="text-secondary" />
                      ))}
                      <span className="ml-2 text-xs font-bold text-white/40 uppercase tracking-widest">5.0</span>
                    </div>

                    {/* Quote Icon */}
                    <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center mb-5">
                      <Quote size={18} className="text-secondary" />
                    </div>

                    {/* Quote Text */}
                    <p className="text-lg text-white/85 leading-relaxed font-medium mb-8 italic">
                      "{t.quote}"
                    </p>
                  </div>

                  <div>
                    {/* Result Badge */}
                    <div className="flex items-center gap-3 bg-white/5 rounded-2xl px-4 py-3 mb-6 border border-white/10">
                      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                      <span className="text-secondary font-black text-sm">{t.result}</span>
                      <span className="text-white/40 text-xs font-bold">{t.resultLabel}</span>
                    </div>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center text-white text-lg font-black shadow-lg group-hover:scale-110 transition-transform duration-300 shrink-0"
                        style={{ backgroundColor: t.color }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-white font-black text-base">{t.name}</p>
                        <p className="text-secondary text-[11px] font-bold uppercase tracking-widest">{t.role}</p>
                        <p className="text-white/30 text-[10px] font-bold uppercase tracking-wider mt-0.5">{t.location}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-10 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex -space-x-3">
              {[{ i: "MC", c: "#0d6e7e" }, { i: "JO", c: "#5cb800" }, { i: "SW", c: "#094f5c" }, { i: "KP", c: "#7c3aed" }].map((a) => (
                <div
                  key={a.i}
                  className="w-10 h-10 rounded-full border-2 border-dark flex items-center justify-center text-white text-xs font-black"
                  style={{ backgroundColor: a.c }}
                >
                  {a.i}
                </div>
              ))}
            </div>
            <div>
              <p className="text-white font-black text-sm">100+ Satisfied Practices</p>
              <p className="text-white/40 text-xs font-bold uppercase tracking-widest">Across All 50 States</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-center">
            {[
              { value: "98%", label: "Client Retention" },
              { value: "4.9★", label: "Average Rating" },
              { value: "97.3%", label: "Clean Claim Rate" },
            ].map((s) => (
              <div key={s.label}>
                <p className="text-secondary font-black text-xl">{s.value}</p>
                <p className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
