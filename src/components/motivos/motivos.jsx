import React from 'react'
import './motivos.css'

function motivos() {
  return (
    <section id="motivos-container">
        <h1>
            <span id="por_que-container">por que</span>
            <span className='desktop-word'>Desktop?</span>
        </h1>
        {
            [...Array(4).keys()].map(i => <div className='motivos'><p>Lorem ipsum dolor sit amet consectetur. Pretium at in ornare enim faucibus eget in sed euismod. Ac nunc enim nec duis ridiculus malesuada. Commodo ipsum risus consectetur pellentesque fermentum diam arcu.</p></div>)
        }
    </section>
  )
}

export default motivos