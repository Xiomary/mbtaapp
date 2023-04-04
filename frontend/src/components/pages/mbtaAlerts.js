import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/alerts?sort=banner&filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE',
      );
      setAlerts(result.data.data);
    }
    fetchData();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {alerts.map(alert => (
        <Card
          key={alert.id}
          body
          bg="info"
          text="dark"
          border="warning"
          className="mx-1 my-2"
          style={{ width: "30rem", margin: "auto" }}
        >
          <Card.Body>
            <Card.Title>Alert</Card.Title>
            <Card.Text>{alert.attributes.header} - {alert.attributes.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Alerts;
