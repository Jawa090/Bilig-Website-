import { useParams, Link, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, User, Tag } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const origin = typeof window !== "undefined" ? window.location.origin : "https://example.com";
  const canonical = `${origin}/blog/${post.slug}`;
  const title = `${post.title} | Optimum Solution Blog`;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    author: { "@type": "Organization", name: post.author, url: origin },
    publisher: {
      "@type": "Organization",
      name: "Optimum Solution",
      logo: { "@type": "ImageObject", url: `${origin}/1.png` },
    },
    image: { "@type": "ImageObject", url: post.image, width: post.width, height: post.height },
    mainEntityOfPage: canonical,
    keywords: post.keywords,
    articleSection: post.category,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${origin}/` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${origin}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: canonical },
    ],
  };

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.keywords} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:url" content={canonical} />
        <meta property="og:image" content={post.image} />
        <meta property="article:published_time" content={post.isoDate} />
        <meta property="article:section" content={post.category} />
        <meta property="article:tag" content={post.keywords} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:image" content={post.image} />
        <script type="application/ld+json">{JSON.stringify(articleLd)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative h-[480px] md:h-[560px] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={post.image}
            alt={post.imageAlt}
            width={post.width}
            height={post.height}
            loading="eager"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/20 z-10" />
        </div>
        <div className="container mx-auto px-6 pb-16 relative z-20">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-white/50 text-xs font-bold uppercase tracking-widest mb-6">
            <Link to="/" className="hover:text-secondary transition-colors">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-secondary">{post.category}</span>
          </nav>

          <div className="inline-flex items-center gap-2 bg-secondary/90 text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-5">
            <Tag size={11} /> {post.category}
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight max-w-4xl mb-6">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs font-bold text-white/60 uppercase tracking-widest">
            <span className="flex items-center gap-1.5"><User size={13} /> {post.author}</span>
            <span className="w-1 h-1 bg-secondary rounded-full" />
            <span>{post.date}</span>
            <span className="w-1 h-1 bg-secondary rounded-full" />
            <span className="flex items-center gap-1.5"><Clock size={13} /> {post.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {/* Excerpt lead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xl text-muted-foreground leading-relaxed font-medium border-l-4 border-secondary pl-6 mb-14 italic"
            >
              {post.excerpt}
            </motion.p>

            {/* Sections */}
            {post.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="mb-14"
              >
                <h2 className="text-2xl md:text-3xl font-black text-foreground mb-5 leading-snug">
                  {section.heading}
                </h2>
                <p className="text-base text-muted-foreground leading-relaxed mb-6 font-medium">
                  {section.body}
                </p>

                {section.bullets && section.bullets.length > 0 && (
                  <ul className="space-y-3 mb-6">
                    {section.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <span className="mt-1 w-5 h-5 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                          <span className="w-2 h-2 rounded-full bg-secondary" />
                        </span>
                        <span className="text-base text-muted-foreground font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.image && (
                  <div className="rounded-3xl overflow-hidden shadow-xl my-8">
                    <img
                      src={section.image}
                      alt={section.imageAlt || section.heading}
                      loading="lazy"
                      className="w-full h-64 md:h-80 object-cover"
                    />
                  </div>
                )}
              </motion.div>
            ))}

            {/* Conclusion */}
            <div className="bg-primary/5 rounded-3xl p-8 mb-14 border border-primary/10">
              <h3 className="text-xl font-black text-foreground mb-3">Key Takeaway</h3>
              <p className="text-base text-muted-foreground leading-relaxed font-medium">{post.conclusion}</p>
            </div>

            {/* CTA */}
            <div className="bg-dark rounded-[2.5rem] p-10 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, rgba(92,184,0,0.4) 1px, transparent 0)",
                  backgroundSize: "32px 32px",
                }}
              />
              <p className="text-white/60 text-sm font-bold uppercase tracking-widest mb-3 relative z-10">
                Ready to optimize your revenue cycle?
              </p>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-8 leading-tight relative z-10">
                {post.cta}
              </h3>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-secondary text-white px-10 py-4 rounded-2xl font-black text-base shadow-xl shadow-secondary/20 hover:scale-105 transition-transform relative z-10"
              >
                Contact Us Today <ArrowRight size={18} />
              </Link>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 flex justify-start">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-primary font-black text-sm hover:gap-3 transition-all"
              >
                <ArrowLeft size={16} /> Back to All Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-[#f8fafb]">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-black text-foreground mb-10 text-center">
              Related <span className="text-primary italic">Articles</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {relatedPosts.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/blog/${rp.slug}`}
                  className="group bg-white rounded-[2rem] overflow-hidden border border-primary/5 hover:border-primary/20 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
                >
                  <div className="h-48 overflow-hidden flex-shrink-0">
                    <img
                      src={rp.image}
                      alt={rp.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-7 flex flex-col flex-1">
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-4 w-fit">
                      {rp.category}
                    </span>
                    <h3 className="text-lg font-black text-foreground leading-tight mb-3 group-hover:text-primary transition-colors flex-1">
                      {rp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-primary font-black text-sm mt-2">
                      Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
};

export default BlogPost;
