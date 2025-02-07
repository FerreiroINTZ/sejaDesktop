import React from 'react'
import './perguntas.css'

function perguntas() {
  return (
    <section id="perguntas-container">
      <h1 className='desktop-word'>Perguntas Frequentes</h1>
      {
        [...Array(6).keys()].map(i => 
          <div className='questions-coontainer'>
            <h2>Pergunta {i + 1}</h2>
          </div>
        )
      }
    </section>
  )
}

export default perguntas