import React, { useEffect, useState } from 'react'
import Header from '../../../header'

const Todos = () => {
  const [todoList, setTodoList] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json => {
        console.log({ json });
        setTodoList(json);
      })

    return () => {

    }
  }, [shouldRefresh])

  return (
    <div className="App" >
      <Header />
      <div style={{ "display": "flex", "width": "100%", "height": "100%" }} >
        <div className='carrierBox'>
          <div className='topbar'>

          </div>
          <div className='mainDiv'>
            {todoList.map((todo) => {
              return <div key={todo.id}> <h2> {todo.title}</h2> <input type="checkbox" name="option1" value="value1" readOnly={true} checked={todo.completed} /> </div>
            })}
          </div>

          <button onClick={() => {
            setShouldRefresh(!shouldRefresh);
          }} >Refresh</button>


        </div>
      </div>

    </div>
  )
}

export default Todos