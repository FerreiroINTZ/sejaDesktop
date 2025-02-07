import { useState } from 'react'
import Header from './components/header/header'
import Main from './components/main/mainContainer'
import  whatsapp_logo from './imgs/WhatsApp.svg.webp'
import Plans from './components/plans/plans'
import Motivos from './components/motivos/motivos'
import Perguntas from './components/perguntas/perguntas'
import RodaPe from './components/RodaPe/RodaPe.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Plans />
      <Motivos  />
      <Perguntas />
      <RodaPe />

      <div id="WhatsApp-logo">
        <img src={whatsapp_logo} alt="logo do whatsapp" />
      </div>
    </>
  )
}

export default App
