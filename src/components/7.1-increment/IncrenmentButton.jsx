import React from "react";


class IncrenmentElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {num: null};

    }
    render(){
        return (
            <>
                <button onClick={ ()=>{
                    this.setState({num:this.state.num+ this.props.var})
                }}> incrementOrDicrement </button>
                <div> Number: {this.state.num} </div>
            </>

        )

    }
}


export default IncrenmentElement