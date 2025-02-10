import React from 'react'
import './perguntas.css'
import dow_arrow from '../../imgs/seta-direita.png'

function perguntas() {
  return (
    <section id="perguntas-container">
      <h1 className='desktop-word'>Perguntas Frequentes</h1>
      {
        [...Array(6).keys()].map(i => 
          <div className='questions-coontainer'>
            <h2>Pergunta {i + 1}</h2>
            <div className="img"><img src={dow_arrow} alt="" /></div>
          </div>
        )
      }
    </section>
  )
}

export default perguntas