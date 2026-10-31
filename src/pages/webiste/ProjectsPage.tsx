import { useMemo, useState } from "react";

type ProjectType =
  | "HOME"
  | "SCHOOL"
  | "COLLEGE"
  | "HOTEL"
  | "HOSPITAL"
  | "PRIVATE_COMPANY"
  | "VILLA";

type ProjectStatus = "COMPLETED" | "ONGOING" | "UPCOMING";

type Project = {
  id: number;
  title: string;
  type: ProjectType;
  status: ProjectStatus;
  city: string;
  area: string;
  contractor: string;
  description: string;
  image: string;
  progress: number;
  budget: string;
  startDate: string;
  completionDate: string;
  features: string[];
};

const categoryLabels: Record<ProjectType, string> = {
  HOME: "Homes",
  SCHOOL: "Schools",
  COLLEGE: "Colleges",
  HOTEL: "Hotels",
  HOSPITAL: "Hospitals",
  PRIVATE_COMPANY: "Private Companies",
  VILLA: "Villas",
};

const categories: ProjectType[] = [
  "HOME",
  "SCHOOL",
  "COLLEGE",
  "HOTEL",
  "HOSPITAL",
  "PRIVATE_COMPANY",
  "VILLA",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Family Home",
    type: "HOME",
    status: "ONGOING",
    city: "Noida",
    area: "Sector 62",
    contractor: "Demo Local Contractor",
    description:
      "Residential construction project focused on durable materials, practical layouts, transparent progress tracking and quality finishing.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    progress: 65,
    budget: "Not disclosed",
    startDate: "January 2026",
    completionDate: "December 2026",
    features: [
      "Foundation and structural work",
      "Electrical and plumbing coordination",
      "Material and labour planning",
      "Finishing and quality checks",
    ],
  },
  {
    id: 2,
    title: "Community Public School",
    type: "SCHOOL",
    status: "COMPLETED",
    city: "Ghaziabad",
    area: "Indirapuram",
    contractor: "Demo Education Projects",
    description:
      "A school construction project designed around functional classrooms, circulation, sanitation and a safe learning environment.",
    image:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=85",
    progress: 100,
    budget: "Not disclosed",
    startDate: "March 2025",
    completionDate: "January 2026",
    features: [
      "Classroom construction",
      "Sanitation facilities",
      "Accessible circulation planning",
      "Finishing and handover",
    ],
  },
  {
    id: 3,
    title: "Higher Education Campus",
    type: "COLLEGE",
    status: "ONGOING",
    city: "Greater Noida",
    area: "Knowledge Park",
    contractor: "Demo Campus Builders",
    description:
      "A college campus project covering academic spaces, student facilities and coordinated execution across construction stages.",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1200&q=85",
    progress: 48,
    budget: "Not disclosed",
    startDate: "February 2026",
    completionDate: "June 2027",
    features: [
      "Academic building construction",
      "Laboratory and classroom spaces",
      "Utility coordination",
      "Stage-wise quality inspections",
    ],
  },
  {
    id: 4,
    title: "City Business Hotel",
    type: "HOTEL",
    status: "ONGOING",
    city: "Haridwar",
    area: "Ranipur",
    contractor: "Demo Hospitality Projects",
    description:
      "A hospitality construction project focused on guest rooms, service areas, building utilities and practical operational layouts.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=85",
    progress: 57,
    budget: "Not disclosed",
    startDate: "April 2026",
    completionDate: "March 2027",
    features: [
      "Guest room construction",
      "Reception and common areas",
      "Plumbing and electrical coordination",
      "Interior finishing",
    ],
  },
  {
    id: 5,
    title: "Community Healthcare Centre",
    type: "HOSPITAL",
    status: "UPCOMING",
    city: "Meerut",
    area: "Modipuram",
    contractor: "Demo Healthcare Projects",
    description:
      "A proposed healthcare facility requiring coordinated planning for patient areas, circulation, utilities and specialist building requirements.",
    image:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1200&q=85",
    progress: 0,
    budget: "Not disclosed",
    startDate: "November 2026",
    completionDate: "October 2027",
    features: [
      "Patient and consultation areas",
      "Accessible circulation",
      "Building services coordination",
      "Healthcare-specific compliance planning",
    ],
  },
  {
    id: 6,
    title: "Local Business Office",
    type: "PRIVATE_COMPANY",
    status: "COMPLETED",
    city: "Delhi",
    area: "Rohini",
    contractor: "Demo Commercial Builders",
    description:
      "A private company office project focused on functional workspaces, service installations, finishing and timely handover.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=85",
    progress: 100,
    budget: "Not disclosed",
    startDate: "June 2025",
    completionDate: "February 2026",
    features: [
      "Office and meeting spaces",
      "Electrical and data cabling",
      "Interior finishing",
      "Project handover",
    ],
  },
  {
    id: 7,
    title: "Independent Luxury Villa",
    type: "VILLA",
    status: "ONGOING",
    city: "Dehradun",
    area: "Rajpur Road",
    contractor: "Demo Villa Contractors",
    description:
      "An independent villa project focused on customized layouts, structural quality, outdoor spaces and premium finishing.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85",
    progress: 72,
    budget: "Not disclosed",
    startDate: "December 2025",
    completionDate: "November 2026",
    features: [
      "Customized residential layout",
      "Structural and finishing work",
      "Outdoor space planning",
      "Material selection and inspection",
    ],
  },
];

const statusStyles: Record<ProjectStatus, string> = {
  COMPLETED: "bg-emerald-100 text-emerald-800",
  ONGOING: "bg-blue-100 text-blue-800",
  UPCOMING: "bg-amber-100 text-amber-800",
};

const statusLabels: Record<ProjectStatus, string> = {
  COMPLETED: "Completed",
  ONGOING: "Ongoing",
  UPCOMING: "Upcoming",
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
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative h-56 overflow-hidden bg-slate-100">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="grid h-full place-items-center text-sm text-slate-500">
            Project image unavailable
          </div>
        )}

        <span
          className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-bold ${statusStyles[project.status]}`}
        >
          {statusLabels[project.status]}
        </span>
      </div>

      <div className="p-5">
        <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
          {categoryLabels[project.type]}
        </span>

        <h2 className="mt-2 text-xl font-bold text-slate-900">
          {project.title}
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          <span aria-hidden="true">📍 </span>
          {project.area}, {project.city}
        </p>

        <p className="mt-4 min-h-20 text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        <div className="mt-5 flex justify-between text-xs text-slate-500">
          <span>Construction progress</span>
          <span className="font-bold text-slate-900">
            {project.progress}%
          </span>
        </div>

        <div
          className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100"
          role="progressbar"
          aria-label={`${project.title} construction progress`}
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
            {project.status === "COMPLETED"
              ? `Completed ${project.completionDate}`
              : project.status === "UPCOMING"
                ? `Starts ${project.startDate}`
                : `Est. ${project.completionDate}`}
          </span>

          <button
            type="button"
            onClick={() => onOpen(project)}
            className="shrink-0 rounded-lg px-3 py-2 text-sm font-bold text-blue-700 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            View details →
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
    <main className="min-h-screen bg-slate-50">
      <div className="bg-slate-950 py-5 text-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <button
            type="button"
            onClick={onBack}
            className="rounded-lg border border-white/20 px-4 py-2.5 text-sm hover:bg-white/10"
          >
            ← Back to projects
          </button>
        </div>
      </div>

      <section className="relative h-[350px] overflow-hidden bg-slate-800 sm:h-[440px]">
        {!imageFailed && (
          <img
            src={project.image}
            alt={project.title}
            onError={() => setImageFailed(true)}
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-transparent" />

        <div className="relative mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-5 text-white sm:px-8">
          <span
            className={`rounded-full px-3 py-1.5 text-xs font-bold ${statusStyles[project.status]}`}
          >
            {statusLabels[project.status]}
          </span>

          <p className="mt-5 text-sm font-bold uppercase tracking-widest text-blue-300">
            {categoryLabels[project.type]}
          </p>

          <h1 className="mt-2 text-4xl font-bold sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-4 text-sm text-slate-200">
            📍 {project.area}, {project.city}
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 sm:px-8 lg:grid-cols-[1.5fr_1fr]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
              Project overview
            </p>

            <h2 className="mt-3 text-2xl font-bold">
              About this project
            </h2>

            <p className="mt-4 text-sm leading-7 text-slate-600">
              {project.description}
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <h2 className="text-xl font-bold">Construction scope</h2>

            <ul className="mt-5 space-y-4">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex gap-3 text-sm leading-6 text-slate-600"
                >
                  <span className="font-bold text-emerald-600">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
            <div className="flex justify-between gap-3">
              <h2 className="text-xl font-bold">Project progress</h2>
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
          </section>
        </div>

        <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <h2 className="text-xl font-bold">Project information</h2>

          <dl className="mt-6 grid grid-cols-2 gap-3">
            {[
              ["Project type", categoryLabels[project.type]],
              ["Status", statusLabels[project.status]],
              ["City", project.city],
              ["Local area", project.area],
              ["Contractor", project.contractor],
              ["Budget", project.budget],
              ["Start date", project.startDate],
              ["Expected completion", project.completionDate],
            ].map(([label, value]) => (
              <div
                key={label}
                className="min-w-0 rounded-xl bg-slate-50 p-4"
              >
                <dt className="text-xs text-slate-500">{label}</dt>
                <dd className="mt-2 break-words text-sm font-semibold text-slate-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-5 text-xs leading-5 text-slate-500">
            Illustrative demo data. Contractor and project information
            must be verified before publication.
          </p>
        </aside>
      </div>
    </main>
  );
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] =
    useState<ProjectType | "ALL">("ALL");

  const [search, setSearch] = useState("");
  const [selectedCity, setSelectedCity] = useState("ALL");
  const [selectedStatus, setSelectedStatus] =
    useState<ProjectStatus | "ALL">("ALL");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const cities = useMemo(
    () => [...new Set(projects.map((project) => project.city))].sort(),
    []
  );

  const filteredProjects = useMemo(() => {
    const query = search.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === "ALL" || project.type === activeCategory;

      const matchesCity =
        selectedCity === "ALL" || project.city === selectedCity;

      const matchesStatus =
        selectedStatus === "ALL" || project.status === selectedStatus;

      const searchableText = [
        project.title,
        categoryLabels[project.type],
        project.city,
        project.area,
        project.contractor,
        project.description,
      ]
        .join(" ")
        .toLowerCase();

      return (
        matchesCategory &&
        matchesCity &&
        matchesStatus &&
        (!query || searchableText.includes(query))
      );
    });
  }, [activeCategory, selectedCity, selectedStatus, search]);

  if (selectedProject) {
    return (
      <ProjectDetails
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  function clearFilters() {
    setActiveCategory("ALL");
    setSelectedCity("ALL");
    setSelectedStatus("ALL");
    setSearch("");
  }

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300">
            Construction projects near you
          </p>

          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            From local homes to
            <br />
            <span className="text-blue-400">
              large construction projects.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Explore homes, schools, colleges, hotels, hospitals,
            private companies and villas. Discover construction work
            by project type, city and local area.
          </p>

          <button
            type="button"
            onClick={() =>
              document
                .getElementById("project-directory")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 rounded-lg bg-blue-500 px-5 py-3.5 text-sm font-bold text-white transition hover:bg-blue-600"
          >
            Explore projects ↓
          </button>
        </div>
      </section>

      <section
        id="project-directory"
        className="scroll-mt-8 py-12 sm:py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-700">
                Project directory
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Find the right project
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
                Browse local construction projects and explore their
                scope, progress, location and contractor information.
              </p>
            </div>

            <p className="text-sm text-slate-500" aria-live="polite">
              {filteredProjects.length} projects found
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <label className="block md:col-span-3">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                Search projects
              </span>

              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search by project, contractor, city or area..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                City
              </span>

              <select
                value={selectedCity}
                onChange={(event) => setSelectedCity(event.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-500"
              >
                <option value="ALL">All cities</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                Project status
              </span>

              <select
                value={selectedStatus}
                onChange={(event) =>
                  setSelectedStatus(event.target.value as ProjectStatus | "ALL")
                }
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm outline-none focus:border-blue-500"
              >
                <option value="ALL">All statuses</option>
                <option value="ONGOING">Ongoing</option>
                <option value="COMPLETED">Completed</option>
                <option value="UPCOMING">Upcoming</option>
              </select>
            </label>

            <div className="flex items-end">
              <button
                type="button"
                onClick={clearFilters}
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Clear all filters
              </button>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveCategory("ALL")}
              aria-pressed={activeCategory === "ALL"}
              className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
                activeCategory === "ALL"
                  ? "border-slate-900 bg-slate-900 text-white"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-400"
              }`}
            >
              All projects
            </button>

            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-lg border px-4 py-2.5 text-sm font-semibold transition ${
                  activeCategory === category
                    ? "border-slate-900 bg-slate-900 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-blue-400"
                }`}
              >
                {categoryLabels[category]}
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
                <h3 className="text-xl font-bold">
                  No matching projects found
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Try another city, category or search term. More local
                  projects can be listed as verified data becomes available.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="mt-5 rounded-lg bg-slate-900 px-5 py-3 text-sm font-bold text-white hover:bg-slate-700"
                >
                  Reset search
                </button>
              </div>
            )}
          </div>

          <div className="mt-12 rounded-2xl border border-blue-100 bg-blue-50 p-6 sm:p-8">
            <h2 className="text-xl font-bold text-slate-900">
              Building in your local area?
            </h2>

            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              Local construction work often involves coordinating
              contractors, labour, materials, budgets and project
              timelines. A well-maintained project directory can help
              customers explore previous work and help contractors
              present their services more clearly.
            </p>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              This demo does not yet provide contractor registration,
              enquiries, verification or project submission.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

