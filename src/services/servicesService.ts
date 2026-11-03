
import type { Service } from "../types/service";

const mockServices: Service[] = [
  {
    id: "project-management",
    title: "Construction Project Management",
    category: "Management",
    description:
      "Coordinate project activities, teams, timelines, and deliverables from initial planning through completion.",
    features: [
      "Project coordination",
      "Progress monitoring",
      "Stakeholder communication",
    ],
  },
  {
    id: "planning-scheduling",
    title: "Planning & Scheduling",
    category: "Planning",
    description:
      "Organize project milestones, schedules, and resources to support efficient construction delivery.",
    features: [
      "Project schedules",
      "Milestone tracking",
      "Resource planning",
    ],
  },
  {
    id: "design-engineering",
    title: "Design & Engineering Coordination",
    category: "Engineering",
    description:
      "Support coordination between design teams, engineering disciplines, and construction requirements.",
    features: [
      "Design coordination",
      "Technical documentation",
      "Design review support",
    ],
  },
  {
    id: "site-supervision",
    title: "Site Execution & Supervision",
    category: "Execution",
    description:
      "Monitor site activities and coordinate work to help keep construction tasks aligned with project plans.",
    features: [
      "Site activity monitoring",
      "Work coordination",
      "Progress reporting",
    ],
  },
  {
    id: "quality-safety",
    title: "Quality & Safety Management",
    category: "Quality",
    description:
      "Support quality checks, safety procedures, and consistent standards throughout project execution.",
    features: [
      "Quality inspections",
      "Safety coordination",
      "Issue tracking",
    ],
  },
  {
    id: "cost-resources",
    title: "Cost & Resource Management",
    category: "Resources",
    description:
      "Track project costs and resource requirements to support informed planning and financial control.",
    features: [
      "Cost monitoring",
      "Resource allocation",
      "Budget reporting",
    ],
  },
];

export async function getServices(): Promise<Service[]> {
  // Simulate a network request until the backend is available.
  await new Promise<void>((resolve) => setTimeout(resolve, 400));

  return mockServices;
}
