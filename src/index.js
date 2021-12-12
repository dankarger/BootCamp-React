import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js"
//

// if (module.hot) {
//     module.hot.accept();
// }

// function getButtonText() {
//     return 'Click Me';
// }
//
// const App = function() {
//     const buttonText = 'Click Me';
//     return (
//         <div>
//
//             Hi there!
//             <button>{getButtonText()}</button>
//
//         </div>
//     )
// };

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
