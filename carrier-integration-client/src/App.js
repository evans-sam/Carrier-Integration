import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import React, { useEffect, useState } from 'react';
import SignIn from './signin';


export default function App() {
  const [carriers, setCarriers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/carriers/')
    .then(response => response.json())
    .then(data => setCarriers(data.carriers))
  }, [])

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <SignIn Carriers={carriers}/>
      </Box>
    </Container>
  );
}