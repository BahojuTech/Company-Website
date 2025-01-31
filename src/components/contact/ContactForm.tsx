"use client"; 
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in required fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) { 
        setStatus("Email sent successfully!");
        setFormData({ name: "", company: "", phone: "", email: "", subject: "", message: "" });
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (error) {
      setStatus("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full bg-[#D5E5EC]">
      <main className="max-w-[80rem] w-full mx-auto px-5 md:px-20 pb-24 pt-6">
        <h1 className="font-semibold text-3xl text-center text-[#005F87]">
          Reach out today for tailored solutions!
        </h1>

        {status && <p className="text-center mt-4 font-semibold">{status}</p>}

        <form onSubmit={sendEmail} className="flex flex-wrap lg:px-5 md:px-10 justify-between mt-8">
          <input name="name" value={formData.name} onChange={handleChange} className="md:w-[48%] w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]" type="text" placeholder="Name" required />
          
          <input name="company" value={formData.company} onChange={handleChange} className="md:w-[48%] w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]" type="text" placeholder="Company" required />

          <input name="phone" value={formData.phone} onChange={handleChange} className="md:w-[48%] w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]" type="text" placeholder="Phone" required />

          <input name="email" value={formData.email} onChange={handleChange} className="md:w-[48%] w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]" type="email" placeholder="Email" required />

          <input name="subject" value={formData.subject} onChange={handleChange} className="w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]" type="text" placeholder="Subject" required />

          <textarea name="message" value={formData.message} onChange={handleChange} className="w-full min-h-40 mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]" placeholder="Message" required></textarea>

          <button type="submit" className="mt-5 mx-auto px-16 py-3 bg-[#005F87] text-white rounded font-semibold" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </main>
    </section>
  );
};

export default ContactForm;
