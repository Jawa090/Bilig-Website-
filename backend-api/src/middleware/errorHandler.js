export const errorHandler = (err, req, res, next) => {
  console.error('Error:', err);

  // Default error
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Internal Server Error';

  // Nodemailer errors
  if (err.code === 'EAUTH') {
    statusCode = 500;
    message = 'Email authentication failed. Please contact support.';
  } else if (err.code === 'ECONNECTION') {
    statusCode = 500;
    message = 'Email service connection failed. Please try again later.';
  }

  // Send error response
  res.status(statusCode).json({
    success: false,
    message: message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};
