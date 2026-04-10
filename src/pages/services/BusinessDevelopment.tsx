import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  TrendingUp, DollarSign, Users, Target, ChevronDown, ChevronUp,
  ArrowRight, Check, Star, Briefcase, MessageSquare, Globe,
  Phone, Mail, BarChart3, Zap, Award, Search
} from "lucide-react";

const features = [
  "Upwork Profile Optimization & SEO",
  "Strategic Proposal Writing & Bidding",
  "Client Acquisition & Lead Generation",
  "Cold Calling Campaigns",
  "Email Marketing & Outreach",
  "Social Media Marketing (LinkedIn, Facebook, Instagram)",
  "Google Ads & PPC Management",
  "Brand Identity & Digital Presence",
];

const stats = [
  { icon: TrendingUp, value: "3x", label: "Average Revenue Growth" },
  { icon: Users, value: "500+", label: "Clients Acquired for Partners" },
  { icon: Target, value: "85%", label: "Proposal Win Rate" },
  { icon: DollarSign, value: "60%", label: "Reduction in CAC" },
];

const process = [
  {
    step: "01",
    title: "Business Audit & Strategy Planning",
    desc: "We start with a comprehensive audit of your current online presence, Upwork profile, and outreach strategy — then build a custom growth roadmap tailored to your business goals.",
  },
  {
    step: "02",
    title: "Upwork Profile Optimization",
    desc: "We transform your Upwork profile with keyword-rich titles, compelling overviews, strong portfolio showcases, and optimized pricing to attract high-value clients consistently.",
  },
  {
    step: "03",
    title: "Proposal Writing & Smart Bidding",
    desc: "Our expert bid writers craft personalized, high-converting proposals for every job posting — highlighting your USPs, addressing client pain points, and closing more contracts.",
  },
  {
    step: "04",
    title: "Cold Outreach & Client Acquisition",
    desc: "We run targeted cold calling and email campaigns to decision-makers in your niche — generating qualified leads, booking discovery calls, and converting prospects into paying clients.",
  },
  {
    step: "05",
    title: "Digital Marketing Campaigns",
    desc: "From LinkedIn outreach and Facebook Ads to Google PPC and SEO — we execute multi-channel digital marketing campaigns that drive consistent traffic, leads, and conversions.",
  },
  {
    step: "06",
    title: "Analytics, Reporting & Optimization",
    desc: "Weekly and monthly performance reports keep you fully informed. We continuously A/B test, optimize campaigns, and scale what's working to maximize your ROI.",
  },
];

const faqs = [
  {
    q: "How does Upwork profile optimization help get more clients?",
    a: "An optimized Upwork profile ranks higher in search results, immediately builds credibility, and converts profile visitors into invitations and contracts. We focus on keyword placement, compelling biography, measurable results in the portfolio, and professional pricing strategy — all of which directly increase your visibility and win rate.",
  },
  {
    q: "What industries do you support for business development?",
    a: "We specialize in business development for healthcare, technology, e-commerce, digital agencies, SaaS companies, and professional services. Our team has experience generating clients across B2B and B2C sectors in the US, UK, Canada, and Australia.",
  },
  {
    q: "How quickly can I expect results from cold calling campaigns?",
    a: "Most clients begin seeing qualified leads and booked discovery calls within the first 2–3 weeks. Cold calling results depend on your target market, offer, and niche — but our experienced callers use proven scripts and objection-handling techniques to accelerate results from day one.",
  },
  {
    q: "Do you handle the entire digital marketing process or just strategy?",
    a: "We handle everything end-to-end: strategy, content creation, ad copy, campaign setup, management, optimization, and reporting. You simply review performance reports and focus on closing the clients we generate for you.",
  },
  {
    q: "What platforms do you use for digital marketing?",
    a: "We leverage Google Ads, Meta Ads (Facebook & Instagram), LinkedIn Ads, SEO, email marketing, and content marketing. The platform mix is customized based on your target audience, budget, and business objectives.",
  },
];

const services = [
  {
    icon: Search,
    title: "Upwork Profile Optimization",
    desc: "Rank higher on Upwork searches with a fully optimized profile that converts visitors into invitations and direct contracts.",
  },
  {
    icon: MessageSquare,
    title: "Proposal Writing & Bidding",
    desc: "Personalized, high-converting proposals crafted by expert bid writers who understand what clients want to hear.",
  },
  {
    icon: Users,
    title: "Client Acquisition",
    desc: "Systematic strategies to identify, target, and convert ideal clients through multiple outreach channels.",
  },
  {
    icon: Phone,
    title: "Cold Calling Campaigns",
    desc: "Professional cold calling teams using proven scripts to book qualified sales calls with decision-makers.",
  },
  {
    icon: Mail,
    title: "Email Marketing & Outreach",
    desc: "Data-driven email sequences and outreach campaigns that nurture leads and drive consistent conversions.",
  },
  {
    icon: Globe,
    title: "Digital Marketing",
    desc: "Full-spectrum digital marketing across Google, LinkedIn, Facebook, and Instagram to maximize your online reach.",
  },
];

const BusinessDevelopment = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Business Development Services | Optimum Billing Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Expert business development services including Upwork optimization, proposal bidding, client acquisition, cold calling, and digital marketing to grow your business revenue."
      );
    }
  }, []);

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-hero py-24 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-secondary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <span className="text-secondary font-bold tracking-widest text-xs uppercase mb-4 block">
              Optimum Billing Solutions
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
              Business Development That{" "}
              <span className="text-secondary">Scales</span> Your Revenue
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              From Upwork profile optimization and winning proposals to cold calling, client
              acquisition, and full-spectrum digital marketing — we build the growth engine
              your business needs to dominate your niche.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Get a Free Strategy Call <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+1-800-000-0000"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                Call Us Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary/5 border-y border-primary/10">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <s.icon size={22} className="text-primary" />
                </div>
                <div className="text-3xl font-extrabold text-dark mb-1">{s.value}</div>
                <div className="text-slate-500 text-sm font-medium">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200"
                  alt="Business development team strategizing client acquisition"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp size={22} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">3x Revenue</div>
                    <div className="text-slate-500 text-xs">Average client growth</div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                <Briefcase size={18} />
                <span>Business Growth Excellence</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Stop Waiting for Clients — Let Us Build Your Pipeline
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Whether you're a freelancer trying to dominate Upwork, a startup looking to
                acquire your first 100 clients, or an established business scaling through digital
                marketing — our dedicated business development team creates the strategy, executes
                the campaigns, and delivers measurable results.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We combine data-driven outreach, compelling copywriting, and multi-channel digital
                marketing to consistently fill your pipeline with high-quality, ready-to-buy
                prospects — so you focus on delivering, while we handle the growth.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <Check size={13} className="text-secondary" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Start Growing Today <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Business Development Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              A complete suite of growth solutions designed to fill your pipeline, win more
              clients, and accelerate your revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Why Businesses Choose Optimum for Growth
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We're not just marketers — we're revenue architects dedicated to your long-term
              business success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Proven Track Record",
                desc: "Over 500 clients acquired for our partners with an average 3x revenue growth within the first 6 months of engagement.",
              },
              {
                icon: Zap,
                title: "Multi-Channel Approach",
                desc: "We don't rely on a single channel. Our integrated strategy combines Upwork, cold outreach, and digital marketing for maximum pipeline velocity.",
              },
              {
                icon: BarChart3,
                title: "Data-Driven Execution",
                desc: "Every campaign is measured, analyzed, and optimized weekly. You receive transparent reports showing exactly what's working and what ROI you're getting.",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                desc: "Deep knowledge of healthcare, tech, SaaS, and professional services means we understand your buyers and craft messaging that resonates and converts.",
              },
              {
                icon: Users,
                title: "Dedicated Growth Team",
                desc: "You get a dedicated account manager, copywriter, and campaign specialist — not a shared inbox. Real humans focused entirely on your growth.",
              },
              {
                icon: Target,
                title: "Performance-Based Focus",
                desc: "We are obsessed with results, not vanity metrics. Every activity we undertake is tied to pipeline growth, client acquisition, and revenue generation.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:border-primary/20 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-5">
                  <item.icon size={22} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Proven 6-Step Growth Process
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              A systematic, results-driven approach to growing your client base and maximizing
              your business revenue.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {process.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-5 p-6 rounded-2xl bg-white border border-slate-100 hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="text-3xl font-extrabold text-primary/20 leading-none shrink-0 w-10">
                  {p.step}
                </div>
                <div>
                  <h3 className="font-bold text-dark mb-2">{p.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Second Image Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-dark mb-5">
                Upwork Optimization That Wins More Contracts
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Upwork is one of the most competitive freelance platforms in the world. Without a
                strategically optimized profile and a proven bidding process, you're invisible to
                the clients who need you most. Our Upwork specialists analyze top-performing
                profiles in your niche, craft keyword-rich content, and develop a bidding strategy
                that consistently puts you in front of high-budget clients.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Profile headline & overview optimization",
                  "Niche-specific keyword research & integration",
                  "Portfolio setup with compelling case studies",
                  "Personalized proposal templates & bidding strategy",
                  "Ongoing profile monitoring & improvements",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check size={16} className="text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md"
              >
                Optimize My Upwork Profile <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1200"
                alt="Freelancer optimizing Upwork profile and winning contracts"
                className="w-full h-[380px] object-cover rounded-[2rem] shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-dark mb-5">
                Digital Marketing That Generates Real Business
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                In today's digital-first world, your potential clients are searching for your
                services online every day. Our digital marketing team builds and manages campaigns
                across every major platform — ensuring your business is visible, credible, and
                compelling to your ideal audience at every stage of their buying journey.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Google Ads & PPC — targeted traffic with measurable ROI",
                  "LinkedIn Ads & organic outreach for B2B growth",
                  "Facebook & Instagram Ads for brand awareness and leads",
                  "SEO strategy to rank for high-intent keywords",
                  "Content marketing that builds authority and trust",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check size={16} className="text-secondary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary text-white px-7 py-3.5 rounded-xl font-bold hover:bg-primary/90 transition-all shadow-md"
              >
                Launch My Campaign <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1200"
                alt="Digital marketing team managing campaigns and analytics"
                className="w-full h-[380px] object-cover rounded-[2rem] shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-500">
              Everything you need to know about our business development services.
            </p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="border border-slate-200 rounded-2xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left font-semibold text-dark hover:bg-slate-50 transition-colors"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-primary shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-6 text-slate-600 leading-relaxed text-sm border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-5">
              Ready to Scale Your Business & Win More Clients?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Schedule a free strategy call and discover how our business development experts
              can build a predictable, scalable client acquisition system for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base"
              >
                Get Free Strategy Call <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all text-base"
              >
                View All Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default BusinessDevelopment;
