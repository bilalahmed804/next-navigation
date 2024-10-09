import React from 'react'
import Card from '../components/Card'

let Cards = () => {
  return (
    <div className='flex justify-center items-center w-full h-72 my-7 bg-blue-400'>
      <Card names="Duck" num={99}/>
    </div>
  )
}
export default Cards
