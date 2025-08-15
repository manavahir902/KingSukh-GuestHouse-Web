import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-heading font-bold text-luxury-gold mb-4">
            Kingsukh Guest House
          </h2>
          <p className="text-sm">
            Your peaceful retreat beside Baranti Lake, offering comfort, scenic
            views, and warm hospitality.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#about" className="hover:text-luxury-gold transition">
                About Us
              </a>
            </li>
            <li>
              <a href="#rooms" className="hover:text-luxury-gold transition">
                Rooms & Suites
              </a>
            </li>
            <li>
              <a href="#gallery" className="hover:text-luxury-gold transition">
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#attractions"
                className="hover:text-luxury-gold transition"
              >
                Local Attractions
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-luxury-gold transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-luxury-gold" /> <a href="https://maps.app.goo.gl/7wYUEB4tvR7NMHbcA">Beside Barshal
              Water Tank, Manpur, Barhanti, West Bengal 723156</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-luxury-gold" /> +91 9007062180
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-luxury-gold" />{" "}
             kkghosh0099@gmail.com
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Follow Us
          </h3>
          <div className="flex gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-luxury-gold transition"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-luxury-gold transition"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      
    </footer>
  );
}
