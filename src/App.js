import React, {Component} from 'react';
import { Api } from './components/Api'
import { Header } from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from '@material-ui/core/Container';
import {Dots} from 'react-preloaders';
import SpacingGrid from './components/Spacing';
import SearchAppBar from './components/Navbar'
// import './components/image'
// import Header from './components/Header';



function App() {
  return (
    
        <Container maxWidth="xl">
          <SearchAppBar />
          <SpacingGrid />
        </Container>
    


  );
}

export default App;
