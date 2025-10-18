'use client';

import { useState } from 'react';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';

export default function ContactUs() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        alert(`Thank you ${form.name}, your message has been sent.`);
        setForm({ name: '', email: '', message: '' });
    }

    return (
        <section className=" bg-gray-300/20 rounded-2xl" id='contact'>
            <div className='p-4 md:p-8 max-w-6xl mx-auto'>
                <h2 className="text-3xl font-serif text-center font-semibold mb-10">Get in touch, let us know<br /><span>how we can help</span></h2>
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Google Map */}
                    <div className="flex-1 min-h-[300px] rounded-xl overflow-hidden">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3383.3895495473116!2d80.9959287!3d26.8554951!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd9337f40769%3A0xe41071467fea9452!2sDr.%20Seepika%20Jaiswal!5e1!3m2!1sen!2sin!4v1760694034798!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            className={`md:h-full h-[300px]`}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            allowFullScreen
                            title="Clinic Location"
                        />
                    </div>

                    {/* Contact Form */}
                    <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6">
                        <div className="flex gap-4 max-[480px]:flex-col">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your full name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-[#f7f8fa] text-gray-900 font-medium focus:outline-gray-400"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="flex-1 px-4 py-3 border border-gray-200 rounded-lg bg-[#f7f8fa] text-gray-900 font-medium focus:outline-gray-400"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Write your message..."
                            value={form.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="px-4 py-3 border border-gray-200 rounded-lg bg-[#f7f8fa] text-gray-900 font-medium resize-none focus:outline-gray-400"
                        ></textarea>
                        <button
                            type="submit"
                            className="text-white bg-gray-900  border border-[var(--color-primary)] transition  text-lg font-normal py-3 rounded-lg"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Info (styled like reference image) */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {/* Email */}
                    <div className="flex items-center gap-4 bg-[#f7f8fa] rounded-xl shadow p-4">
                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow text-white text-2xl">
                            <MdEmail />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-600">Email address</div>
                            <div className="text-base font-bold text-gray-900 tracking-wide">jayshreeskinclinic@gmail.com</div>
                        </div>
                    </div>
                    {/* Phone */}
                    <div className="flex items-center gap-4 bg-[#f7f8fa] rounded-xl shadow p-4">
                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow text-white text-2xl">
                            <MdPhone />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-600">Phone Number</div>
                            <div className="text-base font-bold text-gray-900 tracking-wide">+91 8957132986</div>
                        </div>
                    </div>
                    {/* Location */}
                    <div className="flex items-center gap-4 bg-[#f7f8fa] rounded-xl shadow p-4">
                        <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center shadow text-white text-2xl">
                            <MdLocationOn />
                        </div>
                        <div>
                            <div className="text-sm font-medium text-gray-600">Our Location</div>
                            <div className="text-base font-bold text-gray-900 tracking-wide">Gomti Nagar, Lucknow</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
