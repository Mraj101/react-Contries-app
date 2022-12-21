import React,{useState,useMemo} from 'react'

import UseFetch from './customHook/UseFetch'
import Countries from './Countries'
import SearchCountry from './SearchCountry'
const DataFetching = () => {
  const {error,isloading,countries}=UseFetch('https://restcountries.com/v3.1/all')
  const [filteredCountries,setFilteredCountries]=useState(countries)
  useMemo(() => {setFilteredCountries(countries)}, [countries])

  console.log("before filtered")
  console.log(filteredCountries)

    const removeCountries=(name)=>{
        const filtered = filteredCountries.filter((country)=> country.name.common!==name )
        setFilteredCountries(filtered) 
    }

    const handleSearch=(searchValue)=>{
      const value=searchValue.toLowerCase()
      const newCountries=countries.filter((country)=>{
        const countryName=country.name.common.toLowerCase()
        return countryName.startsWith(value)
      })
      setFilteredCountries(newCountries)
    }

  return (
    <div>
      
       <h1 style={{textAlign:"center",margin:"20px",padding:"5px"}}>Country App</h1>
        <div style={{textAlign:"center",margin:"35px",padding:"5px"}}>
          <SearchCountry onSearch={handleSearch}/>
        </div>
        {error && <h1>{error}</h1>}
        {isloading && <p>Loading....</p>}
        {countries && <Countries countries={filteredCountries} onRemove={removeCountries}/>}
    </div>
  )
}

export default DataFetching