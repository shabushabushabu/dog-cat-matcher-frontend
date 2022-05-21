import { Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import Header from "../components/Header";
import Footer from "../components/Footer";
import CEOImageList from '../components/CEOImageList';
import DefaultTheme from '../components/DefaultTheme';

import { isLogin } from '../functions/Authen';

function CEOPage() {

  if (!isLogin()) {
    return (
      <Navigate to="/login" />
    )
  } else {
    return (
      <ThemeProvider theme={DefaultTheme}>
        <Header />

        <Box 
        sx={{ p: 5 }}>
            <CEOImageList/>

        </Box>

        <Footer />
      </ThemeProvider>
    )
  };
}

export default CEOPage;