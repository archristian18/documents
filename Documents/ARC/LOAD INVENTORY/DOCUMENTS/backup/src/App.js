import React from 'react';
import { Rightbar } from './components/Rightbar';
import { Sidebar } from './components/Sidebar';
import { Feed } from './components/Feed';
import { Container } from '@mui/material';

function App() {

    return (
        <Container sx={{backgroundColor: 'red'}}>
          <Sidebar />
          <Feed />
          <Rightbar />
        </Container> 
    );
}

export default App;
