import React from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search albums..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full p-2 border rounded"
      />
    </div>
  );
};

export default SearchBar;
