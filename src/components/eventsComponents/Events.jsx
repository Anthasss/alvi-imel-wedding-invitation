export default function Events() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
      <div className="text-center p-6 flex-1">
        <h1 className="text-3xl font-bold mb-4">Events</h1>
        <p className="text-lg">Mari datang pada perayaan pernikahan kami.</p>
      </div>
      {/* Add your event details here */}
      <div className="flex flex-col items-center justify-between gap-y-4 flex-7">
        <div className="p-4 rounded-lg shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-semibold">Pemberkatan</h2>
          <div className="text-xl">
            <p>24 Juli 2025</p>
            <p>10:00 WITA</p>
            <p>Gedung GKPKR Kupang</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}
