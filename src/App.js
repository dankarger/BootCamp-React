import React from "react";
import HideAndSeek from "./components/7.2-hide_and_seek/HideAndSeek";
// import IncrenmentElement from "./components/7.1-increment/IncrenmentButton";

if (module.hot) {
    module.hot.accept();
}

const App = ()=> {
    return (
     <>
      {/*<IncrenmentElement var={+1}/>*/}
      {/*   <IncrenmentElement var={-1}/>*/}
        <HideAndSeek />
         </>
    )
}







export default App