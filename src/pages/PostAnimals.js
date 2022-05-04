import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "../components/Header";
import Footer from "../components/Footer";
import PostAnimalForm from "../components/PostAnimalForm";

import CorgiImage from "../figures/SHABU_profile.jpg";

import { isLogin } from '../functions/Authen';


const theme = createTheme({
  palette: {
    background: {
      default: "#ffebee"
    },
    primary: {
      main: "#ce93d8",
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


function PostAnimalsPage() {

  if (!isLogin()) {
    return (
      <Navigate to="/login" />
    )
  };


  return (
    <ThemeProvider theme={theme}>
      <Header />

      <Grid container component="main"
        alignItems="center" justifyContent="center"
        spacing={2} p={5}>

        <Grid item xs={12}>
          <Typography variant='h5'
            sx={{
              textAlign: "center",
              fontWeight: "bold"
            }}>
            Post Animals
          </Typography></Grid>

        <Grid item xs={12}
          bgcolor={"background.default"}>
          <PostAnimalForm />
        </Grid>

        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>

    </ThemeProvider>
  )
}

export default PostAnimalsPage;