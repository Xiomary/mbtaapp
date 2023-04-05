import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './routePatterns.css';

function RoutePatterns() {
  const [routePatterns, setRoutePatterns] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function fetchData() {
      const result = await axios(
        'https://api-v3.mbta.com/route_patterns',
      );
      setRoutePatterns(result.data.data);
    }
    fetchData();
  }, []);

  const filteredRoutePatterns = routePatterns.filter(routePattern =>
    routePattern.attributes.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container my-4">
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>Search by Line Name</Form.Label>
          <Col sm={10}>
            <Form.Control type="text" placeholder="Enter line name" onChange={(e) => setSearchTerm(e.target.value)} />
          </Col>
        </Form.Group>
      </Form>
      <Row className="justify-content-center">
        {filteredRoutePatterns.map(routePattern => (
          <Col xs={12} md={6} lg={4} key={routePattern.id} className="my-3">
            <Card bg="white" border="warning" className="h-100">
              <Card.Body>
                <Card.Title>{routePattern.attributes.name}</Card.Title>
                <Card.Text>{routePattern.attributes.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default RoutePatterns;
