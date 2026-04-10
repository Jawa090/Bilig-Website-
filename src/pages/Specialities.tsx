import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { Stethoscope, Brain, Heart, Baby, Bone, Microscope, Activity, Eye, Users, ShieldCheck, Home, Clock, Zap, HeartHandshake, ArrowRight, Phone } from "lucide-react";

const specialities = [
  { icon: Heart, name: "Cardiology", slug: "cardiology", desc: "Cardiology billing involves high-value procedure codes, complex modifier rules, and payer-specific LCD policies that change regularly. Our cardiology billers stay current on interventional, diagnostic, and non-invasive coding." },
  { icon: Brain, name: "Neurology", slug: "neurology", desc: "EEG interpretation, EMG studies, infusion billing, and time-based E&M codes require precision. One wrong unit count on an infusion claim can trigger a payer audit." },
  { icon: Stethoscope, name: "Internal Medicine", slug: "internal-medicine", desc: "Annual wellness visits, chronic care management, transitional care management, and complex E&M leveling — all require careful documentation review to bill at the right level." },
  { icon: Baby, name: "Pediatrics", slug: "pediatrics", desc: "Well-child visit bundling rules, EPSDT compliance, vaccine administration coding, and Medicaid-specific billing requirements make pediatrics one of the more complex specialties to bill correctly." },
  { icon: Bone, name: "Orthopedics", slug: "orthopedics", desc: "Surgical global periods, implant billing, modifier 59 and modifier 51 usage, and fracture care coding are the everyday reality of orthopedic billing. We handle all of it." },
  { icon: Eye, name: "Dermatology", slug: "dermatology", desc: "Lesion excision coding by size and location, Mohs surgery stage billing, and distinguishing cosmetic from medically necessary procedures for payers — all handled correctly." },
  { icon: Microscope, name: "Laboratory", slug: "laboratory", desc: "PAMA fee schedule pricing, NPI billing for reference labs, ABN management for non-covered tests, and modifier QW usage for CLIA-waived tests." },
  { icon: Activity, name: "Physical Therapy", slug: "physical-therapy", desc: "Timed code sequencing rules, KX modifier for therapy cap exceptions, functional limitation G-code reporting, and payer-specific PT billing policies." },
  { icon: Users, name: "Family Medicine", slug: "family-medicine", desc: "AWV billing, CCM codes (99490, 99491), TCM codes with the correct 7 or 14-day timeframes, and preventive vs. problem-focused visit billing." },
  { icon: ShieldCheck, name: "Wound Care", slug: "wound-care", desc: "Debridement coding by wound depth, skin substitute product billing, hyperbaric oxygen therapy codes, and wound measurement documentation requirements." },
  { icon: Home, name: "Home Health", slug: "home-health", desc: "OASIS accuracy, RAP and final claim timing, PDGM episode management, and LUPA threshold monitoring to protect reimbursement." },
  { icon: Clock, name: "Geriatrics Medicine", slug: "geriatrics-medicine", desc: "SNF billing rules, MDS coding, advance care planning CPT 99497 billing, and Medicare Advantage billing nuances for elderly patient populations." },
  { icon: Zap, name: "Rheumatology", slug: "rheumatology", desc: "Infusion and injection billing with correct J-code selection, prior authorization management for biologics, and payer-specific infusion billing rules." },
  { icon: HeartHandshake, name: "Mental Health", slug: "mental-health", desc: "Telehealth billing compliance, CPT psychotherapy code selection by session length, parity law compliance, and LCSW/LMFT credential billing rules." },
];

const Specialities = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <Layout>
      <section className="bg-gradient-hero py-20 text-center">
        <div className="container mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.1em] font-semibold text-secondary mb-3">SPECIALITIES</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4 max-w-3xl mx-auto">Billing Expertise Built for Your Specialty — Not Adapted From Someone Else's</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">We maintain separate billing teams for each specialty we serve. Your billers have billed your procedures before. They know your codes, your modifiers, and your payers' quirks.</p>
        </div>
      </section>

      <section ref={ref} className="section-padding bg-background">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialities.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  to={`/specialities/${s.slug}`}
                  className="group block bg-background border rounded-2xl p-8 text-center hover:-translate-y-1 hover:shadow-xl hover:border-t-4 hover:border-t-secondary transition-all h-full"
                >
                  <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:from-secondary group-hover:to-secondary-dark transition-all">
                    <s.icon size={32} className="text-primary-foreground" />
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-sm text-primary font-semibold group-hover:text-secondary transition-colors">
                    View {s.name} Billing <ArrowRight size={14} />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 text-center bg-surface rounded-2xl p-10">
            <h3 className="text-2xl font-bold text-foreground mb-3">Don't See Your Specialty?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">We currently serve 14 specialties, each with a dedicated billing team. Call us and we'll tell you exactly how we handle your specific coding and payer requirements.</p>
            <a href="tel:7373076234" className="inline-flex items-center gap-2 bg-gradient-green text-primary-foreground px-8 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
              <Phone size={18} /> Speak to a Billing Specialist
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Specialities;

