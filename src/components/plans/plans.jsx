import React, {useRef, useReducer} from 'react'
import './plans.css'
import PlansCards from './plans-cards/plans_cards'
import arrow from '../../imgs/seta-direita.png'

function plans({changeFocus}) {
    
    const carrosel = useRef()

    function changeCarrosel(base){
        let inputs = carrosel.current.querySelectorAll("input[type='radio']")
        console.log(inputs)
        inputs[base].checked = true
        if(base < 2){
            return base + 1
        }else{
            [...Array(inputs.length).keys()].forEach((x, index) =>{
                inputs[index].checked = false
                console.log("Input: ", index, " Resetado!", inputs[index].checked)
            })
            console.log("Inputs resetados")
            return 0
        }
    }

    const [countCarroselState, countCarroselFunction] = useReducer(changeCarrosel, 0)

  return (
    <section id="plans-container">
        <h2>
            <span id='nossos-word'>Nosso</span> 
            <span id='planos-word'>Planos</span>
        </h2>
        <div id="carrosel" ref={carrosel}>
            {[...Array(3).keys()].map((x, index) =>{
                return <input type="radio" hidden name="carrosel" id={`carrosel${index + 1}`}/>
            })}

            {[...Array(3).keys()].map((x, index) =>
                !index ? <PlansCards nameClass={true}/> : <PlansCards />
            )}


            <div id="seta"><img src={arrow} onClick={() => countCarroselFunction()}/></div>
        </div>
    </section>
  )
}

export default plans