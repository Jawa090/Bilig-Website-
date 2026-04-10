import { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Globe, TrendingUp, Target, BarChart3, ChevronDown, ChevronUp,
  ArrowRight, Check, Star, Zap, Award, Search, Mail, Users,
  MessageSquare, Megaphone, MousePointer, ShieldCheck
} from "lucide-react";

const features = [
  "Search Engine Optimization (SEO)",
  "Google Ads & PPC Campaigns",
  "Facebook & Instagram Advertising",
  "LinkedIn B2B Marketing",
  "Email Marketing & Automation",
  "Content Marketing & Blogging",
  "Social Media Management",
  "Conversion Rate Optimization (CRO)",
];

const stats = [
  { icon: TrendingUp, value: "4.2x", label: "Average ROAS Delivered" },
  { icon: Target, value: "300%", label: "Average Traffic Increase" },
  { icon: Users, value: "10K+", label: "Leads Generated Monthly" },
  { icon: BarChart3, value: "65%", label: "Reduction in Cost Per Lead" },
];

const process = [
  {
    step: "01",
    title: "Discovery & Competitor Analysis",
    desc: "We audit your current digital presence, analyze your top competitors, and identify high-impact opportunities in your niche that will drive the fastest growth.",
  },
  {
    step: "02",
    title: "Strategy & Campaign Blueprint",
    desc: "Based on your goals, budget, and audience, we create a custom multi-channel digital marketing strategy with clear KPIs, timelines, and expected outcomes.",
  },
  {
    step: "03",
    title: "Creative Asset Development",
    desc: "Our in-house creative team develops compelling ad copies, graphics, landing pages, and content that speak directly to your target audience and drive action.",
  },
  {
    step: "04",
    title: "Campaign Launch & Execution",
    desc: "We set up and launch all campaigns across your selected channels — Google, Meta, LinkedIn, email — with precise targeting, budgeting, and tracking configured from day one.",
  },
  {
    step: "05",
    title: "Optimization & A/B Testing",
    desc: "Every campaign is continuously monitored. We run A/B tests on ads, landing pages, and email sequences to consistently improve performance and lower your cost per acquisition.",
  },
  {
    step: "06",
    title: "Reporting & Scaling",
    desc: "Weekly performance reports keep you fully informed. Once we identify winning campaigns, we scale budgets strategically to maximize your ROI and accelerate growth.",
  },
];

const faqs = [
  {
    q: "How long does it take to see results from digital marketing?",
    a: "Paid ads (Google/Meta) typically generate leads within the first 1–2 weeks of launch. SEO takes 3–6 months to show significant rankings and organic traffic. We set realistic expectations from the start and combine both paid and organic strategies for immediate and long-term results.",
  },
  {
    q: "What industries do you specialize in for digital marketing?",
    a: "We specialize in healthcare, medical billing, professional services, SaaS, e-commerce, and B2B businesses. Our team understands the compliance requirements and audience behavior specific to these industries, which means faster results and fewer wasted ad dollars.",
  },
  {
    q: "How much should I budget for digital marketing?",
    a: "Ad spend depends on your goals and industry. For Google/Meta ads, we typically recommend a minimum $1,500–$3,000/month in ad spend to gather enough data for optimization. Our management fees are separate and scale with your budget. We provide a detailed budget recommendation during your free strategy call.",
  },
  {
    q: "Do you create the ad content and landing pages too?",
    a: "Yes — we handle everything end-to-end: copywriting, creative design, landing page development, and ongoing content creation. You don't need a separate design or content team. We build everything needed to run high-converting campaigns.",
  },
  {
    q: "Can I see exactly how my campaigns are performing?",
    a: "Absolutely. Every client gets access to a live reporting dashboard showing impressions, clicks, conversions, cost per lead, and ROAS in real time. We also send weekly summary reports with insights and next steps.",
  },
  {
    q: "Do you work with existing marketing efforts or start from scratch?",
    a: "Both. If you already have campaigns running, we audit them, identify inefficiencies, and optimize. If you're starting fresh, we build everything from the ground up — strategy, creatives, tracking, and campaigns.",
  },
];

const channels = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    tag: "SEO",
    desc: "Rank on page 1 for high-intent keywords. We build topical authority, optimize on-page elements, and execute white-hat link building to drive sustainable organic traffic that converts.",
    points: ["Keyword research & mapping", "On-page & technical SEO", "Link building & outreach", "Local SEO & Google Business"],
  },
  {
    icon: MousePointer,
    title: "Google Ads & PPC",
    tag: "Paid Search",
    desc: "Capture buyers who are actively searching for your services right now. Our certified Google Ads specialists build campaigns that maximize clicks, minimize wasted spend, and deliver measurable ROI.",
    points: ["Search & Display campaigns", "Smart bidding strategies", "Ad copy A/B testing", "Conversion tracking & optimization"],
  },
  {
    icon: Megaphone,
    title: "Social Media Advertising",
    tag: "Paid Social",
    desc: "Reach your ideal customers on Facebook, Instagram, and LinkedIn with highly targeted paid campaigns. We combine creative storytelling with data-driven targeting to generate quality leads at scale.",
    points: ["Facebook & Instagram Ads", "LinkedIn B2B campaigns", "Retargeting & lookalike audiences", "Creative testing & scaling"],
  },
  {
    icon: Mail,
    title: "Email Marketing & Automation",
    tag: "Email",
    desc: "Turn your contact list into a revenue engine. We design, write, and automate email sequences that nurture leads, re-engage prospects, and convert subscribers into paying clients.",
    points: ["List segmentation & cleanup", "Drip campaign design", "Newsletter management", "Open rate & CTR optimization"],
  },
  {
    icon: MessageSquare,
    title: "Content Marketing",
    tag: "Content",
    desc: "Build authority, educate your audience, and attract organic traffic with strategic blog posts, case studies, whitepapers, and videos that establish your brand as the trusted expert in your space.",
    points: ["Blog writing & SEO content", "Case studies & whitepapers", "Video scripts & social content", "Content calendar management"],
  },
  {
    icon: Globe,
    title: "Social Media Management",
    tag: "Social",
    desc: "Maintain a consistent, professional presence across all platforms. Our social team creates engaging posts, manages your community, and builds brand loyalty that turns followers into customers.",
    points: ["Platform strategy & setup", "Daily content creation", "Community management", "Performance analytics & reporting"],
  },
];

const DigitalMarketing = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    document.title = "Digital Marketing Services | Optimum Billing Solutions";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Full-spectrum digital marketing services including SEO, Google Ads, social media advertising, email marketing, and content marketing to grow your business online."
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
              Digital Marketing That{" "}
              <span className="text-secondary">Drives</span> Real Growth
            </h1>
            <p className="text-lg text-white/80 font-medium leading-relaxed max-w-2xl mx-auto mb-8">
              From SEO and Google Ads to social media, email marketing, and content — we build and
              manage data-driven digital marketing campaigns that generate consistent leads,
              increase brand visibility, and deliver measurable ROI for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Get Free Marketing Audit <ArrowRight size={18} />
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
                  src="https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=1200"
                  alt="Digital marketing team managing campaigns and analytics dashboards"
                  className="w-full h-[460px] object-cover rounded-[2rem] shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-4 border border-slate-100">
                  <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <TrendingUp size={22} className="text-green-600" />
                  </div>
                  <div>
                    <div className="font-bold text-dark text-lg">4.2x ROAS</div>
                    <div className="text-slate-500 text-xs">Average return on ad spend</div>
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
                <Globe size={18} />
                <span>Full-Spectrum Digital Marketing</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-6 leading-tight">
                Your Customers Are Online — We Make Sure They Find You First
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                In a digital-first world, businesses that invest in strategic online marketing
                consistently outgrow their competitors. Our certified digital marketing team
                combines creative expertise with analytical precision to build campaigns that
                attract the right audience, engage them effectively, and convert them into
                long-term customers.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We don't believe in vanity metrics. Every strategy we execute is tied to real
                business outcomes — more leads, more sales, lower cost per acquisition, and
                stronger brand authority in your market.
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
                Start My Campaign <ArrowRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marketing Channels */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              A complete multi-channel approach designed to maximize your online visibility,
              generate qualified leads, and grow your revenue predictably.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {channels.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-md hover:border-primary/20 transition-all"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon size={22} className="text-primary" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm mb-5">{item.desc}</p>
                <ul className="space-y-2">
                  {item.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-slate-600 text-sm">
                      <Check size={13} className="text-secondary shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
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
              Why Choose Optimum for Digital Marketing
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              We combine creative excellence with analytical rigor to deliver digital marketing
              that creates real, measurable business impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Star,
                title: "Certified Specialists",
                desc: "Our team holds active Google Ads, Meta Blueprint, and HubSpot certifications. You get experts who are continuously trained on the latest platform updates and best practices.",
              },
              {
                icon: BarChart3,
                title: "Transparent Reporting",
                desc: "Real-time dashboards, weekly reports, and monthly strategy calls keep you fully informed of performance. No black boxes — you see exactly where every dollar goes.",
              },
              {
                icon: Zap,
                title: "Integrated Approach",
                desc: "We don't silo channels. Our SEO, paid ads, content, and email strategies work together as one cohesive growth engine — compounding results over time.",
              },
              {
                icon: Target,
                title: "Data-Driven Decisions",
                desc: "Every decision is backed by data. We track over 50 KPIs across your campaigns and use statistical testing to continuously improve performance and ROI.",
              },
              {
                icon: Award,
                title: "Industry Expertise",
                desc: "Specialized experience in healthcare, professional services, and B2B sectors means we understand your buyers' psychology and create messaging that converts.",
              },
              {
                icon: ShieldCheck,
                title: "Compliant & Brand-Safe",
                desc: "We ensure all campaigns adhere to platform policies, industry regulations, and your brand guidelines. Your reputation is always protected.",
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
              Our Proven 6-Step Marketing Process
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto">
              A systematic approach from strategy to execution that consistently delivers
              measurable growth for our clients.
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

      {/* Image Section */}
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
                SEO That Builds Long-Term Organic Growth
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Paid ads deliver fast results, but organic search is the most cost-effective
                long-term growth channel for your business. Our SEO team builds topical authority
                in your niche through strategic content creation, technical optimization, and
                authoritative link building — so your website consistently ranks for the keywords
                your ideal customers are searching for.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Comprehensive keyword research & competitive gap analysis",
                  "Technical SEO audits & site speed optimization",
                  "High-quality content creation targeting buying-intent keywords",
                  "White-hat link building & digital PR",
                  "Local SEO for geo-targeted lead generation",
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
                Grow My Organic Traffic <ArrowRight size={18} />
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="SEO analytics dashboard showing organic growth and keyword rankings"
                className="w-full h-[380px] object-cover rounded-[2rem] shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Paid Ads Section */}
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
                Paid Advertising That Delivers Immediate, Scalable Results
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                When you need leads now, paid advertising is the fastest path to growth.
                Our certified PPC and paid social specialists build laser-targeted campaigns
                on Google, Facebook, Instagram, and LinkedIn that put your business in front
                of the right people at exactly the right moment — maximizing every dollar of
                your ad budget.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Google Search Ads targeting high-intent buyers",
                  "Facebook & Instagram lead generation campaigns",
                  "LinkedIn Ads for B2B decision-makers",
                  "Retargeting campaigns to convert warm prospects",
                  "Continuous bid optimization & budget management",
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
                Launch My Ads Campaign <ArrowRight size={18} />
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
                src="https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=1200"
                alt="Paid advertising campaign performance dashboard with ROAS metrics"
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
              Everything you need to know about our digital marketing services.
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
              Ready to Dominate Your Market Online?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Schedule a free digital marketing audit and discover exactly which channels and
              strategies will generate the highest ROI for your business.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all shadow-lg text-base"
              >
                Get Free Marketing Audit <ArrowRight size={18} />
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

export default DigitalMarketing;
