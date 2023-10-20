import React from "react";

const Menu = () => {

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
            <input type="text" placeholder="Player 1 username" />
            <input type="text" placeholder="Player 2 username" />
          </div>
          <button className="buttonX col-6 mx-3 mt-3 mb-5" >X</button>
          <button className="buttonO col-6 mx-3 mt-3 mb-5" >O</button>
        </div>
      </div>
    </div>
  )
}

export default Menu;