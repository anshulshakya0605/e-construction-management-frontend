import { createBrowserRouter } from "react-router-dom";
import WebsiteLayout from "../layouts/WebsiteLayout";
import HomePage from "../pages/webiste/HomePage";
import ServicesPage from "../pages/webiste/ServicesPage";
import LoginPage from "../pages/auth/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import AboutPage from "../pages/webiste/AboutPage";
import ContactPage from "../pages/webiste/ContactPage";
import ProjectsPage from "../pages/webiste/ProjectsPage";
import TestimonialsPage from "../pages/testimonials/TestimonialPage";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "projects", element: <ProjectsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "testimonials", element: <TestimonialsPage /> },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);