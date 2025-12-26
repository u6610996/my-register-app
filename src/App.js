import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';        // Your previous classwork
import RegisterSubmit from './RegisterSubmit'; // The NEW classwork

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* Navigation Menu */}
        <nav style={{ padding: '15px', background: '#333', color: '#fff', marginBottom: '20px' }}>
          <Link to="/" style={{ color: 'white', marginRight: '20px' }}>Display input data</Link>
          <Link to="/submit-data" style={{ color: 'yellow', fontWeight: 'bold' }}>Submit data</Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Register />} />
          
          {/* New Route for this assignment */}
          <Route path="/submit-data" element={<RegisterSubmit />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;