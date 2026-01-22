import React from 'react'

const Slow2 = async () => {
  const slowResponse2 = await fetch('https://procodrr.vercel.app/?sleep=3000')
  const slow2 = await slowResponse2.json()

  return (
    <div>
        <h2>Slow Response Data 2:</h2>
        <pre>{JSON.stringify(slow2, null, 2)}</pre>
    </div>
  )
}

export default Slow2