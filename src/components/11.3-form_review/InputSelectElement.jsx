import React from "react";

class InputSelectElement extends React.Component {
    constructor(props) {
        super(props);
    }




    render(){

        const {label,id,optionsList,callback}= this.props

        return (
            <div>
                <label htmlFor={id}>{label}</label>
                <select name={id} id={id}>
                    {optionsList.map(optionValue=>{
                        return (
                            <option value={optionValue.value} key={optionValue.key}  > {optionValue.value}   </option>
                    )
                    })}
                </select>

            </div>
        )
    }
}

export default InputSelectElement;