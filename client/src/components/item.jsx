// 3. Write a React component that renders a list of items fetched from an API.


import React, { useState, useEffect } from 'react';
import { data_product } from '../data_product';

const Item = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(data_product);
        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }
        const data = await response.json();
        setItems(data); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the function to fetch data when the component mounts
  }, []);

  return (
    <div>
      <h2>Item List</h2>
      <ul>
        {data_product.map((item, index) => (
          <li key={index}>{item.name}</li>
          
        ))}
      </ul>
    </div>
  );
};

export default Item;
