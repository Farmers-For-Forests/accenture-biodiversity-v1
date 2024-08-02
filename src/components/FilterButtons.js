import React from 'react';
import '../styles/FilterButtons.css';

const FilterButtons = ({ onFilterChange }) => {
  const handleButtonClick = (filterName, filterValue) => {
    onFilterChange({ name: filterName, value: filterValue });
  };

  return (
    <div className="filter-buttons">
      <button onClick={() => handleButtonClick('category', 'All')}>All</button>
      <button onClick={() => handleButtonClick('category', 'Land')}>Land</button>
      <button onClick={() => handleButtonClick('category', 'Animals')}>Animals</button>
      <button onClick={() => handleButtonClick('category', 'Trees')}>Trees</button>
      {/* Add more buttons as needed */}
    </div>
  );
};

export default FilterButtons;
