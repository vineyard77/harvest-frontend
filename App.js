// React entry point
import React from 'react';
import ReactDOM from 'react-dom';

function App() {
  return <h1>Harvest Projection Platform - Frontend</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://harvest-backend-ocea.onrender.com") //
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Harvest Projection Platform</h1>
      <p>Backend says: {message}</p>
    </div>
  );
}

export default App;
