import React, { Component, useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Form } from "react-bootstrap";

import "./styles.css";

const MyEditor = (props) => {
  const [title, setTitle] = useState(props.note.title);
  const [content, setContent] = useState(props.note.content);

  useEffect(() => {
    console.log(title);
    console.log(props);
  }, []);

  return (
    <div>
      <h4>TITLE:{title}</h4>
      <Form.Control className="mb-2" value={title}></Form.Control>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
    </div>
  );
};

export default MyEditor;
