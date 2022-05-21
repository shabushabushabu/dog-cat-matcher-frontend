import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimalCard from "../components/AnimalCard";

import { isLogin } from '../functions/Authen';

import DefaultImage from "../figures/SHABU_profile3.jpg";


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

const animalData = [
  { name: "Shabu1", description: "A very lovely dog who loves salmon and beef. He poos 3 times a day and is scared of cats", photoUrls: [DefaultImage], tags: ["Corgi", "Dog", "Lovely", "Salmon", "Beef"] },
  { name: "Zhabu2", description: "A fat dog with no tail. He barks at almost everything", photoUrls: [DefaultImage], tags: ["Corgi", "Dog", "Peach"] },
  { name: "Shabu3", description: "A corgi dog", photoUrls: [DefaultImage], tags: ["Corgi", "Dog"] },
  { name: "Zhabu4", description: "A pig-like dog. People thinks that he's a pig, but he's actually a dog", photoUrls: [DefaultImage], tags: ["Corgi", "Pig", "Pork"] },
  { name: "Shabu5", description: "An eating dog. 150 IQ corgi who can't even catch birds", photoUrls: [DefaultImage], tags: ["Corgi", "Smart", "ShabuHatesBirds"] },
]


function AdoptAnimalsPage() {
  const [animalList, setAnimalList] = useState([]);

  useEffect(() => {
    fetch("/api/animals", {
      "method": "GET",
      headers: {
        "Content-Type": "application/json"
      }
    }).then(response => response.json())
      .then(data => {
        setAnimalList(data)
      })
  }, []);
  console.log(animalList)


  const animalCards = animalList.map(animal => {
    return (
      <AnimalCard
        name={animal.name}
        description={animal.description}
        photoUrl={animal.photoUrls.length > 0 ?
          animal.photoUrls[
          Math.floor(Math.random() * animal.photoUrls.length)] : DefaultImage}
        tags={animal.tags}
      />
    )
  });

  if (!isLogin()) {
    return (
      <Navigate to="/login" />
    )
  } else {
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
              Adopt Animals
            </Typography></Grid>

          <Grid item xs={12}>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                // backgroundColor: "purple",
                alignContent: "center",
                justifyContent: "center"
              }}>
              {animalCards}
            </div>
          </Grid>

          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      </ThemeProvider>
    )
  };
}

export default AdoptAnimalsPage;