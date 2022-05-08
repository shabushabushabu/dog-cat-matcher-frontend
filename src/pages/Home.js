import { Navigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "../components/Header";
import Footer from "../components/Footer";
import PageCard from "../components/PageCard";

import { isLogin } from '../functions/Authen';

import AdoptImage from "../figures/SHABU6.jpg";
import PostImage from "../figures/SHABU7.jpg";
import BackgroundImage from "../figures/SHABU_bg1.jpg";


const theme = createTheme({
  BackgroundImage: `url(${BackgroundImage})`,
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

const pageData = [
  { pageUrl: "/home/adoptanimals", imageUrl: AdoptImage, pageTitle: "Adopt Animals", pageDescription: "Be your dogs and cats' forever home" },
  { pageUrl: "/home/postanimals", imageUrl: PostImage, pageTitle: "Post Animals", pageDescription: "Help dogs and cats find their forever homes" }
]

function HomePage() {

  const pageCards = pageData.map(page => {
    return (
      <PageCard
        pageUrl={page.pageUrl}
        imageUrl={page.imageUrl}
        pageTitle={page.pageTitle}
        pageDescription={page.pageDescription}
      />
    )
  });

  if (!isLogin()) {
    return (
      <Navigate to="/login" />
      // return 1 component only
    )
  } else {
    return (
      <ThemeProvider theme={theme}>
        {/* <div style={{backgroundColor:"background.default"}}> */}
        <Header />

        <Box sx={{ p: 5 }}>
          <Stack
            spacing={5}
            alignItems="center"
            justifyContent={"center"}>
            {pageCards}
          </Stack>
        </Box>

        <Footer />
        {/* </div> */}
      </ThemeProvider>
    )
  };
}

export default HomePage;