import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ProductProvider from "./components/ProductProvider.jsx";
import Landing from "./pages/Landing.jsx";
import './index.css'
import Home from "./pages/Home.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductProvider>
        {/* <Landing /> */}
        <App />
        
      </ProductProvider>
    </BrowserRouter>
  </React.StrictMode>
);
