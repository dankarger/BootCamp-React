import React from "react";

class LifeCycleElement extends React.Component {
    state = {favoriteColor: 'blue'}

    componentDidMount() {

       setTimeout(()=>{
           this.setState(()=>{return{favoriteColor:'red'}})
       },1000)
    }

    render(){
     return (
         <>
         <h1>`My favourite color is {this.state.favoriteColor} `</h1>
         <div id="someDiv"> `My new favourite color is {this.state.favoriteColor}`</div>
         </>
     )
 }
}


export default LifeCycleElement