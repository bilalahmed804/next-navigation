import React from 'react'
interface MsgProps {
    names: string;
    num:Number;
  }
  
const Card = ({names,num}:MsgProps) => {
  return (
    <div>
      <h1 className='text-2xl font-extrabold'>Name : {names}</h1>
      <h1 className='text-2xl font-extrabold'>Number : {num}</h1>
    </div>
  )
}

export default Card
