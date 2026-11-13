
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Building2,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

type NavigationLink = {
  label: string;
  path: string;
};

const navigationLinks: NavigationLink[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
  { label: "Testimonials", path: "/testimonials" },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const location = useLocation();

  // Close mobile menu when the route changes.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const getNavLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return [
      "rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200",
      isActive
        ? "bg-primary/10 text-primary"
        : "text-text-secondary hover:bg-primary/5 hover:text-primary",
    ].join(" ");
  };

  return (
    <header className="navbar-glass sticky top-0 z-50 w-full border-b border-border/70">
      <nav
        className="mx-auto flex min-h-18 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        {/* Brand */}
        <Link
          to="/"
          onClick={closeMobileMenu}
          className="group flex shrink-0 items-center gap-2.5"
          aria-label="E-Construction home"
        >
          <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
            <Building2 size={23} strokeWidth={2.2} />
          </span>

          <span className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-text sm:text-lg">
              E-Construction
            </span>

            <span className="text-[9px] font-semibold tracking-[1.5px] text-text-secondary">
              MANAGEMENT PLATFORM
            </span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-1 xl:flex">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={getNavLinkClass}
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle />

          {/* Desktop login */}
          <Link
            to="/login"
            className="hidden items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md sm:inline-flex"
          >
            Login
            <ArrowRight size={16} />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((previous) => !previous)}
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-text transition-colors hover:bg-surface-secondary xl:hidden"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {isMobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>
      </nav>

      {/* Mobile and tablet navigation */}
      <div
        id="mobile-navigation"
        className={`mobile-navbar-panel border-t border-border/70 xl:hidden ${
          isMobileMenuOpen ? "mobile-navbar-open" : ""
        }`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6 lg:px-8">
          {navigationLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              onClick={closeMobileMenu}
              tabIndex={isMobileMenuOpen ? 0 : -1}
              className={({ isActive }) =>
                [
                  "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "text-text-secondary hover:bg-primary/5 hover:text-primary",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile login */}
          <Link
            to="/login"
            onClick={closeMobileMenu}
            tabIndex={isMobileMenuOpen ? 0 : -1}
            className="mt-2 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-hover"
          >
            Login to your account
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </header>
  );
}
