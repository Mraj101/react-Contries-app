import React from 'react'

const Country = (props) => {
    const {country} = props
    console.log(country)
    const {name,flags,capital,population,area,}=country
  return (
    <article>
        <img src={flags.png} alt={name.common} />
    </article>
  )
}

export default Country