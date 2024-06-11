import React from "react";
import WorkItem from "./WorkItem"
const data = [
    {
        year:2023,
        title: 'CSCI 2300/2400 (Computing I and II)',
        duration: '2 semesters',
        details: '*Add in Post*'
    },
    {
        year:2023,
        title: 'CSCI 36200 (Data Structures)',
        duration: '1 semester',
        details: '*Add in Post*'
    },
    {
        year:2023,
        title: 'CSCI n341 (Client Side Programming)',
        duration: '1 semester',
        details: '*Add in Post*'
    },
    {
        year:2024,
        title: 'CSCI 40200 (Architecture of Computers)',
        duration: '1 semester',
        details: '*Add in Post*'
    },
    {
        year:2024,
        title: 'CSCI n317 (Computation for Scientific Application)',
        duration: '1 semester',
        details: '*Add in Post*'
    },

]



const Work = () =>{
    return(
        <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h1 className="text-4xl font-bold text-center text-[#4CBB17]"> Classes </h1>
            {data.map((item, idx) =>(
                <WorkItem 
                key={idx} 
                year={item.year} 
                title={item.title}
                duration={item.duration}
                details={item.details} 
                />

            ))}
        </div>
    )
}

export default Work