import { Calendar, Clock, MapPin } from "lucide-react";

export default function Events() {
  return (
    <div className="flex flex-col gap-8 items-center justify-around w-full bg-[#d6ada4] py-16 min-h-screen shadow-[inset_0_10px_30px_rgba(0,0,0,0.3),inset_0_-10px_30px_rgba(0,0,0,0.3)] border-t border-b border-amber-800/20">
      {/* Pemberkatan */}
      <div className="p-8 rounded-xl shadow-xl w-full max-w-lg mx-auto border border-amber-200 min-h-[400px]">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-semibold text-amber-800 mb-2">Pemberkataan</h1>

          {/* Day */}
          <p className="text-red-950 text-2xl mb-1">Kamis</p>

          {/* Date */}
          <div className="text-8xl font-bold text-red-900 mb-1">24</div>

          {/* Month and Year */}
          <p className="text-red-950 text-2xl">Juli 2025</p>
        </div>

        {/* Time */}
        <div className="flex items-center justify-center text-red-800 mb-4">
          <Clock className="w-6 h-6 mr-2" />
          <span className="text-xl font-medium">13.00 WITA</span>
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="flex items-center justify-center text-red-800 mb-2">
            <MapPin className="w-6 h-6 mr-2" />
            <span className="text-xl font-semibold">Gedung GKPKR Kupang</span>
          </div>
          <p className="text-lg text-red-700">Jl. Pemuda No. 80A, Kuanino, Kupang</p>
        </div>
      </div>

      {/* Resepsi */}
      <div className="p-8 rounded-xl shadow-xl w-full max-w-lg mx-auto border border-amber-200 min-h-[400px]">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-6xl font-semibold text-amber-800 mb-2">Resepsi</h1>

          {/* Day */}
          <p className="text-red-950 text-2xl mb-1">Kamis</p>

          {/* Date */}
          <div className="text-8xl font-bold text-red-900 mb-1">24</div>

          {/* Month and Year */}
          <p className="text-red-950 text-2xl">Juli 2025</p>
        </div>

        {/* Time */}
        <div className="flex items-center justify-center text-red-800 mb-4">
          <Clock className="w-6 h-6 mr-2" />
          <span className="text-xl font-medium">19.00 WITA</span>
        </div>

        {/* Location */}
        <div className="text-center">
          <div className="flex items-center justify-center text-red-800 mb-2">
            <MapPin className="w-6 h-6 mr-2" />
            <span className="text-xl font-semibold">Phoenix Restaurant</span>
          </div>
          <p className="text-lg text-red-700">Jl. Terusan Timor Raya, Kelapa Lima, Kupang</p>
        </div>
      </div>
    </div>
  );
}
