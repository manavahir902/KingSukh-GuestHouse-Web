import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Coffee, BedDouble, Eye } from 'lucide-react';
import room1 from '@/assets/room1.webp';
import room2 from '@/assets/small.webp';
import room3 from '@/assets/large.webp';
import { Button } from '@/components/ui/button';
import BookingModal from '@/components/BookingModal'; // New component

const rooms = [
  {
    id: 1,
    name: 'Cozy Haven Room',
    price: '₹1000 / night',
    image: room1,
    amenities: ['Free Wi-Fi', 'King Bed', 'Breakfast Included'],
  },
  {
    id: 2,
    name: 'Spacious Serenity Suite',
    price: '₹1500 / night',
    image: room2,
    amenities: ['Free Wi-Fi', 'Lake View', 'Breakfast Included'],
  },
  {
    id: 3,
    name: 'Luxury Suite',
    price: '₹4,500 / night',
    image: room3,
    amenities: ['Free Wi-Fi', 'Living Area', 'Breakfast Included'],
  },
];

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(null);

  return (
    <section id="rooms" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Luxury Rooms & Suites
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the comfort of our premium rooms, designed to give you breathtaking views and unmatched hospitality.
          </p>
        </motion.div>

        {/* Room Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-luxury-gold text-white px-3 py-1 rounded-full shadow-md text-sm font-medium">
                  {room.price}
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{room.name}</h3>
                <ul className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  {room.amenities.map((amenity, i) => (
                    <li key={i} className="flex items-center gap-1">
                      {amenity.includes('Wi-Fi') && <Wifi size={16} />}
                      {amenity.includes('Bed') && <BedDouble size={16} />}
                      {amenity.includes('Breakfast') && <Coffee size={16} />}
                      {amenity.includes('View') && <Eye size={16} />}
                      {amenity}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full bg-luxury-gold text-foreground hover:bg-luxury-gold-light font-semibold rounded-full py-3"
                  onClick={() => setSelectedRoom(room)}
                >
                  Book Now
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      {selectedRoom && (
        <BookingModal
          room={selectedRoom}
          onClose={() => setSelectedRoom(null)}
        />
      )}
    </section>
  );
};

export default Rooms;
