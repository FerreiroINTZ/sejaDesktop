import { useState, useEffect } from 'react'
import Header from './components/header/header'
import Main from './components/main/mainContainer'
import  whatsapp_logo from './imgs/WhatsApp.svg.webp'
import Plans from './components/plans/plans'
import Motivos from './components/motivos/motivos'
import Perguntas from './components/perguntas/perguntas'
import RodaPe from './components/RodaPe/RodaPe.jsx'
import Plans_selected from './components/plans/selected/plan_selected.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [plans_selected, setPlans_selected] = useState(false)

  useEffect(() =>{
    if(plans_selected){
      document.body.style.overflow = 'hidden'
      window.scrollTo(0, 0)
    }else{
      document.body.style.overflow = 'auto'
    }
  }, [plans_selected])

  return (
    <>
      <Header />
      <Main />
      <Plans changeFocus={setPlans_selected}/>
      <Motivos  />
      <Perguntas />
      <RodaPe />

      <div id="WhatsApp-logo">
        <img src={whatsapp_logo} alt="logo do whatsapp" />
      </div>

      {plans_selected 
        ? <Plans_selected changeFocus={setPlans_selected}/>  
        : ''}
    </>
  )
}

export default App
