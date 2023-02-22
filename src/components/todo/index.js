import {useState} from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'
import "./style.css"

function Todo() {
    const [todos, setTodos] = useState([{
      id:1,
      todo:"asdsad",
      completed: true
    },
    {
      id:2,
      todo:"qweqwe",
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