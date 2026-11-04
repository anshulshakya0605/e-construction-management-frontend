import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
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
      { path: "testimonials", element: <TestimonialsPage /> },
    ],
  },
  { path: "/login", element: withSuspense(<LoginPage />) },
  { path: "/dashboard", element: withSuspense(<DashboardHome />) },
  { path: "*", element: withSuspense(<NotFoundPage />) },
]);