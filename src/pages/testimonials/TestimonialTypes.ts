export type ProjectCategory =
  | "HOME"
  | "SCHOOL"
  | "COLLEGE"
  | "HOTEL"
  | "HOSPITAL"
  | "PRIVATE_COMPANY"
  | "VILLA";

export interface Testimonial {
  id: number;
  clientName: string;
  designation: string;
  company: string;
  projectName: string;
  category: ProjectCategory;
  rating: number;
  feedback: string;
  date: string;
  verified: boolean;
}