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
      className="flex flex-col items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50 p-6 min-h-screen"
    >
      {/* Section Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Digital Gift</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we would be grateful for your contribution.
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
        <p className="text-gray-600 text-sm">
          Click the copy button to copy the account number to your clipboard for easy transfer.
        </p>
      </motion.div>
    </motion.div>
  );
}
