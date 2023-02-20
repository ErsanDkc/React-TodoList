import React from 'react'

function Main( {addTodo} ) {
  // deleteItem.forEach(function(x) {
  //   x.addEventListener("click", function(){
  //       x.parentElement.remove()
        
  //   })


  const deletetodo = (e) => {
    return e.parentElement.parentElement.remove()
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
          <li className='compledted' key={i}>
            <div className="view">
					    <input className="toggle" type="checkbox" />
					    <label>{todo.todo}</label>
					    <button onClick={deletetodo} className="destroy"></button>
				    </div>
          </li>)
        }
      </ul>

      <footer className="footer">
		    <span className="todo-count">
			    <strong>2</strong>
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

		    <button className="clear-completed">
			      Clear completed
		    </button>
	    </footer>
        
    </section>
  )
}

export default Main