import React, { useState, useEffect } from 'react'

const Game = () => {
  const [rangeAttack, setRangeAtc] = useState(null)
  const [rangeDefense, setRangeDf] = useState(null)

  const rangeAtc = () => {
    return setRangeAtc(Math.floor(Math.random() * 101))
  }

  const rangeDf = () => {
    return setRangeDf(Math.floor(Math.random() * 101))
  }

  const attackP1 = () => {
    rangeAtc()
    rangeDf()
  }

  const attackP2 = () => {
    rangeAtc()
    rangeDf()
  }

  useEffect(() => {
    console.log(`Ataque ${rangeAttack}`)
    console.log(`Defesa ${rangeDefense}`)
  });

  return (
    <>
      <h1>Game</h1>

      <button type="button" onClick={() => attackP1()}>P1 Attack</button>
      <button type="button" onClick={() => attackP2()}>P2 Attack</button>
    </>
  )
}

export default Game;
