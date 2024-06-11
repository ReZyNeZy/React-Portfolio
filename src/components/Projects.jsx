import React from "react";
import portfolioImg from '../assets/Portfolio_image.jpg'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return (
        <div id='projects' className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#4CBB17]">Projects</h1>
            <p className="text-center py-8">
                *Edit in Post*
            </p>
            <div className="grid sm:grid-cols-2 gap-12"> 
                <ProjectItem img={portfolioImg} title='Insert 1'/>
                <ProjectItem img={portfolioImg} title='Insert 2'/>
                <ProjectItem img={portfolioImg} title='Insert 3'/>
                <ProjectItem img={portfolioImg} title='Insert 4'/>
            </div>
        </div>
    )
}
export default Projects