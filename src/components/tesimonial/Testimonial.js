import React,{useState} from 'react'
import Slider from "react-slick";
import { RiStarFill } from "react-icons/ri";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import Title from '../layouts/Title'
import { testimonialOne,testimonialTwo,testimonialThree, testimonialFour,quote } from "../../assets";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-0 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-0 right-20 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

const Testimonial = () => {
      const [dotActive, setDocActive] = useState(0);
     const settings = {
       dots: true,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       nextArrow:<SampleNextArrow />,
       prevArrow:<SamplePrevArrow />,
       beforeChange: (prev, next) => {
         setDocActive(next);
       },
       appendDots: (dots) => (
         <div
           style={{
             borderRadius: "10px",
             padding: "10px",
           }}
         >
           <ul
             style={{
               display: "flex",
               gap: "15px",
               justifyContent: "center",
               marginTop: "20px",
             }}
           >
             {" "}
             {dots}{" "}
           </ul>
         </div>
       ),
       customPaging: (i) => (
         <div
           style={
             i === dotActive
               ? {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "#ff014f",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
               : {
                   width: "12px",
                   height: "12px",
                   color: "blue",
                   background: "gray",
                   borderRadius: "50%",
                   cursor: "pointer",
                 }
           }
         ></div>
       ),
     };
  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title title="WHAT OTHERS SAY ABOUT ME" des="Testimonial" />
      </div>
      <div className="max-w-6xl mx-auto">
        {/* ================ Slider One ================== */}
        <Slider {...settings}>
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-around p-2">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialOne}
                  alt="testimonialOne"
                />
                <div className="w-full flex flex-col justify-end">
                  {/* <p className="text-xs uppercase text-designColor tracking-wide mb-2">
                    Spider Man
                  </p> */}
                  <h3 className="text-xs uppercase text-designColor tracking-wide mb-2">Karthikeya Boorla</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Upcomming AMTS Intern @Salesforce
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  {/* <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        After School Diaries 
                      </h3>
                      <p className="text-base text-gray-400 mt-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        via Upwork - March 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div> */}
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    I have had the privilege of knowing Santosh for several years now, and I can confidently say that he is an exceptional individual. As a full-stack developer, his technical prowess is truly impressive, and his passion for artificial intelligence and machine learning is inspiring. 😎🚀 What sets Santosh apart is not just his professional excellence but also his qualities as a friend. 🤝 He is always there when you need him, offering support, guidance, and a listening ear. 🤗 Santosh is not just a skilled AIML enthusiast, but also a wonderful person and a true friend. 🌟 I am fortunate to have him in my life. 🙌💫
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Two ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-around p-2">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialTwo}
                  alt="testimonialTwo"
                />
                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-xs uppercase text-designColor tracking-wide mb-2">Nishanth Artham</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    SEP Intern @JPMC
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  {/* <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        IPL Win Predictor
                      </h3>
                      <p className="text-base text-gray-400 mt-3"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        via Fiverr - May 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div> */}
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  I would like to express my sincere appreciation for Santosh's outstanding commitment and remarkable contributions to our CBIT-COSC Club. His exceptional technical proficiency, adept problem-solving abilities, and exemplary leadership have undeniably been a priceless asset to our team. Santosh's unwavering enthusiasm for technology 🌟, his dedication to continuous learning 📚, and his collaborative approach 🤝 have significantly elevated our club's success. He is an esteemed member who consistently exceeds expectations, setting a strong example for others to follow. Without a doubt, I wholeheartedly endorse Santosh for any future endeavors. 🙌
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* ================ Slider Three ================== */}

          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-around p-2">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialThree}
                  alt="testimonialThree"
                />
                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-xs uppercase text-designColor tracking-wide mb-2">R V S S S Abhishek</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Upcomming SEP Intern @JPMC
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  {/* <div className="flex flex-col justify-between lgl:items-center py-6 border-b-2 border-b-gray-900">
                    <div>
                      <h3 className="text-xl lgl:text-2xl font-medium tracking-wide">
                        Secrets Sharing Website
                      </h3>
                      <p className="text-base text-gray-400 mt-3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        via Freelancer - Mar 2023
                      </p>
                    </div>
                    <div className="text-yellow-500 flex gap-1">
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                      <RiStarFill />
                    </div>
                  </div> */}
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                    Santosh is a tech wizard in web development 🌐💻. With expertise in the MERN stack, he crafts impressive websites that seamlessly blend form and function 🎨🛠️. His commitment to staying current with industry trends and his knack for user-friendly design make him an exceptional web developer 📈🚀.
                    In addition to his technical prowess, Santosh is a collaborative and kind-hearted individual 🤝❤️. His willingness to work closely with team members and his supportive, friendly nature make him a pleasure to work with, fostering a positive and productive atmosphere in any project 🙌🌟.
                  </p>
                </div>
              </div>
            </div>
          </div>


          {/* ================ Slider Four ================== */}
          <div className="w-full">
            <div className="w-full h-auto flex flex-col lgl:flex-row justify-around p-2">
              <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col md:flex-row lgl:flex-col gap-8 justify-center md:justify-start lgl:justify-center">
                <img
                  className="h-72 md:h-32 lgl:h-72 rounded-lg object-cover"
                  src={testimonialFour}
                  alt="testimonialFour"
                />
                <div className="w-full flex flex-col justify-end">
                  <h3 className="text-xs uppercase text-designColor tracking-wide mb-2">Vivek Arra</h3>
                  <p className="text-base tracking-wide text-gray-500">
                    Upcomming AMTS Intern @Salesforce
                  </p>
                </div>
              </div>
              <div className="w-full lgl:w-[60%] h-full flex flex-col justify-between">
                <img className="w-20 lgl:w-32" src={quote} alt="quote" />
                <div className="w-full h-[70%] py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] rounded-lg shadow-shadowOne p-4 lgl:p-8 flex flex-col justify-center gap-4 lgl:gap-8">
                  <p className="text-base font-titleFont text-gray-400 font-medium tracking-wide leading-6">
                  I've had the privilege of knowing Santhosh for quite some time, and it's a true 🚀 that his passion for coding knows no bounds 💻, and you can often find him engrossed in his laptop 🖥️, crafting innovative solutions 🌟 and mastering various web technologies 🌐. I have the utmost confidence that he will continue to achieve the 👌 best 👏 results! 🎉
                  I have no doubt that his portfolio reflects the excellence that defines him. Santhosh is a tech professional you can always count on for top-tier performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial