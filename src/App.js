import React from "react";
import HideAndSeek from "./components/7.2-hide_and_seek/HideAndSeek";
// import IncrenmentElement from "./components/7.1-increment/IncrenmentButton";
// import IncrementAndDecrement from "./components/7.3-increment_and)decrement/IncrementAndDecrement";
import LifeCycleElement from "./components/8.1-life_cycle_methods/LifeCycle";


if (module.hot) {
    module.hot.accept();
}

const App = ()=> {
    return (
     <>
     <LifeCycleElement />

    </>
    )
}







export default App