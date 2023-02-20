import {useState} from 'react'
import Header from './header'
import Main from './main'
import Footer from './footer'
import "./style.css"

function Todo() {
    const [addTodo, setaddTodo] = useState([])
  return (
    <div>
        <Header addTodo={addTodo} addTodosMain={setaddTodo} />
        <Main addTodo={addTodo} />
        <Footer />
    </div>
  )
}

export default Todo