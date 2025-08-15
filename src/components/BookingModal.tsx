import { motion } from 'framer-motion';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

const BookingModal = ({ room, onClose }) => {
  const [name, setName] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const phoneNumber = '919007062180';

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build message text
    const message = `Hello, I would like to book:\n
Room: ${room.name}
Price: ${room.price}
Name: ${name}
Check-in: ${checkIn}
Check-out: ${checkOut}
Guests: ${guests}
Please confirm availability.`;

    // Encode and redirect to WhatsApp
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full relative"
        initial={{ scale: 0.8, y: 50 }}
        animate={{ scale: 1, y: 0 }}
      >
        <button
          className="absolute top-3 right-3 text-gray-500 hover:text-black"
          onClick={onClose}
        >
          ✕
        </button>

        <h3 className="text-2xl font-bold mb-4">Book {room.name}</h3>
        <p className="mb-4 text-muted-foreground">{room.price}</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="date"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="date"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="number"
            placeholder="Number of Guests"
            min="1"
            value={guests}
            onChange={(e) => setGuests(Number(e.target.value))}

            className="w-full border p-2 rounded"
            required
          />
          <Button
            type="submit"
            className="w-full bg-luxury-gold hover:bg-luxury-gold-light font-semibold py-3 rounded-full"
          >
            Confirm Booking via WhatsApp
          </Button>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default BookingModal;
