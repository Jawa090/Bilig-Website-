import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  ClipboardList, FileCode, RefreshCcw, BadgeCheck,
  XCircle, Search, Bot, BarChart3, ArrowRight, TrendingUp, Globe
} from "lucide-react";

const services = [
  { icon: ClipboardList, title: "Medical Billing", link: "/services/medical-billing", desc: "Complete billing cycle — charge entry, claim scrubbing, and payment posting with 97.3% first-pass acceptance." },
  { icon: FileCode, title: "Medical Coding", link: "/services/medical-coding", desc: "AAPC-certified coders translate clinical notes into accurate CPT and ICD-10 codes with 99% accuracy." },
  { icon: RefreshCcw, title: "RCM Solutions", link: "/services/revenue-cycle-management", desc: "Full-spectrum RCM from registration to final payment, identifying revenue gaps before they become losses." },
  { icon: BadgeCheck, title: "Credentialing", link: "/services/medical-credentialing", desc: "Hassle-free provider enrollment, payer applications, and CAQH updates for continuous reimbursement." },
  { icon: XCircle, title: "Denial Management", link: "/services/denial-management", desc: "Root-cause analysis and proactive fixes to ensure denials never happen twice. We fight for every dollar." },
  { icon: Search, title: "Billing Audits", link: "/services/medical-audit", desc: "100% record review uncovering missed charges and compliance gaps — often recovering 8–15% lost revenue." },
  { icon: Bot, title: "Virtual Assistant", link: "/services/virtual-assistant", desc: "Dedicated remote assistants for scheduling and prior auths, reducing overhead and admin burden." },
  { icon: BarChart3, title: "Custom Analytics", link: "/services/analytics-reporting", desc: "Real-time dashboards providing deep insights into your practice financial health and performance." },
  { icon: TrendingUp, title: "Business Development", link: "/services/business-development", desc: "Upwork optimization, proposal bidding, client acquisition, cold calling, and digital marketing to scale your revenue." },
  { icon: Globe, title: "Digital Marketing", link: "/services/digital-marketing", desc: "SEO, Google Ads, Facebook & Instagram Ads, email marketing, and content strategy to grow your business online." },
];

const ServicesSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/3 rounded-full blur-[120px] -mr-40 -mt-40 pointer-events-none" />

      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-4">
              Our Expertise
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
              Ten Ways We Protect{" "}
              <span className="text-primary italic">Your Revenue</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              From patient check-in to final payment, we close every gap where revenue could be lost.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-3 group text-primary font-black text-base border-2 border-primary/20 px-6 py-3 rounded-full hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
              View All Services
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                to={s.link}
                className="block bg-[#f8fafb] rounded-3xl p-7 border border-primary/5 hover:border-primary/20 hover:bg-white hover:shadow-xl hover:shadow-primary/8 transition-all duration-400 group relative overflow-hidden h-full"
              >
                {/* Corner glow on hover */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary/5 rounded-full group-hover:scale-[2.5] group-hover:bg-primary/10 transition-transform duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-primary/10 flex items-center justify-center mb-5 shadow-sm group-hover:bg-primary group-hover:border-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <s.icon size={22} className="text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-black text-foreground mb-2.5 leading-tight group-hover:text-primary transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mb-5">
                    {s.desc}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-black text-primary opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Learn More <ArrowRight size={13} />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="mt-10 flex justify-center md:hidden">
          <Link
            to="/services"
            className="bg-primary text-white px-8 py-3.5 rounded-full font-black shadow-lg shadow-primary/20 flex items-center gap-2 text-sm"
          >
            Explore All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
