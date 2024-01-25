import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import CodingCard from "./CodingProfile";
import { leetcodeImg } from "../../assets";
import { hackerrankImg } from "../../assets";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-6 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div className="flex-1 lg:mb-20 md:mb-20">

        <div className="py-6 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p> */}
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        
        <div className="mt-14 w-full h-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <CodingCard
            title="LeetCode - Profile"
            subTitle="More Than 150 Days Active"
            des="Has Explored Various Data Structures and Algorithms. 
             Solved around 345 Problems and Current Contest Rating is 1464. LeetCode Helped me a lot understand the in depth usage of Data Strutures and Algorithms, How to optimise a problem.."
            card_logo={leetcodeImg}
            link="https://leetcode.com/saisantosh3007/"
          />
          <CodingCard
            title="HackerRank"
            subTitle="5 star in Python"
            des="This platform has been instrumental in my journey to grasp the fundamentals of C/C++, Java, Python, and SQL. Thanks to its resources, I successfully earned a 5-star rating in Python and proudly received a certification. 🌟💻🐍"
            card_logo={hackerrankImg}
            link="https://www.hackerrank.com/saisantosh2004"
          />
          
        </div>
      </div>

    </motion.div>
  );
};

export default Achievement;



{/* <div className="flex-1">
        <div className="py-6 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - Present</p>
          <h2 className="text-4xl font-bold">Accomplishments</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="MHT-CET Merit Ranker"
            subTitle="Entrance Exam for Engineering colleges in Maharashtra (2020)"
            result="153rd"
            des="Bagged a whooping 153rd Rank out of 1.74 Lakh students that registered for the exam. Got a 99.89 percentile in PCM! Got admission in VJTI, Mumbai - top BTechcollege in Maharashtra."
          />
          <ResumeCard
            title="SSC Merit Holder"
            subTitle="10th Std Exam conducted by Government of Maharashtra (2018)"
            result="94.20%"
            des="Bagged a whooping 94.20% in SSC exam. Awarded with a trophy by Mahesh Tutorials Coaching Institute!"
          />
          <ResumeCard
            title="Scholarship Holder"
            subTitle="7th Std Scholarship Exam conducted by Government of Maharashtra (2015)"
            result="206/300"
            des="Passed with good marks in the exam and also received scholarship money till the completion of 10th std. Rank:- 33/1617 who got the scholarship (all passed students are not given scholarship)."
          />
        </div>
      </div> */}
      