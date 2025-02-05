import { useState } from 'react'
import Header from './components/header/header'
import Main from './components/main/mainContainer'
import  whatsapp_logo from './imgs/WhatsApp.svg.webp'
import Plans from './components/plans/plans'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Main />
      <Plans />


      <div id="WhatsApp-logo">
        <img src={whatsapp_logo} alt="logo do whatsapp" />
      </div>
    </>
  )
}

export default App
