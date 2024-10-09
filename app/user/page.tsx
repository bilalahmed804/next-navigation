"use client"; 
import { useRouter } from 'next/navigation'
import React from 'react'

export default function User() {

    const route = useRouter()

    const navigation = (path:string) =>{
        route.push(path)
    }
  return (
    <div>
      <h1>user Page</h1>

      <button onClick={() => navigation('/home')}>open</button>
    </div>
  )
}
