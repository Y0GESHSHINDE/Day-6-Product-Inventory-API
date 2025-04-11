# 🛒 Product Inventory API - Node.js, Express & MongoDB

Welcome to **Day 6** of my **10 Days of Node.js/Express/MongoDB** series!

This app is a basic inventory management system for a small store. It allows users to **add products**, **filter them by category**, and **sort by price or stock level**. It demonstrates advanced **query filtering**, **sorting**, and a modular **Express API** design.

---

## 🚀 Features

- ➕ Add products with name, price, stock quantity, and category
- 🔍 Filter products by category
- 🔃 Sort products by price (asc) or stock (desc)
- 📦 Modular and clean RESTful API design

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- nodemon (for development)

---

## 📁 Folder Structure

```
product-inventory-api/
├── config/
│   └── db.js
├── models/
│   └── Product.js
├── routes/
│   └── productRoutes.js
├── .env
├── server.js
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/Y0GESHSHINDE/Day-6-Product-Inventory-API.git
cd Day-6-Product-Inventory-API
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
MONGO_URI=mongodb://127.0.0.1:27017/productInventoryDB
PORT=5000
```

4. **Start the server**
```bash
npm run dev
```

App runs at:  
👉 `http://localhost:5000`

---

## 📬 API Endpoints

### 🧺 Product Routes

| Method | Endpoint            | Description                          |
|--------|---------------------|--------------------------------------|
| POST   | `/api/products`     | Add a new product                    |
| GET    | `/api/products`     | Get all products (with filters)      |

---

## 🔍 Query Options

You can use these query parameters:
- `/api/products?category=Dairy`
- `/api/products?sortBy=price`
- `/api/products?sortBy=stock`
- `/api/products?category=Snacks&sortBy=price`

---

## 🧪 Sample JSON

**Add Product**
```json
{
  "name": "Butter",
  "price": 90,
  "inStock": 15,
  "category": "Dairy"
}
```

---

## 🧠 Learning Goal

This project teaches:
- Advanced query filtering in Express routes
- Sorting with Mongoose `.sort()`
- Structuring clean modular Express APIs

---

## 📬 Testing with Postman

1. Open [Postman](https://www.postman.com/)
2. Use base URL: `http://localhost:5000/api/products`
3. Test:
   - `POST` to add products
   - `GET` to view/filter/sort products

---

## 👨‍💻 Author

**Yogesh Shinde**  
📧 yogeshshinde3624@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/y0geshshinde)  
🐙 [GitHub](https://github.com/y0geshshinde)

---
