import ContactUs from "@/components/ContactUs";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import OurTeam from "@/components/OurTeam";
import WhyChooseUs from "@/components/WhyChooseUs";
export default function HomePage() {
  return (
    <>
      <div className="lg:h-[100vh]">
        <Header />
        <HeroSection />
      </div>
      <Services />
      <OurTeam/>
      <TestimonialSection />
      <WhyChooseUs/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
