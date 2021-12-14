import React from "react";
import Spinner from "./Spinner";

class SpinnerElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {timer:5}
    }

    componentDidMount() {
        setTimeout(()=>{
        this.decrementTimer();
        },1000)
    }
    decrementTimer= ()=>{
        setTimeout(()=>{
            this.setState((prevState)=>{
                return {timer:prevState.timer -1}
        })

        },1000)
    }
    componentDidUpdate() {
        this.decrementTimer()
    }
     showSpinner = ()=>{
     if(this.state.timer>0){
         return <Spinner />
     }
    }
    render() {

        return (
            <>
                {this.showSpinner()}
            </>
        )
    }
}

export default SpinnerElement;