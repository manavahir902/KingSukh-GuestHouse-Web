import { motion } from "framer-motion";
import barantiLake from "@/assets/about-baranti-lake.webp";
import garhPanchkot from "@/assets/garh-panchkot.webp";
import ajodhyaPahar from "@/assets/ajodhya-pahar.webp";
import joychandiPahar from "@/assets/joychandi-pahar.webp";
import susuniaHill from "@/assets/susunia-hill.webp";
import kalyaneshwariTemple from "@/assets/kalyaneshwari-temple.webp";

const attractions = [
  { src: barantiLake, alt: "Baranti Lake", distance: "0.5 km", desc: "A serene lake perfect for boating & sunsets." },
  { src: garhPanchkot, alt: "Garh Panchkot", distance: "12 km", desc: "Historic ruins of a 16th-century fort." },
  { src: ajodhyaPahar, alt: "Ajodhya Pahar", distance: "45 km", desc: "Hills, waterfalls & scenic landscapes." },
  { src: joychandiPahar, alt: "Joychandi Pahar", distance: "22 km", desc: "Popular trekking & rock climbing spot." },
  { src: susuniaHill, alt: "Susunia Hill", distance: "65 km", desc: "Famous for its ancient inscriptions & natural beauty." },
  { src: kalyaneshwariTemple, alt: "Kalyaneshwari Temple", distance: "55 km", desc: "Ancient temple dedicated to Goddess Kalyaneshwari." }
];

export default function LocalAttractions() {
  return (
    <section id="attractions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-heading font-bold text-center mb-12"
        >
          Nearby Attractions
        </motion.h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {attractions.map((place, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="mb-6 break-inside-avoid overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all bg-white"
            >
              <img
                src={place.src}
                alt={place.alt}
                className="w-full h-auto object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">{place.alt}</h3>
                <p className="text-sm text-gray-500">{place.distance} from hotel</p>
                <p className="text-sm mt-2 text-gray-600">{place.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
