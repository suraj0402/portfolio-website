import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import ProjectList from "../components/ProjectList";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <ProjectList />
            <Contact />
            <Footer />
        </>
    );
}

export default Home;