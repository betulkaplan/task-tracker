import React from 'react';
import { FaTimes } from 'react-icons/fa';

function Task({ task, deleteTask, toggleDone }) {
  return (
    <div
      className={`task ${task.isDone ? 'done' : ''}`}
      onDoubleClick={() => toggleDone(task.id)}
    >
      <h3>
        {task.text}{' '}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
}

export default Task;
