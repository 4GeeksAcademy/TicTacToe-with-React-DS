import React from "react";

const Tile = ({ className, value, onClick }) => {
    return (
        <div onClick={onClick} className={`tile ${className}`}>
            <h2 className="tile-X">{value}</h2>
        </div>
    );
}

export default Tile;