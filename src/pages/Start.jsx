import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyComponent() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // API 요청 수행
    axios.get('http://localhost:8080/api/users')
      .then(response => {
        // 데이터 처리
        setData(response.data);
      })
      .catch(error => {
        console.log('Error:', error.message);
      });
  }, []);

  return (
    <div>
      {data ? (
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>console.error();</p>
      )}
    </div>
  );
}

export default MyComponent;