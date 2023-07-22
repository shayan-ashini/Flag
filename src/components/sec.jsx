import React from 'react'
import { Link } from 'react-router-dom'

export default function Sec({ flags, name, population, region, subregion }) {
  return (

    <>
      <Link to={`/${name.common}`} className='for bg-white mt-5 w-[80%] sm:w-[46%]  lg:w-[31%] xl:w-[23%] shadow-lg dark:bg-gray-800'>
        <article className=''>
          <img className='h-auto object-contain	 sm:h-[220px] sm:object-cover' src={flags.svg} alt="" />
          <h2 className='data p-1  dark:text-white font-semibold	'>{name.common}</h2>
          <h5 className='data p-1  dark:text-white'>Population :{population.toLocaleString()} </h5>
          <h5 className='data p-1  dark:text-white'>Region : {region} </h5>
          <h5 className='data p-1  dark:text-white'>Subregion : {subregion}</h5>
        </article>
      </Link>

    </>

  )
}
