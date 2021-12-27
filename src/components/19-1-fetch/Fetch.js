import React , {useState,useEffect} from "react";
import axios from "axios";


const API='https://swapi.dev/api/films/1/'
const PROXIE_URL = 'https://intense-mesa-62220.herokuapp.com/'
const SimpleFetch = () => {
        const [data,setData] = useState([])

    useEffect(()=> {
        const fetch = async () => {
           const res =  await axios.get(PROXIE_URL+API)
            setData(res.data)
            console.log(res)
        };
        fetch();
    },[]);


    return (
        <div>
            <h1>{data.title}</h1>
            <h2>{data.director}</h2>
        </div>


    )
}
export default SimpleFetch