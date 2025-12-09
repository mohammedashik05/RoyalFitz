# RoyalFitz – Premium Menswear 🕴️👔

A modern, full-stack e-commerce web application for premium menswear.  
RoyalFitz lets users browse curated products, manage cart & wishlist, and explore a smooth shopping experience with a fully responsive UI.

> **Tech Stack:** React, Node.js, Express, MongoDB Atlas, Cloudinary, Netlify, Render

---

## 🚀 Features

### 🧑‍💻 User-Facing Features

- **Landing Page**
  - Hero section with brand intro
  - Call-to-action buttons to explore shop

- **Authentication**
  - Separate **Login** & **Register** pages
  - Validation for required fields
  - Conditional UI based on auth state (e.g., login/logout button)

- **Shop / Products**
  - 135+ menswear products (watches, shoes, shirts, pants, belts, etc.)
  - Product listing with:
    - Image
    - Price
    - Category
    - Short description
  - **Pagination** for better performance and UX when browsing many products

- **Product Details Page**
  - Detailed view of a single product
  - Large image, price, description, and category
  - Add to Cart / Add to Wishlist actions

- **Wishlist**
  - Save favorite items for later
  - Remove items from wishlist

- **Cart**
  - Add / remove products
  - Quantity updates (if implemented)
  - Subtotal calculation (if implemented)
  - Proceed-to-checkout button (UI)

- **Static / Info Pages**
  - **About** – brand story, purpose, and tech behind the site  
  - **Contact** – basic contact information or form
  - **Testimonials** – slider/carousel displaying customer reviews

- **Responsive Design**
  - Fully responsive from **navbar to footer**
  - Optimized layouts for **mobile, tablet, and desktop**

---

## 🛠️ Under the Hood

- **Frontend**
  - React SPA (Single Page Application)
  - React Router for page navigation (Home, Shop, Login, Cart, etc.)
  - Reusable components for:
    - Navbar, Footer
    - Product cards & grids
    - Buttons, forms, and inputs
  - State management using React hooks (`useState`, `useEffect`, etc.)

- **Backend**
  - Node.js + Express REST API
  - Routes for:
    - Fetching all products
    - Fetching single product by ID
    - (If implemented) Auth, cart, wishlist endpoints
  - Deployed on **Render**

- **Database**
  - **MongoDB Atlas**
  - Collections (at minimum):
    - `products` – stores all menswear product details  
    - (If implemented): `users`, `cart`, `wishlist`

- **Media Handling**
  - Product images stored on **Cloudinary**
  - Image URLs stored in MongoDB and used directly in frontend

- **Deployment**
  - **Frontend:** Netlify
  - **Backend:** Render
  - Environment variables used for DB connection, Cloudinary, etc.
---


