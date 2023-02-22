import {useState} from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'


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
    
  return (
    <div>
        <Header todos={todos} setTodos={setTodos} /> 
        <Main todos={todos} setTodos={setTodos} />
        <Footer />
    </div>
  )
}

export default Todo