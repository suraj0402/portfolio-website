function Hero() {
    return (
        <section id = "hero"
            className="
                relative
                min-h-[85vh]
                bg-slate-950
                text-white
                overflow-hidden
                flex
                items-center
                py-4
            "
        >

            {/* Background Glow */}
            <div
                className="
                    absolute
                    w-96
                    h-96
                    bg-blue-500/20
                    blur-3xl
                    rounded-full
                    top-20
                    left-1/2
                    -translate-x-1/2
                "
            />

            <div
                className="
        relative
        z-10
        max-w-6xl
        mx-auto
        px-8
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-16
        items-center
    "
            >

                {/* Left Side */}
                <div>

                    <p className="text-blue-400 text-lg mb-6 pt-20">
                        Java Backend Developer
                    </p>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                        Hi, I'm Suraj
                    </h1>

                    <p className="text-lg md:text-xl text-slate-400 mt-6 max-w-xl leading-relaxed">
                        Building enterprise banking applications
                        using Spring Boot, REST APIs, Oracle SQL
                        and modern backend technologies.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a href="#projects">
                            <button
                                className="
                            
                                bg-white
                                text-black
                                px-6
                                py-4
                                text-lg
                                rounded-xl
                                px-8
                            "
                            >
                                View Projects
                            </button>
                        </a>

                        <a href="#contact">
                            <button
                                className="
                                border
                                border-white
                                px-6
                                py-4
                                rounded-lg
                                px-8
                                text-lg
                                rounded-xl
                            "
                            >
                                Contact Me
                            </button>
                        </a>


                    </div>

                    <div className="mt-8 flex gap-6 text-slate-400">
                        <a
                            href="https://github.com/suraj0402"
                            target="_blank"
                            rel="noopener noreferrer"
                        >GitHub</a>
                        <a href="https://in.linkedin.com/in/surajarolkar" target="_blank"
                            rel="noopener noreferrer">LinkedIn</a>
                        <a href="/Resume.pdf" target="_blank"
                            rel="noopener noreferrer">Resume</a>
                    </div>

                </div>

                {/* Right Side Card */}
                <div
                    className="
                        bg-slate-800/80
                        p-8
                        rounded-3xl
                        max-w-md
                        w-full
                        backdrop-blur-sm
                        hover:-translate-y-2
                        transition
                        duration-300
                        "
                >

                    <h3 className="text-2xl font-bold">
                        Currently Working On
                    </h3>

                    <p className="mt-4 text-slate-400">
                        AML Monitoring Systems
                    </p>

                    <div className="mt-8 space-y-3">

                        <div>✓ Spring Boot</div>
                        <div>✓ Oracle SQL</div>
                        <div>✓ REST APIs</div>
                        <div>✓ Enterprise Banking</div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;