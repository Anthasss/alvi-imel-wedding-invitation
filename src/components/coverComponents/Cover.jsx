// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import Countdown from "./Countdown";

export default function Cover() {
  return (
    <div className="flex flex-col items-center justify-center w-full bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col bg-gray-100 bg-[url('/cover.jpeg')] bg-cover bg-center bg-no-repeat h-screen w-full"
      >
        {/* Opaque bottom section */}
        <div className="absolute bottom-0 w-full h-1/3 bg-white"></div>

        {/* Gradient overlay above the opaque section */}
        <div className="absolute bottom-1/3 w-full h-1/3 bg-gradient-to-t from-white to-transparent"></div>

        {/* Text container */}
        <div className="absolute bottom-0 w-full h-1/3 p-6 grid place-items-center text-center">
          <div>
            <p className="text-2xl">The Wedding of</p>
            <h1 className="text-5xl font-bold mb-2">Alfi & Imel</h1>
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center justify-center w-full bg-white">
        <motion.div className="text-center">
            <p className="text-2xl mb-4">Kamis 24 Juli 2025</p>

            {/* countdown */}
            <Countdown />
        </motion.div>
      </div>
    </div>
  );
}
