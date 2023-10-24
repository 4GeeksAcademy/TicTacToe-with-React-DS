import React from "react";

function Reset({ onReset }) {

    return (
        <button onClick={onReset} className="reset-button">
            Start Over
        </button>
    );
}

export default Reset;