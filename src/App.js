import React from 'react';
import './App.css';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar';
import ContactList from './components/ContactList';

function App() {

  return (
      <div className="App">
        <Navbar />
        <hr />
        <ContactList />
      
      </div>
  );
}

export default App;
