import React, { useState } from "react";
import Menu from "./Menu.jsx";
import TicTacToe from "./TicTacToe.jsx";

function App() {
    const [player1, setPlayer1] = useState(null);
    const [player2, setPlayer2] = useState(null);
    const [gameStarted, setGameStarted] = useState(false);

    const handleWeaponPick = (player1Name, player2Name) => {
        setPlayer1(player1Name);
        setPlayer2(player2Name);
        setGameStarted(true);
    };

    return (
        <div>
            {gameStarted ? (
                <TicTacToe player1={player1} player2={player2} />
            ) : (
                <Menu onWeaponPick={handleWeaponPick} />
            )}
        </div>
    );
}

export default App;