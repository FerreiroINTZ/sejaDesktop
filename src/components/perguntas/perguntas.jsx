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
          <input type="checkbox" hidden name="perguntas" id={("pergunta", index)} />
          
          <label htmlFor={("pergunta", index)} className='questions-container'>
            <div className="question-header">
              <h2>Pergunta {i + 1}</h2>
              <div className="img"><img src={dow_arrow} alt="dow_arrow" /></div>
            </div>
            <div className='question-explained'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora, dignissimos officiis, odit voluptas assumenda ut magnam libero, quos dolor sit iste deleniti consectetur. Quis voluptatibus illo dolorum. Recusandae, ipsa!</div>
          </label>
          </>
        )
      }
    </section>
  )
}

export default perguntas