import { NavLink, Link } from "react-router-dom";
import ThemeToggle from "./common/ThemeToggle";

const links = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "FAQ", path: "/faq" },
];

export default function Navbar() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--app-border)",
        backgroundColor: "var(--app-surface)",
        transition: "background-color 0.3s ease, border-color 0.3s ease",
      }}
    >
      <nav
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "var(--app-primary)",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          E-Construction
        </Link>

        {/* Nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              style={({ isActive }) => ({
                fontSize: "0.875rem",
                fontWeight: 500,
                textDecoration: "none",
                color: isActive
                  ? "var(--app-primary)"
                  : "var(--app-text-secondary)",
                transition: "color 0.2s ease",
                position: "relative",
              })}
              className="nav-link"
            >
              {link.label}
            </NavLink>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Login Button */}
          <Link
            to="/login"
            style={{
              borderRadius: "8px",
              backgroundColor: "var(--app-primary)",
              color: "#ffffff",
              padding: "8px 18px",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 0.2s ease, transform 0.1s ease",
            }}
            className="nav-login-btn"
          >
            Login
          </Link>
        </div>
      </nav>
    </header>
  );
}