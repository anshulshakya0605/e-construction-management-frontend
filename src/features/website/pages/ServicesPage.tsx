
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { getServices } from "../api/services.api";
import type { Service } from "../types/service.types";

const processSteps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "Understand your requirements, goals, and project scope.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Organize priorities, resources, timelines, and deliverables.",
  },
  {
    number: "03",
    title: "Execution",
    description:
      "Coordinate activities and monitor progress throughout the project.",
  },
  {
    number: "04",
    title: "Completion",
    description:
      "Review outcomes, address outstanding issues, and support handover.",
  },
];

const benefits = [
  {
    title: "Coordinated Delivery",
    description:
      "Keep project teams, activities, and milestones aligned.",
  },
  {
    title: "Quality Focus",
    description:
      "Build quality checks and safety awareness into project activities.",
  },
  {
    title: "Clear Communication",
    description:
      "Support informed decisions through structured updates and reporting.",
  },
];

export default function ServicesPage() {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadServices() {
      try {
        const data = await getServices();

        if (active) {
          setServices(data);
          setError("");
        }
      } catch {
        if (active) {
          setError("We couldn't load our services. Please try again.");
        }
      } finally {
        if (active) setLoading(false);
      }
    }

    void loadServices();

    return () => {
      active = false;
    };
  }, []);

  async function handleRetry() {
    setLoading(true);
    setError("");

    try {
      setServices(await getServices());
    } catch {
      setError("We couldn't load our services. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-background text-text">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-surface">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-6 py-20 sm:py-24 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 lg:px-8">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What We Do
            </span>

            <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Construction solutions.
              <span className="block text-primary">
                Thoughtfully managed.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary">
              Explore our construction management services, designed
              to support project planning, coordination, execution,
              and quality throughout the project lifecycle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#services"
                className="rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Explore Services
              </a>

              <Link
                to="/contact"
                className="rounded-lg border border-border px-6 py-3.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
              >
                Contact Our Team
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-slate-950 via-slate-800 to-blue-950 p-7 text-white shadow-xl sm:p-10">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                Built Around Your Goals
              </span>

              <h2 className="mt-5 text-3xl font-bold leading-snug sm:text-4xl">
                From the first plan to the final handover.
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-300">
                A structured approach to managing construction
                activities, resources, and project priorities.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-blue-300">01</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Plan
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-blue-300">02</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Coordinate
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-blue-300">03</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Execute
                  </p>
                </div>

                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-2xl font-bold text-blue-300">04</p>
                  <p className="mt-1 text-xs text-slate-300">
                    Deliver
                  </p>
                </div>
              </div>
            </div>

            <div
              aria-hidden="true"
              className="absolute -bottom-3 -right-3 -z-10 h-32 w-32 rounded-3xl bg-primary/20"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="scroll-mt-24 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Expertise
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Services for Every Project Stage
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
              Discover the areas where structured planning,
              coordination, and project oversight can help.
            </p>
          </div>

          {loading ? (
            <div
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              aria-label="Loading services"
              aria-busy="true"
            >
              {Array.from({ length: 6 }, (_, index) => (
                <div
                  key={index}
                  className="min-h-72 animate-pulse rounded-2xl border border-border bg-surface p-7"
                >
                  <div className="h-12 w-12 rounded-xl bg-surface-secondary" />
                  <div className="mt-6 h-5 w-3/4 rounded bg-surface-secondary" />
                  <div className="mt-4 h-4 rounded bg-surface-secondary" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-surface-secondary" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center">
              <p role="alert" className="text-sm text-text-secondary">
                {error}
              </p>
              <button
                type="button"
                onClick={handleRetry}
                className="mt-4 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white hover:opacity-90"
              >
                Try Again
              </button>
            </div>
          ) : services.length === 0 ? (
            <p className="mt-12 rounded-2xl border border-border bg-surface p-8 text-center text-text-secondary">
              No services are available at the moment. Please check
              back soon.
            </p>
          ) : (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Working Process */}
      <section className="border-y border-border bg-surface py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              How We Work
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A clear process from start to finish
            </h2>

            <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base">
              Every project has different requirements. A structured
              workflow helps teams understand the next step.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="relative">
                <span className="text-4xl font-bold text-primary/40">
                  {step.number}
                </span>

                <h3 className="mt-4 text-lg font-bold">{step.title}</h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Our Approach
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              A smarter way to manage projects
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-border bg-surface p-7"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 font-bold text-primary">
                  {index + 1}
                </span>

                <h3 className="mt-5 text-lg font-bold">
                  {benefit.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-text-secondary">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 pb-20 sm:pb-24 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 rounded-3xl bg-slate-950 px-7 py-12 text-white sm:px-12 sm:py-14 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Let's Talk
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Have a project to discuss?
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-300">
              Tell us about your requirements and get in touch with
              our team to discuss the next steps.
            </p>
          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-blue-600 px-6 py-4 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            Contact Us <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
  


