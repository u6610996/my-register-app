import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <nav style={{ padding: '10px', background: '#ddd' }}>
          {/* Optional Navigation */}
          <Link to="/">Go to Register</Link>
        </nav>
        
        <Routes>
          {/* Setting Register as the root path "/" */}
          <Route path="/" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;