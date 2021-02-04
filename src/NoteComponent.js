import React from "react";
import { ListGroupItem, Row, Col } from "react-bootstrap";
import { DeleteForever } from "@material-ui/icons";

const NoteComponent = (props) => {
  const handleSwitch = () => {
    props.switch(props.note);
  };

  const handleDelete = () => {
    props.del(props.note.id);
  };

  return (
    <ListGroupItem style={{ backgroundColor: "#5D6D7E", color: "white" }}>
      <Row>
        <Col md="10" onClick={handleSwitch}>
          {props.note.title}
        </Col>

        <Col md="2">
          <DeleteForever onClick={handleDelete}></DeleteForever>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default NoteComponent;
