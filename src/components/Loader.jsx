import React from 'react'

function Loader() {
    return (
        <div className='h-screen flex items-center justify-center fixed inset-0 bg-primary z-[10000]'>
            <div className='flex gap-5 text-4xl font-semibold sm:text-3xl'>
                <h1 className="text-secondary l"> L </h1>
                <h1 className="text-tertiary o"> o </h1>
                <h1 className="text-zinc-300 a"> a </h1>
                <h1 className="text-secondary d"> d </h1>
                <h1 className="text-tertiary i"> i </h1>
                <h1 className="text-zinc-300 n"> n </h1>
                <h1 className="text-secondary g"> g </h1>
                <h1 className="text-tertiary dot1"> . </h1>
                <h1 className="text-zinc-300 dot2"> . </h1>
                <h1 className="text-secondary dot3"> . </h1>
            </div>
        </div>
    )
}

export default Loader