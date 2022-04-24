import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Tooltip from '@mui/material/Tooltip';

import Footer from "../components/Footer"
import CEOImage from "../figures/IMG_4700.JPG"

import SignUpModel from '../components/Signup';

const theme = createTheme({
  palette: {
    background: {
      default: "#ffebee"
    },
    primary: {
      main: "#d7a8df",
    },
    secondary: {
      main: '#84c887',
    },
    error: {
      main: "#f6a5c0"
    },
    warning: {
      main: "#ffbba7"
    }
  }
});

function SignInModel() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit() {

    if ((email !== "") && (password !== "")) {

      // fetch /api/login

      const response = await fetch("/api/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: email,
          password: password
        })
      })

      const data = await response.json()
      console.log(data)

      if (data.message === "success") {
        console.log("login");
        // save JWT token to local storage
        window.localStorage.setItem("userid", "shabu");
        window.localStorage.setItem("usertoken", "112");

        navigate("/home")

      } else {
        console.log("no")

      }

    } else {
      console.log("No fill")
    }


  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <Tooltip title="CEO" followCursor>
          <Grid item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${CEOImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </Tooltip>
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square bgcolor={"background.default"}>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                autoComplete="email"
                autoFocus
                onChange={(event) => setEmail(event.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                // type="submit"
                fullWidth
                variant="contained"
                onClick={handleSubmit}
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid item>
                <SignUpModel />
              </Grid>
              <Footer />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default SignInModel;

// if password correct goto home