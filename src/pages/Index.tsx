import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Rooms from '@/components/Rooms';
import Gallery from '@/components/Gallery';
import Attractions from '@/components/Attractions';
import Contactus from '@/components/ContactUx';
import Footer from '@/components/Footer';

const Index = () => {
  console.log('Index component rendering');
  return (
    <div className="min-h-screen">
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Rooms></Rooms>
      <Gallery></Gallery>
      <Attractions></Attractions>
      <Contactus></Contactus>
      <Footer></Footer>
      {/* Bottom Bar */}
      <div className="pt-4 text-center text-sm text-gray-300 mb-0 pb-0 bg-black">
        © {new Date().getFullYear()} Kingsukh Guest House. All rights reserved.
      </div>
    </div>
    
  );
};

export default Index;