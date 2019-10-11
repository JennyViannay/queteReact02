import React from 'react';
import './App.css';
import './contact.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {

  return (
      <div className="App">
        <Navbar id={1} name='hello world'status={true}/>
      </div>
  );
}

export default App;
