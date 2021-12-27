import React,{useState,useEffect} from "react";
import axios from "axios";
import SearchBar from "./SearchBar";

const API='https://restcountries.eu/rest/v2/all'
const API2='https://restcountries.com/v2/all/'

const Countries =()=>{
const [countriesList,setCountriesList] = useState([])
    const [searchList,setSearchList] = useState(countriesList)
    const [searchInput,setSearchInput] = useState('')

    useEffect(()=>{
            const fetchCountries = async () =>{
                const res = await axios.get(API2)
                return res
         };
         fetchCountries()
             .then(res=> setCountriesList(res.data))
         ;

    },[])
    useEffect(()=>{


    })

    const showSearch=()=> {

    // return countriesList.map(country=>{
    //     return(
    //         <div key={country.name}>
    //             {country.name}
    //         </div>
    //     )
    // })
       let result =  countriesList.filter((country)=>{
            return country.name.toLowerCase().includes(searchInput.toLowerCase())
        })
        return result.map(country=>{
                return(
                    <div key={country.name}>
                        {country.name}
                 </div>
                )
            })
    }
const handleOnChange = (e)=> {
  console.log('eeeee',e.target.value)
    setSearchInput(e.target.value)
    console.log(searchInput)
}

    return (
        <div>
            <SearchBar callback={handleOnChange} value={searchInput}/>
            {showSearch()}

        </div>
    )
}
export default Countries