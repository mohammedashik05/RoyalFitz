import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Login from "./components/Login";
import Register from "./components/Register";
import ProductDetails from "./pages/ProductDetails";
import Contact from "./pages/Contact";
import WishListPage from "./pages/WishListPage";
import AdminRoute from "./components/AdminRoute";
import AdminDashboard from "./components/AdminDashBoard";
import AddProductForm from "./components/AddProductForm";
import Footer from "./components/Footer";


function App() {
  const location = useLocation(); // get current route

  const hideNavbarRoutes = ["/", "/login", "/register"]; // routes where Navbar should be hidden

  const isNavbarVisible = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {isNavbarVisible && <Navbar />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:_id" element={<ProductDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishListPage" element={<WishListPage />} />
        <Route
          path="/adminDashboard"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/addProductForm"
          element={
            <AdminRoute>
              <AddProductForm />
            </AdminRoute>
          }
        />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
