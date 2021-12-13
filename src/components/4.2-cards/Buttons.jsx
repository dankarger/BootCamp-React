import React from "react";
import './Cards.css'

const Buttons = (props) =>{
    return (
        <div className='flex'>
            <a href={props.url}>Share</a>
            <a href={props.url}>Explore</a>
        </div>

    )


};

export default Buttons