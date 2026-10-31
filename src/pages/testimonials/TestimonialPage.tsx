
import { useEffect, useMemo, useState } from "react";

import TestimonialCard from "./TestimonialCard";
import { testimonialData } from "./TestimonialData";
import type { ProjectCategory } from "./TestimonialTypes";

export default function TestimonialPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<ProjectCategory | "ALL">("ALL");
  const [rating, setRating] = useState("ALL");

  // Filter testimonials
  const filteredTestimonials = useMemo(() => {
    const query = search.toLowerCase().trim();

    return testimonialData.filter((item) => {
      const matchesSearch = [
        item.clientName,
        item.company,
        item.projectName,
        item.feedback,
      ].some((value) => value.toLowerCase().includes(query));

      const matchesCategory =
        category === "ALL" || item.category === category;

      const matchesRating =
        rating === "ALL" || item.rating === Number(rating);

      return matchesSearch && matchesCategory && matchesRating;
    });
  }, [search, category, rating]);

  const total = filteredTestimonials.length;

  // Reset carousel when filters change
  useEffect(() => {
    setActiveIndex(0);
  }, [search, category, rating]);

  // Automatic sliding
  useEffect(() => {
    if (isPaused || total <= 1) return;

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [isPaused, total]);

  // Previous slide
  const handlePrevious = () => {
    if (total <= 1) return;

    setActiveIndex((current) => (current - 1 + total) % total);
  };

  // Next slide
  const handleNext = () => {
    if (total <= 1) return;

    setActiveIndex((current) => (current + 1) % total);
  };

  // Statistics
  const totalReviews = testimonialData.length;

  const averageRating =
    totalReviews > 0
      ? (
          testimonialData.reduce((sum, item) => sum + item.rating, 0) /
          totalReviews
        ).toFixed(1)
      : "0.0";

  const verifiedReviews = testimonialData.filter(
    (item) => item.verified
  ).length;

  // Calculate shortest circular position
  const getPosition = (index: number) => {
    let position = index - activeIndex;

    if (position > total / 2) {
      position -= total;
    }

    if (position < -total / 2) {
      position += total;
    }

    return position;
  };

  const inputStyle =
    "w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 sm:px-6 lg:px-8">

      {/* Client Experiences Header */}
      <section className="mb-8 text-center">

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-blue-600" />

          <span className="text-xs font-bold uppercase tracking-[0.15em] text-blue-700">
            Client Experiences
          </span>
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          See What Our Clients Say
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
          Discover how our construction management solutions help clients
          plan projects, coordinate teams and achieve better results.
        </p>
      </section>

      {/* Testimonial Carousel */}
      <section
        className="relative mx-auto mb-12 max-w-7xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocusCapture={() => setIsPaused(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setIsPaused(false);
          }
        }}
        aria-label="Client testimonials"
      >

        {total > 0 ? (
          <>
            {/* Sliding Cards */}
            <div className="relative h-[450px] overflow-hidden sm:h-[450px] lg:h-[440px]">

              {filteredTestimonials.map((item, index) => {
                const position = getPosition(index);
                const isActive = position === 0;
                const isVisible = Math.abs(position) <= 1;

                return (
                  <div
                    key={item.id}
                    aria-hidden={!isActive}
                    className={[
                      "absolute left-1/2 top-0 h-full",
                      "transition-[transform,opacity] duration-700 ease-in-out",
                      "will-change-transform",
                      "w-[88%] sm:w-[65%] md:w-[36%]",
                      !isActive
                        ? "hidden md:block"
                        : "",
                    ].join(" ")}
                    style={{
                      transform: `translateX(calc(-50% + ${position * 112}%)) scale(${isActive ? 1 : 0.87})`,
                      opacity: isVisible ? (isActive ? 1 : 0.72) : 0,
                      zIndex: isActive ? 10 : 5,
                      pointerEvents: isActive ? "auto" : isVisible ? "auto" : "none",
                    }}
                  >
                    <TestimonialCard
                      testimonial={item}
                      isActive={isActive}
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Controls */}
            <div className="mt-6 flex items-center justify-center gap-6">

              <button
                type="button"
                onClick={handlePrevious}
                disabled={total <= 1}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:opacity-40"
              >
                &#8592;
              </button>

              {/* Pagination dots */}
              <div className="flex items-center gap-2">
                {filteredTestimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                    aria-current={activeIndex === index ? "true" : undefined}
                    className={[
                      "h-2.5 rounded-full transition-all duration-500",
                      activeIndex === index
                        ? "w-8 bg-blue-600"
                        : "w-2.5 bg-slate-300 hover:bg-blue-400",
                    ].join(" ")}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                disabled={total <= 1}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-xl text-slate-700 shadow-sm transition hover:border-blue-600 hover:bg-blue-600 hover:text-white disabled:opacity-40"
              >
                &#8594;
              </button>
            </div>
          </>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white py-20 text-center">
            <h3 className="text-lg font-semibold text-slate-800">
              No testimonials found
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Try changing your search or filter criteria.
            </p>
          </div>
        )}
      </section>

      {/* Statistics */}
      <section className="mx-auto mb-10 grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm font-medium text-slate-500">
            Total Reviews
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {totalReviews}
          </h2>

          <p className="mt-2 text-xs text-slate-400">
            Client feedback entries
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm font-medium text-slate-500">
            Average Rating
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {averageRating}
            <span className="ml-2 text-xl text-amber-400">★</span>
          </h2>

          <p className="mt-2 text-xs text-slate-400">
            Average rating out of 5
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
          <p className="text-sm font-medium text-slate-500">
            Verified Feedback
          </p>

          <h2 className="mt-3 text-3xl font-bold text-slate-900">
            {verifiedReviews}
          </h2>

          <p className="mt-2 text-xs text-slate-400">
            Verified client reviews
          </p>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="mx-auto max-w-7xl rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">

        <div className="mb-5">
          <h2 className="text-lg font-bold text-slate-900">
            Explore Client Feedback
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Find feedback by client, project category or rating.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">

          <input
            type="search"
            placeholder="Search client or project..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className={inputStyle}
          />

          <select
            value={category}
            onChange={(event) =>
              setCategory(event.target.value as ProjectCategory | "ALL")
            }
            className={inputStyle}
          >
            <option value="ALL">All Project Categories</option>
            <option value="HOME">Homes</option>
            <option value="SCHOOL">Schools</option>
            <option value="COLLEGE">Colleges</option>
            <option value="HOTEL">Hotels</option>
            <option value="HOSPITAL">Hospitals</option>
            <option value="PRIVATE_COMPANY">Private Companies</option>
            <option value="VILLA">Villas</option>
          </select>

          <select
            value={rating}
            onChange={(event) => setRating(event.target.value)}
            className={inputStyle}
          >
            <option value="ALL">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

          <p className="text-xs text-slate-500">
            Showing {total} of {totalReviews} reviews
          </p>

          <button
            type="button"
            onClick={() => {
              setSearch("");
              setCategory("ALL");
              setRating("ALL");
            }}
            className="text-sm font-semibold text-blue-600 transition hover:text-blue-800"
          >
            Clear Filters
          </button>
        </div>
      </section>

    </main>
  );
}
