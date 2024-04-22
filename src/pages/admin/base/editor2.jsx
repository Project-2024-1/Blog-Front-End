import React, { useState, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const MyCKEditor = ({ onContentChange, contentOld }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    setContent(contentOld);
  }, [contentOld]);

  const handleEditorChange = (event, editor) => {
    const newContent = editor.getData();
    setContent(newContent);
    onContentChange(newContent); // Truyền giá trị lên cho cha
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      data={content}
      onChange={handleEditorChange}
    />
  );
};

export default MyCKEditor;
