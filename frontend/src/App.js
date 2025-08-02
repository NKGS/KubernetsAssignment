import React, { useEffect, useState } from 'react';

function App() {
  const [records, setRecords] = useState([
    { id: 1, name: 'Loading...', email: 'Loading...' }
  ]);

  useEffect(() => {
    fetch('http://34.61.98.233.nip.io/records')
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
