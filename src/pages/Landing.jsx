import { Link } from "react-router-dom";
import "../styles/Landing.css";

function Landing() {
  return (
    <div className="landing-container">
      {/* Text-based logo */}
      <h1 className="landing-logo">
        Mens<span>Wear</span>
      </h1>

      <p>Welcome 🚀 Please login or register to continue.</p>

      <div className="btn-group">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </div>
  );
}

export default Landing;
