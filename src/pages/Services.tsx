import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { 
  ClipboardList, FileCode, RefreshCcw, BadgeCheck, XCircle, Search, Bot, 
  BarChart3, Check, ArrowRight, Activity, TrendingUp, Globe
} from "lucide-react";

const services = [
  {
    icon: ClipboardList, title: "Medical Billing Services", tag: "Revenue Cycle",
    link: "/services/medical-billing",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    desc: "Comprehensive claim management from entry to final payment. We focus on accuracy and speed to ensure your practice remains financially healthy.",
    features: ["Daily claim submission", "Specialty-specific scrubbing", "A/R follow-up", "Detailed monthly reporting"],
  },
  {
    icon: FileCode, title: "Medical Coding Services", tag: "Compliance",
    link: "/services/medical-coding",
    image: "https://images.unsplash.com/photo-1576671081837-49000212a370?auto=format&fit=crop&q=80&w=1200",
    desc: "Certified AAPC/AHIMA coders ensure that your clinical documentation is translated into the most accurate codes, maximizing legitimate reimbursement.",
    features: ["Certified coding experts", "Regular document audits", "Payer rule updates", "99% accuracy rate"],
  },
  {
    icon: RefreshCcw, title: "Revenue Cycle Management", tag: "Full-Spectrum",
    link: "/services/revenue-cycle-management",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    desc: "A complete end-to-end solution managing every financial touchpoint of your practice. We treat your revenue as our own commitment.",
    features: ["Total financial oversight", "Integrated verification", "Performance analytics", "Strategy reviews"],
  },
  {
    icon: BadgeCheck, title: "Medical Credentialing Services", tag: "Provider Enrollment",
    link: "/services/medical-credentialing",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=1200",
    desc: "Expert management of payer enrollment and primary source verification. We ensure your providers stay in-network without a single lapse.",
    features: ["Enrollment mastery", "CAQH maintenance", "Expiration tracking", "Proven enrollment cycles"],
  },
  {
    icon: XCircle, title: "Denial Management Services", tag: "Recovery",
    link: "/services/denial-management",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=1200",
    desc: "Strategic denial tracking and resolution. We don't just appeal; we fix the upstream problems that cause denials in the first place.",
    features: ["100% denial review", "Root-cause analysis", "Appeal expertise", "High recovery rates"],
  },
  {
    icon: Search, title: "Medical Billing Audit Services", tag: "Auditing",
    link: "/services/medical-audit",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
    desc: "Identify lost revenue and identify compliance risks before they become problems. Our professional audits protect your practice and your profits.",
    features: ["Charge identification", "Compliance checks", "Payer contract audits", "Risk assessment"],
  },
  {
    icon: Bot, title: "Medical Virtual Assistant", tag: "Practice Support",
    link: "/services/virtual-assistant",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&q=80&w=1200",
    desc: "Extend your office team with HIPAA-trained professionals who handle prior authorizations, eligibility, and patient reminders.",
    features: ["Prior authorizations", "EHR-integrated work", "Appointment follow-up", "Cost-effective staffing"],
  },
  {
    icon: BarChart3, title: "Analytics & Reporting Services", tag: "Insights",
    link: "/services/analytics-reporting",
    image: "https://images.unsplash.com/photo-1576089234208-1647416345d3?auto=format&fit=crop&q=80&w=1200",
    desc: "Clear, actionable data that shows you the true state of your practice. We turn numbers into clear financial roadmaps for growth.",
    features: ["Real-time dashboards", "A/R trend analysis", "Scorecard reporting", "Quarterly consulting"],
  },
  {
    icon: Activity, title: "Dental Services", tag: "Dental Excellence",
    link: "/services/dental-services",
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1200",
    desc: "Specialized revenue cycle management for dental practices. We bridge the gap between dental care and financial success with precision billing and expert coding.",
    features: ["Dental Billing & Coding", "Insurance Verification", "Claim Tracking", "Fee Optimization"],
  },
  {
    icon: TrendingUp, title: "Business Development", tag: "Growth & Acquisition",
    link: "/services/business-development",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    desc: "Accelerate your revenue with Upwork optimization, winning proposal bidding, targeted client acquisition, cold calling campaigns, and full-spectrum digital marketing.",
    features: ["Upwork Profile Optimization", "Proposal Bidding", "Cold Calling Campaigns", "Digital Marketing"],
  },
  {
    icon: Globe, title: "Digital Marketing", tag: "Online Growth",
    link: "/services/digital-marketing",
    image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1200",
    desc: "Full-spectrum digital marketing including SEO, Google Ads, social media advertising, email marketing, and content marketing to grow your business online.",
    features: ["SEO & Organic Growth", "Google Ads & PPC", "Social Media Ads", "Email Marketing"],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Professional Hero Section - Restored original color */}
      <section className="bg-gradient-hero py-20 md:py-32 text-center">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">Optimum Solution Services</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Professional Revenue Cycle <br />
              Management for Your Practice
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto">
              We provide dependable, expert solutions for every stage of your medical practice's financial health.
            </p>
          </div>
        </div>
      </section>

      {/* Main Service Grid - Only showing once, in box style */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="p-8 border border-slate-100 rounded-[2rem] hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all flex flex-col items-start group bg-white"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  <s.icon size={26} className="text-primary group-hover:text-white" />
                </div>
                <div className="inline-block bg-primary/5 text-primary px-3 py-1 rounded-full text-[10px] font-bold uppercase mb-3 tracking-wider">
                  {s.tag}
                </div>
                <h3 className="text-lg font-bold text-dark mb-4 leading-tight">{s.title}</h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">
                  {s.desc}
                </p>
                <div className="space-y-3 mt-auto">
                  {s.features.slice(0, 3).map((f: string) => (
                    <div key={f} className="flex items-center gap-2">
                      <Check size={14} className="text-secondary shrink-0" />
                      <span className="text-[11px] font-bold text-slate-700">{f}</span>
                    </div>
                  ))}
                </div>
                <Link 
                  to={s.link} 
                  className="mt-8 inline-flex items-center gap-2 text-sm text-primary font-bold hover:gap-3 transition-all"
                >
                  Learn More <ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <section className="py-20 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Need a Custom Billing Solution?</h2>
          <p className="text-white/80 mb-10 max-w-lg mx-auto font-medium">
            Contact us for a professional consultation and discover how we can streamline your revenue cycle.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-white text-primary px-10 py-4 rounded-xl font-bold hover:bg-slate-50 transition-colors shadow-lg shadow-black/5"
          >
            Get Started Now
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

const ServiceDetails = ({ service, reversed }: { service: any, reversed: boolean }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      id={service.title.toLowerCase().replace(/\s+/g, '-')}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 md:gap-20`}
    >
      <div className="w-full lg:w-1/2">
        <div className="rounded-[2rem] overflow-hidden shadow-sm border border-slate-100">
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-[300px] md:h-[450px] object-cover" 
          />
        </div>
      </div>

      <div className="w-full lg:w-1/2">
        <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase mb-6 tracking-wide">
          {service.tag}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
          {service.title}
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed mb-8 font-medium">
          {service.desc}
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-slate-700">
          {service.features.map((f: string) => (
            <div key={f} className="flex items-center gap-3">
              <Check size={18} className="text-secondary shrink-0" />
              <span className="text-sm font-semibold">{f}</span>
            </div>
          ))}
        </div>
        <Link 
          to="/contact" 
          className="inline-flex items-center gap-1 text-primary font-bold text-base hover:underline"
        >
          Learn More <ArrowRight size={18} />
        </Link>
      </div>
    </motion.div>
  );
};

export default Services;
