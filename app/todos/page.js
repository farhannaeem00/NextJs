import React from 'react'
import './todo.module.css'

const Todo = async () => {

    const slowResponse = await fetch('https://procodrr.vercel.app/?sleep=2000')
    const slow = await slowResponse.json()

    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await response.json()

  return (
    <>
        <div className='todos-container'>

            {
                data.map(({id,title,completed})=>(
                    <div className='todo-card' key={id}>
                        <h2>{title}</h2>
                        {/* <p>{completed}</p> */}  
                        <input type="checkbox" checked={completed} readOnly />
                    </div>
                ))
            }

        </div>
    </>
  )
}

export default Todo