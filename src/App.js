import React from "react";
// import App116 from "./components/Code-Along/App-116/App116";
// import Avatar from "./components/13-2-avatars/Avatar";
// import RouterApp from "./components/Code-Along/React-router/Router";
// import TodoApp from "./components/TodoApp/TodoApp";
// import CardTest from "./cardTest/CardTest";
// import Widget from "./components/Code-Along/widget/Widget";
// import Text,{text} from "./components/18-1-text/Text";
// import SimpleTodo ,{data3} from "./components/18-2-simpleTodo/simpleTodo";
// import WhatsTheTime from "./components/18-3-whats-the-time/WhatsTheTime";
// import MarkAndDelete from "./components/18-4-marking-And-deleting /MarkAndDelete";
import Search from "./components/Code-Along/widget/Search";
import SimpleFetch from "./components/19-1-fetch/Fetch";
// import Countries from "./components/19-2-Countries/Countries";
import Alogolia from "./components/19-3-algolia/Alogolia";

if (module.hot) {

    module.hot.accept();
}



const App = ()=> {


    return (
     <>
    {/*< MarkAndDelete />*/}
    {/*<Search />*/}
    {/*     <SimpleFetch />*/}
    {/*     <Countries />*/}
         <Alogolia />
    </>
    )
}







export default App