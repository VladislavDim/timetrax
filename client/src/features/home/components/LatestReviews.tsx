// components/LatestReviews.tsx

import { useRef, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Elena Ivanova",
    avatar: "/avatars/elena.jpg",
    comment: "Amazing service, will come again!",
    rating: 5,
  },
  {
    name: "Martin Petrov",
    avatar: "/avatars/martin.jpg",
    comment: "Quick and professional. Highly recommended.",
    rating: 4.5,
  },
  {
    name: "Sara Georgieva",
    avatar: "/avatars/sara.jpg",
    comment: "Very friendly and clean environment.",
    rating: 4.8,
  },
   {
    name: "Martin Petrov",
    avatar: "/avatars/martin.jpg",
    comment: "Quick and professional. Highly recommended.",
    rating: 4.5,
  },
  {
    name: "Sara Georgieva",
    avatar: "/avatars/sara.jpg",
    comment: "Very friendly and clean environment.",
    rating: 4.8,
  },
];

export default function LatestReviews() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const checkScroll = () => {
    const { current } = scrollRef;
    if (!current) return;
    setCanScrollLeft(current.scrollLeft > 0);
    setCanScrollRight(current.scrollLeft + current.clientWidth < current.scrollWidth);
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (!ref) return;
    ref.addEventListener("scroll", checkScroll);
    return () => ref.removeEventListener("scroll", checkScroll);
    // eslint-disable-next-line
  }, []);

  const scrollBy = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.offsetWidth * 0.6;
      scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-6 bg-white/10 backdrop-blur rounded-xl max-w-7xl mx-auto mt-20 relative">
      <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-gray-900">
        Just reviewed
      </h2>
      <div className="relative">
        {canScrollLeft && (
          <button
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 shadow p-2 rounded-full"
            onClick={() => scrollBy("left")}
          >
            <ChevronLeft size={20} />
          </button>
        )}
        {canScrollRight && (
          <button
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-700 shadow p-2 rounded-full"
            onClick={() => scrollBy("right")}
          >
            <ChevronRight size={20} />
          </button>
        )}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth px-8"
          style={{ scrollbarWidth: "none" } as any}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="min-w-[280px] bg-white/80 rounded-lg p-5 shadow-md flex flex-col gap-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="font-medium text-gray-900">{review.name}</div>
              </div>
              <p className="italic text-gray-700 line-clamp-3">“{review.comment}”</p>
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: Math.floor(review.rating) }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                ))}
                {review.rating % 1 > 0 && (
                  <Star size={18} className="opacity-50" />
                )}
                <span className="text-gray-600 ml-2 text-sm">{review.rating}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}