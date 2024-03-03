import './App.css';
import './index.css';
import Gallery from './Components/Gallery';
import Search from './Components/Search';
import Footer from './Components/Footer';
import React from 'react';
import './style.css';

function App() {
  return (
    <div className='App'>
      <Footer />
      <Search />
      br
      <Gallery />
  </div>
  );
}

export default App;
