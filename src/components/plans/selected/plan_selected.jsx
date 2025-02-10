import React, {useRef} from 'react'
import './plans_selected.css'

function plan_selected({changeFocus}) {
  const card = useRef()
    return (
    <div id="plans_selected-container" onClick={e => !card.current.contains(e.target) ? changeFocus(false) : ''}>
        <div ref={card} id="plans_selected-card">
            <h3>500 Mega</h3>
            <div id="prices-selectde_card-container">
                <p id="first-price">de: R$87</p>
                <p id="last-price">Por: R$46</p>
            </div>
            <div id="search_disponibility-container">
                <p id="search-disponibility-word">Consultar Disponibilidade</p>
                <div className='inputs-plans-selecteds'>
                    <label htmlFor="cep" className="cep">CEP:</label>
                    <input type="text" id="cep"/>
                </div>
                <div className='others-inputs'>
                    <div id="input-name" className='inputs-plans-selecteds'>
                        <label htmlFor="name" className="name">Nome:</label>
                        <input type="text" id="name"/>
                    </div>
                    <div id="input-name" className='inputs-plans-selecteds'>
                        <label htmlFor="dt_nasc" className="dt_nasc">Nascimento:</label>
                        <input type="text" id="dt_nasc"/>
                    </div>
                    <div id="input-name" className='inputs-plans-selecteds'>
                        <label htmlFor="CPF" className="CPF">CPF:</label>
                        <input type="date" id="CPF"/>
                    </div>
                    <div id="input-name" className='inputs-plans-selecteds'>
                        <label htmlFor="whatsapp" className="whatsapp">Whatsapp:</label>
                        <input type="phone" id="whatsapp"/>
                    </div>
                    <div id="input-name" className='inputs-plans-selecteds'>
                        <label htmlFor="email" className="email">E-mail:</label>
                        <input type="email" id="email"/>
                    </div>
                </div>
            </div>
            <button id="send-inputs">Contratar</button>
        </div>
    </div>
  )
}

export default plan_selected