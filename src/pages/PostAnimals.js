import react, {Component, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "../components/Header"
import Footer from "../components/Footer"
import PageCard from "../components/PageCard"

import CorgiImage from "../figures/SHABU_profile.jpg"


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


    return (
        <ThemeProvider theme={theme}>
            <Header/>

            Post Animals


            <Footer/>

        </ThemeProvider>
    )
}

export default PostAnimalsPage;