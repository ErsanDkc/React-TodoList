import {useState, useEffect} from 'react'

function Header( {addTodosMain, addTodo} ) {

  

  const [inputText, setinputText] = useState({todo :""})
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
      <section className="todoapp">
	      <header className="header">
		      <h1>todos</h1>
		      <form onSubmit={formSubmit}>
			      <input name='todo' value={inputText.todo}   onChange={onChangeinput} className="new-todo" placeholder="What needs to be done?" autoFocus />
		      </form>
	      </header>
      </section>
    </div>
  )
}

export default Header