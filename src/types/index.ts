// ─── Project Types ────────────────────────────────────────────
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  techStack: string[];
  highlights: string[];
  href?: string;
  github?: string;
  badge?: ProjectBadge;
  featured?: boolean;
  size?: "large" | "medium" | "small";
}

export type ProjectBadge = {
  label: string;
  variant: "purple" | "blue" | "green" | "orange";
};

// ─── Tech Stack Types ─────────────────────────────────────────
export interface TechItem {
  name: string;
  icon: string;
  justification: string;
  category: TechCategory;
}

export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "devops"
  | "ai"
  | "tools";

// ─── Contact Form Types ───────────────────────────────────────
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// ─── Navigation Types ─────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}
