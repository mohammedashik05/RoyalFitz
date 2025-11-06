import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../styles/Home.css";
import ProductCard from "../components/ProductCard.jsx";
import { ProductContext } from "../components/ProductProvider.jsx";
import Footer from "../components/Footer.jsx";
import home_animation from "../animation/home.json";
import Lottie from "lottie-react";
import Loading from "../animation/loading.json";

// Shuffle products
function shuffleArray(array) {
  const arr = array.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Determine items per page based on screen width
function getItemsPerPage() {
  const width = window.innerWidth;
  if (width <= 600) return 5; // Mobile
  if (width <= 1024) return 9; // Tablet
  return 25; // Desktop
}

function Home() {

   const [loading, setLoading] = useState(true);
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  const [shuffledProducts, setShuffledProducts] = useState(shuffleArray(products));
  const navigate = useNavigate();

  // Shuffle products whenever products array changes
  useEffect(() => {
    if (products && products.length > 0) {
      setTimeout(() => {
        setShuffledProducts(shuffleArray(products));
        setLoading(false);
      }, 800); // slight delay for smooth transition
    } else {
      setLoading(true);
    }
  }, [products]);

  // Update items per page on resize
  useEffect(() => {
    function handleResize() {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(1);
      if (products.length > 0) setShuffledProducts(shuffleArray(products));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [products]);


  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = shuffledProducts.slice(startIndex, endIndex);

  const hasNext = endIndex < shuffledProducts.length;
  const hasPrevious = currentPage > 1;

  return (
    <>


      <div className="home-hero">
        <div className="hero-text">
          <div className="hero-text-content">
            <h1>Discover Unique Collections</h1>
            <p>
              Handpicked items curated just for you. Explore trending products, limited editions, and exclusive deals.
            </p>
          </div>
          <div className="hero-buttons">
            <button className="btn-shop" onClick={() => navigate("/shop")}>
              Shop Now
            </button>
            <button className="btn-learn" onClick={() => navigate("/about")}>
              Learn More
            </button>
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


      {/* Product Section */}
      <div className="home-container">
        <h2 className="home-title">Our Collections</h2>

        {/* ✅ Loading animation only inside product section */}
        {products.length === 0 ? (
          <div className="loading-section">
            <Lottie className="loadingAnimation" animationData={Loading} loop />
            <p className="loading-text">Fetching products...</p>
          </div>
        ) : (
          <>
            <div className="product-grid">
              {currentProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="pagination">
              {hasPrevious && <button onClick={() => setCurrentPage((p) => p - 1)}>&lt;</button>}
              {hasNext && <button onClick={() => setCurrentPage((p) => p + 1)}>&gt;</button>}
            </div>
          </>
        )}
      </div>


      <Footer />
    </>
  );
}

export default Home;

