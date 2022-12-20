import React from 'react'

import style from './country.module.css'
const Country = (props) => {
    const {country} = props
    console.log(country)
    const {name,flags,capital,population,area,}=country
  return (
    <article className={style.country}>
           <img src={flags.png} alt={name.common} />
      <div>
        <p><span>Name:</span> {name.common}</p>
        <p><span>Capital:</span> {capital}</p>
        <p><span>Population:</span> {population}</p>
        <p><span>Area:</span> {area}</p> 
      </div>
    </article>
  )
}

export default Country