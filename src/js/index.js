//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/App.jsx";
import Menu from "./component/Menu";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));