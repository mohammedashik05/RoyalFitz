import { useParams, useNavigate, useLocation } from "react-router-dom";
import "../styles/ProductDetails.css";
import "../styles/Cart.css";
import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../components/ProductProvider.jsx";
import CartSummaryTable from "../components/CartSummaryTable.jsx";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toast } from "react-hot-toast";
import Lottie from "lottie-react";
import Loading from "../animation/loading.json"; // ✅ Loading animation file

function ProductDetails() {
  const { _id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const { addToCart, wishlist, toggleWishlist, products, verifyAdmin } =
    useContext(ProductContext);

  const [admin, setAdmin] = useState(false);
  const [showBuyNow, setShowBuyNow] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(false);

  // ✅ Verify Admin
  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const result = await verifyAdmin();
        setAdmin(result.isAdmin);
      } catch (err) {
        setAdmin(false);
      }
    };
    checkAdmin();
  }, [verifyAdmin]);

  // ✅ Wait for product data
  useEffect(() => {
    if (products && products.length > 0) setLoading(false);
  }, [products]);

  // ✅ Get scroll & category info from location state
  const scrollPosition = location.state?.scrollPosition || 0;
  const fromCategory = location.state?.fromCategory || null;

  // ✅ Show loading animation while waiting for data
  if (loading) {
    return (
      <div className="loading-container">
        <Lottie className="loadingAnimation" animationData={Loading} loop />
        <p className="loading-text">Loading product details...</p>
      </div>
    );
  }

  // ✅ Get selected product
  const product = products.find((p) => p._id === _id);
  if (!product) return <h2>Product not found</h2>;

  // ✅ Check wishlist & stock
  const isInWishlist = wishlist.some((item) => item.productId === _id);
  const isOutOfStock = product.stock <= 0;
  const rating = Math.round(product.rating || 4);
  const totalStars = 6;
  const stars = "★".repeat(rating) + "☆".repeat(totalStars - rating);

  // ✅ Add to Cart with stock check
  const handleAddToCart = () => {
    if (isOutOfStock) {
      toast.error("This product is out of stock!");
      return;
    }
    addToCart(product);
    toast.success("Item added to cart!");
  };

  // ❤️ Toggle Wishlist
  const handleWishlistClick = () => {
    toggleWishlist(product);
  };

  // 🛒 Buy Now
  const handleBuyNow = () => {
    if (isOutOfStock) {
      toast.error("This product is out of stock!");
      return;
    }
    setShowBuyNow(true);
  };

  const handleCheckout = () => {
    setOrderPlaced(true);
    setShowBuyNow(false);
    setTimeout(() => setOrderPlaced(false), 5000);
  };

  // 🗑 Delete Product (Admin only)
  const handleDeleteProduct = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this product?");
    if (!confirmDelete) return;

    try {
      setDeleting(true);
      const response = await fetch(`${import.meta.env.VITE_URL}/api/products/delete/${_id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.message || "Failed to delete product");
      }

      toast.success("Product deleted successfully!");
      navigate("/shop");
    } catch (error) {
      toast.error(error.message || "An error occurred while deleting");
    } finally {
      setDeleting(false);
    }
  };

  // ✏️ Update Product (Admin only)
  const handleUpdateProduct = () => {
    navigate(`/update-product/${_id}`);
  };

  // 🧾 Price Summary
  const totalItems = 1;
  const totalPrice = product.price;
  const discount = totalPrice * 0.1;
  const finalTotal = totalPrice - discount;

  return (
    <>
      <div className="product-detail">
        {/* 🖼 Image + Wishlist */}
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

        {/* 📄 Product Info */}
        <div className="product-content">
          <h2>{product.name}</h2>
          <p>
            <strong>Price:</strong> ₹ {product.price}
          </p>
          <p className="stars">{stars}</p>
          <p>
            <strong>Description:</strong>{" "}
            {product.description || "No description available."}
          </p>

          {/* 🧮 Stock Info */}
          {admin ? (
            <p>
              <strong>Stock Count:</strong>{" "}
              <span className="text-green-600">{product.stock}</span>
            </p>
          ) : (
            <>
              {product.stock <= 10 && product.stock > 0 && (
                <p className="text-orange-500">⚠ Few items left ({product.stock})</p>
              )}
              {isOutOfStock && (
                <p className="text-red-600 font-semibold">❌ Out of Stock</p>
              )}
            </>
          )}

          {/* 🧭 Action Buttons */}
          <div className="button-group">
            <button
              className="add-to-cart-btn"
              onClick={handleAddToCart}
              disabled={isOutOfStock}
            >
              Add to Cart
            </button>
            <button
              className="buy-btn"
              onClick={handleBuyNow}
              disabled={isOutOfStock}
            >
              Buy Now
            </button>
          </div>

          {/* 🔧 Admin Actions */}
          {admin && (
            <div className="button-group admin-actions">
              <button
                className="update_btn"
                onClick={handleUpdateProduct}
                disabled={deleting}
              >
                Update
              </button>
              <button
                className="delete-btn"
                onClick={handleDeleteProduct}
                disabled={deleting}
              >
                {deleting ? "Deleting..." : "Delete"}
              </button>
            </div>
          )}

          {/* ⬅ Back Button (Preserves category & scroll) */}
          <button
            className="back-btn"
            onClick={() =>
              navigate("/shop", {
                state: { fromCategory, scrollPosition },
              })
            }
          >
            ← Back to Shop
          </button>
        </div>
      </div>

      {/* 💳 Buy Now Popup */}
      {showBuyNow && (
        <div className="summary-popup">
          <div className="summary-content">
            <span className="close-btn" onClick={() => setShowBuyNow(false)}>
              ✖
            </span>
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
