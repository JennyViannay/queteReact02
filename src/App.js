import React from 'react';
import './App.css';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import Citation from './components/Citation';

function App() {

  return (
    <div className="App">
      <Navbar />
      <hr />
      <Citation />
      
    </div>
  );
}

export default App;
