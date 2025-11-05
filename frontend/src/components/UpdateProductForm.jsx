import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/UpdateProductForm.css";
import toast from "react-hot-toast";

const UpdateProductForm = () => {
  const { _id } = useParams();
  console.log(_id)
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    rating: "",
    description: "",
    stock: "", // 🟢 added stock field
  });

  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.classList.add("popup-open");
    return () => document.body.classList.remove("popup-open");
  }, []);

  // 🔹 Fetch product details
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_URL}/api/products/id/${_id}`);
        const data = await res.json();

        if (res.ok) {
          setProduct({
            name: data.name || "",
            price: data.price || "",
            category: data.category || "",
            rating: data.rating || "",
            description: data.description || "",
            stock: data.stock || 0, // include stock
          });
          setPreview(data.image);
        } else {
          toast.error(data.message || "Failed to load product details.");
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        toast.error(" Failed to load product details.");
      }
    };
    fetchProduct();
  }, [_id]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // 🔹 Handle image file change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  // 🔹 Handle product update submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    Object.keys(product).forEach((key) => formData.append(key, product[key]));
    if (image) formData.append("image", image);

    try {
      const res = await fetch(`${import.meta.env.VITE_URL}/api/products/update/${_id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();

      if (res.ok && data.success) {
        toast.success("Product Updated Successfully!");
        navigate(-1, { state: { updated: true } });
      } else {
        toast.error(data.message || " Update failed");
      }
    } catch (err) {
      console.error("Error updating product:", err);
      toast.error(" Something went wrong while updating.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <button className="close-btn" onClick={() => navigate(-1)}>
          &times;
        </button>

        <h2>Update Product</h2>

        <form onSubmit={handleSubmit} className="update-form">
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter product name"
            required
          />

          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter price (₹)"
            required
          />

          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter category"
            required
          />

          <input
            type="number"
            step="0.1"
            name="rating"
            value={product.rating}
            onChange={handleChange}
            placeholder="Rating (0 - 5)"
            required
          />

          {/* 🟢 Added stock input */}
          <input
            type="number"
            name="stock"
            value={product.stock}
            onChange={handleChange}
            placeholder="Available stock count"
            required
            min="0"
          />

          <textarea
            name="description"
            rows="3"
            value={product.description}
            onChange={handleChange}
            placeholder="Write a short description..."
            required
          ></textarea>

          <input type="file" accept="image/*" onChange={handleFileChange} />
          {preview && <img src={preview} alt="Preview" className="preview-img" />}

          <div className="form-actions">
            <button type="submit" className="update-btn" disabled={loading}>
              {loading ? "Updating..." : "Update Product"}
            </button>
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProductForm;
