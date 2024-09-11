import React from 'react';
import { useDispatch } from 'react-redux';
import DraggableTask from './DraggableTask';
import { moveTask, removeTask } from '../store/slice/projectsSlice';
import { useDrop } from 'react-dnd';

const ItemTypes = {
  TASK: 'task',
};

const TaskList = ({ tasks, state, projectId, setTaskToEdit }) => {
  const dispatch = useDispatch();

  const moveTaskHandler = (taskId, newIndex) => {
    dispatch(moveTask({
      projectId,
      taskId,
      newState: state,
    }));
  };

  const removeTaskHandler = (taskId) => {
    dispatch(removeTask({ projectId, taskId }));
  };

  const editTaskHandler = (task) => {
    setTaskToEdit(task); 
  };

  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.TASK,
    drop: (item) => {
      dispatch(moveTask({
        projectId,
        taskId: item.id,
        newState: state,
      }));
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      className={`p-4 rounded-lg w-full ${
        isOver ? 'bg-gray-200 dark:bg-gray-700' : 'bg-gray-100 dark:bg-gray-800'
      }`}
    >
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        {state.replace(/([A-Z])/g, ' $1').trim()}
      </h2>
      {
        tasks.length > 0 ? (
          tasks.map((task, i) => (
            <DraggableTask
              key={task.id}
              task={task}
              index={i}
              moveTaskHandler={moveTaskHandler}
              removeTaskHandler={removeTaskHandler}
              editTaskHandler={editTaskHandler} 
            />
          ))
        ) : (
          <p className="text-gray-600 dark:text-gray-400">No tasks in this section</p>
        )
      }
    </div>
  );
};

export default TaskList;
