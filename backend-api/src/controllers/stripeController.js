import Stripe from 'stripe';

// Function to get Stripe instance
const getStripe = () => {
  if (!process.env.STRIPE_SECRET_KEY) {
    throw new Error('STRIPE_SECRET_KEY environment variable is not set');
  }
  return new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2023-10-16',
  });
};

// Create Stripe Checkout Session
export const createCheckoutSession = async (req, res) => {
  try {
    const stripe = getStripe();
    const { priceId, serviceName, planName, successUrl, cancelUrl } = req.body;

    // Validate required fields
    if (!priceId || !serviceName || !planName) {
      return res.status(400).json({
        success: false,
        message: 'Missing required fields: priceId, serviceName, planName'
      });
    }

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: successUrl || `${process.env.FRONTEND_URL}/contact/?success=true&session_id={CHECKOUT_SESSION_ID}&plan=${planName}&service=${encodeURIComponent(serviceName)}`,
      cancel_url: cancelUrl || `${process.env.FRONTEND_URL}/?canceled=true`,
      metadata: {
        service: serviceName,
        plan: planName,
      },
      subscription_data: {
        metadata: {
          service: serviceName,
          plan: planName,
        },
      },
      billing_address_collection: 'required',
      phone_number_collection: {
        enabled: true,
      },
    });

    res.json({
      success: true,
      sessionId: session.id,
      url: session.url
    });

  } catch (error) {
    console.error('Stripe checkout session creation error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to create checkout session',
      error: error.message
    });
  }
};

// Get Stripe session details
export const getSessionDetails = async (req, res) => {
  try {
    const stripe = getStripe();
    const { sessionId } = req.params;

    if (!sessionId) {
      return res.status(400).json({
        success: false,
        message: 'Session ID is required'
      });
    }

    const session = await stripe.checkout.sessions.retrieve(sessionId);

    res.json({
      success: true,
      session: {
        id: session.id,
        payment_status: session.payment_status,
        customer_email: session.customer_details?.email,
        customer_name: session.customer_details?.name,
        amount_total: session.amount_total,
        currency: session.currency,
        metadata: session.metadata
      }
    });

  } catch (error) {
    console.error('Get session details error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get session details',
      error: error.message
    });
  }
};

// Stripe webhook handler
export const handleWebhook = async (req, res) => {
  const stripe = getStripe();
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful for session:', session.id);
      
      // Here you can:
      // 1. Send confirmation email to customer
      // 2. Update your database
      // 3. Trigger onboarding process
      // 4. Send notification to your team
      
      break;

    case 'customer.subscription.created':
      const subscription = event.data.object;
      console.log('New subscription created:', subscription.id);
      break;

    case 'customer.subscription.updated':
      const updatedSubscription = event.data.object;
      console.log('Subscription updated:', updatedSubscription.id);
      break;

    case 'customer.subscription.deleted':
      const deletedSubscription = event.data.object;
      console.log('Subscription canceled:', deletedSubscription.id);
      break;

    case 'invoice.payment_succeeded':
      const invoice = event.data.object;
      console.log('Payment succeeded for invoice:', invoice.id);
      break;

    case 'invoice.payment_failed':
      const failedInvoice = event.data.object;
      console.log('Payment failed for invoice:', failedInvoice.id);
      break;

    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
};

// Get all available plans
export const getPlans = async (req, res) => {
  try {
    const plans = [
      {
        id: "starter",
        name: "Starter",
        price: 299,
        period: "month",
        description: "Perfect for small practices",
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
        period: "month",
        description: "Most popular for growing clinics",
        stripePriceId: "price_1TPRfMJeNkSHRY7N2XLlEk6Z",
        popular: true,
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
        period: "month",
        description: "For large healthcare groups",
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

    res.json({
      success: true,
      plans
    });

  } catch (error) {
    console.error('Get plans error:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get plans',
      error: error.message
    });
  }
};