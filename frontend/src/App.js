import React, { Component } from 'react'; 

import GlobalStyle from './styles/global'

import { Container, Content } from './styles'
import Upload from './components/Uploads';
import FileList from './components/FileList';

function App() {
  return (
    <div className="App">
      <Container>
        <Content>
          <Upload />
          <FileList />
        </Content>
        <GlobalStyle />
      </Container>
    </div>
  );
}

export default App;
