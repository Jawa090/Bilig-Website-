import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, ChevronDown,
  ClipboardList, FileCode, RefreshCcw, BadgeCheck, XCircle, Search, Bot, BarChart3,
  Stethoscope, Brain, Heart, Baby, Bone, Microscope, Activity, Eye, Users,
  ShieldCheck, Home, Clock, Zap, HeartHandshake, DollarSign, TrendingUp, Globe,
} from "lucide-react";
import Logo from "../common/Logo";
import PricingModal from "../common/PricingModal";

const services = [
  { icon: ClipboardList, title: "Medical Billing Services",   desc: "End-to-end billing solutions for all specialties",   link: "/services/medical-billing" },
  { icon: FileCode,      title: "Medical Coding Services",    desc: "ICD-10, CPT & HCPCS certified coding experts",       link: "/services/medical-coding" },
  { icon: RefreshCcw,    title: "Revenue Cycle Management",   desc: "Full-cycle revenue optimization & tracking",          link: "/services/revenue-cycle-management" },
  { icon: BadgeCheck,    title: "Medical Credentialing",      desc: "Provider enrollment & payer contracting",             link: "/services/medical-credentialing" },
  { icon: XCircle,       title: "Denial Management",          desc: "Root-cause analysis & rapid appeal resolution",       link: "/services/denial-management" },
  { icon: Search,        title: "Billing Audit",              desc: "Comprehensive compliance & revenue audits",           link: "/services/medical-audit" },
  { icon: Bot,           title: "Virtual Medical Assistant",  desc: "AI-powered admin & clinical support",                link: "/services/virtual-assistant" },
  { icon: BarChart3,     title: "Analytics & Reporting",      desc: "Real-time dashboards & financial insights",           link: "/services/analytics-reporting" },
  { icon: Activity,      title: "Dental Services",            desc: "Specialized billing & coding for dental practices",    link: "/services/dental-services", highlight: true },
  { icon: TrendingUp,    title: "Business Development",       desc: "Upwork optimization, bidding, client acquisition",    link: "/services/business-development" },
  { icon: Globe,         title: "Digital Marketing",          desc: "SEO, Google Ads, social media & email marketing",     link: "/services/digital-marketing" },
];

const specialities = [
  { icon: Stethoscope,  name: "Internal Medicine", slug: "internal-medicine" },
  { icon: Brain,        name: "Neurology",          slug: "neurology" },
  { icon: Heart,        name: "Cardiology",         slug: "cardiology" },
  { icon: Baby,         name: "Pediatrics",         slug: "pediatrics" },
  { icon: Bone,         name: "Orthopedics",        slug: "orthopedics" },
  { icon: Microscope,   name: "Laboratory",         slug: "laboratory" },
  { icon: Activity,     name: "Physical Therapy",   slug: "physical-therapy" },
  { icon: Eye,          name: "Dermatology",        slug: "dermatology" },
  { icon: Users,        name: "Family Medicine",    slug: "family-medicine" },
  { icon: ShieldCheck,  name: "Wound Care",         slug: "wound-care" },
  { icon: Home,         name: "Home Health",        slug: "home-health" },
  { icon: Clock,        name: "Geriatrics Medicine",slug: "geriatrics-medicine" },
  { icon: Zap,          name: "Rheumatology",       slug: "rheumatology" },
  { icon: HeartHandshake,name:"Mental Health",      slug: "mental-health" },
];

const navLinks = [
  { to: "/",            label: "Home" },
  { to: "/about",       label: "About" },
  { to: "/services",    label: "Services",     dropdown: "services" },
  { to: "/specialities",label: "Specialities", dropdown: "specialities" },
  { to: "#pricing",     label: "Pricing",      dropdown: "pricing" },
  { to: "/contact",     label: "Contact" },
];

const Header = () => {
  const [scrolled, setScrolled]             = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Pricing modal state
  const [pricingOpen, setPricingOpen]       = useState(false);
  const [pricingService, setPricingService] = useState({ name: "", icon: undefined as React.ElementType | undefined });

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const openPricing = (name: string, icon: React.ElementType) => {
    setActiveDropdown(null);
    setPricingService({ name, icon });
    setPricingOpen(true);
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-background shadow-md" : "bg-background/95 backdrop-blur-sm"}`}>
        <div className="container mx-auto flex items-center justify-between h-14 px-6">
          <Logo className="transform scale-90 md:scale-100" />

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.to}
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.dropdown)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {/* Pricing nav item — no navigation, just opens dropdown */}
                {link.dropdown === "pricing" ? (
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 text-foreground/70 hover:text-primary`}
                  >
                    <DollarSign size={14} className="text-primary" />
                    {link.label}
                    <ChevronDown size={14} className={`transition-transform ${activeDropdown === "pricing" ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    to={link.to}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors flex items-center gap-1 ${location.pathname === link.to ? "text-primary" : "text-foreground/70 hover:text-primary"}`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <ChevronDown size={14} className={`transition-transform ${activeDropdown === link.dropdown ? "rotate-180" : ""}`} />
                    )}
                  </Link>
                )}

                {location.pathname === link.to && link.to !== "#pricing" && (
                  <motion.div layoutId="nav-underline" className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full" />
                )}

                <AnimatePresence>
                  {/* Services Dropdown */}
                  {link.dropdown === "services" && activeDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-background rounded-2xl shadow-xl border p-6 grid grid-cols-2 gap-3"
                    >
                      {services.map((s) => (
                        <Link 
                          to={s.link} 
                          key={s.title} 
                          className={`flex items-start gap-3 p-3 rounded-xl transition-all group ${s.highlight ? "bg-primary/5 border border-primary/20 hover:bg-primary/10" : "hover:bg-surface"}`}
                        >
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${s.highlight ? "bg-primary text-primary-foreground" : "bg-primary/10 group-hover:bg-primary group-hover:text-primary-foreground"}`}>
                            <s.icon size={18} className={s.highlight ? "text-primary-foreground" : "text-primary group-hover:text-primary-foreground"} />
                          </div>
                          <div>
                            <p className={`font-semibold text-sm ${s.highlight ? "text-primary" : "text-foreground"}`}>{s.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                          </div>
                        </Link>
                      ))}
                    </motion.div>
                  )}

                  {/* Specialities Dropdown */}
                  {link.dropdown === "specialities" && activeDropdown === "specialities" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[500px] bg-background rounded-2xl shadow-xl border p-6 grid grid-cols-3 gap-3"
                    >
                      {specialities.map((s) => (
                        <Link to={`/specialities/${s.slug}`} key={s.name} className="flex items-center gap-2 p-2 rounded-xl hover:bg-surface transition-colors group">
                          <s.icon size={16} className="text-primary group-hover:text-secondary transition-colors" />
                          <span className="text-sm font-medium text-foreground group-hover:text-secondary transition-colors">{s.name}</span>
                        </Link>
                      ))}
                      <div className="col-span-3 pt-2 border-t mt-1">
                        <Link to="/specialities" className="text-xs font-semibold text-primary hover:text-secondary transition-colors flex items-center gap-1">
                          View All 14 Specialities →
                        </Link>
                      </div>
                    </motion.div>
                  )}

                  {/* ── Pricing Dropdown ── */}
                  {link.dropdown === "pricing" && activeDropdown === "pricing" && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 w-[420px] bg-background rounded-2xl shadow-xl border overflow-hidden"
                    >
                      {/* Dropdown header */}
                      <div className="bg-gradient-hero px-5 py-4">
                        <p className="text-white font-bold text-sm">Select a Service to View Pricing</p>
                        <p className="text-white/60 text-xs mt-0.5">Choose a service you're interested in</p>
                      </div>

                      <div className="p-3 grid grid-cols-2 gap-1.5">
                        {services.map((s) => (
                          <button
                            key={s.title}
                            onClick={() => openPricing(s.title, s.icon)}
                            className="flex items-center gap-2.5 p-2.5 rounded-xl hover:bg-surface text-left transition-all group"
                          >
                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                              <s.icon size={15} className="text-primary group-hover:text-white transition-colors" />
                            </div>
                            <span className="text-xs font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
                              {s.title}
                            </span>
                          </button>
                        ))}
                      </div>

                      <div className="px-5 pb-4 pt-1 border-t mx-3 mb-1">
                        <p className="text-[11px] text-muted-foreground mt-2">
                          💡 All plans include free onboarding & setup
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden md:inline-flex bg-gradient-green text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:scale-105 transition-transform">
              Book Free Demo
            </Link>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-background border-t overflow-hidden"
            >
              <div className="p-6 space-y-2">
                {navLinks.map((link) =>
                  link.dropdown === "pricing" ? (
                    <div key="pricing-mobile">
                      <p className="px-4 py-2 text-xs font-bold text-muted-foreground uppercase tracking-widest">Pricing — Select Service</p>
                      <div className="grid grid-cols-2 gap-2 mt-1">
                        {services.map((s) => (
                          <button
                            key={s.title}
                            onClick={() => { setMobileOpen(false); openPricing(s.title, s.icon); }}
                            className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface text-left hover:bg-primary/10 transition-colors"
                          >
                            <s.icon size={14} className="text-primary shrink-0" />
                            <span className="text-xs font-medium text-foreground leading-snug">{s.title}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link key={link.to} to={link.to} className="block px-4 py-3 rounded-xl text-foreground font-medium hover:bg-surface transition-colors">
                      {link.label}
                    </Link>
                  )
                )}
                <Link to="/contact" className="block text-center bg-gradient-green text-primary-foreground px-6 py-3 rounded-full font-semibold mt-4">
                  Book Free Demo
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Pricing Modal */}
      <PricingModal
        isOpen={pricingOpen}
        onClose={() => setPricingOpen(false)}
        serviceName={pricingService.name}
        serviceIcon={pricingService.icon}
      />
    </>
  );
};

export default Header;
