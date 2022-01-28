import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
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