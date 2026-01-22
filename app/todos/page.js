import React, { Suspense } from 'react'
import './todo.module.css'
import Slow1 from '../components/Slow1'
import Slow2 from '../components/Slow2' 
import TodoItems from '../components/TodoItems'

const Todo = async () => {

  

    // const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    // const data = await response.json()

    // const slowResponse1 = await fetch('https://procodrr.vercel.app/?sleep=2000')
    // const slow1 = await slowResponse1.json()
    // const slowResponse2 = await fetch('https://procodrr.vercel.app/?sleep=3000')
    // const slow2 = await slowResponse2.json()

  return (
    <>
        <div className='todos-container'>
            <Suspense fallback={  <div className='posts-container'>
            {
                Array.from({length:5}).map((_,index)=>(
                    <li key={index} className='shimmer'>
                        <div className='shimmer-checkbox'></div>
                        <div className='shimmer-text'></div>
                    </li>
            ))}
            
        </div>}>
                <TodoItems />
            </Suspense>
            <Suspense fallback={<h2>Loading Slow1 Response</h2>}>
                <Slow1 />
            </Suspense>
            <Suspense fallback= {<h2>Loading Slow2 Response</h2>}>
                <Slow2 />
            </Suspense>
        </div>
        
    </>
  )
}

export default Todo