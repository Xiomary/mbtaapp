import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import getUserInfo from '../../utilities/decodeJwt';
import './homePage.css';

const HomePage = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    localStorage.removeItem('accessToken');
    return navigate('/');
  };

  useEffect(() => {
    setUser(getUserInfo());
  }, []);

  if (!user) {
    return <div><h4>Log in to view this page.</h4></div>;
  }

  const { id, email, username, password, favline, favroute } = user;

  return (
    <>
      <img src="/Train.png" alt="Train" className="center-image" />
      <div className="my-container">
        <h3>
          Welcome
          <span className="username"> @{username}</span>
        </h3>
        <h3>
          Your userId in mongo db is
          <span className="userId"> {id}</span>
        </h3>
        <h3>
          Your registered email is
          <span className="email"> {email}</span>
        </h3>
        <h3>
          Your password is
          <span className="password"> {password} ( hashed )</span>
        </h3>
        <h3>
          Your favorite line is
          <span className="favline"> {favline}</span>
        </h3>
        <button onClick={(e) => handleClick(e)}>Log Out</button>
      </div>
    </>
  );
};

export default HomePage;
