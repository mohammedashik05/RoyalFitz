import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetails.css";
import products from "../data/products.js";
import { useContext, useState } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import Footer from "../components/Footer.jsx";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // get addToCart & wishlist/toggleWishlist from context
  const { addToCart, wishlist, toggleWishlist } = useContext(ProductContext);

  const [showPopup, setShowPopup] = useState(false);

  // Find the product by id
  const product = products.find((p) => p.id.toString() === id);

  if (!product) {
    return <h2>Product not found</h2>;
  }

  // check if product is in wishlist
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  const rating = 4;
  const totalStars = 5;
  const stars = "★".repeat(rating) + "☆".repeat(totalStars - rating);

  const handleAddToCart = () => {
    addToCart(product);
    setShowPopup(true);

    // Hide popup after 2 seconds
    setTimeout(() => setShowPopup(false), 2000);
  };

  const handleWishlistClick = () => {
    toggleWishlist(product);
  };

  return (
    <>
      <div className="product-detail">
        <div className="img_icons">
          {/* Heart icon */}
          <div
            onClick={handleWishlistClick}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            {isInWishlist ? (
              <FaHeart className="watchList_icon_unchoose" size={20} color="#ff6600" />
            ) : (
              <FaRegHeart className="watchList_icon_unchoose" size={20} />
            )}
          </div>

          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="product-detail-image"
          />
        </div>

        <div className="product-content">
          {/* Popup */}
          {showPopup && (
            <div className="cart-popup">✅ Item added to cart!</div>
          )}

          <h2>{product.name}</h2>
          <p>
            <strong>Price:</strong> ₹ {product.price}
          </p>
          <p className="stars">{stars}</p>

          <p>
            <strong>Description:</strong>{" "}
            {product.description || "No description available."}
          </p>

          <div className="button-group">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-btn">Buy Now</button>
          </div>

          <button className="back-btn" onClick={() => navigate("/shop")}>
            ← Back to Shop
          </button>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default ProductDetails;
