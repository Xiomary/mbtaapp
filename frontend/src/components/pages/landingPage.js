import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./landingPage.css";

const PRIMARY_COLOR = "#007bff"; // Blue color
const SECONDARY_COLOR = "#0c0c1f";

const Landingpage = () => {
  // State variables
  const [light, setLight] = useState(false);
  const [bgColor, setBgColor] = useState(SECONDARY_COLOR);
  const [bgText, setBgText] = useState("Light Mode");

  // Styles
  let labelStyling = {
    color: PRIMARY_COLOR, // Blue color
    fontWeight: "bold",
    textDecoration: "none",
  };
  let backgroundStyling = { background: bgColor };
  let buttonStyling = {
    background: PRIMARY_COLOR, // Blue color
    borderStyle: "none",
    color: bgColor,
  };

  // Render the component
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Card
        style={{ width: "30rem" }}
        className="mx-2 my-2"
        bg={bgColor}
        text={bgColor === SECONDARY_COLOR ? "light" : "dark"}
      >
        <Card.Body>
          <Card.Title style={labelStyling}>Transit Now:</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Your All-In-One MBTA Guide</Card.Subtitle>
          <Card.Text></Card.Text>
          <div className="button-container">
            {/* Sign Up button */}
            <Link to="/signup" style={labelStyling}>
              <Button variant="primary" style={buttonStyling} className="mr-2">
                Sign Up
              </Button>
            </Link>
            {/* Log In button */}
            <Link to="/loginPage" style={labelStyling}>
              <Button variant="primary" style={buttonStyling} className="mr-3">
                Log In
              </Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Landingpage;

