import React, { useEffect, useState, createRef } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import MyEditor from "./Editor";
import NoteComponent from "./NoteComponent";
import axios from "axios";

const Note = () => {
  const [note, setNote] = useState({});
  const [saveNew, setSaveNew] = useState(true);
  const [noteNew, setNoteNew] = useState(true);
  const [notesState, setNotes] = useState([]);
  useEffect(() => {
    axios("https://notes-app-rails.herokuapp.com/notes").then((res) =>
      setNotes(res.data)
    );
  }, []);

  const newNote = {
    title: "",
    content: "",
    id: "",
  };

  const saveReference = createRef();

  let notes = null;

  const handleSwitchNote = (note) => {
    setNote(note);
    setNoteNew(false);
    setSaveNew(false);
  };

  const openNewEditor = () => {
    setNoteNew(true);
    setSaveNew(true);
  };

  const handleSaveNote = (title, content, id) => {
    if (saveNew) {
      axios
        .post("https://notes-app-rails.herokuapp.com/notes", {
          title,
          content,
        })
        .then(function (response) {
          axios("https://notes-app-rails.herokuapp.com/notes").then((res) =>
            setNotes(res.data)
          );
        })
        .catch(function (error) {
        });
    } else {
      axios
        .patch("https://notes-app-rails.herokuapp.com/notes/" + id, {
          title,
          content,
        })
        .then(function (response) {
          axios("https://notes-app-rails.herokuapp.com/notes").then((res) =>
            setNotes(res.data)
          );
        })
        .catch(function (error) {
        });
    }
  };

  const handleDelete = (id) => {
    axios
      .delete("https://notes-app-rails.herokuapp.com/notes/" + id)
      .then(function (response) {
        axios("https://notes-app-rails.herokuapp.com/notes").then((res) =>
          setNotes(res.data)
        );
      })
      .catch(function (error) {
      });
  };

  if (notesState) {
    notes = (
      <div style={{ width: "100%" }}>
        {notesState.map((note, index) => {
          return (
            <NoteComponent
              note={note}
              switch={handleSwitchNote}
              del={handleDelete}
            ></NoteComponent>
          );
        })}
      </div>
    );
  }

  return (
    <div>
      <Container
        fluid
        className="mt-2"
        style={{ backgroundColor: "#EBF5FB", height: "120px" }}
      >
        <h3 className="text-center">MANAGE YOUR NOTES HERE</h3>
        <Row className="p-3">
          <Col>
            <Button onClick={openNewEditor}>ADD NOTE</Button>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
      <Container fluid className="mt-2" style={{ backgroundColor: "#82E0AA" }}>
        <Row>
          <Col md="3" className="p-0 m-0">
            <ListGroup className="m-1">{notes}</ListGroup>
            <span>{noteNew}</span>
          </Col>
          <Col md="9" style={{ height: "500px", backgroundColor: "#F4F6F6" }}>
            {noteNew ? (
              <MyEditor note={newNote} save={handleSaveNote}></MyEditor>
            ) : (
              <MyEditor note={note} save={handleSaveNote}></MyEditor>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Note;
