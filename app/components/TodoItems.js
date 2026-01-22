import React from 'react'

const TodoItems = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await response.json()

  return (
    <div>
        {
            data.map(({id,title,completed})=>(
                <div key={id}>
                    <h2>{title}</h2>
                    <input type="checkbox" checked={completed} readOnly />
                </div>
            ))
        }
     </div>
  )
}

export default TodoItems