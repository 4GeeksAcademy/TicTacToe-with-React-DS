import React, { useState } from "react";

const Menu = ({ onWeaponPick }) => {

  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleStartGame = () => {
    onWeaponPick(player1Name, player2Name);
  };

  return (
    <div className="container">
      {/* Title */}
      <div className="text-white text-center py-5">
        <h1>Tic Tac Toe in React.js</h1>
        <h2 className="pt-3">Pick a Weapon</h2>
      </div>

      {/* Game Menu */}
      <div className="menu">
        <div className="container-inputs d-flex row justify-content-center text-center">
          <h2 className="col-12 text-white mt-5 mb-3">CHOOSE YOUR WEAPON</h2>
          <div className="players">
            <input
              type="text"
              placeholder="Player 1 Username"
              value={player1Name}
              onChange={(e) => setPlayer1Name(e.target.value)}
            />

            <input
              type="text"
              placeholder="Player 2 Username"
              value={player2Name}
              onChange={(e) => setPlayer2Name(e.target.value)}
            />
          </div>

          <button className="buttonX col-6 mx-3 mt-3 mb-5"
            onClick={() => handleStartGame("X")}>X</button>

          <button className="buttonO col-6 mx-3 mt-3 mb-5"
            onClick={() => handleStartGame("O")}>O</button>

        </div>
      </div>
    </div>
  )
}

export default Menu;