
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Our Services", to: "/services" },
  { label: "Our Projects", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
];

const services = [
  "Construction Management",
  "Project Planning",
  "Engineering Solutions",
  "Quality & Safety Management",
  "Consultancy Services",
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "building" | "arrow" | "mail" | "phone" | "location";
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className,
    "aria-hidden": true as const,
  };

  switch (name) {
    case "building":
      return (
        <svg {...common}>
          <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-5h6v5M9 9h.01M15 9h.01M9 12h.01M15 12h.01" />
        </svg>
      );

    case "arrow":
      return (
        <svg {...common}>
          <path d="M7 17 17 7M7 7h10v10" />
        </svg>
      );

    case "mail":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      );

    case "phone":
      return (
        <svg {...common}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7a2 2 0 0 1 1.73 2.03Z" />
        </svg>
      );

    case "location":
      return (
        <svg {...common}>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      );

    default:
      return null;
  }
}

const socialLinks = [
  { name: "LinkedIn", label: "in", url: "#" },
  { name: "Facebook", label: "f", url: "#" },
  { name: "Instagram", label: "◎", url: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0B1220] text-white">
      {/* Call To Action */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-6 py-14 md:flex-row md:items-center lg:px-8">
          <div className="max-w-2xl">
            <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Let's Build Together
            </span>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Have a project in mind?
              <span className="block text-blue-400">
                Let's make it happen.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-slate-400 sm:text-base">
              From planning to execution, we help bring construction
              projects to life with confidence, precision, and expertise.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-500"
          >
            Start a Conversation
            <Icon
              name="arrow"
              className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Company Information */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <Icon name="building" className="h-7 w-7" />
              </div>

              <div>
                <span className="block text-lg font-bold tracking-wide">
                  E-CONSTRUCTION
                </span>
                <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
                  MANAGEMENT
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              Building better possibilities through smart planning,
              reliable execution, and professional construction
              management solutions.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-lg font-bold text-slate-400 transition-all duration-300 hover:border-blue-500 hover:bg-blue-600 hover:text-white"
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-blue-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-blue-500 opacity-0 transition group-hover:opacity-100" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              Our Services
            </h3>

            <ul className="space-y-4">
              {services.map((service) => (
                <li
                  key={service}
                  className="text-sm text-slate-400 transition hover:text-blue-400"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider">
              Get In Touch
            </h3>

            <p className="mb-5 text-sm leading-6 text-slate-400">
              Have questions or want to discuss your next project?
              Reach out to our team.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-sm text-slate-400">
                  Add official email address
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-sm text-slate-400">
                  Add official phone number
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Icon name="location" className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
                <span className="text-sm leading-6 text-slate-400">
                  Add company office address
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} E-Construction Management.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs text-slate-500">
            <Link to="/" className="transition hover:text-blue-400">
              Home
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-blue-400"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
