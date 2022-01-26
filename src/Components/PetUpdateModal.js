import { Modal, Button, Form } from "react-bootstrap";
import React, { useState } from "react";
import petStore from "../petStore";

const PetUpdateModal = ({ selectedPet }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const [updatePet, setUpdatePet] = useState(selectedPet);

  const handleChange = (event) => {
    setUpdatePet({ ...updatePet, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    petStore.handleUpdatePet(updatePet);
    handleClose();
  };

  return (
    <>
      <Button class="btn btn-info" variant="primary" onClick={handleShow}>
        Update Pet
      </Button>

      <Modal
        show={isOpen}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Pet Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Pet Name:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet name"
                onChange={handleChange}
                value={updatePet.name}
                name="name"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pet Type:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pet type"
                onChange={handleChange}
                value={updatePet.type}
                name="type"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Pet Image:</Form.Label>
              <Form.Control
                type="text"
                onChange={handleChange}
                placeholder="Paste pet image URL"
                value={updatePet.image}
                name="image"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default PetUpdateModal;
