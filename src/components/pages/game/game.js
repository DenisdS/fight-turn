import React, { useState, useEffect } from 'react'

const Game = () => {
  const [player1, setPlayer1] = useState(100)
  const [player2, setPlayer2] = useState(100)

  const [winner, setWinner] = useState(null)

  const rangeDamage = () => {
    return (Math.floor(Math.random() * 101))
  }

  const rangeDamage2 = () => {
    return (Math.floor(Math.random() * 101))
  }

  useEffect(() => {
    if(player1 < 1){
      setWinner('Player1')
    }
  }, [player1])

  useEffect(() => {
    if(player2 < 1){
      setWinner('Player2')
    }
  }, [player2])

  const combat = (player) => {
    const attack = rangeDamage()
    const defense = rangeDamage2()

    if(player === 'player1'){
      const damage = attack - defense

      console.log(`Player1 atacou! Força: ${attack}`)
      console.log(`Player2 Tentou defender! Defesa: ${defense}`)

      if(attack > defense){
        console.log(damage)
        return setPlayer2(player2 - damage)
      }
      return
    }
    else if(player === 'player2'){
      const damage = attack - defense

      console.log(`Player2 atacou! Força: ${attack}`)
      console.log(`Player1 Tentou defender! Defesa: ${defense}`)

      if(attack > defense){
        console.log(damage)
        return setPlayer1(player1 - damage)
      }
      return
    }
  }

  return (
    <>
      <h1>Game</h1>

      <section>
        <h2>Player 1</h2>
        <p>{player1}</p>
      </section>

      <section>
        <h2>Player 2</h2>
        <p>{player2}</p>
      </section>

      <p>{winner}</p>

      <button type="button" onClick={() => combat('player1')}>P1 Attack</button>
      <button type="button" onClick={() => combat('player2')}>P2 Attack</button>
    </>
  )
}

export default Game;
