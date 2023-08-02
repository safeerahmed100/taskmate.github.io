import React, { useState } from 'react';

function Tasklist({ taskList, setTaskList }) {
  const [editTask, setEditTask] = useState(null);

  function handleDelete(id) {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  }

  function handleEdit(id) {
    const taskToEdit = taskList.find((task) => task.id === id);
    setEditTask(taskToEdit);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const date = new Date();

    const updatedTask = {
      id: editTask.id,
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
    };

    const updatedTaskList = taskList.map((task) =>
      task.id === editTask.id ? updatedTask : task
    );
    setTaskList(updatedTaskList);
    setEditTask(null);
  }

  return (
    <div className='showTask'>
      <div className='info'>
        <span>TODO</span>
         <span>{taskList.length}</span> 
        <button onClick={() => setTaskList([])}>Clear All</button>
      </div>
      <hr></hr>

      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            {editTask && editTask.id === task.id ? (
              <form  className="editform" onSubmit={handleSubmit}>
                <input
                  type='text'
                  name='task'
                  defaultValue={task.name}
                  placeholder='Enter your Task'
                />
                <button type='submit'>Update</button>
                <button type='button' onClick={() => setEditTask(null)}>
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <p>
                  <span className='textname'>{task.name}</span>
                  <br />
                  <span className='textdate'>{task.time}</span>
                </p>
                <i
                  onClick={() => handleEdit(task.id)}
                  className='bi bi-pencil-square'
                ></i>
                <i
                  onClick={() => handleDelete(task.id)}
                  className='bi bi-trash'
                ></i>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasklist;
