import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function ContactUs() {
  const phoneNumber = "919007062180"; // Replace with your hotel's WhatsApp number

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello, I would like to inquire about booking at Baranti Haven."
    );
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-heading font-bold mb-4">Contact Us</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We’re here to help you with bookings, questions, or travel tips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <MapPin size={24} className="text-luxury-gold" />
              <p className="text-lg">
                Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Phone size={24} className="text-luxury-gold" />
              <p className="text-lg">+91 9007062180</p>
            </div>
            <div className="flex items-center gap-4">
              <Mail size={24} className="text-luxury-gold" />
              <p className="text-lg">kkghosh0099@gmail.com</p>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="flex items-center gap-2 px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition"
            >
              <Send size={18} /> Chat on WhatsApp
            </button>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white shadow-xl rounded-2xl p-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              handleWhatsAppClick();
            }}
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-luxury-gold"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-luxury-gold text-white font-semibold rounded-lg hover:bg-luxury-gold-light transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7313.003491353379!2d86.85979!3d23.586332!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e3fdd3ff9ebb%3A0x517a57e3f93c1807!2sKingsukh%20Guest%20House!5e0!3m2!1sen!2sin!4v1755114639720!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
