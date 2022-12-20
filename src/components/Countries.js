import React from 'react'
import {v4 as uuidv4} from 'uuid'

import Country from './Country'
import style from './countries.module.css'

const Countries = (props) => {
  return (
    <section className={style.countries}>
      
        {
            props.countries.map((country,index)=>{
                const newCountry={country,id:uuidv4()}
                return <Country {...newCountry} key={newCountry.id} />
            })
        }
    </section>
  )
}

export default Countries