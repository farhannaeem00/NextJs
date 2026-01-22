import React from 'react'

const Loading = () => {
  return (
    <>
        <h1>Todo</h1>
        <div className='posts-container'>
            {
                Array.from({length:5}).map((_,index)=>(
                    <li key={index} className='shimmer'>
                        <div className='shimmer-checkbox'></div>
                        <div className='shimmer-text'></div>
                    </li>
            ))}
            
        </div>
    </>
  )
}

export default Loading