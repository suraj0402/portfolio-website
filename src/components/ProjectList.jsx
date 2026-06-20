import { useEffect, useState } from "react";
// import { getProjects } from "../services/projectService";
import { getFeaturedProjects } from "../services/projectService";
import { useNavigate } from "react-router-dom";

function ProjectList() {

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getFeaturedProjects()
      .then(response => {
        setProjects(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

//   const featuredProjects = projects.filter(
//     project => project.featured
// );

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white py-20"
    >

      <h2 className="text-5xl font-bold text-center mb-12">
        Featured Projects
      </h2>

      <div className="max-w-7xl px-8 mx-auto grid md:grid-cols-2 xl:grid-cols-3 gap-6">

       {projects.map(project => (

          <div
  key={project.id}
  onClick={() => navigate(`/project/${project.id}`)}
  className="
    bg-slate-800
    p-8
    rounded-2xl
    border
    border-slate-700
    cursor-pointer
    transition-all
    duration-300
    hover:-translate-y-3
    hover:scale-[1.02]
    hover:border-blue-500
    hover:shadow-2xl
    hover:shadow-blue-500/20
  "
>


  {project.imageUrl && (
    <img
        src={project.imageUrl}
        alt={project.title}
        className="
            w-full
            h-48
            object-cover
            rounded-xl
            mb-4
        "
    />
)}

            <h3 className="text-2xl font-bold mb-3">
              {project.title}
              
            </h3>

            <p className="text-lg text-slate-400 mt-4">
              {project.description}
            </p>

            <p className="text-blue-400 mt-4">
              {project.techStack}
            </p>

            {project.category && (
  <span
    className="
      inline-block
      mt-3
      bg-blue-500/20
      text-blue-400
      px-3
      py-1
      rounded-full
      text-sm
    "
  >
    {project.category}
  </span>
)}

<div className="flex flex-wrap gap-3 mt-6">

  {project.githubLink && (
    <a onClick={(e) => e.stopPropagation()}
      href={project.githubLink}
      target="_blank"
      rel="noreferrer"
      className="
        bg-slate-700
        px-4
        py-2
        rounded-lg
        hover:bg-slate-600
        transition
      "
    >
      GitHub
    </a>
  )}

  {project.liveLink && (
    <a onClick={(e) => e.stopPropagation()}
      href={project.liveLink}
      target="_blank"
      rel="noreferrer"
      className="
        bg-blue-500
        px-4
        py-2
        rounded-lg
        hover:bg-blue-600
        transition
      "
    >
      Live Demo
    </a>
  )}

</div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProjectList;