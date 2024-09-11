import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ItemTypes = {
  TASK: 'task',
};

const DraggableTask = ({ task, index, moveTaskHandler, removeTaskHandler, editTaskHandler }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.TASK,
    item: { id: task.id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.TASK,
    hover: (item) => {
      if (item.id !== task.id) {
        moveTaskHandler(item.id, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md p-4 mb-4 flex flex-col gap-4 sm:gap-6 md:gap-8 ${
        isDragging ? 'opacity-50' : 'opacity-100'
      }`}
    >
      <div>
        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
          {task.name}
        </h3>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300">
          {task.description}
        </p>
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-4">
        <button
          onClick={() => editTaskHandler(task)}
          className="bg-yellow-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm md:text-base hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        >
          Edit
        </button>
        <button
          onClick={() => removeTaskHandler(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded-md text-xs sm:text-sm md:text-base hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default DraggableTask;
