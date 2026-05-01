import express from 'express';
import { submitContactForm } from '../controllers/contactController.js';
import { validateContactForm } from '../middleware/validator.js';

const router = express.Router();

// POST /api/contact - Submit contact form
router.post('/', validateContactForm, submitContactForm);

export default router;
