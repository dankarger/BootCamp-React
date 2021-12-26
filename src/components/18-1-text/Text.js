import React,{useState} from "react";

export const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.' +
    ' Et labore nesciunt non, quos rerum voluptates! A accusantium ' +
    'dicta distinctio libero pariatur. Autem dolorum eligendi,iusto' +
    ' non provident tempora totam.quos rerum voluptates! A accusantium ' +
    'dicta distinctio libero pariatur. Autem'

export default ({text, number})=>{
    const allTExt = text
    const hiddenText = text.substr(0,number)
    const[isTextHidden,setText]=useState(true)
    let shownText = isTextHidden? hiddenText:allTExt
    let button = isTextHidden? 'Show...': 'Hide...';

    const showOrHideText=()=>{
        if(isTextHidden) {
            setText(false)
        }else {
            setText(true)
        }
    }

    return (<div>
        <div>
            <div>{shownText} <div style={{cursor:'pointer',color:'blue'}} onClick={()=>showOrHideText()}> {button}</div></div>
        </div>

    </div>)
}