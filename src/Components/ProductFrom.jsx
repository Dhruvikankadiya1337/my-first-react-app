import React, { useState, useEffect } from "react";

const ProductForm = ({ onSubmit, editingProduct }) => {
  const [formData, setFormData] = useState({ title: "", category: "", price: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", category: "", price: "" });
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Product Title"
        value={formData.title}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="category"
        placeholder="Category"
        value={formData.category}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <button type="submit">{editingProduct ? "Update" : "Add"} Product</button>
    </form>
  );
};

export default ProductForm;
