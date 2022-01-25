import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import petStore from "../petStore";

const PetCreateModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const [addPet, setAddPet] = useState({
    petName: "",
    petType: "",
    petImage: "",
  });

  const handleChange = (event) => {
    setAddPet({ ...addPet, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.handleAddPet(addPet);
    console.log(addPet);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add Pet
      </Button>

      <Modal
        show={isOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a Pet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pet Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet name"
                onChange={handleChange}
                name="petName"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pet Type:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet type"
                onChange={handleChange}
                name="petType"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pet Image:</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                placeholder="Paste pet image URL"
                name="petImage"
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PetCreateModal;
