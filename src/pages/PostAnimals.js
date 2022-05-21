import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "../components/Header";
import Footer from "../components/Footer";
import PostAnimalForm from "../components/PostAnimalForm";
import DefaultTheme from '../components/DefaultTheme';

import { isLogin } from '../functions/Authen';

function PostAnimalsPage() {

  if (!isLogin()) {
    return (
      <Navigate to="/login" />
    )
  } else {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Header />

        <Grid container component="main"
          alignItems="center" justifyContent="center"
          spacing={2} p={5} minHeight="100vh">

          <Grid item xs={8} md={6} sx={{ boxShadow: 10 }}
            alignItems="center" justifyContent="center"
            bgcolor={"background.default"}>
            <PostAnimalForm />
          </Grid>

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  };
}

export default PostAnimalsPage;