import React from 'react'

function Kalshi() {
  return (
    <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center gap-6 border-6 border-primary">
        <h1 className='font-bold text-2xl mt-4'>
            Kalshi Algorithmic Trading
        </h1>
        <p className='text-sm text-primary'>
            Feb 2026 - Mar 2026
        </p>
        <p className='text-md text-gray-300 mt-2'>
            Architected an algorithmic trading pipeline that maps 300+ news headlines every 10 minutes to prediction market tickers. The multi-stage NLP pipeline combines sentiment scoring with a language model for accurate ticker predictions, and a hybrid local and serverless GPU architecture cuts end-to-end latency to 50ms on average.
        </p>
    </div>
  )
}

export default Kalshi
