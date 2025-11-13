import React, { useContext, useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "../styles/Shop.css";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../components/ProductProvider.jsx";
import Lottie from "lottie-react";
import Loading from "../animation/loading.json";

const categories = [
  { title: "Costumes", sub: ["suit", "shirt", "pants", "tshirt", "jumpsuit", "shorts"] },
  { title: "Accessories", sub: ["watch", "belt", "shoe"] },
  { title: "Others", sub: ["Trunk", "vest"] },
];

export default function Shop() {
  const { products } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [openCategories, setOpenCategories] = useState([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortOrder, setSortOrder] = useState("-");
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  const apiUrl = import.meta.env.VITE_URL;
  const productContainerRef = useRef(null);

  // ✅ Restore category & scroll position after navigating back
  useEffect(() => {
    const { fromCategory, scrollPosition } = location.state || {};

    if (loading || !productContainerRef.current) return;

    // Restore category
    if (fromCategory) {
      setSelectedCategory(fromCategory);
      setOpenCategories([
        categories.find((cat) => cat.sub.includes(fromCategory))?.title,
      ].filter(Boolean));
    }

    // Restore scroll
    if (typeof scrollPosition === "number") {
      productContainerRef.current.scrollTo({
        top: scrollPosition,
        behavior: "instant",
      });
    }
  }, [loading, products, productContainerRef.current]);

  // ✅ Backup scroll restore (for delayed renders)
  useEffect(() => {
    const scrollPosition = location.state?.scrollPosition;
    if (scrollPosition && productContainerRef.current) {
      const timeout = setTimeout(() => {
        productContainerRef.current.scrollTo({
          top: scrollPosition,
          behavior: "instant",
        });
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [location.state]);

  // ✅ Toggle Category
  const toggleCategory = (title) => {
    setOpenCategories((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  // ✅ Handle Category Click
  const handleCategoryClick = (category) => {
    setSelectedCategory(selectedCategory === category ? null : category);
    if (window.innerWidth <= 768) setSidebarOpen(false);
  };

  // ✅ Handle Reset — scroll to top when resetting filters
  const handleReset = () => {
    setSelectedCategory(null);
    if (productContainerRef.current) {
      productContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // ✅ Filtering and sorting
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-high") return a.price - b.price;
    if (sortOrder === "high-low") return b.price - a.price;
    return 0;
  });

  // ✅ Simulate loading
  useEffect(() => {
    if (products.length > 0) {
      const timer = setTimeout(() => setLoading(false), 600);
      return () => clearTimeout(timer);
    }
  }, [products]);

  // ✅ Check admin
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;
        const res = await axios.get(`${apiUrl}/api/info/verify-admin`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsAdmin(res.data.isAdmin);
      } catch (err) {
        console.error("Error verifying admin:", err);
      }
    };
    checkAdmin();
  }, []);

  return (
    <div className="shop-page">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <div className="filters-header">
          <h4>FILTERS</h4>
          <button className="reset-btn" onClick={handleReset}>
            RESET
          </button>
        </div>

        {categories.map((cat) => (
          <div key={cat.title} className="filter-group">
            <div className="filter-header" onClick={() => toggleCategory(cat.title)}>
              <h5 className="category-title">{cat.title}</h5>
              <span className={`arrow ${openCategories.includes(cat.title) ? "open" : ""}`}>
                ▼
              </span>
            </div>
            {cat.sub.length > 0 && openCategories.includes(cat.title) && (
              <ul className="subcategory-list">
                {cat.sub.map((item) => (
                  <li
                    key={item}
                    onClick={() => handleCategoryClick(item)}
                    className={selectedCategory === item ? "active" : ""}
                  >
                    ▶ {item}
                    <hr />
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        {isAdmin && (
          <button className="add-product-btn" onClick={() => navigate("/addProductForm")}>
            ➕ Add Product
          </button>
        )}
        <button className="close-sidebar" onClick={() => setSidebarOpen(false)}>
          ✖ Close
        </button>
      </aside>

      {sidebarOpen && <div className="overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* Product list container (scrollable) */}
      <main className="product-list">
        <button className="sidebar-toggle" onClick={() => setSidebarOpen(true)}>
          ☰ Filters
        </button>

        <div className="sort-bar">
          <span>Sort by Price</span>
          <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="-">-</option>
            <option value="low-high">Low to High</option>
            <option value="high-low">High to Low</option>
          </select>
        </div>

        {loading ? (
          <div className="loading-container">
            <Lottie className="loadingAnimation" animationData={Loading} loop />
            <p className="loading-text">Loading products...</p>
          </div>
        ) : (
          <div className="product-grid" ref={productContainerRef}>
            {sortedProducts.length > 0 ? (
              sortedProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={product}
                  category={selectedCategory}
                  getScroll={() =>
                    productContainerRef.current
                      ? productContainerRef.current.scrollTop
                      : 0
                  }
                />
              ))
            ) : (
              <p className="no-products">No products found for this category.</p>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
