import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import signUpImage from './Images/signupandlogin.jpeg';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card"; // Import Bootstrap Card component

const PRIMARY_COLOR = "#cc5c99";
const SECONDARY_COLOR = "#0c0c1f";
const url = "http://localhost:8081/user/signup";
const Register = () => {
  const [data, setData] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [light, setLight] = useState(false);
  const [bgColor, setBgColor] = useState(SECONDARY_COLOR);
  const [bgText, setBgText] = useState("Light Mode");

    // Handle input change

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };
     // Toggle light/dark mode
  useEffect(() => {
    if (light) {
      setBgColor("white");
      setBgText("Dark mode");
    } else {
      setBgColor(SECONDARY_COLOR);
      setBgText("Light mode");
    }
  }, [light]);
   // Styling variables

     // Styling variables
  let cardStyling = {
    backgroundColor: bgColor, // Use the background color state for the card's background
    // Other card styles can be added here
  };

  let labelStyling = {
    color: PRIMARY_COLOR,
    fontWeight: "bold",
    textDecoration: "none",
  };
  
  let backgroundStyling = {
    background: bgColor,
    backgroundImage: `url(${signUpImage})`, // Add background image here
    backgroundSize: "cover", // Adjust the background size as needed
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed", // Optional, makes the background fixed
  };
  
  let buttonStyling = {
    background: PRIMARY_COLOR,
    borderStyle: "none",
    color: bgColor,
  };


    // Handle form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: res } = await axios.post(url, data);
      const {accessToken} = res
      //store token in localStorage
      navigate("/login");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <>
      <section className="vh-100">
        <div className="container-fluid h-custom vh-100">
          <div
            className="row d-flex justify-content-center align-items-center h-100 "
            style={backgroundStyling}
          >
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              {/* Use Bootstrap Card component */}
              <Card style={{ backgroundColor: bgColor }}>
                <Card.Body>
                  <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={labelStyling}>Username</Form.Label>
                      <Form.Control
                        type="username"
                        name="username"
                        onChange={handleChange}
                        placeholder="Enter username"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label style={labelStyling}>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        onChange={handleChange}
                        placeholder="Enter Email Please"
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label style={labelStyling}>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                    </Form.Group>
                    <div className="form-check form-switch">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="flexSwitchCheckDefault"
                        onChange={() => {
                          setLight(!light);
                        }}
                      />
                      <label
                        className="form-check-label text-muted"
                        htmlFor="flexSwitchCheckDefault"
                      >
                        {bgText}
                      </label>
                    </div>
                    {error && (
                      <div style={labelStyling} className="pt-3">
                        {error}
                      </div>
                    )}
                    <Button
                      variant="primary"
                      type="submit"
                      onClick={handleSubmit}
                      style={buttonStyling}
                      className="mt-2"
                    >
                      Register
                    </Button>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Register;