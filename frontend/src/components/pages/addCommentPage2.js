import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./addCommentPage2.css";

const AddCommentPage2 = () => {
  document.body.style = "background:#cc5c99";
  const [username, setUsername] = useState("");
  const [stationName, setStationName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(" http://localhost:8081/comment/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, stationName, comment }),
      });
      if (response.ok) {
        // Comment added successfully
        alert("Comment added successfully!");
        // Clear form fields
        setUsername("");
        setStationName("");
        setComment("");
      } else {
        // Handle error response
        alert("Failed to add comment. Please try again later.");
      }
    } catch (error) {
      // Handle fetch error
      alert("Failed to connect to server. Please try again later.");
    }
  };

  return (
    <div className="comments">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="username">
          <Form.Label>Username:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="stationName">
          <Form.Label>Station Name:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Station Name"
            value={stationName}
            onChange={(e) => setStationName(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="comment">
          <Form.Label>Comment:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Enter Comment"
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          style={{
            marginTop: "10px",
          }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default AddCommentPage2;
