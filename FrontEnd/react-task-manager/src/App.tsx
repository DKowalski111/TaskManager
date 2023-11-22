import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar/Navbar';
import GroupList from './grouplist/GroupList';
import AddNewTask from './addcontent/AddNewTask';

function App() {
  const [showAddNewTask, setShowAddNewTask] = useState(false);

  const handleAddButtonClick = () => {
    setShowAddNewTask(!showAddNewTask);
  }

  return (
    <div>
      <Navbar onAddButtonClick={handleAddButtonClick} />
      <GroupList />
      {showAddNewTask && <AddNewTask />}
    </div>
  );
}

export default App;
