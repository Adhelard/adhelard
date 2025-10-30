import { useState } from 'react';

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Simulate a delay for "sending" (dummy behavior)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      alert('Message sent successfully! (This is a dummy form - no real email was sent.)');
      setForm({ name: '', email: '', message: '' }); // Reset form
    }, 2000); // 2-second delay
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full p-2 border rounded h-24"
        />
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </form>
      {success && <p className="mt-4 text-green-500">Thank you! Your message has been "sent" (dummy mode).</p>}
    </div>
  );
};

export default ContactForm;