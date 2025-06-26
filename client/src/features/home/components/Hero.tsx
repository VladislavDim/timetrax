import SearchBar from "./SearchBar";

export default function Hero() {
    return (
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-6 py-16 bg-transparent">
            <div className="w-full max-w-7xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-tight text-left mb-8 px-2 sm:px-4">
                    <div>All services</div>
                    <div className="text-gray-600">One place</div>
                    <div className="text-orange-500">Your time, your rules...</div>
                </h1>
                <div className="px-2 sm:px-4">
                    <SearchBar size="lg" />
                </div>
            </div>
        </section>
    );
}
