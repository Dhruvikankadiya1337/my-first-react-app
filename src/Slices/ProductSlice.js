import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:3000/products";

// GET
export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const res = await axios.get(API_URL);
  return res.data;
});

// POST
export const addProduct = createAsyncThunk("products/add", async (product) => {
  const res = await axios.post(API_URL, product);
  return res.data;
});

// PUT
export const updateProduct = createAsyncThunk("products/update", async (product) => {
  const res = await axios.put(`${API_URL}${product.id}`, product);
  return res.data;
});

// DELETE
export const deleteProduct = createAsyncThunk("products/delete", async (id) => {
  await axios.delete(`${API_URL}${id}`);
  return id;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        const index = state.products.findIndex((p) => p.id === action.payload.id);
        state.products[index] = action.payload;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.products = state.products.filter((p) => p.id !== action.payload);
      });
  },
});

export default productSlice.reducer;
