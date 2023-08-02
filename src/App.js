import { useState } from 'react';
import './App.css';
import Nav from './Component/Nav';
import Taskinput from './Component/Taskinput';
import Tasklist from './Component/Tasklist';


function App() {
  const [taskList,setTaskList]=useState([])
  return (
    <div className='App'>
      <Nav />
      <Taskinput taskList={taskList} setTaskList={setTaskList}/>
      <Tasklist taskList={taskList} setTaskList={setTaskList} />
      
    </div>
  );
}

export default App;
