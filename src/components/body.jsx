import React from 'react'
import image from '../assets/image-hero-desktop.png'
import databiz from '../assets/client-databiz.svg'
import audiophile from '../assets/client-audiophile.svg'
import meet from '../assets/client-meet.svg'
import maker from '../assets/client-maker.svg'

function body() {
  return (
    <div className='container__main'>
      <div className="main__text">
        <h1>Make remote work</h1>
        <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
        <button className='btn'>Learn more</button>
        <div className="dataimg">
         <img src={databiz}/>
         <img src={audiophile}/>
         <img src={meet}/>
         <img src={maker}/>
        </div>
      </div>
     <img src={image} />
    </div>
  )
}

export default body