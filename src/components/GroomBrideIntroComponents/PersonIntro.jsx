export default function PersonIntro({ imagePath, name, desc, parents }) {
  return (
    <div className="flex flex-col items-center text-center h-screen">
      {/* Image */}
      <div className="h-[70vh] shadow-2xl mb-4">
        <img
          src={imagePath}
          alt={name}
          className=" h-full object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-center items-center h-full">
        {/* Name */}
        <h2 className="text-3xl font-bold mb-2">{name}</h2>

        {/* Description */}
        <p className="text-sm sm:text-xl">{desc}</p>
        <p className="text-sm sm:text-xl">{parents}</p>
      </div>
    </div>
  );
}
