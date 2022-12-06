import React from "react";
import launchdata from "../data/launchdata"
import LaunchItem from "../components/LaunchItem"

export default function Launch(){
    return (
        
        <div className='flex flex-col md:flex-row items-center justify-center'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {launchdata.map(data =>(
                     <LaunchItem
                        image={data.image}
                        flightNum={data.title}
                        missName={data.stack}
                        launchYear={data.link}
                        details ={data.details}
                     />   
                    ))}
                </div>
        </div>    
        
    )
}