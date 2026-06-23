import { useEffect, useState } from "react";
import {
    getProjects,
    deleteProject,
    getStats
} from "../services/projectService";
import { useNavigate } from "react-router-dom";


function AdminProjects() {

    const [projects, setProjects] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);
    const navigate = useNavigate();
    const [totalProjects, setTotalProjects] = useState(0);
    const [featuredCount, setFeaturedCount] = useState(0);
    const [categoryCount, setCategoryCount] = useState(0);
    const [categoryFilter, setCategoryFilter] =
    useState("All");
    

    useEffect(() => {

    getProjects(page)
        .then(response => {

            
            setProjects(response.data.content);
            setTotalPages(response.data.totalPages);
            setTotalProjects(response.data.totalElements);

        })
        .catch(error => {
            console.error(error);
        });

}, [page]);

useEffect(() => {

    getStats()
        .then(response => {

            setTotalProjects(
                response.data.totalProjects
            );

            setFeaturedCount(
                response.data.featuredProjects
            );

            setCategoryCount(
                response.data.categories
            );

        })
        .catch(error => {
            console.error(error);
        });

}, []);

    const handleDelete = (id) => {

        if (!window.confirm("Delete this project?")) {
            return;
        }

        deleteProject(id)
            .then(() => {

                setProjects(
                    projects.filter(
                        project => project.id !== id
                    )
                );

                alert("Project deleted successfully");

            })
            .catch(error => {
                console.error(error);
                alert("Failed to delete project");
            });
    };

    return (
        <div className="min-h-screen bg-slate-950 text-white p-4 md:p-10">

            <div className="flex justify-between items-center mb-8">

    <h1 className="text-3xl md:text-4xl font-bold">
        Admin Dashboard
    </h1>

    <button
    onClick={() => {

        localStorage.removeItem("token");

        navigate("/login");
    }}
    className="
        bg-red-500
        px-4
        py-2
        rounded-lg
        mb-4
    "
>
    Logout
</button>

</div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                <div className="bg-slate-800 p-6 rounded-xl">
                    <h2 className="text-lg text-slate-400">
                        Total Projects
                    </h2>

                    <p className="text-3xl font-bold">
                        {totalProjects}
                    </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl">
                    <h2 className="text-lg text-slate-400">
                        Featured Projects
                    </h2>

                    <p className="text-3xl font-bold">
                        {featuredCount}
                    </p>
                </div>

                <div className="bg-slate-800 p-6 rounded-xl">
                    <h2 className="text-lg text-slate-400">
                        Categories
                    </h2>

                    <p className="text-3xl font-bold">
                         {categoryCount}
                    </p>
                </div>

            </div>

            {/* Add Button */}
            <button
                onClick={() => navigate("/admin/add")}
                className="
                    bg-blue-500
                    px-6
                    py-3
                    rounded-xl
                    font-semibold
                    hover:bg-blue-600
                    transition
                    mb-8
                "
            >
                Add Project
            </button>

            {/* Search */}
            <input
                type="text"
                placeholder="Search projects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                    w-full
                    p-3
                    mb-6
                    rounded-lg
                    bg-slate-800
                    text-sm
                    md:text-base
                "
            />

            <select
    value={categoryFilter}
    onChange={(e) =>
        setCategoryFilter(e.target.value)
    }
    className="
        w-full
        p-3
        mb-6
        rounded-lg
        bg-slate-800
    "
>
    <option>All</option>
    <option>Java</option>
    <option>Spring Boot</option>
    <option>React</option>
    <option>Full Stack</option>
</select>

            {/* {projects.filter(project =>
                project.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
            ).length === 0 && (

                <p className="text-center text-slate-400">
                    No projects found
                </p>

            )} */}

            {projects.filter(project => {

    const matchesSearch =
        project.title
            .toLowerCase()
            .includes(search.toLowerCase());

    const matchesCategory =
        categoryFilter === "All" ||
        project.category === categoryFilter;

    return matchesSearch &&
           matchesCategory;
}).length === 0 && (

        <p className="text-center text-slate-400">
            No projects found
        </p>
)}

            <div className="space-y-4">

                {projects
    .filter(project => {

        const matchesSearch =
            project.title
                .toLowerCase()
                .includes(search.toLowerCase());

        const matchesCategory =
            categoryFilter === "All" ||
            project.category === categoryFilter;

        return matchesSearch &&
               matchesCategory;
    })
    .map(project => (

                        <div
    key={project.id}
    className="
        bg-slate-800
        p-4 md:p-6
        rounded-xl
        flex
        flex-col
        md:flex-row
        md:items-center
        gap-4
    "
>

                            {/* Left Side */}
                            <div
    className="
        flex
        flex-col
        md:flex-row
        items-start
        md:items-center
        gap-4
        flex-1
    "
>
                                {project.imageUrl && (
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="
                                            w-16
                                            h-16
                                            md:w-20
                                            md:h-20
                                            object-cover
                                            rounded-lg
                                        "
                                    />
                                )}

                                <div>

                                    <div className="flex flex-wrap items-center gap-2">

                                        <h3 className="text-lg md:text-xl font-bold break-words">
                                            {project.title}
                                        </h3>

                                        {project.featured && (
                                            <span
                                                className="
                                                    bg-emerald-500/20
                                                    text-emerald-400
                                                    px-2
                                                    py-1
                                                    rounded
                                                    text-sm
                                                "
                                            >
                                                Featured
                                            </span>
                                        )}

                                    </div>

                                    <p className="text-slate-400 mt-2">
                                        {project.techStack}
                                    </p>

                                    <p className="text-slate-300 text-sm mt-2 max-w-2xl line-clamp-2">
                                        {project.description}
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

                                </div>

                            </div>

                            {/* Buttons */}
                            <div
    className="
        flex
        gap-3
        shrink-0
        self-start
        md:self-center
    "
>
                               <button
  onClick={() => navigate(`/admin/edit/${project.id}`)}
  className="
    bg-yellow-500
    px-5
    py-2
    rounded-lg
    hover:bg-yellow-600
    transition
  "
>
  Edit
</button>

<button
  onClick={() => handleDelete(project.id)}
  className="
    bg-red-500
    px-5
    py-2
    rounded-lg
    hover:bg-red-600
    transition
  "
>
  Delete
</button>

                            </div>

                        </div>

                    ))}

            </div>
<div className="flex justify-center gap-4 mt-8">

    <button
        disabled={page === 0}
        onClick={() => setPage(page - 1)}
        className="
            bg-slate-700
            px-4
            py-2
            rounded-lg
            disabled:opacity-50
        "
    >
        Previous
    </button>

    <span className="flex items-center">
        Page {page + 1} of {totalPages}
    </span>

    <button
        disabled={page >= totalPages - 1}
        onClick={() => setPage(page + 1)}
        className="
            bg-slate-700
            px-4
            py-2
            rounded-lg
            disabled:opacity-50
        "
    >
        Next
    </button>

</div>
        </div>
    );
}

export default AdminProjects;