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
      setRoutes(result.data.data);
    }
    fetchData();
  }, []);
 
  return (

    <div>
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
 
    
      {route.map(route => (
        <div key={route.id}>
          <h3>{route.attributes.name}</h3>
          <p>{route.attributes.effect}</p>
        </div>
      ))}
    </div>
  );
 
  
}

export default Route;
 

 