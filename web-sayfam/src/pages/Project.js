import line from "../Assets/cizgi.svg";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div className="md:py-10 py-6">
      <img src={line}></img>
      <h2 className="dark:text-[#AEBCCF] text-[#1F2937] font-semibold md:text-5xl text-4xl py-4 ">
        Projects
      </h2>
      <ProjectCard />
      </div>
  );
}