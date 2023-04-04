import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

 

function Route() {
  const [route, setRoutes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/route_patterns',
      );
      const filteredRoutes = result.data.data.filter((route, index) => index < 6);
      setRoutes(filteredRoutes);
    }
    fetchData();
  }, []);
 
  return (

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {route.map(route => (
        <Card
        body
        bg="info"
        text="dark"
        border="warning"
        className="mx-1 my-2"
        
        
        style={{ width: "30rem" }}
        
      >
        <Card.Body>
        <Card.Title>Stations</Card.Title>
        <Card.Text>{route.attributes.name}{route.attributes.effect}</Card.Text>
        </Card.Body>
        
      </Card>
      ))}
 
    </div>
  );
 
  
}

export default Route;
 

 