// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

export default function EventCard({ 
  title, 
  day, 
  date, 
  month, 
  year, 
  time, 
  locationName, 
  locationAddress, 
  delay = 0 
}) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      className="p-8 rounded-xl shadow-xl w-4/5 max-w-lg mx-auto border bg-pink-50 border-amber-200 min-h-[400px] sm:w-full"
    >
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-4xl md:text-6xl font-semibold text-amber-800 mb-2">{title}</h1>

        {/* Day */}
        <p className="text-red-950 text-2xl mb-1">{day}</p>

        {/* Date */}
        <div className="text-8xl font-bold text-red-900 mb-1">{date}</div>

        {/* Month and Year */}
        <p className="text-red-950 text-2xl">{month} {year}</p>
      </div>

      {/* Time */}
      <div className="flex items-center justify-center text-red-800 mb-4">
        <Clock className="w-6 h-6 mr-2" />
        <span className="text-xl font-medium">{time}</span>
      </div>

      {/* Location */}
      <div className="text-center">
        <div className="flex items-center justify-center text-red-800 mb-2">
          <MapPin className="w-6 h-6 mr-2" />
          <span className="text-xl font-semibold">{locationName}</span>
        </div>
        <p className="text-lg text-red-700">{locationAddress}</p>
      </div>
    </motion.div>
  );
}
