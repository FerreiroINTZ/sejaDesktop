import React from 'react'
import './plans.css'

function plans() {
  return (
    <section id="plans-container">
        <h2>
            <span id='nossos-word'>Nosso</span> 
            <span id='planos-word'>Planos</span>
        </h2>
        <div id='cards'>
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
                    <button className='search-disponibility'>
                        Consultar disponibilidade
                    </button>
                    <button className='contratar-button'>Contratar</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default plans