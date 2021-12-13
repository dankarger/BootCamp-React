import React from "react";
//
import Button from "./components/4.1-buttons/Button";

import './components/4.2-cards/Cards.css'
import Card from "./components/4.2-cards/Card";
import Buttons from "./components/6.1-class_components/Button";
import CardClass from "./components/6.1-class_components/CardClass";

if (module.hot) {
    module.hot.accept();
}

const App = ()=> {
    return (
     <>
        <Button text='Important'/>
         <Button text='Not Important'/>
         <CardClass
             img='https://images.pexels.com/photos/3824139/pexels-photo-3824139.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
             title = 'Random title2'
             content = 'random contentdsd'
         />
         <CardClass
             img='https://images.pexels.com/photos/7205497/pexels-photo-7205497.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
             title = 'Random title1'
             content = 'random bla bla'
         />
         <CardClass
             img='https://images.pexels.com/photos/3876792/pexels-photo-3876792.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
             title = 'Random 33333'
             content = 'rbbkbkbkbkkbb'
         />
     </>
    )
}







export default App