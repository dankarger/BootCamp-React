import React from "react";
import './Form.css'

class InputElement extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
       const {type,label,id}= this.props
        return (
            <div>
                <label htmlFor={id}> {label}</label>
                <input type={type}/>
            </div>

        )
    }
}

export default InputElement;