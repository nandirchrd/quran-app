import { createContext, useState, ReactNode } from "react";

// Mendefinisikan tipe untuk context
type SearchContextType = [string, (value: string) => void];

// Mendefinisikan tipe props untuk SearchProvider
interface IProps {
  children: ReactNode;
}

// Membuat context dengan nilai default
export const SearchContext = createContext<SearchContextType>(["", () => {}]);

// Provider untuk context
export const SearchProvider: React.FC<IProps> = ({ children }) => {
  const [searchValue, setSearchValue] = useState<string>("");

  return (
    <SearchContext.Provider value={[searchValue, setSearchValue]}>
      {children}
    </SearchContext.Provider>
  );
};
