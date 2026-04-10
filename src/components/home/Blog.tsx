import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogPosts";

const Blog = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const origin = typeof window !== "undefined" ? window.location.origin : "https://example.com";

  const blogLd = blogPosts.map((b) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: b.title,
    description: b.excerpt,
    datePublished: b.isoDate,
    author: { "@type": "Organization", name: b.author },
    image: b.image,
    articleSection: b.category,
    mainEntityOfPage: `${origin}/blog/${b.slug}`,
  }));

  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Latest Insights
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
              Knowledge for <span className="text-primary italic">Better Outcomes</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed font-medium">
              Stay updated with the latest trends in medical billing, revenue cycle management, and healthcare technology.
            </p>
          </div>
          <Link to="/blog" className="text-primary font-black text-lg flex items-center gap-2 group">
            View All Posts
            <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:translate-x-1">
              <ArrowRight size={20} />
            </div>
          </Link>
        </div>

        {/* JSON-LD for blog cards */}
        <script type="application/ld+json">{JSON.stringify(blogLd)}</script>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((b, i) => (
            <motion.article
              key={b.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 group"
            >
              <Link to={`/blog/${b.slug}`} className="block">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={b.image}
                    alt={b.imageAlt}
                    width={b.width}
                    height={b.height}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-6 left-6 bg-white/90 backdrop-blur-md text-primary px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg">
                    {b.category}
                  </span>
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-4">
                    <span>{b.date}</span>
                    <span className="w-1 h-1 bg-secondary rounded-full" />
                    <span>{b.readTime} min read</span>
                  </div>
                  <h3 className="text-xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                    {b.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6 font-medium line-clamp-2">
                    {b.excerpt}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-black text-sm group/btn">
                    Read Article
                    <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;

