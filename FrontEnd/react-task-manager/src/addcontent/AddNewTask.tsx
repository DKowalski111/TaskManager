import React, { useState } from 'react';
import AddTaskRequest from '../models/AddTaskRequest';

const AddNewTask = () => {

  const [task, setTask] = useState('');

  async function submitNewTask() {
    const url = `${process.env.REACT_APP_API}/tasks/add/task`;
    if (task.trim() != "") {
      const addTaskRequest: AddTaskRequest = new AddTaskRequest(task);
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addTaskRequest)
      };
      const response = await fetch(url, requestOptions);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      setTask('');
    }
  }

  return (
    <section className="text-center" style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div className="pb-md-0 mb-md-0">
        <form method="POST">
          <textarea
            className="border rounded shadow-sm my-md-4"
            style={{ margin: '0 auto', width: '80%', height: '150px' }}
            placeholder="Enter your task"
            spellCheck="false"
            value={task}
            onChange={e => setTask(e.target.value)}
          ></textarea>

          <div className="d-md-flex justify-content-md-start" style={{ width: '80%', margin: '0 auto' }}>
            <button type='button' className="btn btn-success" onClick={submitNewTask}>
              Save
            </button>
          </div>
        </form>
      </div>
    </section >
  );
};

export default AddNewTask;
