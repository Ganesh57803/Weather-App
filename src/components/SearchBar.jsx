import React, { useState } from 'react';

const SearchBar = ({ onSelectCity, label }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSelectCity(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-2">
      <label className="block text-sm font-semibold mb-1">{label}</label>
      <div className="flex">
        <input
          type="text"
          placeholder="Enter city"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full px-3 py-2 rounded-l-lg border border-gray-300 text-gray-900 dark:text-white bg-white dark:bg-gray-800"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-lg">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBar;