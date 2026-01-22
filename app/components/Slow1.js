import React from 'react'

const Slow1 = async () => {
  const slowResponse1 = await fetch('https://procodrr.vercel.app/?sleep=2000')
  const slow1 = await slowResponse1.json()

  return (
    <div>
        <h2>Slow Response Data:</h2>
        <pre>{JSON.stringify(slow1, null, 2)}</pre>
    </div>
  )
}

export default Slow1