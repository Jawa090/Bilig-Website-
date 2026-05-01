import { sendContactEmail } from '../utils/emailService.js';

export const submitContactForm = async (req, res, next) => {
  try {
    const { fullName, email, phone, practiceName, specialty, message } = req.body;

    // Prepare email data
    const emailData = {
      fullName,
      email,
      phone,
      practiceName,
      specialty,
      message,
      submittedAt: new Date().toLocaleString('en-US', {
        dateStyle: 'full',
        timeStyle: 'long'
      })
    };

    // Send email
    await sendContactEmail(emailData);

    // Success response
    res.status(200).json({
      success: true,
      message: 'Thank you for contacting us! We will get back to you within 24 hours.',
      data: {
        submittedAt: emailData.submittedAt
      }
    });

  } catch (error) {
    console.error('❌ Contact form error:', error);
    next(error);
  }
};
