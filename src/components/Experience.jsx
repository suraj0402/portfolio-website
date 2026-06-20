function Experience() {

    const experiences = [
        {
            year: "2025 - Present",
            role: "Java Developer",
            company: "IDBI Intech LTD",
            skills: [
                "AML Systems",
                "Oracle SQL",
                "REST APIs",
                "Enterprise Banking Applications"
            ]
            
        }
        
    ];

    return (
        <section
            id="experience"
            className="
bg-slate-900
py-20
"
        >
            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center mb-12">
                    Experience
                </h2>

                {experiences.map((exp, index) => (

                    <div
    key={index}
    className="
        bg-slate-800
        p-8
        rounded-2xl
        max-w-4xl
        mx-auto
        hover:-translate-y-2
        transition-all
        duration-300
    "
>

    <div className="grid md:grid-cols-2 gap-8">

        {/* Left Side */}
        <div>

            <p className="text-blue-400 text-xl font-bold mb-6">
                {exp.year}
            </p>

            <h3 className="text-3xl font-bold mb-2">
                {exp.role}
            </h3>

            <p className="text-slate-400">
                {exp.company}
            </p>

        </div>

        {/* Right Side */}
        <div>

            <h4 className="text-xl font-semibold mb-4">
                Responsibilities
            </h4>

            <ul className="space-y-4">

                {exp.skills.map((skill, skillIndex) => (
                    <li
                        key={skillIndex}
                        className="flex items-center gap-3"
                    >
                        <span className="text-blue-400">
                            ✓
                        </span>

                        <span className="text-lg">
                            {skill}
                        </span>
                    </li>
                ))}

            </ul>

        </div>

    </div>

</div>

                ))}

            </div>
        </section>
    );
}

export default Experience;