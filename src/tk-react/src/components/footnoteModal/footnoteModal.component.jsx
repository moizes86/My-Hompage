import React from "react";
import { Modal, Button } from "react-bootstrap";

export default function FootnoteModal(props) {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <span onClick={handleShow}>{props.num}</span>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body className="p-4">{props.body}</Modal.Body>
        <Modal.Footer className="justify-content-center">

          <Button variant="primary" onClick={handleClose}>
            סגור
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
