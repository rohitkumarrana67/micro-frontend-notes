import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, ListGroup } from "react-bootstrap";
import MyEditor from "./Editor";
import NoteComponent from "./NoteComponent";

const Note = () => {
  const [note, setNote] = useState({});
  const [noteNew, setNoteNew] = useState(false);
  const [notesState, setNotes] = useState([]);
  useEffect(() => {
    fetch("https://notes-app-rails.herokuapp.com/notes")
      .then((res) => res.json())
      .then((res) => setNotes(res))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log("check");
    console.log(note);
    console.log(noteNew);
  }, [note, noteNew]);

  const newNote = {
    title: "",
    content: "",
  };

  let notes = null;

  const handleSwitchNote = (note) => {
    setNote({ title: "hello", content: "fghhgjhhjg" });
    setNoteNew(true);
  };

  if (notesState) {
    notes = (
      <div style={{ width: "100%" }}>
        {notesState.map((note, index) => {
          return (
            <NoteComponent
              note={note}
              switch={handleSwitchNote}
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
            <Button>ADD NOTE</Button>
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
              <MyEditor note={note}></MyEditor>
            ) : (
              <MyEditor note={newNote}></MyEditor>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Note;
