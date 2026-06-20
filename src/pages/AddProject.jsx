import { useState } from "react";
import {
    createProject,
    uploadImage
} from "../services/projectService";
import { useNavigate } from "react-router-dom";

function AddProject() {

    const [project, setProject] = useState({
        title: "",
        description: "",
        techStack: "",
        githubLink: "",
        liveLink: "",
        imageUrl: "",
        featured: false,
        category: ""
    });

    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
const [uploading, setUploading] = useState(false);

    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setProject({
            ...project,
            [name]: type === "checkbox" ? checked : value
        });
    };

    const handleSubmit = async (e) => {

    e.preventDefault();

    try {

        let imageUrl = "";

        if (selectedFile) {

            setUploading(true);

            const uploadResponse =
                await uploadImage(selectedFile);

            imageUrl = uploadResponse.data;

            setUploading(false);
        }

        const projectData = {
            ...project,
            imageUrl
        };

        await createProject(projectData);

        alert("Project added successfully");

        navigate("/admin");

    } catch (error) {

        console.error(error);

        alert("Failed to add project");
    }
};

    return (
        <div className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-4xl font-bold mb-8">
                Add Project
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-3xl"
            >

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={project.title}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <textarea
                    name="description"
                    placeholder="Description"
                    value={project.description}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="techStack"
                    placeholder="Tech Stack"
                    value={project.techStack}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="githubLink"
                    placeholder="Github Link"
                    value={project.githubLink}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="liveLink"
                    placeholder="Live Link"
                    value={project.liveLink}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

               <div>

    <input
        type="file"
        accept="image/*"
        onChange={(e) =>
            setSelectedFile(e.target.files[0])
        }
        className="w-full p-3 rounded bg-slate-800"
    />

    {uploading && (
        <p className="mt-2 text-blue-400">
            Uploading image...
        </p>
    )}

</div>

                <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={project.category}
                    onChange={handleChange}
                    className="w-full p-3 rounded bg-slate-800"
                />

                <label className="flex gap-2 items-center">

                    <input
                        type="checkbox"
                        name="featured"
                        checked={project.featured}
                        onChange={handleChange}
                    />

                    Featured Project

                </label>

                <button
                    type="submit"
                    className="
                        bg-blue-500
                        px-6
                        py-3
                        rounded-lg
                    "
                >
                    Save Project
                </button>

            </form>

        </div>
    );
}

export default AddProject;