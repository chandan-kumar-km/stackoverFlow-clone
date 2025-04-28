"use client"
import React, { useEffect,useState } from 'react'
import { Progress } from './ui/progress'
function Loading() {

  const [timer, settimer] = useState(0)

  useEffect(() => {
    setInterval(()=>(
      settimer(timer+1)
    ),1000)
  },)
  

  return (
    <div><Progress value={timer} className='bg-red-400'/></div>
  )
}

export default Loading