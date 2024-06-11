import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import {FaInstagram, FaLinkedinIn, FaFacebook} from 'react-icons/fa';
import PortfolioImg from '../assets/Portfolio_image.jpg';
import Resume from '../assets/Resume_For_Portfolio.pdf';

const Main = ()=> {
    return(
        <div id='main'>

            <img className='w-full h-screen object-cover object-left ' src={PortfolioImg}/>

            <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>

                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center'>

                    <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Aidan MacKenzie</h1>

                    <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>I am a

                        <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'Developer',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'Innovator',
                                1000,
                                'Coder',
                                1000,
                                'Team Player',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '1em', display: 'inline-block' , paddingLeft:"5px"}}
                            repeat={Infinity}
                            />

                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <FaInstagram className='cursor-pointer' size={20}/>

                        <a href='https://www.linkedin.com/in/aidan-mackenzie-98b2682a6/' target ="_blank">
                            <FaLinkedinIn className='cursor-pointer' size={20}/>
                        </a>

                        <FaFacebook className='cursor-pointer'  size={20}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Main