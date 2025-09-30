import React from "react";
import "./ProductList.css";

const ProductList = ({ products, onDelete, onEdit }) => {
  if (!products || products.length === 0) {
    return <div className="empty">No products found </div>;
  }

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-item" key={product.id}>
          <div>
            <strong>{product.title}</strong> — {product.category} — ₹{product.price}
          </div>
          <div className="actions">
            <button onClick={() => onEdit(product)}>Edit</button>
            <button onClick={() => onDelete(product.id)}> Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
