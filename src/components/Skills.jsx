function Skills() {

    const skills = [
        "Java",
        "Spring Boot",
        "Oracle SQL",
        "MySQL",
        "REST API",
        "JPA",
        "Hibernate",
        "Git",
        "Maven",
        "React"
    ];

    return (
        <section
            id="skills"
            // className="bg-slate-950 text-white py-32"
            className="bg-slate-950 py-20"
        >
            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold text-center mb-12">
                    Skills
                </h2>

                <div className="flex flex-wrap justify-center gap-6">

                    {skills.map(skill => (
                        <div
                            key={skill}
                            className="
                                bg-slate-800
                                px-5
                                py-2
                                rounded-full
                                // text-sm
                                hover:-translate-y-1
                                hover:bg-blue-500
                                transition
                                bg-slate-800
                                border border-slate-700
                            "
                        >
                            {skill}
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}

export default Skills;