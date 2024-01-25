import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-2">
          {/* <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B-Tech in Computer Science and Engineering"
            subTitle="Chaitanya Bharathi Institute of Technology (2021 - 2025)"
            result="CGPA: 9.81"
            des="Studied IT related subjects like Operating Systems, DBMS, OOPS, ML, Web Development, AI, DSA, Compiler Design etc."
          />
          <ResumeCard
            title="Intermediate in MPC"
            subTitle="Narayana Junior College (2019 - 2021)"
            result="98.8%"
            des="CourseWork : Mathematics, Physics, Chemistry"
          />
          <ResumeCard
            title="Secondaray School of Education"
            subTitle="Neo Royal High School (2018 - 2019)"
            result="GPA: 10"
            des="Explored various concepts in the fields of Maths, Physics, Biology ,Chemistry."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-2">
          {/* <p className="text-sm text-designColor tracking-[4px]">2020 - 2023</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Certificates</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title=" The Complete 2023 Web Development Bootcamp By Angela Yu"
            subTitle="Udemy"
            result="Online"
            des="Learnt MERN stack and made various project using the skills in this course. Check out my Github for project info !"
          />
          <ResumeCard
            title="Supervised Learning Algorithms"
            subTitle="Coursera- Deeplearning.ai"
            result="Online"
            des="Learnt Various Supervised ML algortihms and concepts - Gradient Descent, Linear Regression, Logisitic Regression , Polynomial Regression"
          />
          <ResumeCard
            title="Advanced Learning Algorithms"
            subTitle="Coursera- Deeplearning.ai"
            result="Online"
            des="Learnt various concepts such as Decision Trees, XGBoost , Artificial Neural Networks , Overfitting , Underfitting."
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education