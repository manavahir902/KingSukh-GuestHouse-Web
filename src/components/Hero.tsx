import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-baranti-lake.webp';
import mountainsImage from '@/assets/mountains-parallax.webp';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const mountainsY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const scrollToNext = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <section
  id="home"
  ref={containerRef}
  className="relative h-screen overflow-hidden pt-24 sm:pt-28 md:pt-32"
>

      {/* Background Layers for Parallax */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-[120%]"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/40" />
      </motion.div>

      {/* Mountains Layer */}
      <motion.div
        style={{ y: mountainsY }}
        className="absolute inset-0 w-full h-[110%] opacity-70"
      >
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat mix-blend-multiply"
          style={{ backgroundImage: `url(${mountainsImage})` }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <motion.div
          style={{ y: textY }}
          className="text-center text-white px-4 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="fill-luxury-gold text-black" />
                ))}
              </div>
              <span className="bg-luxury-gold text-foregroun">Luxury Resort</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-tight">
              King Sukh
              <span className="block text-4xl md:text-5xl lg:text-6xl text-luxury-gold">
                Guest House
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-4 text-accent-warm">
              <MapPin size={20} />
              <span className="text-lg font-medium">Baranti, Purulia, West Bengal</span>
            </div>
            
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto">
              Experience luxury accommodation with breathtaking lake views and authentic Bengali hospitality 
              in the heart of nature's paradise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
          <Button 
  size="lg"
  onClick={() => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="bg-luxury-gold text-foreground hover:bg-luxury-gold-light font-semibold px-8 py-3 text-lg rounded-full shadow-luxury transition-all duration-300 hover:scale-105"
>
  Book Your Stay
</Button>

<Button 
  variant="outline"
  size="lg"
  onClick={() => {
    document.querySelector('#rooms')?.scrollIntoView({ behavior: 'smooth' });
  }}
  className="border-2 border-white text-white hover:bg-white hover:text-foreground font-semibold px-8 py-3 text-lg rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105"
>
  Explore Rooms
</Button>

          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-md mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-1">4.9</div>
              <div className="text-sm text-white/80">Guest Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-1">15+</div>
              <div className="text-sm text-white/80">Luxury Rooms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-luxury-gold mb-1">24/7</div>
              <div className="text-sm text-white/80">Service</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white transition-colors duration-300"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-luxury-gold rounded-full opacity-60"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, delay: 0 }}
      />
      <motion.div
        className="absolute top-1/3 right-20 w-3 h-3 bg-accent-warm rounded-full opacity-40"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-80"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 2 }}
      />
    </section>
  );
};

export default Hero;