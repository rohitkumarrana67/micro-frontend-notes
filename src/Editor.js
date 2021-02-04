import React, { Component, useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FormControl, Button } from "react-bootstrap";

import "./styles.css";

const MyEditor = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  useEffect(() => {
    setTitle(props.note.title);
  }, [props.note.title]);

  useEffect(() => {
    setContent(props.note.content);
  }, [props.note.content]);

  const handleSaveNote = () => {
    props.save(title, content, props.note.id);
    setTitle("");
    setContent("");
  };

  return (
    <div>
      <div className="text-right mt-3">
        <Button className="bg-danger" onClick={handleSaveNote}>
          SAVE
        </Button>
      </div>
      <h4>TITLE:</h4>
      <FormControl
        className="mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      ></FormControl>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        onReady={(editor) => {}}
        onChange={(event, editor) => {
          setContent(editor.getData());
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </div>
  );
};

export default MyEditor;
