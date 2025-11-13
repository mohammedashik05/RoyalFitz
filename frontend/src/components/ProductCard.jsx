import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, category, getScroll }) {
  const navigate = useNavigate();

  // Inside handleClick()
  const handleClick = () => {
    const scrollPosition = getScroll ? getScroll() : 0;

    console.log("🟣 [ProductCard] Navigating to ProductDetails with:", {
      scrollPosition,
      category,
      productId: product._id,
    });

    navigate(`/product/${product._id}`, {
      state: {
        fromCategory: category || null,
        scrollPosition,
      },
    });
  };


  return (
    <div
      className="product-card"
      onClick={handleClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
    >
      <img src={product.image} alt={product.name} className="product-image" />
      <h3 className="product-name">{product.name}</h3>
      <p className="product-price">₹ {product.price}</p>
    </div>
  );
}

export default ProductCard;
