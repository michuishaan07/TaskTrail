import React from 'react';
import AcceptTask from './AcceptTask';
import CompleteTask from './CompleteTask';
import NewTask from './NewTask';
import FailedTask from './FailedTask';

const Tasklist = ({data}) => {
  
  return (
    <div id="tasklist" className='flex overflow-x-auto items-start gap-5 h-[55vh] mt-10 w-full p-8'>



{data.tasks.map((elem,idx,data)=>{

if(elem.active){

return <AcceptTask key={idx} data={elem}/>
}

if(elem.newTask)
{
  return <NewTask key={idx} data={elem}/>
}

if(elem.completed)
{
  return <CompleteTask key={idx} data={elem}/>
}
if(elem.failed)
{
  return <FailedTask key={idx} data={elem}/>
}



})}


    </div>
  );
};

export default Tasklist;
