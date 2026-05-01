import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Calendar, Lock, ShieldCheck, CheckCircle2, Phone, Search, TrendingUp } from "lucide-react";
import { useState } from "react";

const steps = [
  { icon: Phone, title: "You Submit This Form", desc: "Takes 90 seconds. We ask for your specialty and volume so we can send the right specialist." },
  { icon: Search, title: "We Review Your Claims Data", desc: "If you share 90 days of data, we'll find your denial patterns, missed charges, and underpayments before the call." },
  { icon: TrendingUp, title: "You Get a Real Number", desc: "Not a slide deck. A specific dollar figure showing what we think we can recover for your practice." },
];

const BookDemo = () => {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", practice: "", specialty: "",
    providers: "", volume: "", ehr: "", billingSetup: "", time: "", notes: "",
  });
  const [status, setStatus] = useState({ loading: false, success: false, error: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: "" });

    try {
      const response = await fetch("http://localhost:5000/api/book-demo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus({ loading: false, success: true, error: "" });
        setForm({
          name: "", email: "", phone: "", practice: "", specialty: "",
          providers: "", volume: "", ehr: "", billingSetup: "", time: "", notes: "",
        });
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
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 font-semibold text-sm mb-6">
              <Calendar size={18} /> Free — No Obligation — 30 Minutes
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">Book Your Free Revenue Audit</h1>
          </motion.div>

          {/* 3-step explainer */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                  <s.icon size={22} className="text-primary" />
                </div>
                <h4 className="font-bold text-foreground text-sm mb-1">{s.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-background rounded-3xl shadow-2xl p-8 md:p-10 text-left"
          >
            <h3 className="text-lg font-bold text-foreground mb-6">Tell Us About Your Practice</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Full Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email Address *</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone Number *</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Practice Name *</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.practice} onChange={(e) => setForm({ ...form, practice: e.target.value })} />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Specialty *</label>
                <select required className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.specialty} onChange={(e) => setForm({ ...form, specialty: e.target.value })}>
                  <option value="">Select your specialty</option>
                  <option>Internal Medicine</option><option>Cardiology</option><option>Neurology</option><option>Pediatrics</option><option>Orthopedics</option><option>Family Medicine</option><option>Mental Health</option><option>Dermatology</option><option>Physical Therapy</option><option>Laboratory</option><option>Wound Care</option><option>Home Health</option><option>Geriatrics</option><option>Rheumatology</option><option>Other</option>
                </select>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Number of Providers</label>
                  <input type="text" placeholder="e.g., 3" className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.providers} onChange={(e) => setForm({ ...form, providers: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Monthly Claim Volume</label>
                  <input type="text" placeholder="e.g., 500" className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.volume} onChange={(e) => setForm({ ...form, volume: e.target.value })} />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Current EHR / Software</label>
                  <input type="text" placeholder="e.g., Athenahealth" className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.ehr} onChange={(e) => setForm({ ...form, ehr: e.target.value })} />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Current Billing Setup</label>
                  <select className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.billingSetup} onChange={(e) => setForm({ ...form, billingSetup: e.target.value })}>
                    <option value="">Select</option>
                    <option>In-house billing team</option>
                    <option>Current billing company</option>
                    <option>Just starting a practice</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Best Time for Call</label>
                <select className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition" value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })}>
                  <option value="">Select preferred time</option>
                  <option>Morning (9AM–12PM)</option>
                  <option>Afternoon (12PM–3PM)</option>
                  <option>Evening (3PM–6PM)</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Anything specific you want us to review?</label>
                <textarea rows={3} placeholder="e.g., High denial rate on modifier 25 claims" className="w-full px-4 py-3 rounded-xl border bg-background text-foreground focus:ring-2 focus:ring-primary outline-none transition resize-none" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
              </div>

              {status.error && (
                <div className="p-3 rounded-lg bg-red-100 text-red-600 text-sm font-medium">
                  {status.error}
                </div>
              )}

              {status.success && (
                <div className="p-3 rounded-lg bg-green-100 text-green-600 text-sm font-medium">
                  Audit request scheduled successfully! We'll contact you shortly.
                </div>
              )}

              <button
                type="submit"
                disabled={status.loading}
                className="w-full bg-gradient-green text-primary-foreground py-4 rounded-xl font-bold text-lg hover:scale-[1.02] transition-transform mt-2 disabled:opacity-70 disabled:hover:scale-100"
              >
                {status.loading ? "Scheduling..." : "Schedule My Free Revenue Audit →"}
              </button>
            </form>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { icon: Lock, label: "HIPAA-Secure Form" },
              { icon: ShieldCheck, label: "ISO 27001 Certified" },
              { icon: CheckCircle2, label: "No Contracts Required to Start" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon size={18} className="text-primary" /> {b.label}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BookDemo;
