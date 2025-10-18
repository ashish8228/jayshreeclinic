'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const teamMembers = [
    {
        name: 'Dr. Seepika Jaiswal',
        role: 'Doctor',
        bio: 'Renowned as the Best Cosmetic Dermatologist in Lucknow for Advanced Skin, Hair and Aesthetic Treatments',
        awards: [
            'National Excellence Awards 2021',
            'Top 30 Aesthetic Dermatologist - IJD',
            'Most Trusted Doctor Award 2022',
        ],
        imgSrc: './images/doctor_img.png',
        imgAlt: 'Dr. Seepika Jaiswal',
    },
    {
        name: 'Dr. Hari Mohan Rai',
        role: 'Doctor',
        bio: 'Trusted as the Best Clinical Nutritionist and Dietitian for Reversing Diseases, Diet and Nutritional Supplements',
        awards: [
            'International Ratan Shree Award 2025',
            'Honorary Doctorate Award',
            'Derma Nutritionist Certification',
        ],
        imgSrc: './images/male_doctor.png',
        imgAlt: 'Dr. Hari Mohan Rai',
    },
];

export default function OurTeam() {
    return (
        <section id="team" className="py-16 bg-gray-50">
            <div className='max-w-6xl mx-auto px-2'>
                <div className="max-w-4xl mx-auto text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold text-gray-900">Our Team</h2>
                    <div className="w-16 h-1 bg-[var(--color-accent)] mx-auto my-3 rounded"></div>
                    <p className="text-gray-600">
                        Our team consists only of the best talents
                    </p>
                </div>

                <div className="space-y-12">
                    {teamMembers.map((member, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={member.name}
                                className={`flex flex-col lg:flex-row items-center bg-gray-100 rounded-2xl shadow overflow-hidden ${isEven ? '' : 'lg:flex-row-reverse'
                                    }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className={`relative w-full lg:w-1/3 h-55 lg:h-80 rounded-2xl bg-red-200`}>
                                    <Image src={member.imgSrc}
                                        alt={member.imgAlt}
                                        fill
                                        className={idx === 0 ? 'object-contain lg:object-contain' : 'object-cover lg:object-cover'}
                                        priority />
                                </div>

                                <div className="p-8 lg:w-2/3">
                                    <h3 className="text-2xl font-semibold text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="text-[var(--color-accent)] font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600 leading-relaxed">{member.bio}</p>
                                    <ul className="list-disc list-inside space-y-1 mt-4">
                                        {member.awards.map((award, i) => (
                                            <li key={i} className="text-gray-400">
                                                {award}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
}
