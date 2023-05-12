import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt';
import './homePage.css';

const HomePage = () => {
  // State variables
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  // Handle click event for logout button
  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('accessToken');
    return navigate('/');
  };

  // Fetch user info on component mount
  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  // If user is not logged in, display a message
  if (!user) {
    return <div><h4>Log in to view this page.</h4></div>;
  }

  // Extract user information
  const { id, email, username, password, favline, favroute } = user;

  // Render the component
  return (
    <>
      <img src="/trainhome.png" alt="Train" className="center-image" />
      <div className="my-container">
        <h3>
          Welcome
          <span className="username"> @{username}</span>
        </h3>
        <h3>
          Your registered email is
          <span className="email"> {email}</span>
        </h3>
        <h3>
          Your password is
          <span className="password"> ( hashed )</span>
        </h3>
        <h3>
          Your favorite line is
          <span className="favline"> {favline}</span>
        </h3>
        {/* Logout button */}
        <button onClick={handleClick}>Logout</button>
      </div>
    </>
  );
};

export default HomePage;
