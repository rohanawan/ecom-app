import { Link } from "react-router-dom";

// Context Import
import { useAuth } from "../../contexts/AuthContext";

const Header = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="container">
      <header className="d-flex justify-content-between align-items-center py-3 border-bottom">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 className="mt-1" style={{ fontWeight: "bold" }}>
            Rohan's Store
          </h1>
        </Link>
        <div>
          <Link
            to="/contact-us"
            style={{ textDecoration: "none" }}
            className="px-2"
          >
            Contact Us
          </Link>
          <Link
            to="/about-us"
            style={{ textDecoration: "none" }}
            className="px-2"
          >
            About Us
          </Link>
          {isAuthenticated && (
            <Link
              to="/change-password"
              style={{ textDecoration: "none" }}
              className="px-2"
            >
              Update Password
            </Link>
          )}

          {isAuthenticated && (
            <Link
              to="/order/history"
              style={{ textDecoration: "none" }}
              className="px-2"
            >
              Orders History
            </Link>
          )}

          {isAuthenticated ? (
            <button
              onClick={logout}
              style={{
                textDecoration: "none",
                marginTop: "-2px",
                color: "black",
              }}
              className="btn btn-link"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              style={{ textDecoration: "none" }}
              className="px-2"
            >
              Login
            </Link>
          )}
          <Link to="/cart" className="px-2">
            <img src="/images/cart.png" alt="Cart" style={{ height: "40px" }} />
          </Link>
        </div>
      </header>
    </div>
  );
};
export default Header;
