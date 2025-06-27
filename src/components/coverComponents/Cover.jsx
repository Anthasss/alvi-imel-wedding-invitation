// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Cover() {
  const weddingTitle = "The Wedding of Alvi & Imel";
  const weddingDate = "2025-07-24"; // Format: YYYY-MM-DD

  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const calculateCountdown = () => {
      const today = new Date();
      const weddingDay = new Date(weddingDate);
      const timeDiff = weddingDay - today;
      setDaysLeft(Math.ceil(timeDiff / (1000 * 60 * 60 * 24)));
    };

    calculateCountdown();
  }, [weddingDate]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative flex flex-col bg-gray-100 bg-[url('/cover.jpeg')] bg-cover bg-center h-screen"
    >
      {/* Opaque bottom section */}
      <div className="absolute bottom-0 w-full h-1/3 bg-white"></div>

      {/* Gradient overlay above the opaque section */}
      <div className="absolute bottom-1/3 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>

      {/* Text container */}
      <div className="absolute bottom-0 w-full text-center p-6">
        <h1
          className="text-2xl font-bold mb-2"
          style={{ fontFamily: "Cormorant Garamond, serif" }}
        >
          {weddingTitle}
        </h1>
        <p className="text-lg mb-4">{weddingDate}</p>
        <p className="text-lg text-gray-600">Countdown: {daysLeft} days left</p>
      </div>
    </motion.div>
  );
}
