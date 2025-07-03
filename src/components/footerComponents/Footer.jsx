export default function Footer() {
  return (
    <div className="w-full bg-[#d6ada4]">
      {/* Gradient from white to pink */}
      <div className="w-full h-24 bg-gradient-to-b from-white to-[#d6ada4]"></div>
      
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl text-red-950 leading-relaxed mb-6">
            Merupakan suatu kebahagiaan dan kehormatan bagi kami, apabila Bapak/Ibu/Saudara/i, berkenan hadir pada pernikahan kami.
          </p>
          
          <div className="text-3xl font-semibold text-amber-800 tracking-wide">
            Alfi & Imel
          </div>
        </div>
      </div>
    </div>
  );
}