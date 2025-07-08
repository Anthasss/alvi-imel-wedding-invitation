// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ATMCard from './ATMCard.jsx';

export default function DigitalGift() {
  const bankLogo = "/logoBca.png";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center min-h-screen"
    >
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12 sm:mx-6"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hadiah Digital</h1>
        <p className="text-2xl font-semibold text-gray-600 max-w-2xl">
          Kehadiran Anda di pernikahan kami adalah hadiah terbesar dari semuanya. Namun, jika Anda ingin memberikan hadiah, kami akan sangat berterima kasih atas kontribusi Anda.
        </p>
      </motion.div>

      {/* ATM Card */}
      <div className='flex flex-col items-center gap-8 w-full'>
        <ATMCard 
          accountNumber="3141111319"
          accountName="Alfi Anderson Padja"
          bankLogo={bankLogo}
        />

        <ATMCard 
          accountNumber="3141128815"
          accountName="Imanuella Friedamaria Jacob"
          bankLogo={bankLogo}
        />
      </div>

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-8 max-w-md mx-4 sm:mx-6"
      >
      </motion.div>
    </motion.div>
  );
}
