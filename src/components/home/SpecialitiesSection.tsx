import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  Stethoscope, Brain, Heart, Baby, Bone, Microscope,
  Activity, Eye, Users, ShieldCheck, Home, Clock,
  Zap, HeartHandshake, ArrowRight
} from "lucide-react";

const specialities = [
  { icon: Heart,         name: "Cardiology",       slug: "cardiology",         color: "text-rose-500",   bg: "bg-rose-50",   hbg: "group-hover:bg-rose-500" },
  { icon: Brain,         name: "Neurology",         slug: "neurology",          color: "text-violet-500", bg: "bg-violet-50", hbg: "group-hover:bg-violet-500" },
  { icon: Stethoscope,   name: "Internal Med",      slug: "internal-medicine",  color: "text-primary",    bg: "bg-primary/5", hbg: "group-hover:bg-primary" },
  { icon: Baby,          name: "Pediatrics",        slug: "pediatrics",         color: "text-sky-500",    bg: "bg-sky-50",    hbg: "group-hover:bg-sky-500" },
  { icon: Bone,          name: "Orthopedics",       slug: "orthopedics",        color: "text-amber-500",  bg: "bg-amber-50",  hbg: "group-hover:bg-amber-500" },
  { icon: Eye,           name: "Dermatology",       slug: "dermatology",        color: "text-pink-500",   bg: "bg-pink-50",   hbg: "group-hover:bg-pink-500" },
  { icon: Microscope,    name: "Laboratory",        slug: "laboratory",         color: "text-teal-500",   bg: "bg-teal-50",   hbg: "group-hover:bg-teal-500" },
  { icon: Activity,      name: "Physical Therapy",  slug: "physical-therapy",   color: "text-secondary",  bg: "bg-secondary/5", hbg: "group-hover:bg-secondary" },
  { icon: Users,         name: "Family Medicine",   slug: "family-medicine",    color: "text-indigo-500", bg: "bg-indigo-50", hbg: "group-hover:bg-indigo-500" },
  { icon: ShieldCheck,   name: "Wound Care",        slug: "wound-care",         color: "text-primary",    bg: "bg-primary/5", hbg: "group-hover:bg-primary" },
  { icon: Home,          name: "Home Health",       slug: "home-health",        color: "text-orange-500", bg: "bg-orange-50", hbg: "group-hover:bg-orange-500" },
  { icon: Clock,         name: "Geriatrics",        slug: "geriatrics-medicine",color: "text-cyan-500",   bg: "bg-cyan-50",   hbg: "group-hover:bg-cyan-500" },
  { icon: Zap,           name: "Rheumatology",      slug: "rheumatology",       color: "text-yellow-500", bg: "bg-yellow-50", hbg: "group-hover:bg-yellow-500" },
  { icon: HeartHandshake,name: "Mental Health",     slug: "mental-health",      color: "text-fuchsia-500",bg: "bg-fuchsia-50",hbg: "group-hover:bg-fuchsia-500" },
];

const SpecialitiesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-[#f8fafb] overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
            Specialities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Specialized Billing for{" "}
            <span className="text-primary italic">Every Field</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto font-medium leading-relaxed">
            Dedicated billing teams for each clinical specialty — experts who truly understand your codes, modifiers, and payer rules.
          </p>
        </motion.div>

        {/* Specialities Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3 md:gap-4">
          {specialities.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, scale: 0.88, y: 12 }}
              animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="group"
            >
              <Link
                to={`/specialities/${s.slug}`}
                className="flex flex-col items-center text-center bg-white border border-primary/5 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:shadow-primary/8 hover:-translate-y-2 hover:border-primary/15 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${s.bg} ${s.hbg} flex items-center justify-center mb-3 transition-all duration-300 shadow-sm`}>
                  <s.icon size={22} className={`${s.color} group-hover:text-white transition-colors duration-300`} />
                </div>
                <p className="text-[11px] font-black text-foreground leading-tight group-hover:text-primary transition-colors">
                  {s.name}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            to="/specialities"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-full font-black text-sm shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
          >
            View All 14 Specialities <ArrowRight size={17} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default SpecialitiesSection;
