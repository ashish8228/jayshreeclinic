'use client';
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar } from "react-icons/fa";

interface Testimonial {
    name: string;
    location: string;
    review: string;
    rating?: number;
}

const testimonials: Testimonial[] = [
    { name: "Shalini Verma", location: "Gomti Nagar", review: '"I was suffering from acne and pigmentation for years. Dr. Seepika Jaiswal is truly the best dermatologist in Lucknow – she diagnosed the root cause and customized my treatment. My skin has never looked better!"', rating: 5 },
    { name: "Ritika S.", location: "Hazratganj", review: `"I went to Jayshree Skin Clinic for anti-aging treatments. Dr. Seepika’s aesthetic approach is so natural – no overdone results. People now ask me what glow cream I’m using! She's amazing."`, rating: 5 },
    { name: "Ayesha K.", location: "Indira Nagar", review: `"I love how Dr. Seepika combines science with care. Her treatments are result-oriented and she explained everything in detail. Highly recommend her for any skin or hair concern."`, rating: 5 },
    {
        name: "Prashant M.", location: "Alambagh", review: `"Dr. Hari Mohan Rai is the best dietitian in Lucknow – I lost 11 kg in 4 months, without starving myself. His approach is realistic, sustainable, and personalized."`, rating: 5
    },
    {
        name: "Neha Tripathi", location: "Rajajipuram", review: `"I had PCOD and stubborn weight gain. Dr. Hari helped me transform my eating habits and within 3 months my cycles were regular again. His guidance has changed my life."
`, rating: 5
    },
    { name: "Ravi S.", location: "Lucknow Cantt", review: `"Being a diabetic patient, I wanted a practical diet. Dr. Hari Mohan gave me a clear, scientific plan that worked. He listens patiently and motivates you at every step."`, rating: 5 },
    { name: "Meera J.", location: "Lucknow", review: `"Jayshree Skin Clinic is a one-stop solution for both skin and nutrition. The environment is clean, professional, and friendly. I always feel taken care of.`, rating: 5 },
    { name: "Akanksha R.", location: "Vikas Nagar", review: `"I loved the combination of skin + diet services. My acne was treated both externally and internally – something no other clinic ever addressed. Highly recommended."`, rating: 5 },
    { name: "Swati P.", location: "Aliganj", review: `"From laser hair removal to my wedding skincare routine, Jayshree Skin Clinic delivered everything perfectly. I trust Dr. Seepika and Dr. Hari blindly now."`, rating: 5 },
];

const PER_PAGE = 3;
const totalPages = Math.ceil(testimonials.length / PER_PAGE);

export default function TestimonialSection() {
    const [page, setPage] = useState(0);

    const pageTestimonials = testimonials.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

    return (
        <section className="bg-[#fcf4ed] py-14 pt-[70px] lg:pt-[90px]" id="testimonials">
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    <div className="md:col-span-1 flex flex-col justify-between">
                        <div>
                            <h2 className="font-bold text-2xl text-gray-700 mb-4 md:mb-12">What Our <br />Customers<br />Say?</h2>
                            <span className="text-gray-500 text-sm mb-2 block">From 434 Reviews</span>
                            <hr className="border-t border-gray-300 w-2/3 mt-2" />
                        </div>
                    </div>
                    <AnimatePresence initial={false} mode="wait">
                        {pageTestimonials.map((testimonial) => (
                            <motion.div
                                key={testimonial.name + testimonial.location}
                                className="md:col-span-1 bg-transparent px-1"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.5 }}
                            >
                                <blockquote className="text-gray-600 text-base leading-relaxed mb-4">{testimonial.review}</blockquote>
                                <div className="mt-2 font-bold text-gray-800">
                                    {testimonial.name}, {testimonial.location}
                                </div>
                                <div className="flex gap-1 mt-2 text-yellow-500" aria-label="rating">
                                    {Array.from({ length: testimonial.rating ?? 5 }).map((_, star) => (
                                        <FaStar key={star} />
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
                {/* Page Indicator Dots */}
                <div className="flex justify-center items-center gap-2 mt-7">
                    {Array.from({ length: totalPages }).map((_, i) => (
                        <span
                            key={i}
                            className={`w-3 h-3 rounded-full transition ${page === i ? "bg-[#d6a97b]" : "bg-gray-300"
                                }`}
                            onClick={() => setPage(i)}
                            style={{ cursor: "pointer" }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
