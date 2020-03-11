import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Content from './Content';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Content />
    </div>
  );
}

export default App;
