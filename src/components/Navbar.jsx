import React from 'react'
import {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import Logo from '../assets/ss-logo.png'
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)

    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img className='-ml-4 -mx-0.5' src={Logo} alt="logo img" style={{width: '120px', height: '80px'}}/>
            </div>

            <ul className="hidden md:flex">
                <li>
                    <Link to="home" duration={500} smooth={true}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" duration={500} smooth={true}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" duration={500} smooth={true}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" duration={500} smooth={true}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="contact" duration={500} smooth={true}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/*Hamburger*/}
            <div onClick={handleClick} className='md:hidden z-10'>
                {!nav? <FaBars/> : <FaTimes/>}
            </div>

            <ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">About</li>
                <li className="py-6 text-4xl">Skills</li>
                <li className="py-6 text-4xl">Home</li>
                <li className="py-6 text-4xl">Work</li>
                <li className="py-6 text-4xl">Contacts</li>
            </ul>

            {/*Social Icons*/}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
                <ul>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
                        <a className="flex justify-between items-center w-full text-grey-300" href="https://www.linkedin.com/in/shashank9895/">
                            LinkedIn <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
                        <a className="flex justify-between items-center w-full text-grey-300" href="https://github.com/shawshank95/">
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a className="flex justify-between items-center w-full text-grey-300" href="mailto:shashank.95@gmail.com">
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="flex justify-between items-center w-full text-grey-300" href="https://drive.google.com/file/d/1utRq8SSfeF9_VN_zgBHd7RGvD8C6ZMK_/view?usp=sharing">
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>


        </div>
    );
};
export default Navbar