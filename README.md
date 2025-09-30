
# 📘 Product Management Application

A **React JS** application for managing products with **Redux Toolkit** and **JSON Server** 🚀.

---

## ⚙️ 1. Backend Setup (Mock API)
```json
{
  "products": [
    {
      "id": 1,
      "title": "Laptop",
      "category": "Electronics",
      "price": 50000
    }
  ]
}
```

▶️ Start server:

```bash
npx json-server --watch db.json --port 5000
```

---

## 🛠️ 2. Redux Toolkit Setup

1. Configure **Redux Store** 🗂️
2. Create **`productSlice`** with CRUD operations:

* 📥 **Fetch Products** → (GET `/products`)
* ➕ **Add Product** → (POST `/products`)
* ✏️ **Update Product** → (PUT `/products/:id`)
* ❌ **Delete Product** → (DELETE `/products/:id`)

---

## 🔍 3. Search & Filter Features

* 🔎 **Search Bar** → Search products by `title`
* 🏷️ **Category Filter (Dropdown)** → Filter by `category`
* 🔗 **Combined Filters** → Search + Filter should work **together**

---

## ✨ Features Summary

✅ Manage products (CRUD)
✅ Mock API with JSON Server
✅ Redux Toolkit for state management
✅ Search & Filter functionality
✅ Clean UI with React
