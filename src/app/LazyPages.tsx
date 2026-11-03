import { lazy } from "react";

export const HomePage = lazy(() => import("../pages/webiste/HomePage"));
export const ServicesPage = lazy(() => import("../pages/webiste/ServicesPage"));
export const ProjectsPage = lazy(() => import("../pages/webiste/ProjectsPage"));
export const ContactPage = lazy(() => import("../pages/webiste/ContactPage"));
export const AboutPage = lazy(() => import("../pages/webiste/AboutPage"));
export const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
export const DashboardHome = lazy(() => import("../pages/dashboard/DashboardHome"));
export const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));