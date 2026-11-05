import { lazy } from "react";

export const HomePage = lazy(() => import("../features/website/pages/HomePage"));
export const ServicesPage = lazy(() => import("../features/website/pages/ServicesPage"));
export const ProjectsPage = lazy(() => import("../features/website/pages/ProjectsPage"));
export const ContactPage = lazy(() => import("../features/website/pages/ContactPage"));
export const AboutPage = lazy(() => import("../features/website/pages/AboutPage"));
export const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));
export const DashboardHome = lazy(() => import("../features/dashboard/pages/DashboardHome"));
export const NotFoundPage = lazy(() => import("../pages/NotFoundPage.tsx"));