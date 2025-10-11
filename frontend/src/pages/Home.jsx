import { useState, useEffect  } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../styles/Home.css";
import products from "../data/products.js";
import ProductCard from "../components/ProductCard.jsx";
import Footer from "../components/Footer.jsx";
import home_animation from "../animation/home.json";
import Lottie from "lottie-react";

function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getItemsPerPage() {
  const width = window.innerWidth;
  if (width <= 600) return 5; // Mobile
  if (width <= 1024) return 9; // Tablet
  return 25; // Desktop
}

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [shuffledProducts, setShuffledProducts] = useState(shuffleArray(products));
  const navigate = useNavigate();
  
  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(1);
      setShuffledProducts(shuffleArray(products));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = shuffledProducts.slice(startIndex, endIndex);

  const hasNext = endIndex < shuffledProducts.length;
  const hasPrevious = currentPage > 1;

  return (
    <>
      {/* Hero Section */}
      <div className="home-hero">
        <div className="hero-text">
          <div className="hero-text-content">

          <h1>Discover Unique Collections</h1>
          <p>
            Handpicked items curated just for you. Explore trending products, limited editions, and exclusive deals.
          </p>
          </div>
          <div className="hero-buttons">
            <button className="btn-shop" onClick={() => navigate("/shop")}  >Shop Now</button>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>
        <div className="hero-animation">
          <Lottie className="home_animations" animationData={home_animation} />
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-div">
        <input type="text" className="SearchFeild" placeholder="Search" />
        <div className="navbar__search">
          <FaSearch size={20} />
        </div>
      </div>

      {/* Product Section */}
      <div className="home-container">
        <h2 className="home-title">Our Collections</h2>
        <div className="product-grid">
          {currentProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="pagination">
          {hasPrevious && <button onClick={() => setCurrentPage((p) => p - 1)}>&lt;</button>}
          {hasNext && <button onClick={() => setCurrentPage((p) => p + 1)}>&gt;</button>}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
