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
      className="card w-4/5 md:w-md shadow-2xl relative overflow-hidden bg-[#d6ada4]"
    >
      {/* Card Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent"></div>
        {/* Multiple circles for curved line effect */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full"></div>
        <div className="absolute -bottom-5 -left-5 w-20 h-20 bg-white/15 rounded-full"></div>
        <div className="absolute top-1/4 -left-8 w-24 h-24 bg-white/12 rounded-full"></div>
        <div className="absolute -top-6 left-1/3 w-16 h-16 bg-white/25 rounded-full"></div>
        <div className="absolute bottom-1/4 -right-6 w-28 h-28 bg-white/18 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 bg-white/22 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/2 w-16 h-16 bg-white/10 rounded-full"></div>
        <div className="absolute top-3/4 left-1/4 w-14 h-14 bg-white/28 rounded-full"></div>
        <div className="absolute -bottom-8 right-1/3 w-20 h-20 bg-white/16 rounded-full"></div>
        <div className="absolute top-1/6 right-1/6 w-10 h-10 bg-white/30 rounded-full"></div>
        <div className="absolute bottom-1/6 left-1/6 w-24 h-24 bg-white/14 rounded-full"></div>
        <div className="absolute top-2/3 -right-4 w-20 h-20 bg-white/13 rounded-full"></div>
        {/* Additional circles for more density */}
        <div className="absolute top-1/3 left-1/6 w-8 h-8 bg-white/35 rounded-full"></div>
        <div className="absolute bottom-1/2 right-1/3 w-6 h-6 bg-white/40 rounded-full"></div>
        <div className="absolute top-1/5 right-2/3 w-12 h-12 bg-white/20 rounded-full"></div>
        <div className="absolute bottom-1/5 left-2/3 w-10 h-10 bg-white/25 rounded-full"></div>
        <div className="absolute top-2/5 -left-6 w-16 h-16 bg-white/15 rounded-full"></div>
        <div className="absolute bottom-2/5 -right-8 w-16 h-16 bg-white/18 rounded-full"></div>
      </div>

      <div className="card-body p-6 h-full flex flex-col justify-between relative z-10">
        {/* Top Section - Bank Logo */}
        <div className="flex justify-end">
          <div className="h-12 rounded-lg flex items-center justify-center p-2">
            <img 
              src={bankLogo} 
              alt="Bank Logo" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Middle Section - Account Details */}
        <div className="flex flex-col text-amber-900">

          <div className="text-xl font-mono font-bold tracking-wider mb-3">
            {accountNumber}
          </div>
          <div className="text-lg font-semibold">
            {accountName}
          </div>
        </div>

        {/* Bottom Section - Copy Button */}
        <div className="flex justify-end">
          <button
            onClick={copyToClipboard}
            className={`btn btn-md rounded-md text-md font-bold ${copied ? 'btn-success' : 'bg-white hover:bg-white/80 text-amber-900'} transition-all duration-300`}
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

    </motion.div>
  );
}
