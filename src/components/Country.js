import React from 'react'

import style from './country.module.css'
const Country = (props) => {
   
    const {name,flags,capital,population,area,}=props.country
    const handleRemoveCountry=(name)=>{
      props.onRemove(name)
    }

  return (
    <article className={style.country}>
           <img src={flags.png} alt={name.common} />
      <div>
        <p><span>Name:</span> {name.common}</p>
        <p><span>Capital:</span> {capital}</p>
        <p><span>Population:</span> {population}</p>
        <p><span>Area:</span> {area}</p> 
      </div>
        <button className={style.btn} onClick={()=>{handleRemoveCountry(name.common)}}>Remove Country</button>
    </article>
  )
}

export default Country