import express from 'express';
import {
  createCheckoutSession,
  getSessionDetails,
  handleWebhook,
  getPlans
} from '../controllers/stripeController.js';

const router = express.Router();

// Get all available plans
router.get('/plans', getPlans);

// Create Stripe checkout session
router.post('/create-checkout-session', createCheckoutSession);

// Get session details
router.get('/session/:sessionId', getSessionDetails);

// Stripe webhook endpoint (raw body needed for signature verification)
router.post('/webhook', express.raw({ type: 'application/json' }), handleWebhook);

export default router;