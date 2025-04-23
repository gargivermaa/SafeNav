import React, { useState } from 'react';
import axios from 'axios';
import MaterialButton from './MaterialButton';

const SearchBox = ({ placeholder, onSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length < 2) {
      setSuggestions([]);
      return;
    }

    try {
      const res = await axios.get(`http://localhost:5000/api/autocomplete`, {
        params: { q: value },
      });

      setSuggestions(res.data || []);
    } catch (error) {
      console.error('Autocomplete error:', error);
    }
  };

  const handleSelect = (place) => {
    setQuery(place.label || place.display_name);
    setSuggestions([]);

    onSelect({
      lat: place.lat,
      lng: place.lng,
      label: place.label || place.display_name,
    });
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={handleChange}
        className="border border-gray-300 rounded-md px-4 py-2 w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"


      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 border border-gray-200 rounded-md mt-1 w-full max-h-48 overflow-y-auto shadow-lg" style={{background: 'linear-gradient(90deg, #ede7f6 0%, #ffe0b2 100%)'}}>
          {suggestions.map((s, index) => (
            <li key={index} className="cursor-pointer">
  <MaterialButton
    onClick={() => handleSelect(s)}
    color="blue"
    variant="rounded"
    className="text-xs w-full text-left px-3 py-1.5 hover:bg-blue-100 text-gray-800"

    style={{ justifyContent: 'flex-start' }}
  >
    {s.label || s.display_name}
  </MaterialButton>
</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBox;
