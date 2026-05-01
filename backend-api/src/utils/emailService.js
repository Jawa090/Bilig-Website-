import nodemailer from 'nodemailer';

// Create email transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT) || 587,
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
  });
};

// Send contact form email
export const sendContactEmail = async (data) => {
  try {
    const transporter = createTransporter();

    const { fullName, email, phone, practiceName, specialty, message, submittedAt } = data;

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      subject: `New Contact Form Submission - ${practiceName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0F4C81 0%, #1a5f96 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0F4C81; display: block; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #00D4AA; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🏥 New Contact Form Submission</h1>
              <p style="margin: 10px 0 0 0;">Optimum Solution - Medical Billing</p>
            </div>
            <div class="content">
              <div class="field">
                <span class="label">👤 Full Name:</span>
                <div class="value">${fullName}</div>
              </div>
              
              <div class="field">
                <span class="label">📧 Email:</span>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <span class="label">📱 Phone:</span>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              
              <div class="field">
                <span class="label">🏢 Practice Name:</span>
                <div class="value">${practiceName}</div>
              </div>
              
              <div class="field">
                <span class="label">🩺 Specialty:</span>
                <div class="value">${specialty}</div>
              </div>
              
              <div class="field">
                <span class="label">💬 Message:</span>
                <div class="value">${message}</div>
              </div>
              
              <div class="field">
                <span class="label">🕐 Submitted At:</span>
                <div class="value">${submittedAt}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from your website contact form.</p>
              <p>© ${new Date().getFullYear()} Optimum Solution. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Email to customer (auto-reply)
    const customerMailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: 'Thank You for Contacting Optimum Solution',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #0F4C81 0%, #1a5f96 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: #00D4AA; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">✅ Thank You for Reaching Out!</h1>
            </div>
            <div class="content">
              <p>Dear <strong>${fullName}</strong>,</p>
              
              <p>Thank you for contacting <strong>Optimum Solution</strong>. We have received your inquiry regarding medical billing services for <strong>${practiceName}</strong>.</p>
              
              <p>Our team of certified billing specialists will review your request and get back to you within <strong>24 hours</strong>.</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>✅ Our team reviews your inquiry</li>
                <li>✅ We prepare a customized solution for your practice</li>
                <li>✅ A dedicated account manager will contact you</li>
                <li>✅ We schedule a free consultation call</li>
              </ul>
              
              <p>In the meantime, feel free to explore our services:</p>
              
              <div style="text-align: center;">
                <a href="https://optimumsolution.com/services/" class="button">View Our Services</a>
              </div>
              
              <p><strong>Need immediate assistance?</strong><br>
              📞 Call us: <a href="tel:+1-800-000-0000">+1-800-000-0000</a><br>
              📧 Email: <a href="mailto:info@optimumsolution.com">info@optimumsolution.com</a></p>
              
              <p>Best regards,<br>
              <strong>Optimum Solution Team</strong><br>
              Medical Billing & RCM Specialists</p>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Optimum Solution. All rights reserved.</p>
              <p>This is an automated response. Please do not reply to this email.</p>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(customerMailOptions)
    ]);

    console.log('✅ Emails sent successfully');
    return true;

  } catch (error) {
    console.error('❌ Email sending failed:', error);
    throw new Error('Failed to send email. Please try again later.');
  }
};

// Test email configuration
export const testEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email configuration is valid');
    return true;
  } catch (error) {
    console.error('❌ Email configuration error:', error.message);
    return false;
  }
};
