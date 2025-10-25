import React, { useContext, useState ,useEffect } from "react";
import axios from "axios";
import "../styles/AddProductForm.css"
import { useNavigate } from "react-router-dom";


export default function AddProductForm()
{
    const navigate =useNavigate();
  const [product, setProduct] = useState({
    id: "",
    name: "",
    price: "",
    category: "shirt",
    rating: "",
    description: "",
    image: "",
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
    formData.append("description", product.description);
    if (imageFile) formData.append("image", imageFile);

    try {
      await axios.post("http://localhost:5000/api/products/add", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      // setShowForm(false);
      setProduct({
        name: "",
        price: "",
        category: "shirt",
        rating: "",
        description: "",
        image: "",
      });
      alert("✅ Product added successfully!");
      navigate("/shop");
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };




    return(
        <>
          <div className="popup-overlay" onClick={() => setShowForm(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h2>Add Product</h2>
            <form onSubmit={handleSubmit}>
              <input name="name" placeholder="Product Name" onChange={handleChange} required />
              <input name="price" placeholder="Price" type="number" onChange={handleChange} required />

              <select name="category" onChange={handleChange} required>
                <option value="shirt">Shirt</option>
                <option value="pant">Pant</option>
                <option value="shoe">Shoe</option>
                <option value="jumpsuits">Jumpsuits</option>
                <option value="shorts">Shorts</option>
                <option value="watch">Watch</option>
                <option value="tshirt">T-shirt</option>
                <option value="belt">Belt</option>
                <option value="suit"> Suit</option>
              </select>

              <input name="rating" placeholder="Rating" type="number" step="0.1" onChange={handleChange} required />
              <textarea name="description" placeholder="Description" onChange={handleChange} required></textarea>

              <input type="file" accept="image/*" onChange={handleImageChange} required />

              <div className="popup-buttons">
                <button type="submit">Add</button>
                <button type="button" onClick={() => navigate("/shop")}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
     

        </>
    )

}