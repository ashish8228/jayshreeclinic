'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}`);
    setEmail('');
  };

  return (
    <footer className="bg-gray-500 text-gray-100 py-12 border-t border-gray-400">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

        {/* Column 1: Information */}
        <div>
          <h3 className="font-bold text-white mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#team" className="hover:text-white transition">Our Team</Link></li>
            <li><Link href="#contact" className="hover:text-white transition">Location</Link></li>
            <li><Link href="#service" className="hover:text-white transition">Services</Link></li>
          </ul>
        </div>

        {/* Column 2: Contact Us */}
        <div>
          <h3 className="font-bold text-white mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Customer@JayshreeSkinClinic.com</li>
            <li>+91 8957132986</li>
          </ul>
        </div>

        {/* Column 3: Working Hours */}
        <div>
          <h3 className="font-bold text-white mb-4">Working Hours</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">Mon - Sat: <span className="font-medium">11:00 AM – 1:00 PM </span> &amp; <br /><span className="font-medium"> 4:00 PM – 7:00 PM</span></li>
          </ul>
        </div>


        {/* Column 4: Social Media Icons */}
        <div>
          <h3 className="font-bold text-white mb-4">Social Media</h3>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/seepiseeps?igsh=aTV4cHl2cTRpd3hu" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition">
              <FaInstagram size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition">
              <FaFacebookF size={22} />
            </a>
            <a href="https://www.youtube.com/@DrSeepikaJaiswal" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition">
              <FaYoutube size={22} />
            </a>
            <a href="https://wa.me/918957132986" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-white transition">
              <FaWhatsapp size={22} />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 mt-10 pt-6 border-t border-gray-400 flex flex-col md:flex-row justify-between items-center text-sm text-gray-200">
        <p>© Jayshree Skin Clinic 2025. All Rights Reserved</p>
        <p>Designed & Developed by <a href='https://www.linkedin.com/in/ashishkumarmali/' target='_blank' className="font-semibold text-white hover:underline">Ashish Kumar Mali</a></p>
      </div>
    </footer>
  );
}
