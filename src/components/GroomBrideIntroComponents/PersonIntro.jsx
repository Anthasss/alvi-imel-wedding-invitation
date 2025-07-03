export default function PersonIntro({ imagePath, name, desc }) {
  return (
    <div className="flex flex-col items-center text-center h-screen">
      {/* Image */}
      <div className="h-[75vh] shadow-2xl">
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
        <p className="text-xl" dangerouslySetInnerHTML={{ __html: desc }}></p>
      </div>
    </div>
  );
}
