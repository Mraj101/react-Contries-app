import {useState,useEffect} from 'react'

const UseFetch = (url) => {
    const [error, setError]=useState('')
    const [isloading,setisLoading]=useState(true)
    const [countries, setCountries]=useState([])
    const [filteredData,setFilteredData]=useState(countries)


    
    const fetchData= async (url)=>{
        try{
            const response =await fetch(url)
            const data= await response.json()
            setCountries(data)
            setisLoading(false)
            setFilteredData(data)
        }
        catch(err){
            setisLoading(false)
            setError(err.message)
        }
    }
    useEffect(()=>{
            fetchData(url)
    },[])
   


    return {error,isloading,countries}
    
}

export default UseFetch