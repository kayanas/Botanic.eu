import React from 'react';

import { Footer, Header, Blog, Features, WhatBotanic } from './containers';
import { Navbar } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <WhatBotanic />
      <Features />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;