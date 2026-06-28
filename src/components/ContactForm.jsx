// fileName: ContactForm.jsx

const ContactForm = ({ onSubmit, loading, success, form, setForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const inputStyle = `
        w-full 
        p-4 
        text-xl 
        text-white 
        bg-transparent 
        border-b 
        border-neutral-700 
        focus:border-blue-500 
        focus:outline-none 
        placeholder-neutral-500 
        transition-colors 
        duration-300
    `;

  return (
    <div>
      {/* Tambahkan id="contact-form" di sini */}
      <form id="contact-form" className="space-y-12" onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          disabled={loading}
          className={inputStyle}
        />
        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          disabled={loading}
          className={inputStyle}
        />
        <textarea
          placeholder="Your Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          disabled={loading}
          className={`${inputStyle} h-32 resize-none`}
        />
      </form>

    </div>
  );
};

export default ContactForm;