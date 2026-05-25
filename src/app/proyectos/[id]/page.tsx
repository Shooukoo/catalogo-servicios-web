import { notFound } from "next/navigation";
import { projects } from "@/data";
import ProjectDetailClient from "./ProjectDetailClient";

type Props = { params: Promise<{ id: string }> };

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return <ProjectDetailClient project={project} />;
}
