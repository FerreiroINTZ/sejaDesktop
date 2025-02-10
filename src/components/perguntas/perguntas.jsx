import React from 'react'
import './perguntas.css'
import dow_arrow from '../../imgs/seta-direita.png'

function perguntas() {
  return (
    <section id="perguntas-container">
      <h1 className='desktop-word'>Perguntas Frequentes</h1>
      {
        [...Array(6).keys()].map((i, index) =>
          <> 
          <input type="radio" hidden name="perguntas" id={("pergunta", index)} />
          <label htmlFor={("pergunta", index)} className='questions-container'>
            <h2>Pergunta {i + 1}</h2>
            <div className="img"><img src={dow_arrow} alt="" /></div>
          </label>
          </>
        )
      }
    </section>
  )
}

export default perguntas