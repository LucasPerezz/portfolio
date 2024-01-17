import SkillsLayout from "./SkillsLayout";

async function getSkills() {
  const res = await fetch("https://portfolio-backendd-k3ou.onrender.com/api/skills")
  const data = await res.json();
  return data;
}

export default async function Skills() {

  const skills = await getSkills();

  return (
    <SkillsLayout skills={skills} />
  );
}
