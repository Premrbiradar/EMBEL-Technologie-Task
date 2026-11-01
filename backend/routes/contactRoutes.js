const express = require('express');
const rateLimit = require('express-rate-limit');
const Contact = require('../models/Contact');

const router = express.Router();

// Basic protection: max 10 submissions per IP every 15 minutes.
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many messages sent. Please try again after some time.',
  },
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns an object like { email: 'Please enter a valid email address.' }.
// An empty object means the data is valid.
function validateContact({ name, email, subject, message }) {
  const errors = {};

  if (!name || name.length < 2) errors.name = 'Please enter your full name (at least 2 characters).';
  else if (name.length > 100) errors.name = 'Name must be 100 characters or fewer.';

  if (!email) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(email) || email.length > 150) errors.email = 'Please enter a valid email address.';

  if (!subject || subject.length < 3) errors.subject = 'Please enter a subject (at least 3 characters).';
  else if (subject.length > 150) errors.subject = 'Subject must be 150 characters or fewer.';

  if (!message || message.length < 10) errors.message = 'Please write a message (at least 10 characters).';
  else if (message.length > 2000) errors.message = 'Message must be 2000 characters or fewer.';

  return errors;
}

// POST /api/contact  ->  validate, save to MongoDB Atlas, then confirm
router.post('/', contactLimiter, async (req, res) => {
  try {
    // Only accept strings, and trim extra whitespace.
    const clean = (value) => (typeof value === 'string' ? value.trim() : '');
    const data = {
      name: clean(req.body.name),
      email: clean(req.body.email).toLowerCase(),
      subject: clean(req.body.subject),
      message: clean(req.body.message),
    };

    const errors = validateContact(data);
    if (Object.keys(errors).length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Please correct the highlighted fields.',
        errors,
      });
    }

    await Contact.create(data); // success is sent only after the save works

    return res.status(201).json({
      success: true,
      message: 'Thank you. Your message has been received.',
    });
  } catch (error) {
    console.error('Contact save failed:', error.message); // details stay in the server log
    return res.status(500).json({
      success: false,
      message: 'Something went wrong on our side. Please try again later.',
    });
  }
});

module.exports = router;
