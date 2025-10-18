'use client';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHandHoldingHeart, FaDollarSign, FaUserAlt } from 'react-icons/fa';

const features = [
  {
    icon: <FaShieldAlt size={36} color="#2596ff" />,
    label: 'Your Health Insurance'
  },
  {
    icon: <FaHandHoldingHeart size={36} color="#16d098" />,
    label: 'Help When You Need It'
  },
  {
    icon: <FaDollarSign size={36} color="#2596ff" />,
    label: 'Free Service'
  },
  {
    icon: <FaUserAlt size={36} color="#16d098" />,
    label: 'Independent Benefit'
  }
];

const clinicStrengths = [
  "The Only Clinic within house Clinical Nutritionist and Derma Nutritionist in Lucknow.",
  "Only Clinic providing all gym lasers for weight loss like 20000 Crunches, CoolSculpting, lipolysis etc.",
  "All US FDA and CE approved Latest Skin and Hair Lasers.",
  "Latest Techniques like PDRN, NCTF, Exosomes, Korean Glass Skin Injections available.",
  "The only clinic in India with a Masters Degree in Medical Permanent Makeup.",
  "Latest Cosmetic Gynecology Lasers and Injectables.",
  "Advanced weight loss techniques with Diet, Injection and Laser Consultation Combining Weight Loss Doctor and Clinical Nutritionist.",
  "Reverses diseases like PCOD, Thyroid, Diabetes etc. with Diet and Nutrition Supplementation.",
  "The Only Homely Clinic in Lucknow without a luxurious setup making patients feel at ease."
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.2 }
  })
};

const divVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.07 }
  })
};

export default function BenefitsGrid() {
  return (
    <section className="py-12 bg-[#fafbfc]" id='about'>
      <div className="mx-auto max-w-5xl px-2">
        {/* Icon Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {features.map((feat, i) => (
            <motion.div
              key={feat.label}
              className="bg-white rounded-lg shadow-sm px-2 py-8 flex flex-col items-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <span className="rounded-full bg-white shadow-md p-6 mb-4 flex items-center justify-center">
                {feat.icon}
              </span>
              <span className="font-semibold text-[#32526a] text-base text-center">{feat.label}</span>
            </motion.div>
          ))}
        </div>
        {/* Clinic Strengths as Animated Divs */}
        <h2 className="font-bold text-2xl mb-4 text-center text-[#195723]">Why Choose Us</h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          {clinicStrengths.map((point, i) => (
            <motion.div
              key={i}
              className="flex items-center bg-white rounded-lg shadow p-5 border-l-4 border-[#2596ff] text-gray-700 text-base"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={divVariants}
            >
              {point}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
