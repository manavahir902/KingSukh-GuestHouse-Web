import { motion } from "framer-motion";
import aboutImage1 from "@/assets/hotel-front.webp";
import aboutImage2 from "@/assets/about-room.webp";
import aboutImage3 from "@/assets/room-suite.webp";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
            Welcome to{" "}
            <span className="text-luxury-gold">King Sukh Guest House</span>
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Nestled in the heart of{" "}
            <strong>Baranti, Purulia, West Bengal</strong>, our luxury guest
            house offers panoramic views of{" "}
            <strong>Baranti Lake</strong> and the rolling Ajodhya Hills.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Perfect for families, couples, and travelers seeking a serene
            retreat, we blend modern comfort with authentic Bengali hospitality.
            Just minutes from top Purulia attractions, our rooms feature
            premium amenities and lake-view balconies.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            Whether you're here for a weekend getaway or a long holiday, King
            Sukh Guest House is your gateway to{" "}
            <strong>Purulia tourism</strong>—famous for its scenic landscapes,
            tribal culture, and vibrant festivals.
          </p>
        </motion.div>

        {/* Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 grid-rows-2 gap-4"
        >
          <motion.img
            src={aboutImage1}
            alt="Baranti Lake"
            className="w-full h-full object-cover rounded-lg shadow-lg row-span-2 hover:scale-105 transition-transform duration-500"
          />
          <motion.img
            src={aboutImage2}
            alt="Luxury Room"
            className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
          <motion.img
            src={aboutImage3}
            alt="Authentic Bengali Food"
            className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
