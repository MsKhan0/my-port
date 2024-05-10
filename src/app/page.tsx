import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./component/project";
import About from "./component/about";
import Skill from "./skill";

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Skill />  
      <Project />
      <Contact />
      </div>
  );
}
