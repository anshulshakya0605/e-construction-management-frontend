import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 sm:flex-row">
        <p>© {new Date().getFullYear()} E-Construction Management</p>

        <div className="flex gap-5">
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}