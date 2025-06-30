import { useState } from "react";
import { Building, Scissors, MapPin, Search as SearchIcon } from "lucide-react";

interface SearchBarProps {
  size?: "sm" | "md" | "lg" | "navCompact";
  values?: string[];
  onChange?: (index: number, value: string) => void;
}

export default function SearchBar({ size = "md", values, onChange }: SearchBarProps) {
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);

  const sizeStyles = {
    sm: "py-2 text-sm",
    md: "py-3 text-base",
    navCompact: "py-2 text-[13px] max-w-2xl",
    lg: "py-4 text-lg",
  };

  const iconSize = {
    sm: 16,
    md: 18,
    navCompact: 16,
    lg: 20,
  };

  const inputBaseClasses =
    "w-full min-w-0 pl-10 pr-4 focus:outline-none transition-colors duration-200 bg-white placeholder:text-gray-500";

  const isFocused = (index: number) =>
    focusedIndex === index ? "bg-orange-50 opacity-100" : "opacity-90";

  const inputs = [
    {
      placeholder: "Business name",
      icon: (focused: boolean, size: number) => (
        <Building
          size={size}
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 ${
            focused ? "text-orange-500 scale-110" : "text-orange-400 opacity-80 scale-100"
          }`}
        />
      ),
    },
    {
      placeholder: "Service type (e.g. Haircut)",
      icon: (focused: boolean, size: number) => (
        <Scissors
          size={size}
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 ${
            focused ? "text-orange-500 scale-110" : "text-orange-400 opacity-80 scale-100"
          }`}
        />
      ),
    },
    {
      placeholder: "City",
      icon: (focused: boolean, size: number) => (
        <MapPin
          size={size}
          className={`absolute left-3 top-1/2 -translate-y-1/2 transition-all duration-200 ${
            focused ? "text-orange-500 scale-110" : "text-orange-400 opacity-80 scale-100"
          }`}
        />
      ),
    },
  ];

  return (
    <div
      className={`w-full mx-auto flex items-center justify-center px-4 md:px-6 lg:px-0 ${
        size === "sm" ? "max-w-md" : size === "lg" ? "max-w-7xl" : size === "navCompact" ? "max-w-2xl" : ""
      }`}
    >
      <div
        className="flex flex-nowrap items-stretch justify-between w-full gap-px rounded-full overflow-hidden shadow-md border border-orange-200 bg-white"
      >
        {inputs.map(({ placeholder, icon }, idx) => (
          <div
            key={idx}
            className={`relative flex-1 min-w-0 ${idx !== 0 ? "border-l border-orange-100" : ""}`}
          >
            {icon(focusedIndex === idx, iconSize[size])}
            <input
              type="text"
              placeholder={placeholder}
              value={values?.[idx] || ""}
              onChange={(e) => onChange?.(idx, e.target.value)}
              onFocus={() => setFocusedIndex(idx)}
              onBlur={() => setFocusedIndex(null)}
              className={`${inputBaseClasses} ${sizeStyles[size]} ${isFocused(idx)} text-sm sm:text-base`}
            />
          </div>
        ))}
        <button
          className={`flex items-center justify-center gap-2 px-5 sm:px-6 text-white font-semibold bg-orange-500 hover:bg-orange-600 transition whitespace-nowrap ${sizeStyles[size]}`}
        >
          <SearchIcon size={iconSize[size]} />
          <span className="hidden sm:inline">Search</span>
        </button>
      </div>
    </div>
  );
}