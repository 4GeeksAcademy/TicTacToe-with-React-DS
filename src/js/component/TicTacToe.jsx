import React, { useState } from "react";
import Board from "./Board.jsx";

const playerX = "X";
const playerO = "O";

const TicTacToe = () => {

	const [tiles, setTiles] = useState(Array(9).fill(null));
	const [playerTurn, setPlayerTurn] = useState(playerX);

	const handleTileClick = (i) => {

		if (tiles[i] !== null) {
			return;
		}

		const newTiles = [...tiles];
		newTiles[i] = playerTurn;
		setTiles(newTiles);
		if (playerTurn === playerX) {
			setPlayerTurn(playerO);
		} else {
			setPlayerTurn(playerX);
		}
	}

	return (
		<>
			<div>
				<h1 className="pt-3">Tic Tac Toe</h1>
				<h3 className="text-center my-4">It is {playerTurn} turn!</h3>
				<Board playerTurn={playerTurn} tiles={tiles} onTileClick={handleTileClick} />
			</div>
		</>
	);
}

export default TicTacToe;