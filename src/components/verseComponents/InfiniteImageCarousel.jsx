import Marquee from "react-fast-marquee";

export default function InfiniteImageCarousel({ images, direction = "l" }) {
  const marqueeDirection = direction === "l" ? "left" : "right";

  return (
    <div className="h-48 w-full overflow-hidden">
      <Marquee
        direction={marqueeDirection}
        speed={50}
        gradient={false}
        pauseOnHover={false}
        className="h-full"
      >
        {images.map((image, index) => (
          <div key={index} className="h-48 w-48 flex-shrink-0 mx-2">
            <img
              src={image.src || image}
              alt={image.alt || `Carousel image ${index + 1}`}
              className="h-full w-full object-cover rounded-lg"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}
