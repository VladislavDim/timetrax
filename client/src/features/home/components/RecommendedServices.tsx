import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star, StarOff } from "lucide-react";

const services = [
    {
        title: "Gentleman's Cut",
        rating: 4.9,
        reviews: 120,
        location: "Barber Bros – Sofia Center",
        image: "https://cdn.oink.bg/gallery/46573/8991f03d-2eaa-467b-b4e4-644e362b76f3_large.webp",
    },
    {
        title: "Luxury Spa Facial",
        rating: 5.0,
        reviews: 98,
        location: "Glow Studio – Plovdiv",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/390193808.webp?k=bacba0887edf3ac04735c0f0cbd54fdb7cf4d87440d1c639514d04c21b2a6b8d&o=",
    },
    {
        title: "Relax Massage",
        rating: 4.8,
        reviews: 87,
        location: "Zen Wellness – Varna",
        image: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/718971/biz_photo/89d590a2e4bf4efbad43626ef0d6c1-d-i-a-massage-studio-biz-photo-5457d0a0f2c04fb8b3453c85dc145b-booksy.jpeg?size=640x427",
    },
    {
        title: "Relax Massage",
        rating: 4.8,
        reviews: 87,
        location: "Zen Wellness – Varna",
        image: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/718971/biz_photo/89d590a2e4bf4efbad43626ef0d6c1-d-i-a-massage-studio-biz-photo-5457d0a0f2c04fb8b3453c85dc145b-booksy.jpeg?size=640x427",
    },
    {
        title: "Relax Massage",
        rating: 4.8,
        reviews: 87,
        location: "Zen Wellness – Varna",
        image: "https://d2zdpiztbgorvt.cloudfront.net/region1/us/718971/biz_photo/89d590a2e4bf4efbad43626ef0d6c1-d-i-a-massage-studio-biz-photo-5457d0a0f2c04fb8b3453c85dc145b-booksy.jpeg?size=640x427",
    },
    {
        title: "Gentleman's Cut",
        rating: 4.9,
        reviews: 120,
        location: "Barber Bros – Sofia Center",
        image: "https://cdn.oink.bg/gallery/46573/8991f03d-2eaa-467b-b4e4-644e362b76f3_large.webp",
    },
    {
        title: "Luxury Spa Facial",
        rating: 5.0,
        reviews: 98,
        location: "Glow Studio – Plovdiv",
        image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/390193808.webp?k=bacba0887edf3ac04735c0f0cbd54fdb7cf4d87440d1c639514d04c21b2a6b8d&o=",
    },
];

export default function RecommendedServices() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollButtons = () => {
        const el = scrollRef.current;
        if (!el) return;
        setCanScrollLeft(el.scrollLeft > 0);
        setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    useEffect(() => {
        updateScrollButtons();
        const el = scrollRef.current;
        if (!el) return;
        el.addEventListener("scroll", updateScrollButtons);
        return () => el.removeEventListener("scroll", updateScrollButtons);
    }, []);

    const scroll = (dir: "left" | "right") => {
        const el = scrollRef.current;
        if (!el) return;
        const cardWidth = 300; // Assuming card width including margin
        const amount = cardWidth * 1.5;
        el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    };

    return (
        <section className="w-full py-12 px-4 sm:px-6 lg:px-8 relative bg-transparent">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                    Recommended for you
                </h2>

                <div className="relative">
                    {canScrollLeft && (
                        <button
                            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full p-2 shadow"
                            onClick={() => scroll("left")}
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                    )}

                    {canScrollRight && (
                        <button
                            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/30 hover:bg-white/50 backdrop-blur-md rounded-full p-2 shadow"
                            onClick={() => scroll("right")}
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    )}

                    <div
                        ref={scrollRef}
                        className="flex overflow-x-hidden gap-6 scrollbar-hide scroll-smooth px-6"
                    >
                        {services.map((service, idx) => (
                            <div
                                key={idx}
                                className="group min-w-[250px] sm:min-w-[300px] bg-white/80 backdrop-blur-md rounded-xl shadow-md overflow-hidden border border-orange-200"
                            >
                                <div
                                    className="h-40 sm:h-48 w-full bg-cover bg-center transform transition-transform duration-300 ease-in-out group-hover:scale-105"
                                    style={{ backgroundImage: `url(${service.image})` }}
                                />
                                <div className="p-4">
                                    <h3 className="font-semibold text-lg text-gray-900 transition-colors duration-200 group-hover:font-bold">{service.title}</h3>
                                    <p className="text-sm text-gray-700">{service.location}</p>
                                    <div className="flex items-center gap-1 mt-2 text-sm text-gray-900">
                                        <div className="group relative w-5 h-5">
                                            <Star
                                                size={20}
                                                strokeWidth={2}
                                                className="absolute top-0 left-0 text-yellow-400 group-hover:opacity-0 transition-opacity duration-200"
                                            />
                                            <Star
                                                size={20}
                                                strokeWidth={0}
                                                fill="currentColor"
                                                className="absolute top-0 left-0 text-yellow-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                                            />
                                        </div>
                                        {service.rating}
                                        <span className="text-gray-500">({service.reviews} reviews)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}