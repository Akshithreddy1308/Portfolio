import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Sr. Software Engineer"
            subTitle="Google - (20XX - Present) [Goal in my bucketlist]"
            result="USA"
            des="Google's hiring process is an important part of our culture. Googlers care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Web Developer & Trainer"
            subTitle="Apple Developer Team - (20XX - 20XX) [Goal in my bucketlist]"
            result="USA"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in USA isn't easy."
          />
          <ResumeCard
            title="Data Analyst Intern"
            subTitle="Xemi - (5/6/2023 - 5/9/2023)  [3 months]"
            result="Mumbai, Maharashtra"
            des="Writing Web Scrapping codes to extract required data for website’s database and training ML models. Mode of work: Hybrid."
          />
        </div>
      </div> */}

      <div>
        <div className="flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">20XX - 20XX</p> */}
          <h2 className="text-4xl font-bold">Position Of Responsibility</h2>
        </div>
        <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Technical Team Head"
            subTitle="IEEE-RAS CBIT (Jan 2023 - Current)"
            result="CBIT"
            des="⚡⚡This Club offers networking opportunities, conferences, and resources for professionals and enthusiasts in these fields, fostering collaboration and knowledge sharing.
             Membership in IEEE-RAS provides access to cutting-edge research and industry insights. We have conducted a workshop which helped participants to learn about development of Drone Model and Training it with the software."
            card_logo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROfqixWP3M-H9nkKkM5rteyeMdt2TiSSSDYknj7tVn&s"
          />
          <ResumeCard
            title="Technical Team Member"
            subTitle="CBIT Open Source Community (Jan 2023 - Current)"
            result="CBIT"
            des="⚡COSC is an open source focused tech community based in Chaitanya Bharathi Institute of Technology - Hyderabad.
            ⚡We conduct hackathons, bootcamps and workshops to teach students different technologies while promoting open source culture.
            Organized and Conducted 4 events under the name of OpenSys which are related to Open Source Technologies, with 500 members as participants."
            card_logo="https://cbitosc.github.io/img/touch/logo_256.png"
          />
          </div>
      </div>

      
    </motion.div>
  );
};

export default Experience;
