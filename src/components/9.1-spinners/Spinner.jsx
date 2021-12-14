import React from "react";
import './Spinner.css'

const Spinner=({message})=> {

        return (
            <>
                <div className="Spinner" > </div>
                <div> {message}</div>
            </>
        )

}

Spinner.defaultProps = {
    message:'Loading...'
}
export default Spinner