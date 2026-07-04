import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FocusAreas from "@/components/FocusAreas";
import Skills from "@/components/Skills";
import GithubProjects from "@/components/GithubProjects";
import Education from "@/components/Education";

export default function Home() {
  return (
    <>
      <Hero />
      <Highlights />
      <About />
      <Experience />
      <FocusAreas />
      <Skills />
      <GithubProjects />
      <Education />
    </>
  );
}
