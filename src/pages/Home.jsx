import React from 'react'
import BackgroundImg from "../assets/raul-cacho-oses-min.jpg"
import effet from "../assets/effet.png"
import Category from '../components/Category'
import data from '../utils/data.json'
import { Link } from 'react-router-dom'



export default function Home() {

  return (
    <div>
      <img className='BackgroundImg' alt="Porte mosquée" src={BackgroundImg}/>
      <img className='BackgroundImg' alt="Porte mosquée" src={effet}/>
      <header>أذكار </header>
      <main>
        {data.map((category) =>(
          <Link key={`cat${category.id}`} to={`/invocations/${category.id}`}>
          <Category key= {`cat${category.id}`} category={category.category}/>
          </Link>
         
        ))}
      </main>
    </div>
  )
}
