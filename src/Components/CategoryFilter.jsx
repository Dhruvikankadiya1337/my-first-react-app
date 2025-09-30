import React from "react";

const CategoryFilter = ({ category, setCategory }) => {
  return (
    <select value={category} onChange={(e) => setCategory(e.target.value)}>
      <option value="">All Categories</option>
      <option value="Electronics">Electronics</option>
      <option value="Clothing">Clothing</option>
      <option value="Furniture">Furniture</option>
    </select>
  );
};

export default CategoryFilter;
