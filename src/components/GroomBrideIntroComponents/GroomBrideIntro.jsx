// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import PersonIntro from './PersonIntro';

export default function GroomBrideIntro() {
  return (
    <motion.div className="flex flex-col items-center justify-center bg-white p-6 gap-y-8">
      <div className="flex flex-col items-center text-center text-2xl">
        <h1>Welcome to Our Wedding</h1>
        <p>Tanpa mengurangi rasa hormat, kami mengundang anda untuk hadir ke acara pernikahan kami.</p>
      </div>

      <div className="flex flex-col gap-2">
        <PersonIntro
          imagePath="/groomBrideIntro/groom.jpeg"
          name="Alfi Anderson Padja"
          desc="Anak ke- ..."
        />
        <PersonIntro
          imagePath="/groomBrideIntro/bride.jpeg"
          name="Imanuela Frieda Mario Jacob"
          desc="Anak pertama dari bapak Mozes E. Jacob dan ibu Envie F. Jacob-Nunuhitu."
        />
      </div>  
    </motion.div>
  )
}