import React from 'react';

import GlobalSyle from './styles/global'

import Header from './components/Header';
import Board from './components/Board';

function App() {
  return (
    <>
      <Header/>
      <Board/>
      <GlobalSyle/>
    </>
    
  );
}

export default App;
