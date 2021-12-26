import React from "react";
import Accordion from "./Accordian";

const items = [
    {
      title:'What is React?',
      content:'React is a front end javascript framework'
    },
    {
        title:'Why use React?',
        content:'Becaus end javascript framework'
    },
    {
        title:'What is 33?',
        content:'3434 is a 3 434 framework'
    },

];


export default ()=> {
    return (
        <div>

            <Accordion items={items}/>
        </div>
    )
};