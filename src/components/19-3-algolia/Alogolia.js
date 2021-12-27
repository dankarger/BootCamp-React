import React,{useState,useEffect} from "react";
import SearchBar from "./SearchBar";
import axios from "axios";

const API=`https://hn.algolia.com/api/v1/search?query=`


const Alogolia =()=>{
    const [searchResults, setSearchResults] = useState([])
    const [searchInput, setSearchInput] = useState('')
    const [query, setQuerry] = useState('hook')

    useEffect(()=>{
        const fetchFromApi =async ()=>{
            try{
                const res = await axios.get(API+query)
                return await res.data.hits
            }catch (err){
                console.log('there was an error:' ,err)
            }

        }
         fetchFromApi().then(res=>{
            setSearchResults(res)
        })

    },[query])



    const handleOnChange = (e)=> {
        setSearchInput(e.target.value)
    }
    const handleSearchButton =()=> {
        setQuerry(searchInput)
    }
    const showSearchItems=()=>{
        console.log('gg',searchResults)
        if(searchResults.length>0) {
            return searchResults.map(result => {
                return(
                    <div>
                        <a href={result.url} target='_blank'><p>{result.title} </p></a>

                    </div>
                )
            })
        }

    }
    return (
        <div>
            <SearchBar callback={handleOnChange} value={searchInput}/>
            <button onClick={handleSearchButton}>Search</button>

            <h2>Search: {query}</h2>
            {showSearchItems()}
        </div>
    )

}
export default Alogolia
