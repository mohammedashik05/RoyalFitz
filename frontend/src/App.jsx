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
import { Toaster } from "react-hot-toast";
import UpdateProductForm from "./components/UpdateProductForm";
import NotificationPage from "./pages/NotificationPage";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ new import
import Profile from "./pages/Profile";
import Orders from "./pages/orders";





function App() {
  const location = useLocation();

  // ✅ Hide Navbar on landing/login/register pages
  const hideNavbarRoutes = ["/", "/login", "/register"];
  const isNavbarVisible = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {isNavbarVisible && <Navbar />}

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Routes (only for logged-in users) */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shop"
          element={
            <ProtectedRoute>
              <Shop />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/:_id"
          element={
            <ProtectedRoute>
              <ProductDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <Contact />
            </ProtectedRoute>
          }
        />
        <Route
          path="/wishListPage"
          element={
            <ProtectedRoute>
              <WishListPage />
            </ProtectedRoute>
          }
        />
         <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        
          <Route path="/orders" 
          element={
            <ProtectedRoute>
              <Orders/>
            </ProtectedRoute>
          } />

        {/* Admin Routes */}
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
        <Route
          path="/update-product/:_id"
          element={
            <AdminRoute>
              <UpdateProductForm />
            </AdminRoute>
          }
        />
        <Route
          path="/notificationPage"
          element={
            <AdminRoute>
              <NotificationPage />
            </AdminRoute>
          }
        />

        {/* Catch-all redirect */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Optional footer */}
      {/* <Footer /> */}
    </>
  );
}

export default App;
