import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./landingpage.css";



const PRIMARY_COLOR = "#cc5c99";
const SECONDARY_COLOR = "#0c0c1f";

const Landingpage = () => {
  const [light, setLight] = useState(false);
  const [bgColor, setBgColor] = useState(SECONDARY_COLOR);
  const [bgText, setBgText] = useState("Light Mode");

  let labelStyling = {
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    textDecoration: "none",
  };
  let backgroundStyling = { background: bgColor };
  let buttonStyling = {
    background: PRIMARY_COLOR,
    borderStyle: "none",
    color: bgColor,
  };

 

  return (
    <div style={{display: 'flex',justifyContent:'center',alignItems:'center'}}>

    <Card
      style={{ width: "30rem" }}
      className="mx-2 my-2"
      bg={bgColor}
      text={bgColor === SECONDARY_COLOR ? "light" : "dark"}
    >
      <Card.Body>
        <Card.Title style={labelStyling}>
          Professor Brockenbrough's User Skeleton App
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          A starting point for an application.
        </Card.Subtitle>
        <Card.Text></Card.Text>
        <div className="button-container">
        <Link to="/signup" style={labelStyling}>
          <Button variant="primary" style={buttonStyling} className="mr-2">
            Sign Up
          </Button>
        </Link>
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