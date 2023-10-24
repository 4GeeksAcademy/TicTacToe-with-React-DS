//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import App from "./component/App.jsx";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));

// Guardar nombres de jugadores
// Seleccionar opción para jugar (X, O)
// Cambiar turno dependiendo de qué valor empieza (X, O)
// Cambiar la vista dentro de la misma página variando entre TicTacToe y Menu