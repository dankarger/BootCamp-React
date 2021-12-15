import React from "react";
import CheckBox from "./CheckBox";




const CheckBoxsDiv = ()=> {

    const checkInputsList = [
        {text:'I read the term of the app',isChecked:false, id:0,key:0},
        {text:'I accept the term of the app',isChecked:false, id:1,key:1},
        {text:'I want to get the weekly news letter',isChecked:true, id:2,key:2},
        {text:'I to get thesales offers',isChecked:true, id:3,key:3},
    ]



    return(
        <>
            { checkInputsList.map(input=>{
                return (
                    <>
                         <CheckBox
                             text={input.text}
                             key={input.key}
                             isChecked={input.isChecked}
                         />
                    </>
                )
            }) }
        </>
    )
}
export default CheckBoxsDiv