"use client"
import { useRouter } from "next/navigation"
export default function Button() {

    const route = useRouter()

    const navigationButton = (path:string)=>{
      route.push(path)
    }
  return (
   <>
   <h1 className="text-center bg-black text-white font-extrabold">Using Buttons Components</h1>

<div className="bg-gray-900 grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
  <main className="flex text-white gap-8 row-start-2 items-center sm:items-start ">
    <button className="text-blue-700 hover:bg-blue-400 hover:text-white mx-8 px-7 py-2 rounded-md font-bold bg-white" onClick={()=> navigationButton('/home')}>Home</button>
    <button className="text-blue-700 hover:bg-blue-400 hover:text-white mx-8 px-7 py-2 rounded-md font-bold bg-white" onClick={()=> navigationButton('/docs')}>Docs</button>
    <button className="text-blue-700 hover:bg-blue-400 hover:text-white mx-8 px-7 py-2 rounded-md font-bold bg-white" onClick={()=> navigationButton('/blog')}>Blog</button>
    <button className="text-blue-700 hover:bg-blue-400 hover:text-white mx-8 px-7 py-2 rounded-md font-bold bg-white" onClick={()=> navigationButton('/about')}>About</button>

     
</main>
</div>
   </>
  )
}
