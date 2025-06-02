import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import Tasklist from '../TaskList/Tasklist'

const EmpDashboard = (props) => {
  if (!props) return <div className='text-white'>Loading employee data...</div>;


  
  return (
   
    <div className='p-10 mt-6'>
  
      <Header changeUser={props.changeUser} data={props.data}/>
      <TaskListNumbers  data={props.data}/>
      <Tasklist  data={props.data}/>
    </div>
  )
}

export default EmpDashboard
