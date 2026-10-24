import { useMemo, useState } from "react";

type ProjectStatus = "Completed" | "Ongoing" | "Upcoming";

type Project = {
  id: number;
  name: string;
  category: string;
  location: string;
  status: ProjectStatus;
  image: string;
  description: string;
  client: string;
  area: string;
  duration: string;
  progress: number;
  startDate: string;
  completionDate: string;
  highlights: string[];
};

const projects: Project[] = [
  {
    id: 1,
    name: "Skyline Heights",
    category: "Residential",
    location: "Noida, Uttar Pradesh",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1000&q=80",
    description: "A modern residential development focused on quality construction, efficient planning and contemporary living.",
    client: "Demo Residential Group",
    area: "2,40,000 sq. ft.",
    duration: "24 months",
    progress: 68,
    startDate: "January 2025",
    completionDate: "December 2026",
    highlights: ["Modern residential apartments", "Dedicated parking", "Landscaped outdoor spaces", "Quality-focused construction"],
  },
  {
    id: 2,
    name: "Corporate Business Park",
    category: "Commercial",
    location: "Gurugram, Haryana",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    description: "A commercial workspace designed for professional environments, efficient operations and modern business needs.",
    client: "Demo Commercial Group",
    area: "1,80,000 sq. ft.",
    duration: "20 months",
    progress: 100,
    startDate: "March 2023",
    completionDate: "November 2024",
    highlights: ["Contemporary office architecture", "Efficient floor planning", "Commercial infrastructure", "Project handover"],
  },
  {
    id: 3,
    name: "Urban Infrastructure Hub",
    category: "Infrastructure",
    location: "Lucknow, Uttar Pradesh",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1000&q=80",
    description: "An infrastructure development built around functional planning and coordinated construction execution.",
    client: "Demo Infrastructure Group",
    area: "3,20,000 sq. ft.",
    duration: "30 months",
    progress: 42,
    startDate: "April 2025",
    completionDate: "October 2027",
    highlights: ["Infrastructure development", "Coordinated execution", "Progress monitoring", "Long-term usability"],
  },
  {
    id: 4,
    name: "Green Valley Residences",
    category: "Residential",
    location: "Greater Noida, Uttar Pradesh",
    status: "Completed",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    description: "A residential development combining practical layouts, contemporary architecture and shared outdoor spaces.",
    client: "Demo Housing Group",
    area: "1,50,000 sq. ft.",
    duration: "18 months",
    progress: 100,
    startDate: "June 2023",
    completionDate: "December 2024",
    highlights: ["Contemporary design", "Functional layouts", "Shared outdoor spaces", "Completed handover"],
  },
  {
    id: 5,
    name: "Industrial Logistics Centre",
    category: "Industrial",
    location: "Faridabad, Haryana",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1000&q=80",
    description: "A planned industrial facility focused on operational workflows, logistics and practical infrastructure.",
    client: "Demo Industrial Group",
    area: "2,80,000 sq. ft.",
    duration: "26 months",
    progress: 0,
    startDate: "January 2027",
    completionDate: "March 2029",
    highlights: ["Industrial facility planning", "Logistics-focused layout", "Operational workflows", "Infrastructure delivery"],
  },
  {
    id: 6,
    name: "Premium Office Tower",
    category: "Commercial",
    location: "Delhi, India",
    status: "Ongoing",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    description: "A commercial development focused on efficient office spaces and coordinated construction activities.",
    client: "Demo Business Group",
    area: "2,10,000 sq. ft.",
    duration: "22 months",
    progress: 55,
    startDate: "February 2025",
    completionDate: "December 2026",
    highlights: ["Modern office spaces", "Efficient building layouts", "Coordinated execution", "Commercial design"],
  },
];

const categories = [
  "All Projects",
  "Residential",
  "Commercial",
  "Infrastructure",
  "Industrial",
];

const statusClasses: Record<ProjectStatus, string> = {
  Completed: "bg-emerald-100 text-emerald-800",
  Ongoing: "bg-blue-100 text-blue-800",
  Upcoming: "bg-amber-100 text-amber-800",
};

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: (project: Project) => void;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-slate-500">
            Construction project
          </div>
        )}

        <span
          className={`absolute left-4 top-4 rounded-md px-3 py-1.5 text-xs font-bold ${statusClasses[project.status]}`}
        >
          {project.status}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
          {project.category}
        </p>

        <h3 className="mt-2 text-xl font-bold tracking-tight text-slate-900">
          {project.name}
        </h3>

        <p className="mt-2 text-sm text-slate-500">
          <span aria-hidden="true">⌖ </span>
          {project.location}
        </p>

        <p className="mt-4 min-h-16 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        <div className="mt-5 flex items-center justify-between text-xs text-slate-500">
          <span>Project progress</span>
          <strong className="text-slate-800">{project.progress}%</strong>
        </div>

        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label={`${project.name} progress`}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={project.progress}
        >
          <div
            className="h-full rounded-full bg-blue-600 transition-all"
            style={{ width: `${project.progress}%` }}
          />
        </div>

        <div className="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
          <span className="text-xs text-slate-500">
            {project.status === "Completed"
              ? `Completed ${project.completionDate}`
              : project.status === "Upcoming"
                ? `Starts ${project.startDate}`
                : `Est. ${project.completionDate}`}
          </span>

          <button
            type="button"
            onClick={() => onOpen(project)}
            className="shrink-0 rounded-md px-2 py-2 text-sm font-bold text-blue-700 transition hover:bg-blue-50 hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            View details ↗
          </button>
        </div>
      </div>
    </article>
  );
}

function ProjectDetails({
  project,
  onBack,
}: {
  project: Project;
  onBack: () => void;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-950 py-5 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-white/20 px-4 py-2.5 text-sm font-semibold transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400"
          >
            ← Back to all projects
          </button>
        </div>
      </div>

      <section className="relative h-[350px] overflow-hidden bg-slate-800 sm:h-[450px]">
        {!imageFailed && (
          <img
            src={project.image}
            alt={project.name}
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/65 to-slate-950/10" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-5 text-white sm:px-8">
          <span
            className={`rounded-md px-3 py-1.5 text-xs font-bold ${statusClasses[project.status]}`}
          >
            {project.status}
          </span>

          <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
            {project.name}
          </h1>

          <p className="mt-4 text-sm text-slate-200 sm:text-base">
            {project.category} · {project.location}
          </p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
            {project.description}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Project overview
            </p>
            <h2 className="mt-3 text-2xl font-bold text-slate-900">
              About this project
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.description}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-slate-900">
              Project highlights
            </h2>
            <ul className="mt-5 space-y-4">
              {project.highlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="font-bold text-emerald-600">✓</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex justify-between gap-4">
              <h2 className="text-xl font-bold text-slate-900">
                Project progress
              </h2>
              <strong className="text-blue-700">
                {project.progress}%
              </strong>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600"
                style={{ width: `${project.progress}%` }}
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-slate-500">
              {project.status === "Completed"
                ? "This demo project is marked as completed."
                : project.status === "Upcoming"
                  ? "This demo project is planned for a future start."
                  : "This demo project is currently in progress."}
            </p>
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold text-slate-900">
            Project information
          </h2>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["Category", project.category],
              ["Status", project.status],
              ["Total area", project.area],
              ["Duration", project.duration],
              ["Start date", project.startDate],
              ["Completion", project.completionDate],
              ["Client", project.client],
              ["Location", project.location],
            ].map(([label, value]) => (
              <div
                key={label}
                className="min-w-0 rounded-xl bg-slate-50 p-4"
              >
                <dt className="text-xs text-slate-500">{label}</dt>
                <dd className="mt-2 break-words text-sm font-semibold leading-6 text-slate-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Demo information only. Replace it with approved company
            project data before publishing.
          </p>
        </aside>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [search, setSearch] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    null
  );

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "All Projects" ||
        project.category === activeCategory;

      const matchesSearch =
        !query ||
        [
          project.name,
          project.category,
          project.location,
          project.status,
          project.description,
        ].some((value) => value.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute -right-32 -top-40 -z-10 h-96 w-96 rounded-full border border-white/10 shadow-[0_0_0_60px_rgba(255,255,255,0.03),0_0_0_120px_rgba(255,255,255,0.02)]"
        />

        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
            <span className="h-px w-9 bg-blue-400" />
            Our portfolio
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Building the future.
            <br />
            <span className="text-blue-400">
              One project at a time.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
            Explore our construction portfolio and discover the
            developments, spaces and infrastructure that bring ambitious
            ideas to life.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() =>
                document
                  .getElementById("all-projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="rounded-lg bg-blue-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              Explore projects ↓
            </button>

            <span className="text-xs leading-6 text-slate-400">
              Residential · Commercial · Infrastructure
            </span>
          </div>
        </div>
      </section>

      <section
        id="all-projects"
        className="scroll-mt-8 py-14 sm:py-20"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
                Selected work
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Projects
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-500">
                Discover construction projects by category, location
                and project status.
              </p>
            </div>

            <p className="text-sm text-slate-500" aria-live="polite">
              {filteredProjects.length} projects found
            </p>
          </div>

          <div className="mt-8 max-w-xl">
            <label className="relative block">
              <span className="sr-only">Search projects</span>
              <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-slate-400">
                ⌕
              </span>
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by project name or location..."
                className="w-full rounded-xl border border-slate-200 bg-white py-3.5 pl-11 pr-4 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>
          </div>

          <div
            className="mt-6 flex flex-wrap gap-2"
            aria-label="Filter by project category"
          >
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-lg border px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
                  activeCategory === category
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-400 hover:text-blue-700"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpen={setSelectedProject}
                />
              ))
            ) : (
              <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
                <p className="text-3xl text-slate-400">⌕</p>
                <h3 className="mt-4 text-xl font-bold">
                  No projects found
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Try another search or change the selected category.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("All Projects");
                  }}
                  className="mt-5 rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-700"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
