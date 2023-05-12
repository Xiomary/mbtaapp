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
 
  const getBgColor = (id) => {
    switch(id % 4) {
      case 0:
        return {bg: "danger", title: "Red line"};
      case 1:
        return {bg: "warning", title: "Orange line"};
      case 2:
        return {bg: "primary", title: "Blue line"};
      case 3:
        return {bg: "success", title: "Green line"};
      default:
        return {bg: "info", title: "Unknown line"};
    }
  }
 
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      {alerts.map(alert => {
        const bgColor = getBgColor(alert.id);
        return (
          <Card
            key={alert.id}
            body
            bg={bgColor.bg}
            text="dark"
            border="warning"
            className="mx-1 my-2"
            style={{ width: "30rem", margin: "auto" }}
          >
            <Card.Body>
              <Card.Title>{bgColor.title}</Card.Title>
              <Card.Text>{alert.attributes.header} - {alert.attributes.description}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}
 
export default Alerts;


