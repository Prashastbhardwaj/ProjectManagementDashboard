import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { addProject } from '../store/slice/projectsSlice';
import QuillEditor from './QuillEditor';
import * as Yup from 'yup';

const CreateProjectForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="max-w-3xl mx-auto p-4 md:p-8 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg dark:bg-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Create New Project</h2>
      <Formik
        initialValues={{ name: '', description: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Project name is required'),
          description: Yup.string().required('Description is required'),
        })}
        onSubmit={(values, { resetForm }) => {
          dispatch(addProject(values));
          resetForm();
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Name</label>
              <Field
                id="name"
                name="name"
                type="text"
                className="mt-1 block w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 text-base md:text-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
              />
              <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
            </div>
            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
              <QuillEditor
                value={values.description}
                onChange={(content) => setFieldValue('description', content)}
                className="mt-1"
              />
              <ErrorMessage name="description" component="div" className="text-red-600 text-sm mt-1" />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-base md:text-lg"
            >
              Create Project
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
  
export default CreateProjectForm;
