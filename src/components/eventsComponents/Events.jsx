import { Calendar, Clock, MapPin } from "lucide-react";

export default function Events() {
  return (
    <div className="flex flex-col gap-8 items-center justify-around w-full bg-[#d6ada4] py-16 min-h-screen">
      {/* Pemberkatan */}
      <div className="p-8 rounded-xl shadow-xl max-w-lg mx-auto border border-amber-200">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-semibold text-amber-800 mb-2">Pemberkataan</h1>

          {/* Day */}
          <p className="text-red-950 font-2xl mb-1">Kamis</p>

          {/* Date */}
          <div className="text-6xl font-bold text-red-900 mb-1">24</div>

          {/* Month and Year */}
          <p className="text-red-950 font-2xl">Juli 2025</p>
        </div>

        {/* Time */}
        <div className="flex items-center justify-center text-red-800 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">10.00 WITA</span>
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="flex items-center justify-center text-red-800 mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Gedung GKPKR Kupang</span>
          </div>
          <p className="text-xs text-red-700">Jln. Pemuda No. Kupang</p>
        </div>
      </div>

      {/* Resepsi */}
      <div className="p-8 rounded-xl shadow-xl max-w-lg mx-auto border border-amber-200">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-4xl font-semibold text-amber-800 mb-2">Pemberkataan</h1>

          {/* Day */}
          <p className="text-red-950 font-2xl mb-1">Kamis</p>

          {/* Date */}
          <div className="text-6xl font-bold text-red-900 mb-1">24</div>

          {/* Month and Year */}
          <p className="text-red-950 font-2xl">Juli 2025</p>
        </div>

        {/* Time */}
        <div className="flex items-center justify-center text-red-800 mb-4">
          <Clock className="w-4 h-4 mr-2" />
          <span className="text-sm font-medium">10.00 WITA</span>
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="flex items-center justify-center text-red-800 mb-2">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm font-semibold">Gedung GKPKR Kupang</span>
          </div>
          <p className="text-xs text-red-700">Jln. Pemuda No. Kupang</p>
        </div>
      </div>
    </div>
  );
}
