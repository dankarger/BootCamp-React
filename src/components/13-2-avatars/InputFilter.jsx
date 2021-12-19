import React from "react";


class InputFilter extends React.Component {


    render() {
        const {callBack}=this.props
        return <>
            <input onChange={(e)=>callBack(e.target.value)} type="text"/>
        </>
    }
}

export default InputFilter