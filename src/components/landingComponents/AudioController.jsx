// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AudioController() {
  const [audio, setAudio] = useState(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  // Initialize audio
  useEffect(() => {
    const audioInstance = new Audio('/bgm.mp3');
    audioInstance.loop = true;
    audioInstance.volume = 0.5;
    setAudio(audioInstance);
    
    // Cleanup function
    return () => {
      if (audioInstance) {
        audioInstance.pause();
        audioInstance.currentTime = 0;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audio) {
      if (isAudioPlaying) {
        audio.pause();
        setIsAudioPlaying(false);
      } else {
        audio.play().catch(error => {
          console.log('Audio play failed:', error);
        });
        setIsAudioPlaying(true);
      }
    }
  };

  // Expose audio control to global scope for other components
  useEffect(() => {
    window.playBackgroundMusic = () => {
      if (audio) {
        audio.play().catch(error => {
          console.log('Audio play failed:', error);
        });
        setIsAudioPlaying(true);
      }
    };
  }, [audio]);

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      onClick={toggleAudio}
      className="fixed bottom-6 right-6 z-[60] w-14 h-14 bg-[#d6ada4] hover:bg-[#c19a91] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center"
    >
      {isAudioPlaying ? (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
        </svg>
      ) : (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>
        </svg>
      )}
    </motion.button>
  );
}
