import React from 'react';
import ReactQuill from 'react-quill';
import 'quill/dist/quill.snow.css'; 
import "react-quill/dist/quill.core.css";
const QuillEditor = ({ value, onChange }) => {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={QuillEditor.modules}
      formats={QuillEditor.formats}
      className="quill-editor"
    />
  );
};

QuillEditor.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['bold', 'italic', 'underline'],
    [{ 'color': [] }, { 'background': [] }],
    [{ 'align': [] }],
    ['link', 'image'],
    ['clean']
  ],
};

QuillEditor.formats = [
  'header', 'font', 'list', 'bold', 'italic', 'underline', 'color', 'background',
  'align', 'link', 'image'
];

export default QuillEditor;