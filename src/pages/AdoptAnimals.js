import react, {Component, useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Header from "../components/Header"
import Footer from "../components/Footer"
import AnimalCard from "../components/AnimalCard"


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


function AdoptAnimalsPage() {


    return (
        <ThemeProvider theme={theme}>
            <Header/>

            Adopt Animals
            <Box sx={{p:5}}>
                <Stack 
                spacing={5} 
                alignItems="center"
                justifyContent={"center"}>
                <AnimalCard/>
                </Stack>
            </Box>

            <Footer/>

        </ThemeProvider>
    )
}

export default AdoptAnimalsPage;