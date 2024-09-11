import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialProjects = [
  {
    id: '1',
    name: 'Project One',
    description: 'Description for Project One',
    tasks: [
      { id: nanoid(), name: 'Task 1', description: 'Description for Task 1', state: 'todo' },
      { id: nanoid(), name: 'Task 2', description: 'Description for Task 2', state: 'inProgress' }
    ]
  },
  {
    id: '2',
    name: 'Project Two',
    description: 'Description for Project Two',
    tasks: []
  },
  {
    id: '3',
    name: 'Project Three',
    description: 'Description for Project Three',
    tasks: [
      { id: nanoid(), name: 'Task 3', description: 'Description for Task 3', state: 'completed' }
    ]
  }
];

const projectsSlice = createSlice({
  name: 'projects',
  initialState: initialProjects,
  reducers: {
    addProject: (state, action) => {
      state.push({ ...action.payload, tasks: [], id: nanoid() });
    },
    addTaskToProject: (state, action) => {
      const { projectId, task } = action.payload;
      const project = state.find((p) => p.id === projectId);
      if (project) {
        project.tasks.push(task);
      }
    },
    moveTask: (state, action) => {
      const { projectId, taskId, newState } = action.payload;
      const project = state.find((p) => p.id === projectId);
      if (project) {
        const taskIndex = project.tasks.findIndex((task) => task.id === taskId);
        if (taskIndex !== -1) {
          const [task] = project.tasks.splice(taskIndex, 1); 
          task.state = newState; 
          project.tasks.push(task); 
        }
      }
    },
    removeTask: (state, action) => {
      const { projectId, taskId } = action.payload;
      const project = state.find((p) => p.id === projectId);
      if (project) {
        project.tasks = project.tasks.filter((task) => task.id !== taskId);
      }
    },
    updateTask: (state, action) => {
      const { projectId, task } = action.payload;
      const project = state.find((p) => p.id === projectId);
      if (project) {
        const taskIndex = project.tasks.findIndex((t) => t.id === task.id);
        if (taskIndex !== -1) {
          project.tasks[taskIndex] = task;
        }
      }
    },
  },
});

export const { addProject, addTaskToProject, moveTask, removeTask ,updateTask} = projectsSlice.actions;
export default projectsSlice.reducer;
