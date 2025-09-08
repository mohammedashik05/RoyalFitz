import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import "../styles/Home.css";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer.jsx";

function shuffleArray(array) {
    // Fisher-Yates shuffle
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function getItemsPerPage() {
    const width = window.innerWidth;
    if (width <= 600) return 5;            // Mobile
    if (width <= 1024) return 9;           // Tablet
    return 15;                             // Desktop
}

function Home() {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
    const [shuffledProducts, setShuffledProducts] = useState(shuffleArray(products));

    // Re-shuffle products on mount and on resize
    useEffect(() => {
        function handleResize() {
            setItemsPerPage(getItemsPerPage());
            setCurrentPage(1); // Optional: reset page on resize
            setShuffledProducts(shuffleArray(products)); // Re-shuffle on resize
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = shuffledProducts.slice(startIndex, endIndex);

    const hasNext = endIndex < shuffledProducts.length;
    const hasPrevious = currentPage > 1;

    function handleNextPage() {
        if (hasNext) {
            setCurrentPage((prev) => prev + 1);
        }
    }

    function handlePreviousPage() {
        if (hasPrevious) {
            setCurrentPage((prev) => prev - 1);
        }
    }

    return (
        <>
            <div className="search-div">
                <input type="text" className="SearchFeild" placeholder="Search" />
                <div className="navbar__search">
                    <FaSearch size={20} />
                </div>
            </div>

            <div className="home-container">
                <h2 className="home-title">Our Collections</h2>
                <div className="product-grid">
                    {currentProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>

                <div className="pagination">
                    {hasPrevious && (
                        <button onClick={handlePreviousPage}>&lt;</button>
                    )}
                    {hasNext && (
                        <button onClick={handleNextPage}>&gt;</button>
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
