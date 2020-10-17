import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Wrapper from './components/Wrapper';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;
