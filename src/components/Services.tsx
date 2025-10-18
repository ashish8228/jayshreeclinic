// src/pages/Services.tsx

'use client';
import { ReactNode } from 'react';
import { GiLipstick, GiMuscleUp } from 'react-icons/gi';
import { MdOutlineFastfood, MdFaceRetouchingNatural } from 'react-icons/md';
import { FaWeight, FaStethoscope } from 'react-icons/fa';
import { BiFemale } from 'react-icons/bi';
import { RiHeartPulseLine, RiFlashlightLine } from 'react-icons/ri';
import { HiMinus } from 'react-icons/hi';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const services = [
  {
    title: "Dermatology & Aesthetic Medicine",
    icon: <MdFaceRetouchingNatural size={30} />,
    description: "Comprehensive skin care and advanced aesthetic treatments, combining medical expertise with modern cosmetic solutions for healthy, beautiful skin."
  },
  {
    title: "Clinical Nutrition & Weight Loss",
    icon: <MdOutlineFastfood size={30} />,
    description: "Personalized nutrition counseling and medically supervised weight loss programs, designed to promote overall wellness and sustainable health outcomes."
  },
  {
    title: "Hair Restoration",
    icon: <GiMuscleUp size={30} />,
    description: "Advanced solutions for hair loss, including PRP therapy and specialized treatments to restore thickness, volume, and natural hair growth."
  },
  {
    title: "Cosmetic Gynaecology",
    icon: <BiFemale size={30} />,
    description: "Expert care for women's intimate health with minimally invasive cosmetic gynecology services, enhancing confidence and well-being."
  },
  {
    title: "Fat Loss Laser Treatments",
    icon: <RiFlashlightLine size={30} />,
    description: "Cutting-edge non-surgical laser therapies targeting stubborn fat deposits, helping you achieve a slimmer, contoured body safely and effectively."
  },
  {
    title: "General Physician & Health Care",
    icon: <FaStethoscope size={30} />,
    description: "Holistic medical care for you and your family, including preventive checkups, routine treatments, and comprehensive wellness guidance."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <motion.div
    className="bg-white shadow-md rounded-lg px-8 py-10 flex flex-col items-center text-center border border-gray-100"
    style={{ minHeight: 250 }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
    variants={cardVariants}
  >
    <div className="mb-5 rounded-lg p-2 bg-red-200" style={{
      color: 'white'
    }}>{icon}</div>
    <h3 className="font-semibold text-lg mb-2">{title}</h3>
    <p className="text-gray-400 text-sm font-body">{description}</p>
  </motion.div>
);

export default function Services() {
  return (
    <section className="py-16  bg-white" id='services'>
      <div className="max-w-6xl mx-auto px-2">
        <p className="text-center text-gray-600 text-lg font-body mt-3 relative " style={{ marginTop: '-8px' }}>
          Treatments
        </p>

        <h2 className="text-center text-3xl md:text-4xl font-bold mt-1 mb-12 font-heading relative inline-block w-full">
          What we can{' '}
          <span className="relative" style={{ color: 'var(--color-accent)' }}>
            do for you
            <HiMinus
              size={30}
              className="absolute left-0 top-full w-full"
              style={{ marginTop: '-10px', color: 'var(--color-accent)', pointerEvents: 'none' }}
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map(service => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
