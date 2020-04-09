import React, { useState, useEffect } from 'react'

const Game = () => {
  const [life, setLife] = useState(100)

  const [player1, setPlayer1] = useState(100)
  const [player2, setPlayer2] = useState(100)

  const [attack, setAttack] = useState(0)
  const [defense, setDefense] = useState(0)

  const rangeDamage = () => {
    return (Math.floor(Math.random() * 101))
  }

  const rangeDamage2 = () => {
    return (Math.floor(Math.random() * 101))
  }
/*
  const combat = () => {
    const damage = rangeDamage()
    console.log(`Dano de ataque: ${damage}`)
    return setLife(life - damage)
  }
*/
  useEffect(() => {
    console.log(`Vida atual: ${life}`)
  }, [life])


  const combat = (player) => {
    const attack = rangeDamage()
    const defense = rangeDamage2()

    if(player === 'player1'){
      const damage = attack - defense

      console.log(`Player1 atacou! Força: ${attack}`)
      console.log(`Player2 Tentou defender! Defesa: ${defense}`)

      return setPlayer2(damage)
    }
    else if(player === 'player2'){
      const damage = attack - defense

      console.log(`Player2 atacou! Força: ${attack}`)
      console.log(`Player1 Tentou defender! Defesa: ${defense}`)

      return setPlayer1(damage)
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

      <button type="button" onClick={() => combat('player1')}>P1 Attack</button>
      <button type="button" onClick={() => combat('player2')}>P2 Attack</button>
    </>
  )
}

export default Game;
