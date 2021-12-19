import React from "react";
import axios from "axios";

class Chuck extends React.Component {
  state={joke:'',categories:[]}
    PROXIE_URL = 'https://intense-mesa-62220.herokuapp.com/'

    API='https://api.chucknorris.io/jokes/random'
    API2='https://api.chucknorris.io/jokes/random?querry='
    CATEGORIES_API='https://api.chucknorris.io/jokes/categories'

    getCategories= async ()=> {
       const categoriesList = await axios.get(this.CATEGORIES_API)
        console.log('d',categoriesList.data)
       this.setState({categories:categoriesList.data})
    }

    getRandomJoke=  async ()=>{
         const responce = await axios.get(this.API)
        console.log('rere',responce.data.value)
        this.setState({joke:responce.data.value})
    }

    getJokeCategory= async (category)=>{
      console.log('category',category.value)
      const joke = await axios.get(this.API2+category.value)

       this.setState({joke:joke.data.value})
    }
    printData(data) {
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


    render() {
        return (
            <>
               <button onClick={this.getCategories}>Get Categories</button>
                <button onClick={this.getRandomJoke}>Get Random : </button>
                <div>
                    {this.state.categories.map((item,index)=>{
                        return <button onClick={(e)=>{
                            this.getJokeCategory(e.target)
                        }
                        } key={index}>{item}</button>
                    })}

                </div>
                <h2>Joke:</h2>
                <h3>{this.state.joke}</h3>
                <p>{ } </p>
            </>
        )
    }
}

export default Chuck
