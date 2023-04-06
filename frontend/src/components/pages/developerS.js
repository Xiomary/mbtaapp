import React, { useState, useEffect } from 'react';
import axios from 'axios';

const developerData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://localhost:8081/developer/getAll'
      );
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.map(item => (
        <div key={item._id}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default developerData;