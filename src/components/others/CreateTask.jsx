import React, { useState } from 'react';

const CreateTask = () => {

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
   

    const[newtask,setTask]=useState({})

  const submitHandler = (e) => {
    e.preventDefault();

    setTask({taskTitle,taskDescription,taskDate,category ,active:false,newTask:true,failed:false,completed:false})

 const data=JSON.parse(localStorage.getItem('employees'))

  data.forEach(function (elem) {
   if(assignTo == elem.firstName){
    elem.tasks.push(newtask);
 elem.taskCounts.newTask=elem.taskCounts.newTask+1;
    

    
   }
  });


localStorage.setItem('employees',JSON.stringify(data))
  setTaskTitle("")
  setTaskDescription("")
  setAssignTo("")
  setCategory("")
  setTaskDate("")
  }

  return (
    <div className="p-5 bg-black rounded-lg shadow-md w-full mx-auto">
      <form
        className="flex flex-wrap w-full items-start justify-between"
        onSubmit={ (e)=>
        {
            submitHandler(e)
        }}
      >
        {/* Left Section (Task Inputs) */}
        <div className="w-1/2 space-y-5">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              className="text-sm py-2 px-3 w-4/5 rounded border border-gray-500 bg-[#1c1c1c] outline-none focus:border-green-500"
           value={taskTitle}
           onChange={(e)=>{
            setTaskTitle(e.target.value)
           }}
            
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              className="text-sm py-2 px-3 w-4/5 rounded border border-gray-500 bg-[#1c1c1c] outline-none focus:border-green-500"
              type="date"
              value={taskDate}
           onChange={(e)=>{
            setTaskDate(e.target.value)
           }}
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assign to</h3>
            <input
              className="text-sm py-2 px-3 w-4/5 rounded border border-gray-500 bg-[#1c1c1c] outline-none focus:border-green-500"
              type="text"
              value={assignTo}
           onChange={(e)=>{
            setAssignTo(e.target.value)
           }}
              placeholder="employee name"
            />
          </div>

          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              className="text-sm py-2 px-3 w-4/5 rounded border border-gray-500 bg-[#1c1c1c] outline-none focus:border-green-500"
              type="text"
              placeholder="design, dev, etc"
              value={category}
           onChange={(e)=>{
            setCategory(e.target.value)
           }}
            />
          </div>
        </div>

        {/* Right Section (Description & Button) */}
        <div className="w-2/5 flex flex-col items-start space-y-3">
          <h3 className="text-sm text-gray-300 mb-1">Description</h3>
          <textarea
            className="w-full h-60 text-sm py-2 px-4 rounded border border-gray-500 bg-[#1c1c1c] outline-none focus:border-green-500 resize-none"
            placeholder="Enter description"
            value={taskDescription}
           onChange={(e)=>{
            setTaskDescription(e.target.value)
           }}
          />
          <div className="w-full flex justify-end">
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-green-600"
            >
              Create Task
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
