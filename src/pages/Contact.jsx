import { useState } from 'react';
import emailjs from '@emailjs/browser';
import ContactForm from '../components/ContactForm';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // emailjs.send(serviceID, templateID, templateParams, publicKey)
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          setForm({ name: '', email: '', message: '' }); // Kosongkan form setelah sukses
        },
        (error) => {
          setLoading(false);
          console.error('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <section className="max-w-xl mx-auto py-12">
      <ContactForm
        onSubmit={handleSubmit}
        loading={loading}
        success={success}
        form={form}
        setForm={setForm}
      />

      {/* Tombol Submit di luar ContactForm */}
      <button
        type="submit"
        form="contact-form" // <-- Wajib sama dengan id di <form> ContactForm.jsx
        disabled={loading}
        className="mt-12 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-300 disabled:opacity-50 cursor-pointer"
      >
        {loading ? 'Sending Message...' : 'Send Message'}
      </button>
    </section>
  );
};

export default ContactSection;