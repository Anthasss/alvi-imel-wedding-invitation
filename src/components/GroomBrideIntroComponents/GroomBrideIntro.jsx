// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PersonIntro from './PersonIntro';

export default function GroomBrideIntro() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="flex flex-col items-center justify-center bg-white p-6 gap-y-8"
    >
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col items-center text-center text-2xl"
      >
        <h1 className="">Welcome to Our Wedding</h1>
        <p className="">Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir ke acara pernikahan kami.</p>
      </motion.div>

      <div className="flex flex-col gap-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <PersonIntro
            imagePath="/groomBrideIntro/groom.jpeg"
            name="Alfi Anderson Padja"
            desc="Anak keempat Putra tunggal dari empat bersaudara<br/>pasangan Bapak Johanis Padja dan Ibu Marleni Padja-Gow"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <PersonIntro
            imagePath="/groomBrideIntro/bride.jpeg"
            name="Imanuella Friedamaria Jacob"
            desc="Anak pertama Putri pertama dari empat bersaudara <br/>pasangan Bapak Mozes Evendy Jacob dan Ibu Envie F. Jacob-Nunuhitu."
          />
        </motion.div>
      </div>  
    </motion.div>
  )
}