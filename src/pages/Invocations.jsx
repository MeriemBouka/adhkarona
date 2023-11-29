import React from 'react'
import Slide from '../components/Slide'
import data from "../utils/data.json"
import { useParams } from 'react-router-dom'

export default function Invocations() {
    const {idParams} = useParams()
    const currentCategory =  data.filter((invocation) => invocation.id.toString() === idParams)

    
  return (
    <div>
     { currentCategory[0].invocations.map((invoc)=>(
        <Slide key={`invoc${invoc.id}`} invocations={invoc.text} count={invoc.count}/>
      ))}
        
    </div>
  )
}
