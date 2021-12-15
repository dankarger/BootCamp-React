import React from "react";
import CheckBox from "./CheckBox";




const CheckBoxsDiv = ()=> {

    const checkInputsList = [
        {text:'I read the term of the app',isChecked:false, id:0,key:10},
        {text:'I accept the term of the app',isChecked:false, id:1,key:11},
        {text:'I want to get the weekly news letter',isChecked:true, id:2,key:12},
        {text:'I to get thesales offers',isChecked:true, id:3,key:3},
    ]



    return(
        <>
            { checkInputsList.map(inputBtn=>{
                return (
                         <CheckBox
                             text={inputBtn.text}
                             id={inputBtn.id}
                             key={inputBtn.id}
                             isChecked={inputBtn.isChecked}
                         />
                )
            }) }
        </>
    )
}
export default CheckBoxsDiv