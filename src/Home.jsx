import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header.jsx'
import video from './assets/video.mp4'
import title from './assets/yawa-title.png'
import statue from './assets/YAWA-STATUE.png'
function Home() {

  
  return (
    <>
    <Header/>

    <section className='section home'>
      <div className='title-section'>
           <img src={title} alt="Yawa" />
          <video src={video}  autoPlay loop muted playsInline ></video>
          </div>
          <div className='statue-section'>
            <div className='text'>
            <p>yoga</p>
            <p>&</p>
            <p>spa</p>
            </div>
          <img src={statue} alt="Statue" />
          </div>
          <a href="" id='btn'>Book a class</a>
    </section>
    </>
  )
}

export default Home
