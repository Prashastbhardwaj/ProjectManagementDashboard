import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { addTaskToProject, updateTask } from '../store/slice/projectsSlice';
import { nanoid } from 'nanoid'; 
import TaskDistributionChart from '../components/TaskDistributionChart'; 

const ProjectDetails = () => {
  const { id } = useParams(); 
  const projects = useSelector((state) => state.projects); 
  const dispatch = useDispatch();
  const project = projects.find((p) => p.id === id); 
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null); 

  if (!project) {
    return <div className="p-4 text-gray-900 dark:text-gray-100">Project not found</div>;
  }

  const handleAddTask = (task) => {
    dispatch(addTaskToProject({
      projectId: id,
      task: { ...task, id: nanoid() } 
    }));
    setIsFormVisible(false); 
    setTaskToEdit(null); 
  };

  const handleEditTask = (task) => {
    dispatch(updateTask({
      projectId: id,
      task: { ...task, id: taskToEdit.id } 
    }));
    setIsFormVisible(false);
    setTaskToEdit(null);
  };

  const openFormForEdit = (task) => {
    setTaskToEdit(task);
    setIsFormVisible(true);
  };

  const openFormForAdd = () => {
    setTaskToEdit(null); 
    setIsFormVisible(true);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="p-4 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
        <button
          onClick={openFormForAdd}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Create New Task
        </button>
        {isFormVisible && 
          <TaskForm 
            onAddTask={handleAddTask} 
            onClose={() => setIsFormVisible(false)} 
            taskToEdit={taskToEdit}
            onEditTask={handleEditTask}
          />
        }
        <div className="flex gap-4 mt-4">
          <TaskList 
            tasks={project.tasks.filter((task) => task.state === 'todo')} 
            state="todo" 
            projectId={id} 
            setTaskToEdit={openFormForEdit} 
          />
          <TaskList 
            tasks={project.tasks.filter((task) => task.state === 'inProgress')} 
            state="inProgress" 
            projectId={id} 
            setTaskToEdit={openFormForEdit}
          />
          <TaskList 
            tasks={project.tasks.filter((task) => task.state === 'completed')} 
            state="completed" 
            projectId={id} 
            setTaskToEdit={openFormForEdit}
          />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Task Distribution</h2>
          <TaskDistributionChart tasks={project.tasks} />
        </div>
      </div>
    </DndProvider>
  );
};

export default ProjectDetails;
