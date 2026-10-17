import React from 'react';
import './App.css';


const App = () => {
  return (
    <div className="App" >
      <header className='top_banner'>
        <img
        src='./src/assets/Image.jpg'
        alt='Header Image'></img>
        
      <div className='overlay'>
        <p className='title'>IP Address Tracker</p>
        <div className='search'>
          <input type="text" placeholder="Search for any IP address or domain" />
          <button>&gt;</button>
        </div>
      </div>
      
      </header>
      

    </div>
  )
}
export default App;
