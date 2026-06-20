function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-slate-950/80 backdrop-blur-md z-50">

            <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

                <a  href="#hero">
                    <h1 className="text-2xl font-bold">
                        Suraj Arolkar
                    </h1>
                </a>

                <div className="hidden md:flex gap-8 text-lg">

                    <a href="#about" className="hover:text-blue-400 transition">
                        About
                    </a>

                    <a href="#skills" className="hover:text-blue-400 transition">
                        Skills
                    </a>

                    <a href="#experience" className="hover:text-blue-400 transition">
                        Experience
                    </a>

                    <a href="#projects" className="hover:text-blue-400 transition">
                        Projects
                    </a>

                    <a href="#contact" className="hover:text-blue-400 transition">
                        Contact
                    </a>

                </div>

            </div>

        </nav>
    );
}

export default Navbar;