import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetails.css";
import "../styles/Cart.css"; // for popup & summary styles
import { useContext, useState } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import CartSummaryTable from "../components/CartSummaryTable.jsx";
import { FaRegHeart, FaHeart } from "react-icons/fa";

function ProductDetails() {
  const { _id } = useParams(); // URL param
  const navigate = useNavigate();
  const { addToCart, wishlist, toggleWishlist, products } = useContext(ProductContext);

  const [showCartPopup, setShowCartPopup] = useState(false);
  const [showBuyNow, setShowBuyNow] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Find product by _id
  const product = products.find((p) => p._id === _id);
  if (!product) return <h2>Product not found</h2>;

  // console.log(_id);
  const isInWishlist = wishlist.some((item) => item.productId === _id);
  // console.log(isInWishlist);

  // Convert rating to stars (optional)
  const rating = Math.round(product.rating || 4);
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

  // Buy Now popup
  const handleBuyNow = () => {
    setShowBuyNow(true);
  };

  const handleCheckout = () => {
    // For now, single product checkout logic can be handled inside CartSummaryTable
    setOrderPlaced(true);
    setShowBuyNow(false);
    setTimeout(() => setOrderPlaced(false), 5000);
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
              <FaHeart size={20} className="watchList_icon_unchoose" color="#ff6600" />
            ) : (
              <FaRegHeart size={20} className="watchList_icon_choose" color="#ff6600" />
            )}
          </div>

          <img
            src={product.image}
            alt={`Image of ${product.name}`}
            className="product-detail-image"
          />
        </div>

        <div className="product-content">
          {showCartPopup && <div className="cart-popup">✅ Item added to cart!</div>}

          <h2>{product.name}</h2>
          <p><strong>Price:</strong> ₹ {product.price}</p>
          <p className="stars">{stars}</p>
          <p><strong>Description:</strong> {product.description || "No description available."}</p>

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

            <CartSummaryTable
              items={[{ ...product, quantity: 1, id: product._id }]}
              totalItems={totalItems}
              totalPrice={totalPrice}
              discount={discount}
              finalTotal={finalTotal}
              id={product._id}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
