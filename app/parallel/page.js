import React from 'react'
import './parallel.module.css'

const Parallel = async () => {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/todos?_limit=5'
//   )
//   const data = await response.json()

//   const slowResponse1 = await fetch(
//     'https://procodrr.vercel.app/?sleep=2000'
//   )
//   const slow1 = await slowResponse1.json()

//   const slowResponse2 = await fetch(
//     'https://procodrr.vercel.app/?sleep=3000'
//   )
//   const slow2 = await slowResponse2.json()

  const [response, slowResponse1, slowResponse2] = await Promise.all([fetch(
    'https://jsonplaceholder.typicode.com/todos?_limit=5'
  ),fetch(
    'https://procodrr.vercel.app/?sleep=2000'
  ),fetch(
    'https://procodrr.vercel.app/?sleep=3000'
  )
  ]) 

  const [data, slow1, slow2] = await Promise.all([response.json(),slowResponse1.json(),slowResponse2.json()])

  return (
    <>
      <div className="todos-container">
        {data.map(({ id, title, completed }) => (
          <div key={id}>
            <h2>{title}</h2>
            <input type="checkbox" checked={completed} readOnly />
          </div>
        ))}
      </div>

      <div>
        <h2>Slow1 Response:</h2>
        <pre>{JSON.stringify(slow1, null, 2)}</pre>
      </div>

      <div>
        <h2>Slow2 Response:</h2>
        <pre>{JSON.stringify(slow2, null, 2)}</pre>
      </div>
    </>
  )
}

export default Parallel
