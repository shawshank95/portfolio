import React from 'react'
import {HiArrowNarrowRight} from "react-icons/hi";

const Home = () => {
    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">
            <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
                <p className='text-pink-600'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Shashank Shekhar</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack developer.</h2>
                <p className='text-[#8892b0] py-4 max-w-[700px]'>I'm a full stack developer pursuing my Master's in Computer Science from Northeastern University.
                    I have 4 years of industry experience. I interned for Amazon Robotics during Fall 2022
                    and right now I am looking for a full time role starting May 2023! </p>
                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                        View Work
                        <span className="group-hover:rotate-90 group-hover:mb-2 duration-300">
                            <HiArrowNarrowRight className="ml-2"/>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Home;