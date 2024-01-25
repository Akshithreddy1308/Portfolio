import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub, SiGmail } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-2 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center sm:mb-3">

      <div className='m-0'>

        <img className="w-full h-64 object-cover rounded-lg mb-2" src={contactImg} alt="contactImg" />

        <div className="flex flex-col gap-1">
          <h3 className="text-3xl font-bold text-white">Sai Santosh</h3>
          <p className="text-base text-gray-400 tracking-wide">
            Hey there! I'm a Computer Science student at Chaitanya Bharathi Institute of Technology (CBIT) passionate about technology and innovation.
            I thrive on solving complex problems and crafting creative solutions using my technical and analytical abilities. I'm always on the lookout for opportunities to learn and grow in the realms of Web Development, Machine Learning, and Competitive Programming.
          </p>
          <p className="text-base text-gray-400 flex items-center gap-2">
            Email: <span className="text-lightText">bonagirisaisantosh2004@gmail.com</span>
          </p>
        </div>

      </div>

      <div className="flex flex-col gap-0">

        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>

        <div className="flex gap-4">
          <a href="https://github.com/Saisantosh2004" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <SiGithub />
            </span>
          </a>
          <a href="mailto:bonagirisaisantosh2004@gmail.com">
            <span className="bannerIcon">
              <SiGmail />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/saisantoshb/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>

      </div>

    </div>
  );
}

export default ContactLeft