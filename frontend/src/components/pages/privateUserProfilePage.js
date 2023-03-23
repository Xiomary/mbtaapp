import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import getUserInfo from "../../utilities/decodeJwt";




const PrivateUserProfile = () => {
  const [show, setShow] = useState(false);
  const [user, setUser] = useState({})
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();

  // handle logout button
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };
 


  useEffect(() => {
    setUser(getUserInfo())
  }, []);

  if (!user) return (<div><h4>Log in to view this page.</h4></div>)

  return (
    <div className="container">
      <div className="col-md-12 text-center">
        <h1>{user && user.username}</h1>
        <div className="d-flex flex-column align-items-center">
          <Button style={{ marginBottom: "10px"}} onClick={handleShow}>
            Log Out
          </Button>
          <Button style={{ marginBottom: "10px" }} onClick={handleShow}>
            Edit Password
          </Button>
          <Button style={{ marginBottom: "10px"}} onClick={handleShow}>
            View History
          </Button>
          <Button style={{ marginBottom: "10px" }} onClick={handleShow}>
            Change Password 
          </Button>
        </div>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Log Out</Modal.Title>
          </Modal.Header>
          <Modal.Body>Are you sure you want to Log Out?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleLogout}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default PrivateUserProfile;
