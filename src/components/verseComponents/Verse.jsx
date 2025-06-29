// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import InfiniteImageCarousel from "./InfiniteImageCarousel";

export default function Verse() {
  const carouselAImages = [
    "/carouselA/ca1.jpeg",
    "/carouselA/ca2.jpeg",
    "/carouselA/ca3.jpeg",
    "/carouselA/ca4.jpeg",
    "/carouselA/ca5.jpeg"
  ];

  const carouselBImages = [
    "/carouselB/cb1.jpeg",
    "/carouselB/cb2.jpeg",
    "/carouselB/cb3.jpeg",
    "/carouselB/cb4.jpeg",
    "/carouselB/cb5.jpeg"
  ];

  return(
    <motion.div className="text-center flex flex-col items-center gap-y-8 w-full py-16 bg-[#d6ada4]">
        {/* image carousel a */}
        <InfiniteImageCarousel images={carouselAImages} direction="l" />

        {/* Bible Verse */}
        <div className="my-8 text-shadow-2xs text-red-950">
          <p className="text-3xl mb-4 font-semibold">Kejadian 2: 18</p>
          <p className="text-2xl font-semibold">
          "Dan Tuhan Allah berfirman: Tidak baik, kalau manusia itu seorang diri saja. Aku akan menjadikan penolong
          baginya, yang sepadan dengan dia."
          </p>
        </div>

        {/* image carousel b */}
        <InfiniteImageCarousel images={carouselBImages} direction="r" />
      </motion.div>
  )
}