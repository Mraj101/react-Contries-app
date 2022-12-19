import React from 'react'

import UseFetch from './customHook/UseFetch'
import Countries from './Countries'
const DataFetching = () => {
    const {error,isloading,countries}=UseFetch('https://restcountries.com/v3.1/all')
  
  return (
    <div>
        {error && <h1>{error}</h1>}
        {isloading && <p>Loading....</p>}
        {countries && <Countries countries={countries}/>}
    </div>
  )
}

export default DataFetching