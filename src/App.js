import React from "react";
// import App116 from "./components/Code-Along/App-116/App116";
// import Avatar from "./components/13-2-avatars/Avatar";
// import RouterApp from "./components/Code-Along/React-router/Router";
// import TodoApp from "./components/TodoApp/TodoApp";
// import CardTest from "./cardTest/CardTest";
// import Widget from "./components/Code-Along/widget/Widget";
// import Text,{text} from "./components/18-1-text/Text";

import SimpleTodo ,{data3} from "./components/18-2-simpleTodo/simpleTodo";


if (module.hot) {
    module.hot.accept();
}



const App = ()=> {
    return (
     <>
    <SimpleTodo />

    </>
    )
}







export default App