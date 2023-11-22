import React, { useEffect, useState } from 'react';
import Task from '../models/Task';
import { GroupListElement } from './components/GroupListElement';

const ListItem = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const url: string = `${process.env.REACT_APP_API}/tasks`;
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }
      const responseJson = await response.json();
      const responseData = responseJson._embedded.tasks;
      const loadedTasks: Task[] = [];
      for (const key in responseData) {
        console.log(key);
        loadedTasks.push({
          id: responseData[key].id,
          task: responseData[key].task
        });
      }
      setTasks(loadedTasks);
    }

    fetchData();
  }, [tasks])

  return (
    <div className="px-3 my-3" style={{ paddingLeft: '0px', paddingRight: '0px', maxWidth: '1000px', margin: '0 auto' }}>
      <ul className="my-5">
        {tasks.map((task) => (
          <GroupListElement task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ListItem;