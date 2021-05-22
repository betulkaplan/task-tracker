import React, { useState } from 'react';
import Task from './Task';

function Tasks({ tasks, deleteTask, toggleDone }) {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleDone={toggleDone}
        />
      ))}
    </div>
  );
}

export default Tasks;
