import React, { useState } from "react";

const PriceFilter = ({ onFilterChange }) => {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const handleMinInputChange = (e) => {
    const value = +e.target.value;
    setMinPrice(value);
    onFilterChange({ minPrice: value || null }); // callback фильтрации
  };

  const handleMaxInputChange = (e) => {
    const value = +e.target.value;
    setMaxPrice(value);
    onFilterChange({ maxPrice: value || null }); // callback фильтрации
  };

  return (
    <div>
      <h3>Стоимость</h3>

      <label>
        От:
        <input type="number" value={minPrice} onChange={handleMinInputChange} />
      </label>

      <label>
        До:
        <input type="number" value={maxPrice} onChange={handleMaxInputChange} />
      </label>
    </div>
  );
};

export default PriceFilter;
