import React from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative">
      <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60" />
      <input
        type="text"
        placeholder="Search tasks by title or description..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pl-12 pr-12 py-3 bg-white/20 backdrop-blur border border-white/30 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
      />
      {searchTerm && (
        <button
          onClick={() => onSearchChange("")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
        >
          <FaTimes />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
