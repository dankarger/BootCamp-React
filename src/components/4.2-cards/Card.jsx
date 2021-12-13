import React from "react";
// import './components/4.2-cards/Cards.css'
import './Cards.css'

import Buttons from "./Buttons";
const Card= (props) => {
    return (
        <div className='card-div flex'>
            <div className='card'>
                <div className='image  flex'>
                    <img src={props.img} alt=""/>
                </div>
                <div className='content-div'>
                    <div className="title"> {props.title}</div>
                <div className='content'>{props.content} </div>
                <Buttons
                    className='button'
                    url='https://stackoverflow.com/questions/45251605/iterate-over-javascript-object-with-index' className='flex'/>
                </div>
            </div>
        </div>
    );

}

export default Card