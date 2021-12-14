import React from "react";

class LifeCycleElement extends React.Component {
    state = {favoriteColor: 'blue'}

    componentDidMount() {

       setTimeout(()=>{
           this.setState(()=>{return{favoriteColor:'red'}})
       },1000)
    }
    componentDidUpdate() {
        const newDiv = document.querySelector('#someDiv');
        newDiv.innerHTML= `<h1> my new favorite color is ${this.state.favoriteColor}</h1>`
    }

    render(){
     return (
         <>
         <h1>`My favourite color is {this.state.favoriteColor} `</h1>
         <div id="someDiv"> </div>
         </>
     )
 }
}


export default LifeCycleElement