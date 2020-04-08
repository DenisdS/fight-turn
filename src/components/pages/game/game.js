import React, { useState, useEffect } from 'react'

const Game = () => {
  const [life, setLife] = useState (100)

  const rangeDamage = () => {
    return (Math.floor(Math.random() * 101))
  }

  const attack = () => {
    const damage = rangeDamage()
    console.log(`Dano de ataque: ${damage}`)
    return setLife(life - damage)
  }

  useEffect(() => {
    console.log((`Vida atual: ${life}`))
  }, [life])

  return (
    <>
      <h1>Game</h1>

      <button type="button" onClick={() => attack()}>P1 Attack</button>
    </>
  )
}

export default Game;
