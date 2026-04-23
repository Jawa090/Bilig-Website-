# Backend API - Medical Billing Website (No Database)

Simple backend API for Optimum Solution Medical Billing Website with Contact Form functionality. **No database required** - emails are sent directly via Nodemailer.

## Features

- ✅ Contact Form API with validation
- ✅ Email notifications via Nodemailer (Admin + Customer)
- ✅ **No database required**
- ✅ Rate limiting for security
- ✅ CORS enabled
- ✅ Input validation
- ✅ Error handling
- ✅ Logging with Morgan

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Nodemailer** - Email sending
- **Express Validator** - Input validation
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing

## Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Setup environment variables:**
```bash
cp .env.example .env
```

Edit `.env` file with your configuration:
```env
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_TO=info@optimumsolution.com
FRONTEND_URL=http://localhost:8080
```

3. **Start development server:**
```bash
npm run dev
```

4. **Start production server:**
```bash
npm start
```

## API Endpoints

### Contact Form

**POST** `/api/contact`

Submit contact form inquiry.

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "practiceName": "ABC Medical Center",
  "specialty": "Cardiology",
  "message": "I'm interested in your billing services"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Thank you for contacting us! We will get back to you within 24 hours.",
  "data": {
    "submittedAt": "Wednesday, April 16, 2026 at 3:30:00 PM"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    {
      "field": "email",
      "message": "Please provide a valid email address"
    }
  ]
}
```

### Health Check

**GET** `/api/health`

Check if API is running.

**Response:**
```json
{
  "success": true,
  "message": "API is running",
  "timestamp": "2026-04-16T10:30:00.000Z",
  "environment": "development"
}
```

## Email Configuration

### Using Gmail (Recommended)

1. **Enable 2-Factor Authentication:**
   - Go to Google Account Settings
   - Security → 2-Step Verification

2. **Generate App Password:**
   - Security → 2-Step Verification → App passwords
   - Select "Mail" and generate password

3. **Update .env:**
```env
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_SECURE=false
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-16-digit-app-password
EMAIL_FROM=noreply@optimumsolution.com
EMAIL_TO=info@optimumsolution.com
```

### Using Other Email Services

**Outlook/Hotmail:**
```env
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your-password
```

**Yahoo:**
```env
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your-app-password
```

## Security Features

- **Helmet**: Security headers
- **Rate Limiting**: 100 requests per 15 minutes per IP
- **Input Validation**: All inputs validated and sanitized
- **CORS**: Restricted to frontend URL only
- **Error Handling**: No sensitive data in error responses

## Folder Structure

```
backend-api/
├── src/
│   ├── controllers/
│   │   └── contactController.js  # Contact form logic
│   ├── routes/
│   │   └── contactRoutes.js      # API routes
│   ├── middleware/
│   │   ├── errorHandler.js       # Error handling
│   │   └── validator.js          # Input validation
│   ├── utils/
│   │   └── emailService.js       # Email sending
│   └── server.js                 # Main server file
├── .env.example                  # Environment variables template
├── .gitignore
├── package.json
└── README.md
```

## Testing

### Using cURL
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890",
    "practiceName": "ABC Medical",
    "specialty": "Cardiology",
    "message": "Test message"
  }'
```

### Using Postman
1. Create POST request to `http://localhost:5000/api/contact`
2. Set Headers: `Content-Type: application/json`
3. Add JSON body with required fields
4. Send request

## Deployment

### Heroku
```bash
heroku create your-app-name
heroku config:set EMAIL_USER=your-email
heroku config:set EMAIL_PASSWORD=your-password
heroku config:set EMAIL_TO=info@optimumsolution.com
git push heroku main
```

### Vercel
```bash
vercel
# Add environment variables in Vercel dashboard
```

### Railway
```bash
railway login
railway init
railway up
# Add environment variables in Railway dashboard
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 5000 |
| NODE_ENV | Environment | development/production |
| EMAIL_HOST | SMTP host | smtp.gmail.com |
| EMAIL_PORT | SMTP port | 587 |
| EMAIL_USER | Email username | user@gmail.com |
| EMAIL_PASSWORD | Email password | app-password |
| EMAIL_FROM | From email | noreply@domain.com |
| EMAIL_TO | Recipient email | info@domain.com |
| FRONTEND_URL | Frontend URL | http://localhost:8080 |

## Troubleshooting

### Email not sending
- ✅ Check Gmail App Password is correct
- ✅ Verify 2FA is enabled
- ✅ Check firewall/antivirus settings
- ✅ Try different SMTP port (465 for SSL)
- ✅ Check EMAIL_USER and EMAIL_PASSWORD in .env

### CORS errors
- ✅ Verify FRONTEND_URL in .env
- ✅ Check frontend is running on correct port
- ✅ Clear browser cache

### Rate limit errors
- ✅ Wait 15 minutes
- ✅ Adjust RATE_LIMIT_MAX_REQUESTS in .env

## What Emails Are Sent?

### 1. Admin Notification Email
Sent to `EMAIL_TO` with:
- Customer details
- Practice information
- Message content
- Submission timestamp

### 2. Customer Auto-Reply
Sent to customer with:
- Thank you message
- What happens next
- Contact information
- Links to services

## Support

For issues or questions, contact: info@optimumsolution.com

## License

ISC
