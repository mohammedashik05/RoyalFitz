import "../styles/ProductCard.css";
import { useNavigate } from "react-router-dom";

function ProductCard({ product }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/product/${product.id}`);
    };

    // Convert numeric rating to array of stars
    const renderStars = () => {
        const rating = Math.round(product.rating); // e.g., 3.6 -> 4
        return "⭐".repeat(rating);
    };

    return (
        <div
            className="product-card"
            onClick={handleClick}
            tabIndex={0}
            role="button"
            onKeyDown={(e) => e.key === "Enter" && handleClick()}
        >
            <img
                src={product.image}
                alt={`Image of ${product.name}`}
                className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">₹ {product.price}</p>
            <p className="product-rating">{renderStars()}</p>
        </div>
    );
}

export default ProductCard;
