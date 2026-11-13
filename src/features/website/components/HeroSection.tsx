
import { useState } from "react";
import {
  Building2,
  Home,
  Search,
  Grid2X2,
  Heart,
  Bookmark,
  Settings,
  MapPin,
  ChevronDown,
  ArrowUpRight,
  BedDouble,
  Bath,
  Maximize2,
  Menu,
} from "lucide-react";
import { Link } from "react-router-dom";

import mainHeroImage from "../../../assets/images/MainHero.webp";
import "./HeroSection.css";

export default function HeroSection() {

  return (
    <section
      id="home"
      className="relative isolate min-h-170 overflow-hidden bg-background px-3 pb-8 pt-4 sm:px-5 lg:min-h-190 lg:px-8 lg:pt-6"
    >
      {/* Main building image */}
      <div className="absolute inset-3 -z-20 overflow-hidden rounded-[28px] sm:inset-5 lg:inset-6">
        <img
          src={mainHeroImage}
          alt="Modern architectural building"
          className="h-full w-full object-cover object-center rounded-[28px]"
          fetchPriority="high"
        />
      </div>

      {/* Image overlay */}
      <div className="hero-image-overlay absolute inset-3 -z-10 rounded-[28px] sm:inset-5 lg:inset-6" />

      {/* Hero content */}
      <div className="relative mx-auto max-w-7xl grid-cols-1 items-center gap-8 pb-20 pt-12 sm:pt-20 lg:grid-cols-[1fr_340px] lg:gap-12 lg:pl-20 lg:pt-10">
        <div className="max-w-2xl relative">
          <span className="mb-5 ms-5 lg:ms-0 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-4 py-1 text-[10px] font-semibold tracking-[2px] text-white backdrop-blur-md sm:text-xs">
            <span className="size-1.5 rounded-full bg-primary" />
            BUILDING TOMORROW, TODAY
          </span>

          <h1 className="max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-3xl ps-5 lg:ps-0 lg:text-4xl ">
            Building Spaces.
            <br />
            <span className="text-blue-300">Creating Futures.</span>
          </h1>

          <p className="mt-3 max-w-md text-xs leading-7 text-white/85 sm:text-base ps-5 lg:ps-0">
            From land acquisition to construction and final handover,
            manage every stage of your real estate journey in one place.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 ps-5 lg:ms-0 absolute top-50 lg:top-90">
            <Link
              to="/projects"
              className="inline-flex min-h-12 items-center gap-3 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-primary-hover"
            >
              Explore Projects
              <ArrowUpRight size={18} />
            </Link>

            <Link
              to="/about"
              className="inline-flex min-h-12 items-center rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/20"
            >
              Discover More
            </Link>
          </div>

          {/* Project highlights */}
          <div className="absolute top-70 lg:top-110 mt-10 flex flex-wrap gap-7 border-t border-white/25 pt-6 ms-5 lg:ms-0">
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">10+</p>
              <p className="mt-1 text-xs text-white/75">Years of experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">50+</p>
              <p className="mt-1 text-xs text-white/75">Projects delivered</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white sm:text-3xl">100%</p>
              <p className="mt-1 text-xs text-white/75">Project visibility</p>
            </div>
          </div>
        </div>

        {/* Floating project card */}
        <div className="flex justify-center sm:justify-end ">
          <div className="hero-glass w-full max-w-[320px] mt-75 me-5 rounded-3xl p-4">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-primary/10 px-3 py-1.5 text-[10px] font-bold text-primary">
                FEATURED PROJECT
              </span>
              <span className="flex size-9 items-center justify-center rounded-full bg-surface text-primary">
                <ArrowUpRight size={18} />
              </span>
            </div>

            <h2 className="mt-5 text-xl font-bold text-text">
              Modern Architecture
            </h2>
            <p className="mt-1 flex items-center gap-1.5 text-xs text-text-secondary">
              <MapPin size={13} className="text-primary" />
              Premium development
            </p>

            <div className="my-5 grid grid-cols-3 gap-2 border-y border-border py-4">
              <div className="flex flex-col items-center gap-1 text-text-secondary">
                <BedDouble size={17} className="text-primary" />
                <span className="text-[10px]">3 Bedrooms</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-text-secondary">
                <Bath size={17} className="text-primary" />
                <span className="text-[10px]">3 Bathrooms</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-text-secondary">
                <Maximize2 size={17} className="text-primary" />
                <span className="text-[10px]">Premium Area</span>
              </div>
            </div>

            <Link
              to="/projects"
              className="flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 text-xs font-semibold text-white transition hover:bg-primary-hover"
            >
              View Projects
              <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
