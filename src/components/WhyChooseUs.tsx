'use client';

import React from 'react';
import { FaUserMd, FaPills } from 'react-icons/fa';
import { GiLaserBurst, GiWeightLiftingUp } from 'react-icons/gi';
import { AiFillSafetyCertificate } from 'react-icons/ai';
import { MdMedicalServices } from 'react-icons/md';
import { motion } from 'framer-motion';
import { HiMinus } from 'react-icons/hi';

const cards = [
  {
    id: 'nutrition',
    title: 'In-house Clinical & Derma Nutritionist',
    desc: 'Integrated nutrition and dermatology care for better, personalised outcomes.',
    icon: <FaUserMd size={28} />,
  },
  {
    id: 'gym-lasers',
    title: 'Gym Laser Weight Loss',
    desc: 'CoolSculpting, lipolysis and gym lasers for targeted, efficient fat reduction.',
    icon: <GiWeightLiftingUp size={28} />,
  },
  {
    id: 'certified-lasers',
    title: 'US FDA & CE Approved Lasers',
    desc: 'Latest clinically proven skin and hair lasers with global approvals.',
    icon: <AiFillSafetyCertificate size={28} />,
  },
  {
    id: 'advanced-tech',
    title: 'Advanced Injectables & Techniques',
    desc: 'PDRN, NCTF, Exosomes, Korean Glass Skin injections and other modern therapies.',
    icon: <GiLaserBurst size={28} />,
  },
  {
    id: 'cosmetic-gyne',
    title: 'Cosmetic Gynecology Lasers & Injectables',
    desc: 'Minimally invasive, evidence-based aesthetic gynecology procedures.',
    icon: <MdMedicalServices size={28} />,
  },
  {
    id: 'weight-loss',
    title: 'Integrated Weight Loss Program',
    desc: 'Diet, injections and laser consultations combining doctors and nutritionists.',
    icon: <FaPills size={28} />,
  },
];

const cardVariants = {
  hiddenLeft: { opacity: 0, x: -80 },
  hiddenRight: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

function WhyCard({
  icon,
  title,
  desc,
  id,
  idx,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  id: string;
  idx: number;
}) {
  const hiddenVariant = idx % 2 === 0 ? 'hiddenLeft' : 'hiddenRight';

  return (
    <motion.article
      key={id}
      className="bg-white shadow-md rounded-lg px-6 py-8 flex flex-col items-center text-center border border-gray-100"
      style={{ minHeight: 250 }}
      initial={hiddenVariant}
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      variants={cardVariants}
      aria-labelledby={`${id}-title`}
    >
      <div className="mb-5 rounded-lg p-2 bg-red-200 inline-flex items-center justify-center text-white">
        {icon}
      </div>
      <h3 id={`${id}-title`} className="font-semibold text-lg mb-2 text-gray-900">
        {title}
      </h3>
      <p className="text-gray-400 text-sm">{desc}</p>
    </motion.article>
  );
}

export default function WhyChooseUs() {
  return (
    <section id="whychooseus" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-2">
        <p className="text-center text-gray-600 text-lg font-body mt-3 relative" style={{ marginTop: '-8px' }}>
          Why Choose Us
        </p>

        <h2 className="text-center text-3xl md:text-4xl font-bold mt-1 mb-12 font-heading relative inline-block w-full">
          Our Advantages
          <span className="relative block" style={{ color: 'var(--color-accent)' }}>
            <HiMinus
              size={30}
              className="absolute left-1/2 transform -translate-x-1/2 top-full"
              style={{ marginTop: '-10px', color: 'var(--color-accent)', pointerEvents: 'none' }}
            />
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <WhyCard
              key={card.id}
              id={card.id}
              icon={card.icon}
              title={card.title}
              desc={card.desc}
              idx={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
