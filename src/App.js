import { React, useState, useEffect } from "react"
import colRef from "./firebase-config"
import { addDoc, query, onSnapshot, orderBy, serverTimestamp } from "firebase/firestore"
import Todos from "./Todos"


function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [placeholderValue, setPlaceholderValue] = useState('Write todo 🚀')
  
    
  // Add todo to the db
  const addTodo = async (todo) => {
    await addDoc(colRef, {todo:todo, createdAt: serverTimestamp()})
  }

  // Read todos from db
  useEffect(() => {
    const getTodos = async () => {

      const q = query(colRef,orderBy("createdAt"))
          onSnapshot(q, (snapshot)=>
          setTodos(snapshot.docs.map((doc) => ({...doc.data(),id:doc.id}))))
    };

    getTodos()
}, [])


  const formHandler = (e) => {
    e.preventDefault()

    if(input.length>0){
      
      setPlaceholderValue("Write todo 🚀")
      addTodo(input)
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
            text-lg font-semibold 
            ' value={input}
            placeholder={placeholderValue}
            onChange={(e) => {setInput(e.target.value)}}/>
            <button className='px-2 py-2 border rounded hover:bg-slate-600 hover:cursor-pointer text-2xl font-bold transition duration-300 text-white ' onClick={formHandler}>ADD TODO</button>
        </form>

          <Todos todos={todos}/>

      </div>
    </>
  );
}

export default App;
