import { useEffect, useRef } from "react";

export default function InfiniteImageCarousel({ images, direction = "l" }) {
  const carouselRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = direction === "l" ? -1 : 1;

    const scroll = () => {
      if (carousel) {
        carousel.scrollLeft += scrollAmount;

        // Reset scroll position for seamless scrolling
        if (direction === "l" && carousel.scrollLeft <= 0) {
          carousel.scrollLeft = carousel.scrollWidth - carousel.clientWidth;
        } else if (
          direction === "r" &&
          carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth
        ) {
          carousel.scrollLeft = 0;
        }
      }
    };

    const interval = setInterval(scroll, 20); // Adjust speed for smoother scrolling
    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div
      ref={carouselRef}
      className="relative flex overflow-hidden whitespace-nowrap w-full gap-6"
      style={{ scrollBehavior: "auto" }}
    >
      {/* Render images twice for seamless scrolling */}
      {[...images, ...images].map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`carousel-${index}`}
          className="h-48 w-48 object-cover inline-block"
        />
      ))}
    </div>
  );
}