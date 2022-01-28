import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, red } from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import React, { useState, useEffect } from 'react';
import { MenuItem, Select, CircularProgress } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import CheckIcon from '@mui/icons-material/Check';

const theme = createTheme();

export default function SignIn({Carriers, ...rest}) {

  const [selectedCarrierId, setSelectedCarrierId] = useState('');
  const [carrierSelected, setCarrierSelected] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failure, setFailure] = useState(false);
  const [buttonText, setButtonText] = useState('Sign In');

  const handleSubmit = (event) => {
    event.preventDefault();

    setLoading(true);

    const data = {
      carrierId: selectedCarrierId,
      username: username,
      password: password
    };

    fetch('http://localhost:5000/carriers/validate', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    .then(response => {
      if(response.status === 200){
        setSuccess(true);
        setFailure(false);
      } else {
        setSuccess(false);
        setFailure(true);
        setButtonText('Failed');

        setTimeout(() => {
          setSuccess(false);
          setFailure(false);
          setButtonText('Sign In');
        }, 3000)
      }

      setLoading(false);
    })
  };

  const buttonSx = {
    mt: 3, 
    mb: 2 ,
    ...(success && {
      bgcolor: green[500],
      '&:hover': {
        bgcolor: green[700],
      },
    }),
    ...(failure && {
      bgcolor: red[500],
      '&:hover': {
        bgcolor: red[700],
      },
    }),
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1176 211.95"><g id="Layer_2" data-name="Layer 2"><g id="Layer_1-2" data-name="Layer 1"><path d="M0,15.24H42.62V208.66H0Z"/><path d="M75.17,75.89h39.35v18a0,0,0,0,0,0,0h.54a61.05,61.05,0,0,1,5.46-7.64A39.74,39.74,0,0,1,129,79.43a48.35,48.35,0,0,1,11.2-4.91,46.54,46.54,0,0,1,13.66-1.92q15.57,0,25.14,4.79a36.29,36.29,0,0,1,14.89,13.25,53.65,53.65,0,0,1,7.24,19.94c1.27,7.65,1.91,24.86,1.91,24.86v73.22h-41v-65s-.14-7.77-.41-11.87a37.88,37.88,0,0,0-2.46-11.34A19.53,19.53,0,0,0,152.9,112q-4.23-3.28-12.15-3.28t-12.85,2.87a19.57,19.57,0,0,0-7.51,7.65A31.42,31.42,0,0,0,117,130c-.54,4-.81,12.56-.81,12.56v66.12h-41Z"/><path d="M305.56,115h0s-13.93-11.2-23.77-11.2a22.36,22.36,0,0,0-10.11,2.46q-4.91,2.46-4.91,8.47,0,4.92,5.05,7.24a66.46,66.46,0,0,0,12.84,4.1l16.67,3.83A62.36,62.36,0,0,1,318,136.27a37.24,37.24,0,0,1,12.84,11.88q5.06,7.51,5.05,20.08,0,12.86-5.6,21.18a43,43,0,0,1-14.34,13.39,61.8,61.8,0,0,1-19.68,7.1,116.54,116.54,0,0,1-21.58,2,104.43,104.43,0,0,1-28.14-4c-9.48-2.64-24-14.07-24-14.07h0l24.85-27.58s0,0,0,0,8.06,8.32,12.7,10.78a34.25,34.25,0,0,0,16.26,3.69,37.89,37.89,0,0,0,12.84-2.05q5.74-2,5.74-7.51,0-5.19-5.06-7.79A55.67,55.67,0,0,0,277,159.08q-7.78-1.77-16.66-3.82a69,69,0,0,1-16.67-6.15,34.85,34.85,0,0,1-12.84-11.61q-5.07-7.51-5.06-20.09,0-11.75,4.78-20.22a42.17,42.17,0,0,1,12.57-13.93A54.43,54.43,0,0,1,261,75.2a82.1,82.1,0,0,1,20.49-2.6A96.11,96.11,0,0,1,308,76.43c8.93,2.55,22.67,13.65,22.67,13.65s0,0,0,0Z"/><path d="M485.32,208.66H446v-18s0,0,0,0h-.52s0,0,0,0a85,85,0,0,1-5.59,7.64,36.74,36.74,0,0,1-8.34,6.83,48.37,48.37,0,0,1-11.2,4.92A46.88,46.88,0,0,1,406.63,212q-15.57,0-25.28-4.78a36.23,36.23,0,0,1-15-13.25A52.12,52.12,0,0,1,359.22,174c-1.18-7.65-1.77-24.85-1.77-24.85V75.89a0,0,0,0,1,0,0h41a0,0,0,0,1,0,0v65s.14,7.78.41,11.88a37.34,37.34,0,0,0,2.46,11.34,19.56,19.56,0,0,0,6.28,8.46q4.25,3.28,12.16,3.28T432.59,173a19.61,19.61,0,0,0,7.51-7.64,31.18,31.18,0,0,0,3.41-10.8c.55-4,.82-12.56.82-12.56V75.89h41Z"/><path d="M514.8,75.89h41V97.18h.55s9.56-14.34,15.57-18.44,13.57-6.15,22.68-6.15c2.36,0,4.73.1,7.1.28A64.57,64.57,0,0,1,608.24,74a0,0,0,0,1,0,0v37.41a0,0,0,0,1,0,0s-5.78-1.59-8.6-2.05a56.31,56.31,0,0,0-8.88-.68q-11.75,0-18.58,3.28a24.69,24.69,0,0,0-10.52,9.15,34.83,34.83,0,0,0-4.78,14.07c-.73,5.47-1.09,18-1.09,18v55.46h-41Z"/><path d="M817.42,192.89a0,0,0,0,1,0,0s-25.67,11.3-39.33,14.21a200.11,200.11,0,0,1-41.8,4.37,119.11,119.11,0,0,1-41.81-7.11A95.51,95.51,0,0,1,661.41,184a92.23,92.23,0,0,1-21.72-32.11q-7.79-18.84-7.79-42.07t7.79-42.08a92.19,92.19,0,0,1,21.72-32.1A95.69,95.69,0,0,1,694.47,15.3a119.34,119.34,0,0,1,41.81-7.1A154.92,154.92,0,0,1,779,13.8c13,3.73,34.28,19.26,34.28,19.26h0l-30,32.77h0S770.88,55.29,763.6,52.19s-16.4-4.65-27.32-4.65a63.23,63.23,0,0,0-24.73,4.65,55.55,55.55,0,0,0-19,13A56.9,56.9,0,0,0,680.4,85a71.13,71.13,0,0,0-4.23,24.87,70.79,70.79,0,0,0,4.23,25,57,57,0,0,0,12.16,19.67,55.44,55.44,0,0,0,19,13,63.22,63.22,0,0,0,24.73,4.64q13.94,0,24-3.14a165.49,165.49,0,0,0,16.11-6.41V131.16H741.75a0,0,0,0,1,0,0V91.81h75.67a0,0,0,0,1,0,0Z"/><path d="M848.08,73.78h41V95.07s0,0,0,0h.54s9.55-14.34,15.57-18.44,13.56-6.15,22.67-6.15c2.37,0,4.74.1,7.11.28a65.12,65.12,0,0,1,6.55,1.09,0,0,0,0,1,0,0v37.41a0,0,0,0,1,0,0s-5.78-1.59-8.6-2.05a56.5,56.5,0,0,0-8.88-.68q-11.74,0-18.58,3.28A24.64,24.64,0,0,0,894.94,119a34.68,34.68,0,0,0-4.78,14.07c-.73,5.47-1.09,18-1.09,18v55.46h-41Z"/><path d="M962.36,32a22.93,22.93,0,0,1,7-16.81,23.77,23.77,0,0,1,33.61,0,22.9,22.9,0,0,1,7,16.81,22.86,22.86,0,0,1-7,16.8,23.74,23.74,0,0,1-33.61,0A22.89,22.89,0,0,1,962.36,32Zm3.27,41.81h41V206.55h-41Z"/><path d="M1176,206.55h-37.71V189.08a0,0,0,0,0,0,0h-.54a82.09,82.09,0,0,1-6.41,7.23A48.74,48.74,0,0,1,1122,203a56.77,56.77,0,0,1-11.75,4.92,46.35,46.35,0,0,1-13.25,1.91,68.43,68.43,0,0,1-26.78-5.06,59.56,59.56,0,0,1-20.63-14.2,63.43,63.43,0,0,1-13.25-21.72,79,79,0,0,1-4.64-27.6,83.5,83.5,0,0,1,4.23-26.64,73.29,73.29,0,0,1,12-22.54,58.71,58.71,0,0,1,19-15.71,53.86,53.86,0,0,1,25.41-5.88,70.73,70.73,0,0,1,23.91,4c7.38,2.65,18.16,13.52,18.16,13.52h.55a0,0,0,0,0,0,0V0h41Zm-46.15-66.38q0-15-8.61-24.32t-24.18-9.29q-15.57,0-24.18,9.29t-8.6,24.32q0,15,8.6,24.31t24.18,9.29q15.59,0,24.18-9.29T1129.85,140.17Z"/></g></g></svg>
          <Typography component="h1" variant="h5" sx={{marginTop: "48px"}}>
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Select id="carrier"
            required
            fullWidth
            value={selectedCarrierId}
            onChange={(event) => {
              setSelectedCarrierId(event.target.value);
              setCarrierSelected(true);
            }}
            >
              {Carriers.map(carrier => 
                (<MenuItem key={carrier.id} value={carrier.id}>{carrier.name}</MenuItem>)
              )}
            </Select>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              value={username}
              onChangeCapture={(event) => setUsername(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              disabled={!carrierSelected || loading}
              type="submit"
              fullWidth
              variant="contained"
              sx={buttonSx}
            >
              {success ? (<CheckIcon />) : buttonText}
            </Button>
            {loading && (<LinearProgress />)}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}