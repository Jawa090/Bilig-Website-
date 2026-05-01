import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Check,
  CreditCard,
  Shield,
  Zap,
  Star,
  ArrowRight,
  Lock,
} from "lucide-react";

interface PricingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName: string;
  serviceIcon?: React.ElementType;
}

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 299,
    period: "/ month",
    description: "Perfect for small practices",
    color: "from-slate-500 to-slate-700",
    badge: null,
    stripePriceId: "price_1TPRfnJeNkSHRY7NGnRTDjgX",
    features: [
      "Up to 500 claims/month",
      "All basic services included",
      "Email support",
      "Monthly reports",
      "1-3 providers setup",
      "Standard turnaround time",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: 599,
    period: "/ month",
    description: "Most popular for growing clinics",
    color: "from-primary to-primary-dark",
    badge: "Most Popular",
    stripePriceId: "price_1TPRfMJeNkSHRY7N2XLlEk6Z",
    features: [
      "Up to 2,000 claims/month",
      "All premium services included",
      "Priority support 24/7",
      "Weekly analytics reports",
      "Up to 10 providers",
      "Credentialing assistance",
      "Dedicated account manager",
      "Advanced denial management",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 999,
    period: "/ month",
    description: "For large healthcare groups",
    color: "from-secondary to-secondary-dark",
    badge: "Best Value",
    stripePriceId: "price_1TPRexJeNkSHRY7Ne86AdxoE",
    features: [
      "Unlimited claims processing",
      "Complete RCM suite",
      "Dedicated billing team",
      "Real-time dashboards",
      "Unlimited providers",
      "Custom integrations",
      "Audit & compliance support",
      "Multi-location management",
      "White-label reporting",
    ],
  },
];

const PricingModal = ({ isOpen, onClose, serviceName, serviceIcon: ServiceIcon }: PricingModalProps) => {
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [step, setStep] = useState<"plans" | "payment">("plans");
  const [processing, setProcessing] = useState(false);
  const [success, setSuccess] = useState(false);

  const chosen = plans.find((p) => p.id === selectedPlan)!;

  const handlePay = async () => {
    setProcessing(true);
    
    try {
      const selectedPlanData = plans.find(p => p.id === selectedPlan);
      if (!selectedPlanData) {
        throw new Error('Selected plan not found');
      }

      // Get API URL from environment variable
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5001';

      // Create checkout session via backend API
      const response = await fetch(`${apiUrl}/api/stripe/create-checkout-session`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: selectedPlanData.stripePriceId,
          serviceName: serviceName,
          planName: selectedPlan,
          successUrl: `${window.location.origin}/contact/?success=true&plan=${selectedPlan}&service=${encodeURIComponent(serviceName)}`,
          cancelUrl: `${window.location.origin}/?canceled=true`
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }

    } catch (error) {
      console.error('Payment error:', error);
      setProcessing(false);
      alert(`Payment failed: ${error.message}. Please try again.`);
    }
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep("plans");
      setSuccess(false);
      setSelectedPlan("professional");
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backdropFilter: "blur(8px)", background: "rgba(0,0,0,0.55)" }}
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 24 }}
            transition={{ type: "spring", damping: 22, stiffness: 300 }}
            className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden"
            style={{ maxHeight: "92vh", overflowY: "auto" }}
          >
            {/* Header */}
            <div className="bg-gradient-hero text-white px-8 pt-8 pb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {ServiceIcon && (
                    <div className="w-11 h-11 bg-white/20 rounded-2xl flex items-center justify-center">
                      <ServiceIcon size={22} className="text-white" />
                    </div>
                  )}
                  <div>
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">Pricing Plans</p>
                    <h2 className="text-xl font-bold text-white">{serviceName}</h2>
                  </div>
                </div>
                <button
                  onClick={handleClose}
                  className="w-9 h-9 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                >
                  <X size={18} className="text-white" />
                </button>
              </div>

              {/* Step Tabs */}
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => !success && setStep("plans")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${step === "plans" ? "bg-white text-primary" : "bg-white/20 text-white"}`}
                >
                  1. Choose Plan
                </button>
                <button
                  onClick={() => step === "payment" && !success && setStep("plans")}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${step === "payment" ? "bg-white text-primary" : "bg-white/20 text-white"}`}
                >
                  2. Payment
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8">
              <AnimatePresence mode="wait">

                {/* ───── PLANS STEP ───── */}
                {step === "plans" && (
                  <motion.div
                    key="plans"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      {plans.map((plan) => (
                        <button
                          key={plan.id}
                          onClick={() => setSelectedPlan(plan.id)}
                          className={`relative text-left rounded-2xl border-2 p-5 transition-all duration-200 ${
                            selectedPlan === plan.id
                              ? "border-primary shadow-lg shadow-primary/15 scale-[1.02]"
                              : "border-border hover:border-primary/40 hover:shadow-md"
                          }`}
                        >
                          {plan.badge && (
                            <span className={`absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${plan.color}`}>
                              {plan.badge}
                            </span>
                          )}
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-3`}>
                            <Zap size={18} className="text-white" />
                          </div>
                          <p className="font-bold text-foreground text-base">{plan.name}</p>
                          <p className="text-muted-foreground text-xs mt-0.5 mb-3">{plan.description}</p>
                          <div className="flex items-end gap-1 mb-4">
                            <span className="text-3xl font-extrabold text-foreground">${plan.price}</span>
                            <span className="text-muted-foreground text-sm pb-1">{plan.period}</span>
                          </div>
                          <ul className="space-y-2">
                            {plan.features.map((f) => (
                              <li key={f} className="flex items-center gap-2 text-xs text-foreground/80">
                                <Check size={13} className="text-secondary shrink-0" />
                                {f}
                              </li>
                            ))}
                          </ul>
                          {selectedPlan === plan.id && (
                            <div className="mt-4 text-center">
                              <span className="text-xs font-semibold text-primary">✓ Selected</span>
                            </div>
                          )}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center justify-between bg-muted/50 rounded-2xl p-4">
                      <div>
                        <p className="font-semibold text-foreground">Selected: <span className="text-primary">{chosen.name} Plan</span></p>
                        <p className="text-sm text-muted-foreground">
                          ${chosen.price}/month for {serviceName} · Billed monthly · Cancel anytime
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          ✨ Includes all features for {serviceName.toLowerCase()}
                        </p>
                      </div>
                      <button
                        onClick={() => setStep("payment")}
                        className="flex items-center gap-2 bg-gradient-hero text-white px-6 py-3 rounded-xl font-semibold text-sm hover:scale-105 transition-transform shadow-lg"
                      >
                        Continue <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {/* ───── PAYMENT STEP ───── */}
                {step === "payment" && !success && (
                  <motion.div
                    key="payment"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                      {/* Order Summary */}
                      <div className="md:col-span-2">
                        <div className={`rounded-2xl bg-gradient-to-br ${chosen.color} p-5 text-white mb-4`}>
                          <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">Order Summary</p>
                          <h3 className="text-xl font-extrabold">{chosen.name} Plan</h3>
                          <p className="text-white/80 text-sm mt-1">{serviceName}</p>
                          <div className="mt-5 pt-4 border-t border-white/20">
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-white/70">Monthly fee</span>
                              <span className="font-semibold">${chosen.price}</span>
                            </div>
                            <div className="flex justify-between text-sm mb-1">
                              <span className="text-white/70">Setup fee</span>
                              <span className="font-semibold text-green-300">FREE</span>
                            </div>
                            <div className="flex justify-between text-base font-bold mt-3 pt-3 border-t border-white/20">
                              <span>Total Today</span>
                              <span>${chosen.price}</span>
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          {[
                            { icon: Shield, text: "256-bit SSL encryption" },
                            { icon: Lock, text: "PCI DSS compliant" },
                            { icon: Star, text: "30-day money-back guarantee" },
                          ].map(({ icon: Icon, text }) => (
                            <div key={text} className="flex items-center gap-2 text-xs text-muted-foreground">
                              <Icon size={14} className="text-secondary" />
                              {text}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card Form */}
                      <div className="md:col-span-3">
                        <p className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <CreditCard size={18} className="text-primary" />
                          Checkout Details
                        </p>

                        <div className="bg-muted/30 rounded-2xl p-6 text-center border border-border">
                          <Lock size={32} className="text-primary mx-auto mb-3" />
                          <h4 className="text-lg font-bold text-foreground mb-2">Secure Stripe Checkout</h4>
                          <p className="text-sm text-muted-foreground mb-6">
                            You will be redirected to Stripe to complete your payment securely. We do not store your credit card information on our servers.
                          </p>

                          <button
                            onClick={handlePay}
                            disabled={processing}
                            className="w-full mt-2 bg-gradient-hero text-white py-3.5 rounded-xl font-bold text-sm hover:scale-[1.02] transition-all shadow-lg disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2"
                          >
                            {processing ? (
                              <>
                                <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                                </svg>
                                Redirecting to Stripe…
                              </>
                            ) : (
                              <>
                                Proceed to Stripe Checkout (${chosen.price})
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* ───── SUCCESS STATE ───── */}
                {success && (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", delay: 0.1, damping: 14 }}
                      className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mb-6"
                    >
                      <Check size={40} className="text-secondary" />
                    </motion.div>
                    <h3 className="text-2xl font-extrabold text-foreground mb-2">Payment Successful! 🎉</h3>
                    <p className="text-muted-foreground text-sm max-w-xs">
                      You're now subscribed to the <span className="font-semibold text-primary">{chosen.name} Plan</span> for {serviceName}. Our team will contact you within 24 hours.
                    </p>
                    <button
                      onClick={handleClose}
                      className="mt-8 bg-gradient-green text-white px-8 py-3 rounded-xl font-bold text-sm hover:scale-105 transition-transform shadow-lg"
                    >
                      Done
                    </button>
                  </motion.div>
                )}

              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PricingModal;
