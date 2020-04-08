import React, { useState } from 'react'

const Game = () => {

  const attack = () => {
    setRangeAtc(Math.floor(Math.random() * 101))
  }

  return (
    <>
      <h1>Game</h1>

      <button type="button" onClick={() => attack()}>Attack</button>
    </>
  )
}

export default Game;
