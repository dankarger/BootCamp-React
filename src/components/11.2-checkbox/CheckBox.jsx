import React from "react";


class CheckBox extends React.Component {
    constructor(props) {
        super(props);
    }

    
    render() {
        const {text,isChecked,id} = this.props
        return (
            <>
                <input key={id} id={id} type="checkbox"defaultChecked={isChecked} />
                <label htmlFor={id}> {text}</label>
                <br/>
                </>
        )
    }
}

export default CheckBox;