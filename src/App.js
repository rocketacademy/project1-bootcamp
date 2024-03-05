import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import People from './pages/People';
import Books from './pages/Books';
import BookDetail from './pages/BookDetail';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/people" element={<People />} />
        <Route path="/books" element={<Books />} />  
        <Route path="/detail/:bookId" element={<BookDetail />} /> 
      </Routes>
    </Router>
  );
}

export default App;