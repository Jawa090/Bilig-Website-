import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram, ArrowRight } from "lucide-react";
import Logo from "../common/Logo";


const services = [
  { label: "Medical Billing",          to: "/services/medical-billing" },
  { label: "Medical Coding",           to: "/services/medical-coding" },
  { label: "Revenue Cycle Management", to: "/services/revenue-cycle-management" },
  { label: "Medical Credentialing",    to: "/services/medical-credentialing" },
  { label: "Denial Management",        to: "/services/denial-management" },
  { label: "Analytics & Reporting",    to: "/services/analytics-reporting" },
  { label: "Dental Services",          to: "/services/dental-services" },
];

const specialities = [
  { label: "Cardiology",       to: "/specialities/cardiology" },
  { label: "Neurology",        to: "/specialities/neurology" },
  { label: "Internal Medicine",to: "/specialities/internal-medicine" },
  { label: "Pediatrics",       to: "/specialities/pediatrics" },
  { label: "Orthopedics",      to: "/specialities/orthopedics" },
  { label: "Mental Health",    to: "/specialities/mental-health" },
];

const quickLinks = [
  { label: "Home",        to: "/" },
  { label: "About Us",    to: "/about" },
  { label: "Services",    to: "/services" },
  { label: "Specialities",to: "/specialities" },
  { label: "Contact",     to: "/contact" },
  { label: "Book a Demo", to: "/contact" },
];

const Footer = () => (
  <footer style={{ background: "hsl(186 65% 9%)" }} className="text-white">

    {/* ── Main Grid ── */}
    <div className="container mx-auto px-6 pt-14 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand Column */}
        <div className="lg:col-span-1">
          {/* Logo mark */}
          <div className="mb-5">
            <Logo className="scale-90 origin-left" light={true} />
          </div>

          <p className="text-sm text-white/55 leading-relaxed mb-6">
            Texas's trusted medical billing partner. Serving 100+ healthcare practices across all 50 states with precision, compliance, and care.
          </p>

          {/* Contact mini */}
          <ul className="space-y-2.5">
            <li className="flex items-center gap-2.5 text-sm text-white/60">
              <MapPin size={14} className="shrink-0" style={{ color: "hsl(90 100% 40%)" }} />
              5900 Balcones Dr 18826, Austin, TX 78731
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <Phone size={14} className="shrink-0" style={{ color: "hsl(90 100% 40%)" }} />
              <a href="tel:7373076234" className="text-white/60 hover:text-white transition-colors">
                +1 (737) 307-6234
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm">
              <Mail size={14} className="shrink-0" style={{ color: "hsl(90 100% 40%)" }} />
              <a href="mailto:info@optimumsolution.com" className="text-white/60 hover:text-white transition-colors">
                info@optimumsolution.com
              </a>
            </li>
          </ul>

          {/* Socials */}
          <div className="flex gap-2.5 mt-6">
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/company/optimum-global-solutions-llc/" },
              { Icon: Twitter, href: "https://x.com/optimumglo36418?s=11&t=lN5VxP8-HiWW452lvAvbSw" },
              { Icon: Instagram, href: "https://www.instagram.com/optimumglobalsolutions?igsh=MWRidTZqb2d2cTN5Yg%3D%3D&utm_source=qr" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Social link"
                className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors"
                style={{ background: "rgba(255,255,255,0.07)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "hsl(187 80% 27%)")}
                onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.07)")}
              >
                <Icon size={15} className="text-white/80" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "hsl(90 100% 40%)" }}>
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(90 100% 40%)" }} />
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "hsl(90 100% 40%)" }}>
            Our Services
          </h4>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(90 100% 40%)" }} />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Specialities */}
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest mb-5" style={{ color: "hsl(90 100% 40%)" }}>
            Specialities
          </h4>
          <ul className="space-y-2.5">
            {specialities.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="flex items-center gap-1.5 text-sm text-white/55 hover:text-white transition-colors group"
                >
                  <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "hsl(90 100% 40%)" }} />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/specialities"
            className="inline-flex items-center gap-1 mt-4 text-xs font-semibold transition-colors"
            style={{ color: "hsl(90 100% 40%)" }}
          >
            View all 14 →
          </Link>
        </div>
      </div>
    </div>

    {/* ── Bottom Bar ── */}
    <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/35">
        <span>© {new Date().getFullYear()} Optimum Global Solutions. All rights reserved.</span>
        <div className="flex items-center gap-5">
          <a href="#" className="hover:text-white/70 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/70 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white/70 transition-colors">HIPAA Compliance</a>
        </div>
      </div>
    </div>

  </footer>
);

export default Footer;
