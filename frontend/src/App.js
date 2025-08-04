import React, { useEffect, useState } from 'react';

function App() {
  const [records, setRecords] = useState([
    { id: 1, name: 'Loading...', email: 'Loading...' }
  ]);

  //fetch('http://node-api-service/records')
  //kubectl exec -it <pod> -- curl http://node-api-service/records

  useEffect(() => {
    fetch('http://node-api-service/records')
      .then((res) => res.json())
      .then((data) => setRecords(data))
      .catch((err) => console.error('Error fetching records:', err));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>Users list from DB</h1>
      <ul>
        {records.map((item) => (
          <li key={item.id}>
            <strong>{item.name}:</strong> {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
