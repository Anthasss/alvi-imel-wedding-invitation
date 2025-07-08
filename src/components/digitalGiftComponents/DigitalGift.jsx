// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import ATMCard from './ATMCard.jsx';

export default function DigitalGift() {
  const accountNumber = "1234567890";
  const accountName = "Alvi & Imel";
  const bankLogo = "/logoBca.png";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center p-6 min-h-screen"
    >
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Hadiah Digital</h1>
        <p className="text-2xl font-semibold text-gray-600 max-w-2xl">
          Kehadiran Anda di pernikahan kami adalah hadiah terbesar dari semuanya. Namun, jika Anda ingin memberikan hadiah, kami akan sangat berterima kasih atas kontribusi Anda.
        </p>
      </motion.div>

      {/* ATM Card */}
      <ATMCard 
        accountNumber={accountNumber}
        accountName={accountName}
        bankLogo={bankLogo}
      />

      {/* Additional Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: true }}
        className="text-center mt-8 max-w-md"
      >
      </motion.div>
    </motion.div>
  );
}
