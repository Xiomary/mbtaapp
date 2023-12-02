import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../utilities/decodeJwt";
import axios from "axios"; // Import Axios for making HTTP requests

const PrivateUserProfile = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({});
  const [bio, setBio] = useState(""); // State variable for user bio
  const [newBio, setNewBio] = useState(""); // State variable for updated bio

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  if (!user)
    return (
      <div>
        <h4>Log in to view this page.</h4>
      </div>
    );

  const handleBioUpdate = async () => {
    try {
      const response = await axios.post("/api/updateBio", { bio: newBio }); // Send bio to the backend

      if (response.status === 200) {
        console.log("Bio updated successfully!");
        setBio(newBio); // Update the local state with the new bio
        handleClose();
      } else {
        console.error("Bio update failed");
      }
    } catch (error) {
      console.error("Error updating bio:", error);
    }
  };

  return (
    <div className="container">
      <div className="col-md-12 text-center">
        <h1>{user && user.username}</h1>
        <h2>{user.email}</h2>
        <div>
          <h3>Bio: {bio}</h3>
        </div>
        <div className="d-flex flex-column align-items-center">
          <Button style={{ marginBottom: "10px" }} onClick={handleShow}>
            Change Bio
          </Button>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Change Bio</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="newBio">
                <Form.Label>New Bio</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={newBio}
                  onChange={(e) => setNewBio(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleBioUpdate}>
              Save Bio
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default PrivateUserProfile;
