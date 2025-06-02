import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen '>
      <div className='p-10  text-white w-[45%] bg-blue-400 rounded-xl'>

        <h1 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h1>
        <h1 className='text-2xl font-medium'>New Task</h1>
</div>




      <div className='p-10 text-white w-[45%] bg-green-400 rounded-xl'>

<h1 className='text-3xl font-semibold'>{data.taskCounts.completed}</h1>
<h1 className='text-2xl font-medium'>Completed Task</h1>
</div>




<div className='p-10  text-white w-[45%] bg-yellow-400 rounded-xl'>

<h1 className='text-3xl font-semibold'>{data.taskCounts.active}</h1>
<h1 className='text-2xl font-medium'>Accepted Task</h1>
</div>


<div className='p-10  text-white w-[45%] bg-red-400 rounded-xl'>

<h1 className='text-3xl font-semibold'>{data.taskCounts.failed}</h1>
<h1 className='text-2xl font-medium'>Failed Task</h1>
</div>



    </div>
  )
}

export default TaskListNumbers
