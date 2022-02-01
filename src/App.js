import { React, useState } from "react"

function App() {

  const [input, setInput] = useState('')
  const [placeholderValue, setPlaceholderValue] = useState('Write todo 🚀')
  const [todos, setTodos] = useState([])
  
  const formHandler = (e) => {
    e.preventDefault()

    if(input.length>0){
      setTodos([...todos, input])
      setPlaceholderValue("Write todo 🚀")
    }else{
      setPlaceholderValue(`Can't add empty todo ✋`)
    }

    setInput('')
  }


  
  
  return (
    <>
      <div className="app">
          
          {/* Input and add todo button  🚀*/}
          <form className='flex justify-center  my-24'>
            <input type="text" className='py-2 px-2 rounded w-6/12 mx-2 
            text-lg font-semibold text-black
            ' value={input}
            placeholder={placeholderValue}
            onChange={(e) => {setInput(e.target.value)}}/>
            <button className='px-2 py-2 border rounded hover:bg-slate-500 hover:cursor-pointer text-2xl font-bold transition duration-300 ' onClick={formHandler}>ADD TODO</button>
        </form>

      </div>
    </>
  );
}

export default App;
