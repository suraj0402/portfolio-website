import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProjectById } from "../services/projectService";
import { useNavigate } from "react-router-dom";

function ProjectDetails() {

    const { id } = useParams();

    const [project, setProject] = useState(null);

    const navigate = useNavigate();

    

    useEffect(() => {

        getProjectById(id)
            .then(response => {
                setProject(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [id]);

    if (!project) {
        return (
            <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
                Loading...
            </div>
        );
    }

    return (

        
        <div className="min-h-screen bg-slate-950 text-white py-20 px-6">



            <div className="max-w-4xl mx-auto">

                <button
            onClick={() => navigate(-1)}
            className="
                mb-8
                bg-slate-800
                px-4
                py-2
                rounded-lg
                hover:bg-slate-700
                transition
            "
        >
            ← Back
        </button>

                {project.imageUrl && (
                    <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="
    w-full
    h-72
    md:h-80
    object-cover
    rounded-2xl
    mb-8
"
                    />
                )}

                {project.featured && (
    <span
        className="
            inline-block
            mb-4
            bg-emerald-500/20
            text-emerald-400
            px-3
            py-1
            rounded-full
            text-sm
        "
    >
        ⭐ Featured Project
    </span>
)}

                <h1 className="text-3xl md:text-5xl font-bold mb-2">
                    {project.title}
                </h1>

                <div className="flex flex-wrap items-center gap-3 mb-6">

    <p className="text-blue-400">
        {project.techStack}
    </p>

    {project.category && (
        <span
            className="
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

</div>

                <p className="text-slate-300 text-xl leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-8">

                    {project.githubLink && (
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                bg-slate-700
                                px-5
                                py-3
                                rounded-lg
                                hover:bg-blue-600
                                transition
                            "
                        >
                            GitHub
                        </a>
                    )}

                    {project.liveLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noreferrer"
                            className="
                                bg-blue-500
                                px-5
                                py-3
                                rounded-lg
                                hover:bg-slate-600
                                transition
                            "
                        >
                            Live Demo
                        </a>
                    )}

                </div>

            </div>

        </div>
    );
}

export default ProjectDetails;