import { useState } from "react";
import { Building, Scissors, MapPin, Search as SearchIcon } from "lucide-react";

interface SearchBarProps {
  size?: "sm" | "md" | "lg";
}

export default function SearchBar({ size = "md" }: SearchBarProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const sizeStyles = {
    sm: "py-2 text-sm",
    md: "py-3 text-base",
    lg: "py-4 text-lg",
  };

  const inputBaseClasses =
    "w-full pl-10 pr-4 focus:outline-none transition-colors duration-200 bg-white";

  const isFocused = (index: number) =>
    focusedIndex === index ? "bg-orange-50 opacity-100" : "opacity-90";

  const inputs = [
    {
      placeholder: "Business name",
      icon: (isFocused: boolean) => (
        <Building
          size={isFocused ? 20 : 16}
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
            isFocused ? "text-orange-500 scale-110" : "text-orange-400 scale-100"
          }`}
        />
      ),
    },
    {
      placeholder: "Service type (e.g. Haircut)",
      icon: (isFocused: boolean) => (
        <Scissors
          size={isFocused ? 20 : 16}
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
            isFocused ? "text-orange-500 scale-110" : "text-orange-400 scale-100"
          }`}
        />
      ),
    },
    {
      placeholder: "City",
      icon: (isFocused: boolean) => (
        <MapPin
          size={isFocused ? 20 : 16}
          className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-200 ${
            isFocused ? "text-orange-500 scale-110" : "text-orange-400 scale-100"
          }`}
        />
      ),
    },
  ];

  return (
    <div
      className={`w-full max-w-6xl mx-auto flex items-center justify-center ${
        size === "sm" ? "max-w-md" : size === "lg" ? "max-w-7xl" : ""
      }`}
    >
      <div className="flex flex-1 rounded-full overflow-hidden shadow-md border border-orange-200 bg-white">
        {inputs.map(({ placeholder, icon }, idx) => (
          <div
            key={idx}
            className={`relative flex-1 ${
              idx !== 0 ? "border-l border-orange-100" : ""
            }`}
          >
            {icon(focusedIndex === idx)}
            <input
              type="text"
              placeholder={placeholder}
              onFocus={() => setFocusedIndex(idx)}
              onBlur={() => setFocusedIndex(null)}
              className={`${inputBaseClasses} ${sizeStyles[size]} ${isFocused(idx)}`}
            />
          </div>
        ))}
        <button className="flex items-center gap-2 px-6 text-white font-semibold bg-orange-500 hover:bg-orange-600 transition ${sizeStyles[size]}">
          <SearchIcon size={16} />
          Search
        </button>
      </div>
    </div>
  );
}