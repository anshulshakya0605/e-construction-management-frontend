import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import TestimonialsPage from "../features/website/pages/TestimonialsPage";
import WebsiteLayout from "../features/website/layouts/WebsiteLayout";

import {
  HomePage,
  ServicesPage,
  ProjectsPage,
  ContactPage,
  AboutPage,
  LoginPage,
  DashboardHome,
  NotFoundPage,
} from "../app/LazyPages";
import PageLoader from "../components/Loader/PageLoader";

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<PageLoader />}>{element}</Suspense>;
}

export const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: withSuspense(<HomePage />) },
      { path: "about", element: withSuspense(<AboutPage />) },
      { path: "services", element: withSuspense(<ServicesPage />) },
      { path: "projects", element: withSuspense(<ProjectsPage />) },
      { path: "contact", element: withSuspense(<ContactPage />) },
      { path: "testimonials", element: <TestimonialsPage /> },
    ],
  },
  { path: "/login", element: withSuspense(<LoginPage />) },
  { path: "/dashboard", element: withSuspense(<DashboardHome />) },
  { path: "*", element: withSuspense(<NotFoundPage />) },
]);