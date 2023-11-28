import React from 'react'
import BackgroundImg from "../assets/raul-cacho-oses-min.jpg"
import effet from "../assets/effet.png"



export default function Home() {
  return (
    <div>
      Home
      <img className='BackgroundImg' alt="Porte mosquée" src={BackgroundImg}/>
      <img className='BackgroundImg' alt="Porte mosquée" src={effet}/>
    </div>
  )
}
