import React from 'react'
import { Player } from './Components/Player'
import { TimerContainer } from './Components/TimerContainer'
import { Timer } from './Components/Timer'

export const App = () => {
  return (
    <>
      <Player />
      <TimerContainer>
        <Timer title="Nivel Fácil" time={1} />
        <Timer title="Nivel Intermedio" time={5} />
        <Timer title="Nivel Difícil" time={40} />
        <Timer title="Nivel Reto" time={60} />
      </TimerContainer>
    </>
  )
}
