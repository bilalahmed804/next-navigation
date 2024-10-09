import Link from "next/link"
import Button from "./Button"

function Header(){
    return(
      <>
      <h1 className="text-center bg-black text-white font-extrabold">Using Link Components</h1>
      <div className="bg-gray-900 grid grid-rows-[20px_1fr_20px] items-center justify-items-center font-[family-name:var(--font-geist-sans)]">
        <main className="flex text-white gap-8 row-start-2 items-center sm:items-start ">
            <Link className="mx-8" href={"/home"}>Home</Link>
            <Link className="mx-8" href={"/docs"}>Docs</Link>
            <Link className="mx-8" href={"/blog"}>Blog</Link>
            <Link className="mx-8" href={"/about"}>About</Link>          
            <Link className="mx-8" href={"/card"}>Props</Link>          
      </main>
    </div>
      <Button/>
      </>
    )
}

export default Header