import {useState} from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'
import "./style.css"

function Todo() {
    const [todos, setTodos] = useState([{
      id:1,
      todo:"Doing exercise",
      completed: true
    },
    {
      id:2,
      todo:"Read newspaper",
      completed: false
    }])
    console.log(todos)
  return (
    <div>
        <Header todos={todos} setTodos={setTodos} /> 
        <Main todos={todos} setTodos={setTodos} />
        <Footer />
    </div>
  )
}

export default Todo