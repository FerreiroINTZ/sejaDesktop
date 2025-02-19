import React from 'react'
import './plans_cards.css'

function plans_cards({nameClass, changeFocus}) {
    console.log("Card is first:", nameClass)
  return (
        <div className={nameClass ? "cards first" : "cards"}>
            <div className='card'>
                <div className="no-buttons-plans">
                    <h3 className='banda'>
                        500 mega
                    </h3>
                    <div className='preco'>
                        <span className='preco-antigo'>de: R$87</span>
                        <span className='preco-novo'>Por: R$46</span>
                    </div>
                    <div className='line'></div>
                    <ul className='motivos-banda'>
                        <li>Para videos</li>
                        <li>Jogos Online</li>
                        <li>Streaming</li>
                        <li>Redes sociais</li>
                        <li>Lives ao Vivo</li>
                    </ul>
                </div>
                <div className="buttons-plans">
                    <button className='search-disponibility' onClick={() => changeFocus(true)}>
                        Consultar disponibilidade
                    </button>
                    <button className='contratar-button' onClick={() => changeFocus(true)}>Contratar</button>
                </div>
            </div>
        </div>
  )
}

export default plans_cards