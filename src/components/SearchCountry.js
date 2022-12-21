import React,{useState,useEffect} from 'react'

const SearchCountry = (props) => {
    const [searchValue,setSearchValue]=useState('')
    
    const handleChange=(e)=>{
        setSearchValue(e.target.value)
    }

    useEffect(() => {
        props.onSearch(searchValue)
    }, [searchValue]);

  return (
    <div>
        <span>Search country: </span><input style={{backgroundColor:"#E6BF83",fontSize:"15px",padding:"14px",border:"none",borderRadius:"10px"}} type="text"
        value={searchValue}
        onChange={handleChange} />
    </div>
  )
}

export default SearchCountry