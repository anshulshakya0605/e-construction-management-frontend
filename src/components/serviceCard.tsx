
import { Link } from "react-router-dom";
import type { Service } from "../types/service";

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({
  service,
  index,
}: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl sm:p-7">
      <div className="flex items-center justify-between">
        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
          {String(index + 1).padStart(2, "0")}
        </span>

        <span className="rounded-full bg-surface-secondary px-3 py-1 text-xs font-medium text-text-secondary">
          {service.category}
        </span>
      </div>

      <h3 className="mt-6 text-xl font-bold tracking-tight">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-7 text-text-secondary">
        {service.description}
      </p>

      <ul className="mt-5 space-y-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-text-secondary"
          >
            <span
              aria-hidden="true"
              className="mt-1 text-primary"
            >
              ✓
            </span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        to="/contact"
        className="mt-auto inline-flex items-center gap-2 pt-7 text-sm font-semibold text-primary"
      >
        Enquire about this service
        <span
          aria-hidden="true"
          className="transition-transform group-hover:translate-x-1"
        >
          →
        </span>
      </Link>
    </article>
  );
}
