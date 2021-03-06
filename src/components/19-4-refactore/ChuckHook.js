import React, {useEffect, useState} from "react";
import axios from "axios";

const PROXIE_URL = 'https://intense-mesa-62220.herokuapp.com/'

const API='https://api.chucknorris.io/jokes/random'
const API2='https://api.chucknorris.io/jokes/random?querry='
const CATEGORIES_API='https://api.chucknorris.io/jokes/categories'

const ChuckHook =()=> {
    // state={joke:'',categories:[]}
    const[joke,setJoke] =useState('');
    const[categories,setCategories]=useState([]);

    useEffect(()=>{
        const getRandomJoke=  async ()=>{
            const responce = await axios.get(API)

           setJoke(responce.data.value)
        }

    },[])


   const getCategories= async ()=> {
        const categoriesList = await axios.get(CATEGORIES_API)
        await setCategories(categoriesList.data)
    }

    const getRandomJoke=  async ()=>{
        const responce = await axios.get(API)
        console.log('rere',responce.data.value)
        setJoke(responce.data.value)
    }

    const getJokeCategory= async (category)=>{
        console.log('category',category.value)
        const joke = await axios.get(API2+category.value)

      return  setJoke(joke.data.value)
    }
    function printData(data) {
        console.log('resss',data)
        let response=  data.map((item,index)=>{
            console.log('h',item)
            return (

                <div key={index}>{item}</div>
            )
        })
        console.log('re',response)
        return response

    }

        return (
            <>
                <button onClick={getCategories}>Get Categories</button>
                <button onClick={getRandomJoke}>Get Random : </button>
                <div>
                    {categories.map((item,index)=>{
                        return <button onClick={(e)=>{

                            getJokeCategory(e.target)
                        }
                        } key={index}>{item}</button>
                    })}
                </div>
                <h2>Joke:</h2>
                <h3>{joke}</h3>
                <p>{ } </p>
            </>
        )
}

export default ChuckHook
