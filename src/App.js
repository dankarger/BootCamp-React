import React from "react";
import IncrenmentElement from "./components/7.1-increment/IncrenmentButton";


if (module.hot) {
    module.hot.accept();
}

const App = ()=> {
    return (
     <>
      <IncrenmentElement var={+1}/>
         <IncrenmentElement var={-1}/>
         </>
    )
}







export default App