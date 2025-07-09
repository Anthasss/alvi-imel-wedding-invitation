// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function LandingCover() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [guestName, setGuestName] = useState('nama tamu');

  // Set initial body overflow to hidden on component mount and get guest name from URL
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Get guest name from URL query parameters
    const urlParams = new URLSearchParams(window.location.search);
    const nameFromUrl = urlParams.get('kepada') || urlParams.get('to');
    if (nameFromUrl) {
      setGuestName(decodeURIComponent(nameFromUrl));
    }
    
    // Cleanup function to restore scroll if component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleOpenInvitation = () => {
    setIsExiting(true);
    // Delay hiding the component to allow fade animation to complete
    setTimeout(() => {
      setIsVisible(false);
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
      // Scroll to top of the page
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 800); // Match the animation duration
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 md:px-20 lg:px-80">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: isExiting ? 0 : 1, scale: isExiting ? 0.95 : 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center justify-center h-screen w-full bg-gradient-to-br from-pink-50 to-pink-100 overflow-hidden"
      >
        {/* Decorative background elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-200/30 rounded-full blur-xl"></div>
        <div className="absolute top-1/4 right-16 w-24 h-24 bg-amber-200/40 rounded-full blur-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-pink-300/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-28 h-28 bg-amber-100/50 rounded-full blur-xl"></div>

        {/* Image container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative z-10 mb-8"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-3xl shadow-2xl overflow-hidden border-4 border-white/50">
            <img
              src="/gallery/g6.jpeg"
              alt="Wedding couple"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text and button container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative z-10 flex flex-col items-center justify-center text-center px-8"
        >
          {/* "The wedding of" */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-amber-800 mb-2 font-medium"
          >
            The Wedding of
          </motion.p>

          {/* Names */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-3xl sm:text-4xl font-bold text-red-950 mb-6"
          >
            Alfi & Imel
          </motion.h1>
          
          {/* Kepada */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-base sm:text-lg text-amber-700 mb-2"
          >
            kepada Bapak/Ibu/Saudara/Saudari
          </motion.p>
          
          {/* Nama tamu */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-lg sm:text-xl text-red-950 mb-8 font-semibold"
          >
            {guestName}
          </motion.p>
          
          {/* Open invitation button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOpenInvitation}
            className="bg-[#d6ada4] text-white px-8 py-3 rounded-md font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-white/30"
          >
            Buka Undangan
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
}
