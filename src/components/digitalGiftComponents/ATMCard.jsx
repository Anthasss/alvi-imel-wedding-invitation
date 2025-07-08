// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function ATMCard({ accountNumber, accountName, bankLogo }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      viewport={{ once: true }}
      className="card w-96 h-60 bg-gradient-to-r from-blue-600 to-blue-800 shadow-2xl relative overflow-hidden"
    >
      {/* Card Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full"></div>
        <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/10 rounded-full"></div>
      </div>

      <div className="card-body p-6 h-full flex flex-col justify-between relative z-10">
        {/* Top Section - Bank Logo */}
        <div className="flex justify-end">
          <div className="w-16 h-12 bg-white rounded-lg flex items-center justify-center p-2">
            <img 
              src={bankLogo} 
              alt="Bank Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Middle Section - Account Details */}
        <div className="flex flex-col text-white">
          <div className="text-sm opacity-80 mb-1">Account Number</div>
          <div className="text-xl font-mono font-bold tracking-wider mb-3">
            {accountNumber}
          </div>
          <div className="text-sm opacity-80 mb-1">Account Name</div>
          <div className="text-lg font-semibold">
            {accountName}
          </div>
        </div>

        {/* Bottom Section - Copy Button */}
        <div className="flex justify-end">
          <button
            onClick={copyToClipboard}
            className={`btn btn-sm ${copied ? 'btn-success' : 'btn-outline btn-ghost'} text-white border-white hover:bg-white hover:text-blue-600 transition-all duration-300`}
          >
            {copied ? (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy
              </>
            )}
          </button>
        </div>
      </div>

      {/* Card Chip Effect */}
      <div className="absolute top-16 left-6 w-12 h-10 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md shadow-lg"></div>
    </motion.div>
  );
}
