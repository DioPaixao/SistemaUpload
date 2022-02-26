import React, { Component } from 'react'; 

import GlobalStyle from './styles/global'

import { Container, Content } from './styles'
import Upload from './components/Uploads';

function App() {
  return (
    <div className="App">
      <Container>
        <Content>
          <Upload />
        </Content>
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default App;
