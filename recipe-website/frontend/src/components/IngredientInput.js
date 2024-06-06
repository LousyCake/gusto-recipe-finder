import React, { useState, useRef, useEffect } from 'react';
import './IngredientInput.css';
import { FaFilter, FaSearch } from 'react-icons/fa';

const IngredientInput = ({ searchInputRef, onSearch }) => {
  const [ingredient, setIngredient] = useState('');
  const [filters, setFilters] = useState({
    veg: false,
    nonVeg: false,
    seasonal: false,
    lowCalorie: false,
    highProtein: false,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleInputChange = (e) => {
    setIngredient(e.target.value);
  };

  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const handleSearch = () => {
    onSearch(ingredient, filters);
    setIngredient('');
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="ingredient-input-section">
      <div className="background-image"></div>
      <div className="ingredient-input-container">
        <div className="ingredient-input-box">
          <h2>Recipe Finder</h2>
          <div className="ingredient-input">
            <input
              type="text"
              value={ingredient}
              onChange={handleInputChange}
              placeholder="Add an ingredient"
              className="ingredient-input-field"
              ref={searchInputRef}
            />
            <button onClick={handleSearch} className="search-button">
              <FaSearch /> Search
            </button>
          </div>
          <div className="filter-dropdown" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="filter-button">
              <FaFilter /> Filters
            </button>
            {dropdownOpen && (
              <div className="filter-content">
                <label>
                  <input
                    type="checkbox"
                    name="veg"
                    checked={filters.veg}
                    onChange={handleFilterChange}
                  />
                  Veg
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="nonVeg"
                    checked={filters.nonVeg}
                    onChange={handleFilterChange}
                  />
                  Non-Veg
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="seasonal"
                    checked={filters.seasonal}
                    onChange={handleFilterChange}
                  />
                  Seasonal
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="lowCalorie"
                    checked={filters.lowCalorie}
                    onChange={handleFilterChange}
                  />
                  Low Calorie
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="highProtein"
                    checked={filters.highProtein}
                    onChange={handleFilterChange}
                  />
                  High Protein
                </label>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IngredientInput;
