import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  { icon: MapPin, label: "Our Office", value: "5900 Balcones Dr 18826, Austin, TX 78731", sub: "" },
  { icon: Phone, label: "Call Direct", value: "+1 (737) 307-6234", href: "tel:7373076234", sub: "Mon–Fri, 9AM–6PM EST" },
  { icon: Mail, label: "Email Us", value: "info@optimumsolution.com", href: "mailto:info@optimumsolution.com", sub: "Response within 4 business hours" },
  { icon: Clock, label: "Office Hours", value: "Monday – Friday", sub: "9:00 AM – 6:00 PM Eastern" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", practice: "", specialty: "", message: "" });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: "" });
        setForm({ name: "", email: "", phone: "", practice: "", specialty: "", message: "" });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        const data = await response.json();
        throw new Error(data.message || "Something went wrong.");
      }
    } catch (err: any) {
      setStatus({ loading: false, success: false, error: err.message });
    }
  };

  return (
    <Layout>
      <section className="bg-gradient-hero py-20 text-center">
        <div className="container mx-auto px-6">
          <p className="text-primary-foreground/60 text-sm mb-2">Home &gt; Contact</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Talk to a Billing Specialist — Not a Sales Rep</h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto">When you call or submit this form, you're connected with a billing specialist who can answer actual questions about your claims, your specialty, and your current billing situation. No scripts. No pitch decks until you ask for one.</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background rounded-2xl shadow-xl border p-8"
          >
            <h3 className="text-xl font-bold text-foreground mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Email Address *</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Phone Number *</label>
                <input type="tel" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Practice Name</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" value={form.practice} onChange={(e) => setForm({ ...form, practice: e.target.value })} />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Specialty</label>
                <select className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition" value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })}>
                  <option value="">Select a specialty</option>
                  <option>Internal Medicine</option><option>Cardiology</option><option>Neurology</option><option>Pediatrics</option><option>Orthopedics</option><option>Family Medicine</option><option>Mental Health</option><option>Dermatology</option><option>Physical Therapy</option><option>Laboratory</option><option>Wound Care</option><option>Home Health</option><option>Geriatrics</option><option>Rheumatology</option><option>Other</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              </div>

              {status.error && (
                <div className="p-3 rounded-lg bg-red-100 text-red-600 text-sm font-medium">
                  {status.error}
                </div>
              )}

              {status.success && (
                <div className="p-3 rounded-lg bg-green-100 text-green-600 text-sm font-medium">
                  Message sent successfully! We'll get back to you soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-gradient-green text-primary-foreground py-3 rounded-xl font-bold hover:scale-[1.02] transition-transform disabled:opacity-70 disabled:hover:scale-100"
              >
                {status.loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* Reassurance strip */}
            <div className="flex flex-wrap justify-center gap-6 mt-6 pt-6 border-t">
              {[
                { icon: Lock, label: "Your information is never shared" },
                { icon: ShieldCheck, label: "HIPAA-compliant communication" },
                { icon: CheckCircle2, label: "No obligation — ask us anything" },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <b.icon size={14} className="text-primary" /> {b.label}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-6"
          >
            {contactInfo.map((c) => (
              <div key={c.label} className="bg-surface rounded-2xl p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <c.icon size={22} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{c.label}</p>
                  {c.href ? (
                    <a href={c.href} className="font-semibold text-foreground hover:text-primary transition-colors">{c.value}</a>
                  ) : (
                    <p className="font-semibold text-foreground">{c.value}</p>
                  )}
                  {c.sub && <p className="text-xs text-muted-foreground mt-0.5">{c.sub}</p>}
                </div>
              </div>
            ))}

            <div className="rounded-2xl overflow-hidden h-64 shadow-lg">
              <iframe
                title="Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.666115998188!2d-97.76941192455848!3d30.315273707768826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644ca7b7e28945f%3A0x6b3017a554a93a0b!2s5900%20Balcones%20Dr%2C%20Austin%2C%20TX%2078731!5e0!3m2!1sen!2sus!4v1712605380000!5m2!1sen!2sus"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
