import React from 'react'

import UseFetch from './customHook/UseFetch'
import Countries from './Countries'
const DataFetching = () => {
    const {error,isloading,countries}=UseFetch('https://restcountries.com/v3.1/all')
  
  return (
    <div>
       <h1 style={{textAlign:"center",margin:"10px",padding:"5px"}}>Country App</h1>
        {error && <h1>{error}</h1>}
        {isloading && <p>Loading....</p>}
        {countries && <Countries countries={countries}/>}
    </div>
  )
}

export default DataFetching