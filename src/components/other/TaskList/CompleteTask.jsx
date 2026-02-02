import React from 'react'

const CompleteTask = ({ data }) => {
  return (
    <div className="h-full shrink-0 w-75 bg-blue-400 p-3 rounded-xl">
      <div className="p-5 flex justify-between gap-3">
        <h3 className='bg-red-600 text-sm px-4 py-2 rounded-xl'>{data.category}</h3>
        <h4 className='text-lg'>{data.taskDate} </h4>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{data.taskTitle}</h2>
      <p className='text-lg mt-2'>
        {data.taskDescription}
      </p>
      <div>
        <button className='bg-green-500 py-1 px-2 text-sm w-full'>Complete</button>

      </div>
    </div>
  )
}

export default CompleteTask