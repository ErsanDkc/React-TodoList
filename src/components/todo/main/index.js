import React from 'react'


function Main( {addTodo} ) {
	
  

const completedTodo = (e) => {
	e.target.parentElement.parentElement.classList.toggle("completed")
}
  const deleteTodo = (e) => {
	e.target.parentElement.remove()
  }
  const deleteCompletedTodo = () => {
	const completeLi = document.querySelectorAll(".completed")
	completeLi.forEach((e) => {
		e.remove()
	})
	
	
  }
  return (
    <section className='main'>
      <input className="toggle-all" type="checkbox" />
		    <label htmlFor='toggle-all'>
			    Mark all as complete
		    </label>

      <ul className='todo-list'>
        {
          addTodo.map((todo,i) => 
          <li key={i}>
            <div className="view">
					    <input onClick={completedTodo}   className="toggle" type="checkbox" />
					    <label >{todo.todo}</label>
					    <button onClick={deleteTodo}  className="destroy"></button>
				    </div>
          </li>)
        }
		
      </ul>

      <footer className="footer">
		    <span className="todo-count">
			    <strong>0</strong>
			      items left
		      </span>

		    <ul className="filters">
			    <li>
				    <a href="#/" className="selected">All</a>
			    </li>
			    <li>
				    <a href="#/">Active</a>
			    </li>
			    <li>
				    <a href="#/">Completed</a>
			    </li>
		    </ul>

		    <button onClick={deleteCompletedTodo} className="clear-completed">
			      Clear completed
		    </button>
	    </footer>
        
    </section>
  )
}

export default Main