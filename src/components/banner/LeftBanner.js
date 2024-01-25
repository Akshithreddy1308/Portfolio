import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Competitive Programmer","Full Stack Aspirant", "ML Aspirant","Coding Enthusiast"],
      loop: true,
      typeSpeed: 15,
      deleteSpeed: 15,
      delaySpeed: 2500,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        {/* <h4 className=" text-lg font-normal">Hello... 👀🙋‍♂️  </h4> */}
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Sai Santosh</span>
        </h1>
        <h2 className="lg:text-4xl font-bold text-white sm:text-xl">
          A <span>{text}</span>
          <Cursor
            cursorBlinking="true"
            cursorStyle="/>"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          I am a passionate MERN stack developer and Machine Learning enthusiast. I enjoy solving complex problems and finding innovative solutions using my technical and analytical skills. I am always eager to learn new things and explore new opportunities in the field of software engineering.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner