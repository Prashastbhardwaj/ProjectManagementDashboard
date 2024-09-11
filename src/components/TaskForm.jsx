import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

const TaskForm = ({ onAddTask, onClose, taskToEdit, onEditTask }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ 
        name: taskToEdit ? taskToEdit.name : '', 
        description: taskToEdit ? taskToEdit.description : '', 
        state: taskToEdit ? taskToEdit.state : 'todo'
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('Task name is required'),
        description: Yup.string().required('Description is required'),
      })}
      onSubmit={(values, { resetForm }) => {
        if (taskToEdit) {
          onEditTask({ ...values, id: taskToEdit.id }); 
        } else {
          onAddTask(values); 
        }
        resetForm();
        onClose(); 
      }}
    >
      {() => (
        <Form className="mb-4 p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg dark:shadow-gray-900 bg-white dark:bg-gray-800">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {taskToEdit ? 'Edit Task' : 'Add New Task'}
          </h3>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Task Name
            </label>
            <Field
              id="name"
              name="name"
              type="text"
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            <ErrorMessage name="name" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Description
            </label>
            <Field
              id="description"
              name="description"
              as="textarea"
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            />
            <ErrorMessage name="description" component="div" className="text-red-600 dark:text-red-400 text-sm mt-1" />
          </div>
          <div className="mb-4">
            <label htmlFor="state" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Status
            </label>
            <Field
              id="state"
              name="state"
              as="select"
              className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
            >
              <option value="todo">To Do</option>
              <option value="inProgress">In Progress</option>
              <option value="completed">Completed</option>
            </Field>
          </div>
          <button
            type="submit"
            className="bg-blue-500 dark:bg-blue-700 text-white dark:text-white px-4 py-2 rounded-md hover:bg-blue-600 dark:hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-700"
          >
            {taskToEdit ? 'Update Task' : 'Add Task'}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TaskForm;
