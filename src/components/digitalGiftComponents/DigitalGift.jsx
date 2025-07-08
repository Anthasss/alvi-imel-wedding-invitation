// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

export default function DigitalGift() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center bg-white p-6 min-h-screen"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Digital Gift</h1>
        <p className="text-xl text-gray-600 max-w-2xl">
          This section will contain digital gift options for the wedding couple. 
          Content to be implemented later.
        </p>
      </motion.div>
    </motion.div>
  );
}
