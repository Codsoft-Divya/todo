import React, { useState } from 'react';
import './Section.css';

const Section = () => {
  
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTaskIndex, setCurrentTaskIndex] = useState(null);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task && task.trim()) {
      if (isEditing) {
        const updatedTasks = tasks.map((t, index) =>
          index === currentTaskIndex ? { ...t, text: task } : t
        );
        setTasks(updatedTasks);
        setIsEditing(false);
        setCurrentTaskIndex(null);
      } else {
        setTasks([...tasks, { text: task, completed: false }]);
      }
      setTask('');
    }
  };

  const handleEdit = (index) => {
    setIsEditing(true);
    setCurrentTaskIndex(index);
    setTask(tasks[index].text);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='section'>
        <div className='section-container'>
            <div className='section-container-input'>
              <form className='section-container-taskinput' onSubmit={handleSubmit}>
                  <input type="text"
                    placeholder='Enter Task'
                    value={task}
                    onChange={handleInputChange}
                  />
                  <button type='submit'>{isEditing ? 'Update' : 'Submit'}</button>
              </form>
            </div>
            <div className='section-container-tasklist'>
              {tasks.map((task, index) => (
                <div key={index} className={`task-item ${task.completed ? 'completed' : ''}`}>
                  {task.text}
                  <button className='edit' onClick={() => handleEdit(index)}>Edit</button>
                  <button className='delete' onClick={() => handleDelete(index)}>Delete</button>
                  <button className='complete' onClick={() => handleComplete(index)}>Complete</button>
                </div>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Section;