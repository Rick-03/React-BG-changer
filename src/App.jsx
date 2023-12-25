import { useState } from 'react'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
    
    <div className="w-full h-screen duration-200 capitalize flex justify-center text-5xl"  style={{backgroundColor : color}}>hello React</div> 
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12 gap-6">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2 w-32">
          <button className=" bg-red-500 rounded text-black w-28 shadow-lg" onClick={() => setColor("red")}>red</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2 w-32">
          <button className=" bg-green-500 rounded text-black w-28" onClick={() => setColor("green")}>green</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2 w-32">
          <button className=" bg-yellow-500 rounded text-black w-28" onClick={() => setColor("yellow")}>yellow</button>
        </div>
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2 w-32">
          <button className=" bg-blue-500 rounded text-black w-28" onClick={() => setColor("blue")}>blue</button>
        </div>
      </div>
    </>
  )
}

export default App
