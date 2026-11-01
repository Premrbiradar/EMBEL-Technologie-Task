import { useState } from 'react';
import { MapPin, Building2, UserRound, ExternalLink, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import Reveal from '../components/Reveal.jsx';
import SectionHeader from '../components/SectionHeader.jsx';
import './Contact.css';

// API address comes from frontend/.env (never hard-code it)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

const emptyForm = { name: '', email: '', subject: '', message: '' };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns an object with one message per invalid field.
function validate(values) {
  const errors = {};
  if (values.name.trim().length < 2) errors.name = 'Please enter your full name (at least 2 characters).';
  if (!values.email.trim()) errors.email = 'Please enter your email address.';
  else if (!emailPattern.test(values.email.trim())) errors.email = 'Please enter a valid email address.';
  if (values.subject.trim().length < 3) errors.subject = 'Please enter a subject (at least 3 characters).';
  if (values.message.trim().length < 10) errors.message = 'Please write a message (at least 10 characters).';
  return errors;
}

export default function Contact() {
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const [feedback, setFeedback] = useState('');

  const isLoading = status === 'loading';

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' }); // clear that field's error while typing
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isLoading) return; // prevents repeated submissions

    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus('idle');
      setFeedback('');
      return;
    }

    setStatus('loading');
    setFeedback('');
    setErrors({});

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        // Success only after the backend confirms the message is saved in MongoDB
        setStatus('success');
        setFeedback(data.message || 'Thank you. Your message has been received.');
        setFormData(emptyForm);
      } else if (response.status === 400 && data.errors) {
        setStatus('error');
        setErrors(data.errors);
        setFeedback(data.message || 'Please correct the highlighted fields.');
      } else {
        setStatus('error');
        setFeedback(data.message || 'The server could not save your message. Please try again later.');
      }
    } catch (error) {
      setStatus('error');
      setFeedback('Could not reach the server. Please check your connection and try again.');
    }
  };

  return (
    <section id="contact" className="section section--dark contact" aria-labelledby="contact-title">
      <div className="container">
        <SectionHeader
          id="contact-title"
          eyebrow="06 / Contact"
          title="Let's Connect"
          subtitle="For professional enquiries and discussions about engineering, technology, and business solutions, get in touch."
        />

        <div className="contact__grid">
          <Reveal as="form" direction="left" className="contact__form" onSubmit={handleSubmit} noValidate>
            <div className="contact__field">
              <label htmlFor="name">Full Name</label>
              <input
                id="name" name="name" type="text" autoComplete="name"
                value={formData.name} onChange={handleChange}
                aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined}
                maxLength={100}
              />
              {errors.name && <p className="contact__error" id="name-error">{errors.name}</p>}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email Address</label>
              <input
                id="email" name="email" type="email" autoComplete="email"
                value={formData.email} onChange={handleChange}
                aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined}
                maxLength={150}
              />
              {errors.email && <p className="contact__error" id="email-error">{errors.email}</p>}
            </div>

            <div className="contact__field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject" name="subject" type="text"
                value={formData.subject} onChange={handleChange}
                aria-invalid={Boolean(errors.subject)} aria-describedby={errors.subject ? 'subject-error' : undefined}
                maxLength={150}
              />
              {errors.subject && <p className="contact__error" id="subject-error">{errors.subject}</p>}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows="5"
                value={formData.message} onChange={handleChange}
                aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : undefined}
                maxLength={2000}
              />
              {errors.message && <p className="contact__error" id="message-error">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary contact__submit" disabled={isLoading}>
              {isLoading ? (
                <><Loader2 size={18} className="contact__spinner" aria-hidden="true" /> Sending...</>
              ) : (
                <><Send size={18} aria-hidden="true" /> Send Message</>
              )}
            </button>

            <div aria-live="polite">
              {status === 'success' && (
                <p className="contact__notice contact__notice--success">
                  <CheckCircle2 size={20} aria-hidden="true" /> {feedback}
                </p>
              )}
              {status === 'error' && feedback && (
                <p className="contact__notice contact__notice--error" role="alert">
                  <AlertCircle size={20} aria-hidden="true" /> {feedback}
                </p>
              )}
            </div>
          </Reveal>

          <Reveal as="aside" direction="right" delay={150} className="contact__info" aria-label="Contact information">
            <ul>
              <li><UserRound size={22} aria-hidden="true" />
                <div><h3>Sumit Bandewar</h3><p>Executive Director</p></div>
              </li>
              <li><Building2 size={22} aria-hidden="true" />
                <div><h3>Company</h3><p>Embel Technologies Pvt. Ltd.</p></div>
              </li>
              <li><MapPin size={22} aria-hidden="true" />
                <div><h3>Location</h3><p>Pune Division, Maharashtra, India</p></div>
              </li>
              <li><ExternalLink size={22} aria-hidden="true" />
                <div>
                  <h3>LinkedIn</h3>
                  <p>
                    <a href="https://www.linkedin.com/in/sumitbembel/" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/sumitbembel
                    </a>
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
