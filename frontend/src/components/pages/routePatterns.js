import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RoutePattern() {
  const [routePatterns, setRoutePatterns] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await axios('https://api-v3.mbta.com/route_patterns');
      setRoutePatterns(result.data.data);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Route Patterns</h1>
      <ul>
        {routePatterns.map(routePattern => (
          <li key={routePattern.id}>
            <h3>{routePattern.attributes.name}</h3>
            <p>{routePattern.attributes.effect}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RoutePattern;
