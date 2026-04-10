import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, User } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://example.com";
  const canonical = `${origin}/blog`;
  const title = "Medical Billing Blog | Latest Insights — Optimum Solution";
  const description =
    "Expert articles on ICD-10 coding, prior authorization, denial management, RCM KPIs, and healthcare billing best practices. Updated monthly.";
  const keywords =
    "medical billing blog, ICD-10 coding, prior authorization, RCM benchmarks, denial management tips, revenue cycle management";

  const blogListLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Optimum Solution Medical Billing Blog",
    description,
    url: canonical,
    blogPost: blogPosts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      datePublished: p.isoDate,
      author: { "@type": "Organization", name: p.author },
      image: p.image,
      url: `${origin}/blog/${p.slug}`,
    })),
  };

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={blogPosts[0]?.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={blogPosts[0]?.image} />
        <script type="application/ld+json">{JSON.stringify(blogListLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="bg-dark py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(92,184,0,0.4) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block bg-primary/20 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 border border-white/10">
            Latest Insights
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
            Knowledge for <span className="text-secondary italic">Better Outcomes</span>
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
            Stay updated with the latest trends in medical billing, revenue cycle management, and
            healthcare compliance.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-24 bg-[#f8fafb]">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-[2.5rem] overflow-hidden border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="flex flex-col h-full">
                  <div className="relative h-60 overflow-hidden flex-shrink-0">
                    <img
                      src={post.image}
                      alt={post.imageAlt}
                      width={post.width}
                      height={post.height}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <span className="absolute top-5 left-5 bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-8 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-4">
                      <span className="flex items-center gap-1">
                        <User size={11} /> {post.author.replace("Optimum Solution ", "")}
                      </span>
                      <span className="w-1 h-1 bg-secondary rounded-full" />
                      <span>{post.date}</span>
                      <span className="w-1 h-1 bg-secondary rounded-full" />
                      <span className="flex items-center gap-1">
                        <Clock size={11} /> {post.readTime} min
                      </span>
                    </div>

                    <h2 className="text-xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors flex-1">
                      {post.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium line-clamp-2">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center gap-2 text-primary font-black text-sm">
                      Read Article
                      <ArrowRight
                        size={16}
                        className="transform group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
