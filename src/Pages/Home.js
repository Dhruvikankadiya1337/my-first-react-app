import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  addProduct,
  updateProduct,
  deleteProduct,
} from "../store/productSlice";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBarr";
import CategoryFilter from "../Components/CategoryFilter";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
  };


  return (
    <div className="container">
      <h1 className="heading">Product Management</h1>

      <div className="filters">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <CategoryFilter category={category} setCategory={setCategory} />
      </div>
    </div>
  );
};

export default Home;
