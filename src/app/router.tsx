import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";
import HomePage from "../pages/webiste/HomePage";
import ServicesPage from "../pages/webiste/ServicesPage";
import LoginPage from "../pages/auth/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/webiste/AboutPage";
import ContactPage from "../pages/webiste/ContactPage";
import ProjectsPage from "../pages/webiste/ProjectsPage";
import DashboardHome from "../pages/dashboard/DashboardHome";
import TestimonialsPage from "../pages/testimonials/TestimonialPage";

import WebsiteLayout from "../layouts/WebsiteLayout";
import PageLoader from "./PageLoader";

import {
  HomePage,
  ServicesPage,
  ProjectsPage,
  ContactPage,
  AboutPage,
  LoginPage,
  DashboardHome,
  NotFoundPage,
} from "./LazyPages";

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: "services", element: withSuspense(<ServicesPage />) },
      { path: "projects", element: withSuspense(<ProjectsPage />) },
      { path: "contact", element: withSuspense(<ContactPage />) },
      { path: "about", element: withSuspense(<AboutPage />) },
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
    ],
  },
  { path: "/login", element: withSuspense(<LoginPage />) },
  { path: "/dashboard", element: withSuspense(<DashboardHome />) },
  { path: "*", element: withSuspense(<NotFoundPage />) },
]);