import React from 'react'

const Country = (props) => {
    const {country} = props
    console.log(country)
    const {name,flags,capital,population,area,}=country
  return (
    <article>
      <div>
        <img src={flags.png} alt={name.common} />
        <p><span>Name:</span> {name.common}</p>
        <p><span>Capital:</span> {capital}</p>
        <p><span>Population:</span> {population}</p>
        <p><span>Area:</span> {area}</p> 
      </div>
    </article>
  )
}

export default Country