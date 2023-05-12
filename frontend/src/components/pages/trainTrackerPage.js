import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';

function Alerts() {
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    // Fetch alerts data from the MBTA API
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/alerts?sort=banner&filter%5Bactivity%5D=BOARD%2CEXIT%2CRIDE',
      );
      setAlerts(result.data.data); // Store the fetched alerts in the state
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* Render each alert as a Card component */}
      {alerts.map(alert => (
        <Card
          body
          bg="info"
          text="dark"
          border="warning"
          className="mx-1 my-2"
          style={{ width: "30rem" }}
        >
          <Card.Body>
            {/* Display the alert header and description */}
            <Card.Title>Alert</Card.Title>
            <Card.Text>{alert.attributes.header} - {alert.attributes.description}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Alerts;
