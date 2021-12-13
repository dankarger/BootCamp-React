import React from "react";

import Button from "./components/4.1-buttons/Button";
import './components/4.1-buttons/Button.css'

if (module.hot) {
    module.hot.accept();
}

const App = ()=> {

    return (
        <>
          <Button className ='bold' text='Important' />
          <Button text='Not Important' />
        </>

    )




}







export default App