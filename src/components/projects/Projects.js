import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="StudyBud"
          des=" A robust application which helps users to create rooms for sharing the knowledge."
          src={projectOne}
          githubLink="https://github.com/Saisantosh2004/StudyBud"
          // websiteLink=""

        />
        <ProjectsCard
          title="Blogs"
          des=" Developed a blogs application which has user-friendly interface helpful to share blogs."
          src={projectTwo}
          githubLink="https://github.com/Saisantosh2004/Blogs"
          websiteLink=""
        />
        <ProjectsCard
          title="Chatgram"
          des="A full stack chat application with simple interface for seamless Communication with the Contacts."
          src={projectThree}
          githubLink="https://github.com/Saisantosh2004/Chatgram"
          websiteLink=""
        />
        <ProjectsCard
          title="Snake-Game"
          des="A childhood favourite game , can work in mobile using touch also in pc using arrow keys. (HTML, CSS, JS)"
          src={projectFour}
          githubLink="https://github.com/Saisantosh2004/web-dev-projects/tree/main/SnakeMania"
          websiteLink="https://web-dev-projects-sandy.vercel.app/SnakeMania/index.html"
        />
        <ProjectsCard
          title="Weather App"
          des=" This is a weather website created using HTML,CSS,JavaScript and OpenWeather API ."
          src={projectFive}
          githubLink="https://github.com/Saisantosh2004/web-dev-projects/tree/main/WeatherApp"
          websiteLink="https://web-dev-projects-sandy.vercel.app/WeatherApp/index.html"
        />
        <ProjectsCard
          title="Simon-game"
          des="A classic memory and pattern-recognition game where players must replicate increasingly complex sequences of colors and sounds"
          src={projectSix}
          githubLink="https://github.com/Saisantosh2004/web-dev-projects/tree/main/Simon%20Game%20Challenge%20Starting%20Files"
          websiteLink="https://web-dev-projects-sandy.vercel.app/Simon%20Game%20Challenge%20Starting%20Files/index.html"
        />
      </div>
    </section>
  );
}

export default Projects