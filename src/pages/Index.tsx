import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import StatsBar from "@/components/home/StatsBar";
import AboutIntro from "@/components/home/AboutIntro";
import ServicesSection from "@/components/home/ServicesSection";
import SpecialitiesSection from "@/components/home/SpecialitiesSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import HowItWorks from "@/components/home/HowItWorks";
import ProcessTabs from "@/components/home/ProcessTabs";
import USACoverage from "@/components/home/USACoverage";
import Testimonials from "@/components/home/Testimonials";
import FAQ from "@/components/home/FAQ";
import Blog from "@/components/home/Blog";
import TechPartners from "@/components/home/TechPartners";
import CTABanner from "@/components/home/CTABanner";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://example.com";
  const canonical = `${origin}/`;
  const title = "Optimum Solution | Precision Medical Billing & RCM Services";
  const description = "HIPAA-certified, performance-based medical billing with 97%+ clean claim rate. Full RCM, coding, credentialing, denials, analytics — serving 100+ practices across all 50 states.";
  const keywords = "medical billing, revenue cycle management, RCM, medical coding, denial management, credentialing, healthcare billing services, HIPAA";
  const image = `${origin}/1.png`;
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Optimum Solution",
    url: origin,
    logo: `${origin}/1.png`,
    sameAs: [
      // add your real profiles if available
    ]
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Optimum Solution",
    url: origin,
    potentialAction: {
      "@type": "SearchAction",
      target: `${origin}/?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };
  const breadcrumbsLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: canonical
      }
    ]
  };

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={image} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
        {/* JSON-LD */}
        <script type="application/ld+json">{JSON.stringify(organizationLd)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbsLd)}</script>
      </Helmet>

      <Hero />
      <StatsBar />
      <AboutIntro />
      <ServicesSection />
      <SpecialitiesSection />
      <WhyChooseUs />
      <ProcessTabs />
      <HowItWorks />
      <USACoverage />
      <Testimonials />
      <FAQ />
      <Blog />
      <TechPartners />
      <CTABanner />
    </Layout>
  );
};

export default Index;
