import React from "react";


export default function LaunchItem({image, flightNum, missName, launchYear, details}){
    const result = fetch('https://api.spacexdata.com/v4/launches/?fbclid=IwAR38Ru1atyMxJRAQyZBRge7t8rNlBxazsAA7ye1m9lUQYBUb0aV8C0IwXmA')
    .then((res)=>{
    console.log(res)
    console.log('working')
    return res.json()
    })
    .then((data)=>{
    console.log(data)
    console.log('its working')
    })
    .catch((e)=>{
    console.log(e)
    console.log('error')
    })

    return (
        <div className = 'border-2 border-stone-800 overflow-hidden'>
            <img 
            src={result.image} 
            alt='Portfolio'
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
            loading="lazy"
            /> 
            
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{flightNum} : {missName} ({launchYear})</h3>
                <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
                    <div>
                        <span className='inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-br-md rounded-tl-md'>
                            {details}
                        </span>    
                    </div>
                </p>
            </div>
        </div>
        
        
        
        
    )

}