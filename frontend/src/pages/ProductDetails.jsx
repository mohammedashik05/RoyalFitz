import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetails.css";
import "../styles/Cart.css"; // for popup & summary styles
import products from "../data/products.js";
import { useContext, useState } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import CartSummaryTable from "../components/CartSummaryTable.jsx";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist } = useContext(ProductContext);

  const [showCartPopup, setShowCartPopup] = useState(false); // Add to cart popup
  const [showBuyNow, setShowBuyNow] = useState(false); // Buy Now popup
  const [address, setAddress] = useState("");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const product = products.find((p) => p.id.toString() === id);
  if (!product) return <h2>Product not found</h2>;

  let isInWishlist = wishlist.some((item) => item.id === product.id);

  const rating = 4;
  const totalStars = 5;
  const stars = "★".repeat(rating) + "☆".repeat(totalStars - rating);

  const handleAddToCart = () => {


    addToCart(product);
    setShowCartPopup(true);
    setTimeout(() => setShowCartPopup(false), 2000);
  };

  const handleWishlistClick = () => {
    toggleWishlist(product);
  };

  // Buy Now logic
  const handleBuyNow = () => {
    setShowBuyNow(true);
  };

  const handleCheckout = () => {
    if (!address.trim()) {
      alert("Please enter your shipping address before proceeding.");
      return;
    }

    // Show order animation
    setOrderPlaced(true);
    setShowBuyNow(false);
    setAddress("");
    addToCart(product); // Optional: add to cart for processing

    setTimeout(() => {
      setOrderPlaced(false);
    }, 5000);
  };

  // Single product summary data
  const totalItems = 1;
  const totalPrice = product.price;
  const discount = totalPrice * 0.1;
  const finalTotal = totalPrice - discount;

  return (
    <>
      <div className="product-detail">
        <div className="img_icons">
          <div
            onClick={handleWishlistClick}
            style={{ cursor: "pointer", display: "inline-block" }}
          >
            {isInWishlist ? (
              <FaHeart
                size={20}
                className="watchList_icon_unchoose"
                color="#ff6600" // filled heart color
              />
            ) : (
              <FaRegHeart
                size={20}
                className="watchList_icon_choose"
                color="#ff6600" // outlined heart color
              />
            )}
          </div>



          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="product-detail-image"
          />
        </div>

        <div className="product-content">
          {/* Add to cart popup */}
          {showCartPopup && (
            <div className="cart-popup">✅ Item added to cart!</div>
          )}

          <h2>{product.name}</h2>
          <p>
            <strong>Price:</strong> ₹ {product.price}
          </p>
          <p className="stars">{stars}</p>

          <p>
            <strong>Description:</strong> {product.description || "No description available."}
          </p>

          <div className="button-group">
            <button className="add-to-cart-btn" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="buy-btn" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>

          <button className="back-btn" onClick={() => navigate("/shop")}>
            ← Back to Shop
          </button>
        </div>
      </div>

      {/* Buy Now Popup */}
      {showBuyNow && (
        <div className="summary-popup">
          <div className="summary-content">
            <span className="close-btn" onClick={() => setShowBuyNow(false)}>✖</span>
            <h2>Order Summary</h2>

            {/* Reusable Table */}
            <CartSummaryTable
              items={[{ ...product, quantity: 1 }]}
              totalItems={totalItems}
              totalPrice={totalPrice}
              discount={discount}
              finalTotal={finalTotal}
              id={id}
            />

          </div>
        </div>
      )}


    </>
  );
}

export default ProductDetails;
