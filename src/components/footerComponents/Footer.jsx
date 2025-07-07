// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full bg-[#d6ada4]"
    >
      {/* Gradient from white to pink */}
      <div className="w-full h-24 bg-gradient-to-b from-white to-[#d6ada4]"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-16"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl text-red-950 leading-relaxed mb-6">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir pada pernikahan kami.
          </p>
          
          <div className="text-3xl font-semibold tracking-wide">
            Alfi & Imel
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}