import { createContext, useContext, useState } from "react";

type SearchContextType = {
  searchValues: string[];
  setSearchValue: (index: number, value: string) => void;
  showStickySearch: boolean;
  setShowStickySearch: (value: boolean) => void;
};

const SearchContext = createContext<SearchContextType | null>(null);

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [searchValues, setSearchValues] = useState(["", "", ""]);
  const [showStickySearch, setShowStickySearch] = useState(false);

  const setSearchValue = (index: number, value: string) => {
    setSearchValues((prev) => {
      const updated = [...prev];
      updated[index] = value;
      return updated;
    });
  };

  return (
    <SearchContext.Provider
      value={{ searchValues, setSearchValue, showStickySearch, setShowStickySearch }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within SearchProvider");
  return context;
};