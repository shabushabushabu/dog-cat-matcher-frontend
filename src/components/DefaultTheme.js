import { createTheme } from '@mui/material/styles';

import BackgroundImage from "../figures/SHABU_bg1.jpg";

const DefaultTheme = createTheme({
    BackgroundImage: `url(${BackgroundImage})`,
    palette: {
        background: {
            default: "#f5f1ff",
            light: "#f7f3ff"
        },
        primary: {
            main: "#ceb2ff",
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

  export default DefaultTheme;