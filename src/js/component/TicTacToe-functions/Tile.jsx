import React from "react";

const Tile = ({ className, value, onClick, playerTurn }) => {

    let hoverClass = null;
    if (value === null && playerTurn != null) {
        hoverClass = `${playerTurn.toLowerCase()}-hover`
    }

    return (
        <div onClick={onClick} className={`tile ${className} ${hoverClass}`}>
            <h2 className="tile-X">{value}</h2>
        </div>
    );
}

export default Tile;