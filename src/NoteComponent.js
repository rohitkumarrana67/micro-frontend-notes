import React from "react";
import { ListGroupItem, Row, Col } from "react-bootstrap";
import { Edit, DeleteForever } from "@material-ui/icons";

const NoteComponent = (props) => {
  const handleSwitch = () => {
    props.switch(props.note);
  };

  return (
    <ListGroupItem style={{ backgroundColor: "#5D6D7E", color: "white" }}>
      <Row>
        <Col md="8" onClick={handleSwitch}>
          {props.note.title}
        </Col>
        <Col md="2">
          <Edit></Edit>
        </Col>
        <Col md="2">
          <DeleteForever></DeleteForever>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default NoteComponent;
