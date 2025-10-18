'use client';
import { PiCertificateThin } from "react-icons/pi";
import { PiCertificate } from "react-icons/pi";
import { FaAward } from "react-icons/fa";
import { BiClinic } from "react-icons/bi";
import { FaRegClock } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa"; 
import { MdMedicalServices } from "react-icons/md";
import { motion } from 'framer-motion';
import Image from 'next/image';


const credentials = [
  { title: "International Certifications ", icon: <PiCertificate /> },
  { title: "Clinical Nutrition Expert ", icon: <BiClinic /> },
  { title: "Award-Winning Dermatologist", icon: <FaAward /> },
  { title: "10+ Years Experience ", icon: <FaRegClock /> }
]


export default function HeroSection() {
  return (
    <section className="bg-gray-300/20 relative mt-[70px] lg:mt-[90px] lg:h-[calc(100vh-90px)] pb-10" id="home">
      <motion.div
        className="px-4 sm:px-6 lg:px-30 flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between pt-7 w-full h-full"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: "easeOut",
        }}
      >
        {/* Left Column - Centered on mobile/tablet, left-aligned on desktop */}
        <div className="flex-1 text-center xl:text-left flex flex-col items-center xl:items-start px-4 sm:px-0">
          <div className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)]/20 text-gray-700 rounded-full px-3 sm:px-4 py-2 mb-3 sm:mb-5">
            <PiCertificateThin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="text-xs sm:text-sm lg:text-base font-medium">
              Internationally Certified Dermatology
            </span>
          </div>


          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-gray-900 leading-tight mb-2 sm:mb-3">
            Jayshree Skin Clinic <br /> Lucknow
          </h1>


          <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-500 mb-6 sm:mb-8 max-w-xl font-body leading-relaxed">
            Dermatology & Aesthetic Medicine<br />
            Skin, Hair, Laser & Anti-ageing & Cosmetic Gynecology<br />
            Clinic in Lucknow
          </p>


          <div className="flex gap-3 sm:gap-5 items-center font-body flex-wrap justify-center xl:justify-start">
            <a href="#contact" className="bg-[var(--color-primary)] text-gray-800 py-2.5 sm:py-3 px-5 sm:px-7 rounded-lg shadow text-sm sm:text-base font-semibold hover:bg-[var(--color-primary)]/80 transition flex items-center gap-2">
              <FaCalendarCheck className="w-4 h-4 sm:w-5 sm:h-5" />
              Book Appointment
            </a>
            <a href="#services" className="hidden  py-2.5 sm:py-3 px-5 sm:px-7 shadow rounded-lg text-gray-600 text-sm sm:text-base font-semibold border border-[var(--color-primary)] transition hover:bg-gray-50 md:flex items-center gap-2">
              <MdMedicalServices className="w-4 h-4 sm:w-5 sm:h-5" />
              Services
            </a>
          </div>
        </div>


        {/* Right Column Image - Hidden below 1200px (xl breakpoint) */}
        <div className=" xl:flex flex-1 justify-center md:justify-end items-center overflow-visible">
          <div className="relative w-[250px] lg:mb-0 mb-5 h-[250px] md:w-[450px] xl:w-[500px] md:h-[500px] xl:h-[550px] rounded-2xl bg-[var(--color-accent)] flex items-center justify-center overflow-visible">
            <div className="absolute px-2 py-2 w-full flex -left-20 lg:-left-30 items-start justify-center flex-col gap-3 lg:gap-5">
              {credentials.map((value, index) => {
                return (
                  <motion.p
                    key={index}
                    className="font-body text-xs lg:text-sm flex items-center text-gray-500 justify-center gap-2 bg-white/30 backdrop-blur-md border border-gray-300/20 rounded-xl px-3 lg:px-5 py-2 shadow-md"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: 'loop',
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    <span className="text-base lg:text-lg">{value.icon}</span>
                    {value.title}
                  </motion.p>
                )
              })}
            </div>
            <Image
              src="./images/doctor_img.png"
              alt="Doctor Image"
              fill
              className="object-cover rounded-2xl"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
