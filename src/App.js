import React from "react";
import HideAndSeek from "./components/7.2-hide_and_seek/HideAndSeek";
// import IncrenmentElement from "./components/7.1-increment/IncrenmentButton";
// import IncrementAndDecrement from "./components/7.3-increment_and)decrement/IncrementAndDecrement";
// import LifeCycleElement from "./components/8.1-life_cycle_methods/LifeCycle";
// import Box from "./components/8-2-box_animation/Box";
import Box from "./components/8-2-changing_box/Box_8-2";



if (module.hot) {
    module.hot.accept();
}

const App = ()=> {
    return (
     <>
             {/*<Box width='30px' height='100px'/>*/}
             {/*<Box width='130px' height='70px'/>*/}
             {/*<Box width='40px' height='90px'/>*/}
         <Box />
    </>
    )
}







export default App