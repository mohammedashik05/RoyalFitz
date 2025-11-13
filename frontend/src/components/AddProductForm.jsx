import React, { useState } from "react";
import axios from "axios";
import "../styles/AddProductForm.css";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function AddProductForm() {
  const apiUrl = import.meta.env.VITE_URL;
  const navigate = useNavigate();

  // ✅ Initialize every field with default values
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "shirt",
    rating: "",
    description: "",
    image: "",
    stockCount: "", // ✅ added this field here
  });

  const [imageFile, setImageFile] = useState(null);

  // ✅ Handle form input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  // ✅ Handle image file upload
  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // ✅ Submit new product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("id", product.id);
    formData.append("name", product.name);
    formData.append("price", product.price);
    formData.append("category", product.category);
    formData.append("rating", product.rating);
    formData.append("stockCount", product.stockCount);
    formData.append("description", product.description);
    if (imageFile) formData.append("image", imageFile);

    try {
      await axios.post(`${apiUrl}/api/products/add`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // ✅ Reset form after success
      setProduct({
        id: "",
        name: "",
        price: "",
        category: "shirt",
        rating: "",
        description: "",
        image: "",
        stockCount: "",
      });
      setImageFile(null);

      toast.success("Product Added Successfully!!");
      navigate("/shop");
    } catch (err) {
      console.error("Error adding product:", err);
      toast.error("Failed to add product. Please try again.");
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Product Name"
            value={product.name}
            onChange={handleChange}
            required
          />
          <input
            name="price"
            placeholder="Price"
            type="number"
            value={product.price}
            onChange={handleChange}
            required
          />

          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            <option value="shirt">Shirt</option>
            <option value="pant">Pant</option>
            <option value="shoe">Shoe</option>
            <option value="jumpsuits">Jumpsuits</option>
            <option value="shorts">Shorts</option>
            <option value="watch">Watch</option>
            <option value="tshirt">T-shirt</option>
            <option value="belt">Belt</option>
            <option value="suit">Suit</option>
          </select>

          <input
            name="rating"
            placeholder="Rating"
            type="number"
            step="0.1"
            value={product.rating}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="stockCount"
            value={product.stockCount}
            onChange={handleChange}
            placeholder="Enter stock quantity"
            min="0"
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={product.description}
            onChange={handleChange}
            required
          ></textarea>

          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
          />

          <div className="popup-buttons">
            <button type="submit">Add</button>
            <button type="button" onClick={() => navigate("/shop")}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
