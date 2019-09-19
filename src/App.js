import React, {Component} from 'react';
import { Api } from './components/Api'
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import {Dots} from 'react-preloaders';
// import './components/image'
// import Header from './components/Header';



function App() {
  return (
    <React.Fragment>
        <Container maxWidth="xl">
          <Api />
        </Container>
        {/* <Dots /> */}
    </React.Fragment>

  );
}

export default App;
