import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
    getProjectById,
    updateProject,
    uploadImage
} from "../services/projectService";

function EditProject() {

    const { id } = useParams();

    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
const [uploading, setUploading] = useState(false);

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

    useEffect(() => {

        getProjectById(id)
            .then(response => {
                setProject(response.data);
            })
            .catch(error => {
                console.error(error);
            });

    }, [id]);

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

        let imageUrl = project.imageUrl;

        if (selectedFile) {

            setUploading(true);

            const uploadResponse =
                await uploadImage(selectedFile);

            imageUrl = uploadResponse.data;

            setUploading(false);
        }

        await updateProject(id, {
            ...project,
            imageUrl
        });

        alert("Project updated successfully");

        navigate("/admin");

    } catch (error) {

        console.error(error);

        alert("Failed to update project");
    }
};

    return (
        <div className="min-h-screen bg-slate-950 text-white p-10">

            <h1 className="text-4xl font-bold mb-8">
                Edit Project
            </h1>

            <form
                onSubmit={handleSubmit}
                className="space-y-4 max-w-3xl"
            >

                <input
                    type="text"
                    name="title"
                    value={project.title}
                    onChange={handleChange}
                    placeholder="Title"
                    className="w-full p-3 rounded bg-slate-800"
                />

                <textarea
                    name="description"
                    value={project.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="techStack"
                    value={project.techStack}
                    onChange={handleChange}
                    placeholder="Tech Stack"
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="githubLink"
                    value={project.githubLink}
                    onChange={handleChange}
                    placeholder="Github Link"
                    className="w-full p-3 rounded bg-slate-800"
                />

                <input
                    type="text"
                    name="liveLink"
                    value={project.liveLink}
                    onChange={handleChange}
                    placeholder="Live Link"
                    className="w-full p-3 rounded bg-slate-800"
                />

                <div>

    {project.imageUrl && (
        <img
    src={project.imageUrl}
    alt={project.title}
            className="
    w-full
    max-w-md
    h-56
    object-cover
    rounded-lg
    mb-4
"
        />
    )}

<label className="block mb-2 text-slate-400">
    Project Image
</label>
    <input
        type="file"
        accept="image/*"
        onChange={(e) =>
            setSelectedFile(e.target.files[0])
        }
        className="w-full p-3 rounded bg-slate-800"
    />

    {uploading && (
        <p className="text-blue-400 mt-2">
            Uploading image...
        </p>
    )}

</div>

                <input
                    type="text"
                    name="category"
                    value={project.category}
                    onChange={handleChange}
                    placeholder="Category"
                    className="w-full p-3 rounded bg-slate-800"
                />

                <label className="flex gap-2 items-center">

                    <input
                        type="checkbox"
                        name="featured"
                        checked={project.featured || false}
                        onChange={handleChange}
                    />

                    Featured Project

                </label>

                <button
    type="submit"
    disabled={uploading}
    className="
        bg-green-500
        px-6
        py-3
        rounded-lg
        disabled:opacity-50
    "
>
    {uploading ? "Uploading..." : "Update Project"}
</button>

            </form>

        </div>
    );
}

export default EditProject;