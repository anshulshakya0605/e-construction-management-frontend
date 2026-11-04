
import { createElement as h } from "react";
import type { Testimonial } from "./TestimonialTypes";

interface Props {
  testimonial: Testimonial;
  isActive?: boolean;
}

const categoryLabels: Record<Testimonial["category"], string> = {
  HOME: "Residential",
  SCHOOL: "School",
  COLLEGE: "College",
  HOTEL: "Hotel",
  HOSPITAL: "Hospital",
  PRIVATE_COMPANY: "Commercial",
  VILLA: "Villa",
};

export default function TestimonialCard({
  testimonial,
  isActive = false,
}: Props) {
  const initials = testimonial.clientName
    .split(" ")
    .map((name) => name[0])
    .slice(0, 2)
    .join("");

  const formattedDate = new Date(
    `${testimonial.date}T12:00:00`
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return h(
    "article",
    {
      className: [
        "flex h-full min-h-0 w-full flex-col overflow-hidden",
        "rounded-2xl border bg-white p-5 sm:p-6",
        "transition-all duration-300",
        "hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl",
        isActive
          ? "border-blue-200 shadow-xl shadow-blue-900/10"
          : "border-slate-200 shadow-md",
      ].join(" "),
    },

    // Category and verification
    h(
      "div",
      {
        className:
          "mb-4 flex shrink-0 items-center justify-between gap-2",
      },

      h(
        "span",
        {
          className:
            "max-w-[65%] truncate rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700",
        },
        categoryLabels[testimonial.category]
      ),

      testimonial.verified &&
        h(
          "span",
          {
            className:
              "shrink-0 text-xs font-medium text-emerald-600",
          },
          "✓ Verified"
        )
    ),

    // Quote
    h(
      "div",
      {
        className:
          "mb-2 shrink-0 text-5xl font-bold leading-none text-blue-100",
        "aria-hidden": "true",
      },
      "“"
    ),

    // Feedback
    h(
      "p",
      {
        className:
          "mb-4 min-h-0 flex-1 overflow-hidden break-words text-sm leading-6 text-slate-600",
        style: {
          display: "-webkit-box",
          WebkitBoxOrient: "vertical",
          WebkitLineClamp: 5,
          overflow: "hidden",
        },
      },
      testimonial.feedback
    ),

    // Rating
    h(
      "div",
      {
        className:
          "mb-4 flex shrink-0 items-center justify-between gap-2 border-b border-slate-100 pb-4",
      },

      h(
        "div",
        {
          className: "flex gap-0.5 text-lg text-amber-400",
          "aria-label": `${testimonial.rating} out of 5 stars`,
        },
        ...Array.from({ length: 5 }, (_, index) =>
          h(
            "span",
            { key: index, "aria-hidden": "true" },
            index < testimonial.rating ? "★" : "☆"
          )
        )
      ),

      h(
        "span",
        {
          className: "shrink-0 text-xs font-semibold text-slate-500",
        },
        `${testimonial.rating}/5`
      )
    ),

    // Client information
    h(
      "div",
      {
        className:
          "flex min-w-0 shrink-0 items-center gap-3",
      },

      h(
        "div",
        {
          className:
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-indigo-700 text-sm font-bold text-white",
        },
        initials
      ),

      h(
        "div",
        { className: "min-w-0 flex-1" },

        h(
          "h3",
          {
            className:
              "truncate text-sm font-bold text-slate-900",
          },
          testimonial.clientName
        ),

        h(
          "p",
          {
            className:
              "mt-0.5 truncate text-xs text-slate-500",
          },
          testimonial.designation
        ),

        h(
          "p",
          {
            className:
              "mt-0.5 truncate text-xs text-slate-600",
          },
          testimonial.company
        )
      )
    ),

    // Project information
    h(
      "div",
      {
        className:
          "mt-4 shrink-0 rounded-xl border border-slate-100 bg-slate-50 p-3",
      },

      h(
        "p",
        {
          className:
            "text-[10px] font-semibold uppercase tracking-wider text-slate-400",
        },
        "Associated Project"
      ),

      h(
        "p",
        {
          className:
            "mt-1 break-words text-sm font-semibold leading-5 text-slate-800",
        },
        testimonial.projectName
      ),

      h(
        "p",
        {
          className: "mt-2 text-xs text-slate-400",
        },
        formattedDate
      )
    )
  );
}
