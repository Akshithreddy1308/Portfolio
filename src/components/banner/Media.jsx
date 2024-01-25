import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs } from "react-icons/fa";
import { SiMongodb,SiExpress,SiGithub,SiGmail } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="mailto:bonagirisaisantosh2004@gmail.com">
                <span className="bannerIcon">
                  <SiGmail />
                </span>
            </a>

            <a href="https://github.com/Saisantosh2004" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <SiGithub />
              </span>
            </a>
            
            <a href="https://www.linkedin.com/in/saisantoshb/" target="_blank" rel="noopener noreferrer">
              <span className="bannerIcon">
                <FaLinkedinIn />
              </span>
            </a>
            
          </div>
        </div>

        

        {/* <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST WEB STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiMongodb />
            </span>
            <span className="bannerIcon">
              <SiExpress />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
          </div>
        </div> */}

      </div>
  )
}

export default Media