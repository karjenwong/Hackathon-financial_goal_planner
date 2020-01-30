import React, { useState } from "react";

import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function Popup() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button className="saveButton" onClick={handleShow}>
        Save
      </Button>

      <Modal centered show={show} onHide={handleClose} >
        <div className="customModal">
          <Modal.Header closeButton>
            <Modal.Title>New plan has been saved!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Your Financial Wealth Advisor will review the modified details and
            will get back to you if needed!
          </Modal.Body>
          <Modal.Footer>
            <Button className="saveButton" onClick={handleClose}>
              Okay
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
}

export default Popup;
