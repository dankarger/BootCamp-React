import React from "react";
import "./IncrementAndDecrement.css"


class IncrementAndDecrement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {count:0};
    }
    increment=()=> {
        this.setState({count:this.state.count +1});
    }
    decrement=()=>{
        this.setState({count:this.state.count -1})
    }
    setClassNameVariable =()=> {
        if(this.state.count > 0 ) return 'green';
        if(this.state.count < 0 ) return  'red';
        return 'black';
    }
    render(){
        return (
            <>
            <button onClick={this.increment}> + </button>
                <div className={this.setClassNameVariable() }> {this.state.count}</div>
            <button onClick={this.decrement}>- </button>
            </>
        )
    }
}

export default IncrementAndDecrement
