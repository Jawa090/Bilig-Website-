// SEO Utility Functions for Optimum Solution

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Optimum Solution",
  "description": "Professional Medical Billing and Revenue Cycle Management Services",
  "url": "https://optimumsolution.com",
  "logo": "https://optimumsolution.com/1.png",
  "image": "https://optimumsolution.com/1.png",
  "telephone": "+1-737-307-6234",
  "email": "info@optimumsolution.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5900 Balcones Dr 18826",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78731",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "30.315274",
    "longitude": "-97.769412"
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "18:00"
  },
  "sameAs": [
    "https://www.facebook.com/optimumsolution",
    "https://www.linkedin.com/company/optimumsolution",
    "https://twitter.com/optimumsolution"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "priceRange": "$$"
});

export const generateServiceSchema = (serviceName: string, description: string, url: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": {
    "@type": "MedicalBusiness",
    "name": "Optimum Solution"
  },
  "description": description,
  "url": url,
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  }
});

export const generateBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

export const generateFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Optimum Solution",
  "image": "https://optimumsolution.com/1.png",
  "@id": "https://optimumsolution.com",
  "url": "https://optimumsolution.com",
  "telephone": "+1-737-307-6234",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "5900 Balcones Dr 18826",
    "addressLocality": "Austin",
    "addressRegion": "TX",
    "postalCode": "78731",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.315274,
    "longitude": -97.769412
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  }
});

// SEO Meta Tags Generator
export const generateSEOMeta = (page: {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
  image?: string;
  type?: string;
}) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://optimumsolution.com";
  const defaultImage = `${origin}/1.png`;

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    canonical: page.canonical,
    image: page.image || defaultImage,
    type: page.type || "website",
    origin
  };
};
