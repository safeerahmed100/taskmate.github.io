import React from 'react'

function Taskinput({taskList,setTaskList}) {

function handleSubmit(e){
  e.preventDefault();
  const date= new Date();

  console.log(e.target.task.value);
  const newTask={
    id:date.getTime(), 
    name:e.target.task.value,
     time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`};
  setTaskList([...taskList,newTask])
  e.target.task.value='';

}

  return (
    <div className='UserInput'>
      <form onSubmit={handleSubmit}>
        <input type='text' name='task'  placeholder='Enter your Task' />
        <button>Add</button>
        </form>
    </div>
  )

}

export default Taskinput