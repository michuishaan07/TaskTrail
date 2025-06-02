import React from 'react'

const NewTask = ({data}) => {
  return (
   
    <div className='flex flex-col h-full w-[350px] flex-shrink-0 bg-yellow-400 rounded-xl p-5'>

     
    <div className='flex w-full justify-between items-center'>
      <h3 className="px-3 py-1 bg-red-500 text-white rounded">{data.category}</h3>
      <h3 className="text-gray-700">{data.taskDate}</h3>
    </div>


    <h1 className='text-2xl mt-6 font-semibold'>{data.taskTitle}</h1>
    <p 
    className='flex text-base mt-2 items-center'>
{data.taskDescription}
    </p>
    <div className='flex justify-between mt-4'> 
    <button className='bg-green-500 py-1 px-2 text-sm'>Mark As Completed</button>
    <button className='bg-red-600 py-1 px-2 text-sm'>Mark As Failed</button>
   </div>

  </div>
  )
}

export default NewTask
