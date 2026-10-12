import React from 'react'

function RagBenchmark() {
  return (
    <div className = "max-w-2xl mx-auto p-6 m-6 bg-gray-800 rounded-xl shadow-md flex md:flex-col items-center gap-6 border-6 border-primary">
        <h1 className='font-bold text-2xl mt-4'>
            RAG Q&A Benchmarking
        </h1>
        <p className='text-md text-gray-300 mt-2'>
            Architected an end-to-end retrieval-augmented generation pipeline that retrieves relevant passages from dense passage embeddings of the SQuAD v1.1/v2.0 datasets using nearest-neighbor search. Benchmarked several generator models as interchangeable backbones within the framework, building a reusable evaluation harness that scores exact match, F1, ROUGE, and BERTScore.
        </p>
    </div>
  )
}

export default RagBenchmark
