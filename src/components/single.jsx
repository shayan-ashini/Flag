import React, { useEffect, useState } from 'react'

import { Link, useParams } from 'react-router-dom'

export default function Single() {

    const[single,setsingle]=useState([])
    const{name}=useParams()
    useEffect(()=>{

        const data = async()=>{
            const get = await fetch(`https://restcountries.com/v3.1/name/${name}`)
            const data = await get.json()
            setsingle(data)
        }

        data()

    },[name])



  return (
    <>
    <section className='bg-gray-200 flex justify-center mt-20 container mx-auto dark:bg-gray-800'>
        
        {
            single.map((index)=>(

                <div className="bigbox w-[90%] ">
                    <div className="mb-5 mt-5 w-[100%] dark:text-white"><Link className='back ' to={'/'}>Back</Link></div>

                    <div className="left w-[90%] md:w-[50%] bg-white dark:bg-gray-800">
                        <img src={index.flags.svg} alt="" />
                    </div>
                    <div className="pl-5 bg-white  right w-[90%] md:w-[50%] dark:bg-gray-800">
                        <div className="part1 dark:text-white ">{index.name.common}</div>

                 
                        
                        <div className="part2 pt-5">
                            <h6 className='dark:text-white'>NativeName : {index.name.official}</h6>
                            <h6 className='dark:text-white'>Population : {index.population.toLocaleString()}</h6>
                            <h6 className='dark:text-white'>Region : {index.region}</h6>
                            <h6 className='dark:text-white'>Subregion : {index.subregion}</h6>
                            <h6 className='dark:text-white'>Capital : {index.capital[0]}</h6>
                            <h6 className='dark:text-white'>Top Level Domain : ( {index.tld} )</h6>
                            
                        </div>

                        {index.borders&&(
                            <>
                        
                            <div className='flex part3 dark:text-white'> Borders :
                                {
                                    index.borders.map((val,num)=>(
                                        <h6 className=' ml-1 ' key={num}>{val}</h6>
                                    ))
                                }
                            </div>
                            </>
                        )}

   
                     
                    </div>

                </div>



                
            ))
        }
    </section>
    
    </>

  )
}
