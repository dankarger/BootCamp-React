import React from "react";
import VideoPlayer from "./components/21-2 video/VideoPlayer";
import ChuckHookCancel from "./components/20-1-cancel/ChuckHookCancel";
import ImageToggler from "./components/21-3-image-toggler/ImageToggler";

if (module.hot) {

    module.hot.accept();
}



const App = ()=> {


    return (
     <>

       <ImageToggler />

        </>
    )
}







export default App