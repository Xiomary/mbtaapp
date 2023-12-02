import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './routePatterns.css';
 
function RoutePatterns() {
  

  // State to store the route patterns and the search term
  const [routePatterns, setRoutePatterns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
 
  useEffect(() => {
    // Fetch route patterns data from the MBTA API
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/route_patterns',
      );
      setRoutePatterns(result.data.data); // Store the fetched route patterns in the state
    }
    fetchData();
  }, []);

  // Filter the route patterns based on the search term
  const filteredRoutePatterns = routePatterns.filter(routePattern =>
    routePattern.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
    <div className="container my-4">
      {/* Search form */}
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Search by Line Name</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Enter line name" onChange={(e) => setSearchTerm(e.target.value)} />
          </Col>
        </Form.Group>
      </Form>

      {/* Display the filtered route patterns */}
      <Row className="justify-content-center">
        {filteredRoutePatterns.map(routePattern => (
          <Col xs={12} md={6} lg={4} key={routePattern.id} className="my-3">
            {/* Link to the MBTA Alerts page */}
            <Link to="/mbtaAlerts" className="custom-card-link">
              {/* Card component to display route pattern information */}
              <Card bg="white" border="warning" className="custom-card">
                <Card.Body>
                  <Card.Title className="custom-card-title">{routePattern.attributes.name}</Card.Title>
                  <Card.Text>{routePattern.attributes.description}</Card.Text>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
 
export default RoutePatterns;
 
 
 
