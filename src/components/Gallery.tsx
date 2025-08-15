import { motion } from "framer-motion";
import hotelFront from "@/assets/hotel-front.webp";
import reception from "@/assets/reception.webp";
import deluxeRoom from "@/assets/about-room.webp";
import restaurant from "@/assets/restaurant.webp";
import lounge from "@/assets/lounge.webp";
import pool from "@/assets/pool.webp";

const galleryImages = [
  { src: hotelFront, alt: "Hotel Front View" },
  { src: reception, alt: "Reception Area" },
  { src: deluxeRoom, alt: "Deluxe Room" },
  { src: restaurant, alt: "Restaurant" },
  { src: lounge, alt: "Lounge Area" },
  { src: pool, alt: "Swimming Pool" }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center mb-12"
        >
          Photo Gallery
        </motion.h2>

        {/* Masonry Style Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
