// fileName: ContactForm.jsx (REVISI)

import { useState } from 'react';

const ContactForm = ({ onSubmit, loading, success, form, setForm }) => {
 // Fungsi onChange yang disederhanakan
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
   <div className="">
  
  <form className="space-y-12" onSubmit={onSubmit}>
    <input
     type="text"
     placeholder="Your Name"
     name="name"
     value={form.name}
     onChange={handleChange}
     required
     className={inputStyle}
    />
    <input
     type="email"
     placeholder="Your Email"
     name="email"
     value={form.email}
     onChange={handleChange}
     required
     className={inputStyle}
    />
    <textarea
     placeholder="Your Message"
     name="message"
     value={form.message}
     onChange={handleChange}
     required
     className={`${inputStyle} h-32 resize-none`}
    />
    {/* Tombol Submit dihapus dari sini */}
  </form>
  {success && <p className="mt-6 text-green-400">Thank you! Your message has been "sent" (dummy mode).</p>}
 </div>
 );
};

export default ContactForm;