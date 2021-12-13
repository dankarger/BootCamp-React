import React from "react";


class IncrenmentElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: 0};
    }
    render(){
        return (
            <>
                <button onClick={ ()=>{
                    this.setState({num:this.state.num+1});
                }}> increment</button>
                <div> Number: {this.state.num} </div>
            </>

        )

    }
}


export default IncrenmentElement