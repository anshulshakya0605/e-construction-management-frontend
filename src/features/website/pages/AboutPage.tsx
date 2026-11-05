
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  HardHat,
  Layers3,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

import aboutImage from "../../../assets/images/aboutSec.jpg";

const aboutFeatures = [
  {
    icon: Building2,
    title: "Complete Project Management",
    description:
      "Manage construction projects and activities through one organized platform.",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Workflows",
    description:
      "Maintain better visibility across project progress, tasks and approvals.",
  },
  {
    icon: HardHat,
    title: "Construction Focused",
    description:
      "Designed around the practical stages of construction and real estate management.",
  },
  {
    icon: Layers3,
    title: "Connected Operations",
    description:
      "Bring teams, project information and day-to-day operations together.",
  },
];

export default function AboutPage() {
  return (
    <section
      id="about"
      className="relative z-0 overflow-hidden bg-background px-4 py-10 sm:px-6 lg:px-8 lg:py-10"
    >
        <div className='w-5 h-5 top-40 left-40 absolute rounded-full shadow-[0px_0px_500px_50px_rgba(255,255,255,0.5)] -z-10 animate-pulse delay-2200 bg-transparent'></div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Image section */}
        <div className="relative mx-auto w-full max-w-145 lg:mx-0">
          {/* Decorative background */}
          <div className="absolute -left-5 -top-5 size-32 rounded-3xl border border-primary/20 sm:-left-7 sm:-top-7" />

          <div className="relative overflow-hidden rounded-[28px] border border-border bg-surface shadow-xl">
            <img
              src={aboutImage}
              alt="Modern architecture and construction development"
              loading="lazy"
              className="aspect-[4/4.2] w-full object-cover transition-transform duration-700 hover:scale-105 sm:aspect-4/3.5"
            />

            <div className="absolute inset-0 bg-linear-to-t from-slate-950/35 via-transparent to-transparent" />
          </div>

          {/* Floating information card */}
          <div className="about-glass-card absolute -bottom-7 right-3 w-55 rounded-2xl p-4 sm:-right-6 sm:w-61.25 sm:p-5">
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Building2 size={23} />
              </span>

              <div>
                <p className="text-sm font-bold text-text">
                  One Connected Platform
                </p>
                <p className="mt-1 text-[11px] text-text-secondary">
                  From planning to handover
                </p>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 border-t border-border pt-3">
              <CheckCircle2 size={15} className="text-primary" />
              <span className="text-xs font-medium text-text-secondary">
                Better project visibility
              </span>
            </div>
          </div>

          {/* Decorative icon */}
          <div className="absolute -right-3 -top-5 flex size-12 items-center justify-center rounded-2xl bg-primary text-white shadow-lg sm:-right-5">
            <HardHat size={23} />
          </div>
        </div>

        {/* Content section */}
        <div className="pt-8 lg:pt-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2">
            <span className="size-2 rounded-full bg-primary" />
            <span className="text-xs font-bold tracking-[1.8px] text-primary">
              ABOUT OUR PLATFORM
            </span>
          </div>

          <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight text-text sm:text-4xl lg:text-5xl">
            Building Better Projects,
            <span className="text-primary"> Together.</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            Managing a construction or real estate project involves
            multiple stages, teams and responsibilities. Our platform
            brings these activities together to make project management
            more organized, transparent and efficient.
          </p>

          <p className="mt-4 text-sm leading-7 text-text-secondary sm:text-base sm:leading-8">
            From plot acquisition and construction to interior work,
            client approvals and final handover, we help keep every
            stage connected in one place.
          </p>

          {/* Features */}
          <div className="mt-9 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2">
            {aboutFeatures.map((feature) => {
              const Icon = feature.icon;

              return (
                <div key={feature.title} className="flex items-start gap-3">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon size={19} />
                  </span>

                  <div>
                    <h3 className="text-sm font-bold text-text">
                      {feature.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-6 text-text-secondary sm:text-[13px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <Link
              to="/about"
              className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-md"
            >
              Discover More
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-text transition-colors hover:text-primary"
            >
              Explore Projects
              <ArrowUpRight
                size={17}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
