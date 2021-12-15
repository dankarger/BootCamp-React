import './CostumButton.css'
import React from "react";


class CostumButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
       const {color ,callBack, id} = this.props
        return (
            <>
                <button
                onClick={(e)=>{
                    callBack(e.target.textContent)
                }}
                style={{background:color}}
                >{color}</button>
            </>
        )
    }
}

export default CostumButton;