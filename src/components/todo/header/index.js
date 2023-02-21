import {useState} from 'react'

function Header( {addTodosMain, addTodo} ) {

  

  const [inputText, setinputText] = useState({todo :"", completed: false})
  const onChangeinput = (e) => {
    
    setinputText({...inputText, [e.target.name] : e.target.value})
  }

  const formSubmit = (e) => {
    console.log(e)
    e.preventDefault()
    if(inputText.todo === "") {
      return alert("You have to fill correctly each input area!")
    }
    addTodosMain([...addTodo, inputText])
    setinputText({todo: ""})

  }

  return (
    <div>
      
	      <header className="header"> <br />
		      <h1>Todos</h1>
		      <form onSubmit={formSubmit}>
			      <input name='todo' value={inputText.todo}   onChange={onChangeinput} className="new-todo" placeholder="Please Enter todo" autoFocus />
		      </form>
	      </header>
      
    </div>
  )
}

export default Header