import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProductProvider from "./components/ProductProvider.jsx";
import Landing from "./pages/Landing.jsx";

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
