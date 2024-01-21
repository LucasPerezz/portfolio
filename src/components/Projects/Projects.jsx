import ProjectsLayout from "./ProjectsLayout";


async function getProjects() {
  const res = await fetch("https://portfolio-backendd-k3ou.onrender.com/api/projects", {next: {revalidate: 3600}})
  const data = await res.json();
  return data;
}

export default async function Projects() {

  const projects = await getProjects();

  return (
    <ProjectsLayout projects={projects} />
  );
}
