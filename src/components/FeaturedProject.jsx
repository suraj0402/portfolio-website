function FeaturedProject() {
    return (
        <section className="bg-slate-900 text-white py-32">

            <div className="max-w-6xl mx-auto">

                <h2 className="text-5xl font-bold mb-12">
                    Featured Project
                </h2>

                <div
                    className="
                        bg-slate-800
                        rounded-3xl
                        p-10
                    "
                >

                    <p className="text-blue-400">
                        Enterprise Banking
                    </p>

                    <h3 className="text-4xl font-bold mt-4">
                        AML Monitoring System
                    </h3>

                    <p className="mt-6 text-slate-400 max-w-3xl">
                        Transaction monitoring application used
                        to identify suspicious financial activity
                        and support banking compliance workflows.
                    </p>

                    <div className="mt-8 flex gap-3 flex-wrap">

                        <span className="bg-slate-700 px-4 py-2 rounded-full">
                            Java
                        </span>

                        <span className="bg-slate-700 px-4 py-2 rounded-full">
                            Oracle SQL
                        </span>

                        <span className="bg-slate-700 px-4 py-2 rounded-full">
                            REST APIs
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default FeaturedProject;