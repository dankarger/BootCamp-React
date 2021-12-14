import React from "react";
import './Box8-2.css'

class Box extends React.Component {
    state={shape:'box',boxColor:'blue'}


changeColor() {
     let randomNum1= Math.floor(Math.random()*256);
    let randomNum2= Math.floor(Math.random()*256);
    let randomNum3= Math.floor(Math.random()*256)
    this.setState((prev)=>{
        return { boxColor:`rgb(${randomNum1},${randomNum2},${randomNum3})`}
    })
}

changeShape(){
    this.setState((prev)=>{
        return {  shape:'circle'}
    })
}
componentDidMount(){
        setInterval(()=>{
            this.changeColor()
        },500)
    setTimeout(()=>{this.changeShape()},2500)


}


    render(){
        return (
            <>

            <div className={this.state.shape} style={{backgroundColor:this.state.boxColor}}> </div>
            </>

        )
}
}

export default Box




