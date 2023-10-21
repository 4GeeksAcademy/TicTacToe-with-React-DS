import React from "react";
import GameState from "./GameState.js";

function Reset({ onReset }) {


    return (
        <button onClick={onReset} className="reset-button">
            Start Over
        </button>
    );
}

export default Reset;