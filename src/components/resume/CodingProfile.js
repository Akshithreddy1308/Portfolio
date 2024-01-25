import React from 'react'

const CodingCard = ({ title, subTitle, link, des, card_logo }) => {
    return (
        <div className="w-full lg:h-1/2 sm:h-2/3  group flex">

            <div className="w-10 h-[4px] bgOpacity mt-16 relative">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>
            </div>

            <div className='flex flex-row w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg p-4 lgl:px-10 gap-6 lgl:gap-10 shadow-shadowOne flex-col-on-mobile'>

                <div className="flex flex-col gap-2 pt-5 w-1/2 sm:w-full">
                    <div className='flex flex-row'>
                        <div>
                            <h3 className="text-xl md:text-2xl font-semibold group-hover:text-white duration-300">
                                {title}
                            </h3>
                            <p className="text-sm mt-2 text-gray-400 group-hover:text-white duration-300">
                                {subTitle}
                                <br></br>
                                <a href={link} target='_blank' className='mt-3 text-blue-600'>Link to Profile</a>
                            </p>
                        </div>
                    </div>
                    <br></br>
                    <div>
                        <p className="text-sm md:text-base font-medium text-gray-400 group-hover:text-gray-300 duration-300">
                            {des}
                        </p>
                    </div>
                </div>

                <div className='w-1/2 h-1/2 sm:w-full md:w-2/3 '>
                    <div className="mt-3">
                        <img src={card_logo} alt='image'/>
                    </div>
                </div>

            </div>


        </div>
    );
}

export default CodingCard