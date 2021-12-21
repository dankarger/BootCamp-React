import React from "react";
// import App116 from "./components/Code-Along/App-116/App116";
// import Avatar from "./components/13-2-avatars/Avatar";
// import RouterApp from "./components/Code-Along/React-router/Router";
import TodoApp from "./components/TodoApp/TodoApp";

if (module.hot) {
    module.hot.accept();
}



const App = ()=> {
    return (
     <>
    <TodoApp />

    </>
    )
}







export default App