import React, { useState, useEffect } from "react";
import Board from "./Board.jsx";
import GameOver from "./GameOver.jsx";
import GameState from "./GameState.js";
import Reset from "./Reset.jsx";

const playerX = "X";
const playerO = "O";

const winningCombinations = [
	// Rows
	{ combo: [0, 1, 2], strikeClass: "strike-row-1" },
	{ combo: [3, 4, 5], strikeClass: "strike-row-2" },
	{ combo: [6, 7, 8], strikeClass: "strike-row-3" },
	// Columns
	{ combo: [0, 3, 6], strikeClass: "strike-column-1" },
	{ combo: [1, 4, 7], strikeClass: "strike-column-2" },
	{ combo: [2, 5, 8], strikeClass: "strike-column-3" },

	// Diagonals
	{ combo: [0, 4, 8], strikeClass: "strike-diagonal-1" },
	{ combo: [2, 4, 6], strikeClass: "strike-diagonal-2" }
];

function checkWinner(tiles, setStrikeClass, setGameState) {
	for (const { combo, strikeClass } of winningCombinations) {
		const tileValue1 = tiles[combo[0]];
		const tileValue2 = tiles[combo[1]];
		const tileValue3 = tiles[combo[2]];

		if (
			tileValue1 !== null &&
			tileValue1 === tileValue2 &&
			tileValue1 === tileValue3
		) {
			setStrikeClass(strikeClass)
			if (tileValue1 === playerX) {
				setGameState(GameState.playerXwins);
			} else {
				setGameState(GameState.playerOwins)
			}
			return;
		}
	}

	const gameDraw = tiles.every((tile) => tile !== null);
	if (gameDraw) {
		setGameState(GameState.draw);
	}
}

const TicTacToe = () => {

	const [tiles, setTiles] = useState(Array(9).fill(null));
	const [playerTurn, setPlayerTurn] = useState(playerX);
	const [strikeClass, setStrikeClass] = useState();
	const [gameState, setGameState] = useState(GameState.inProgress);

	const handleTileClick = (i) => {
		if (gameState !== GameState.inProgress) {
			return;
		}

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

	const handleReset = () => {
		setGameState(GameState.inProgress);
		setTiles(Array(9).fill(null));
		setPlayerTurn(playerX);
		setStrikeClass(null);

	}

	useEffect(() => {
		checkWinner(tiles, setStrikeClass, setGameState);
	}, [tiles]);

	return (
		<>
			<div>
				<h1 className="pt-3">Tic Tac Toe</h1>
				<h3 className="text-center my-4">It is {playerTurn} turn!</h3>
				<Board
					playerTurn={playerTurn}
					tiles={tiles}
					onTileClick={handleTileClick}
					strikeClass={strikeClass}
				/>
				<GameOver gameState={gameState} />
				<Reset onReset={handleReset} />
			</div>
		</>
	);
}

export default TicTacToe;