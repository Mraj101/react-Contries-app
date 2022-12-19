import React from 'react'

import UseFetch from './customHook/UseFetch'

const DataFetching = () => {
    const {error,isLoading,countries}=UseFetch('https://restcountries.com/v3.1/all')
  
  return (
    <div>
        {error && <p>{error}</p>}
        {isLoading && isLoading}
        
    </div>
  )
}

export default DataFetching