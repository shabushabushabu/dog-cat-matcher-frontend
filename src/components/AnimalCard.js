import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        background: {
            default: "#ffebee",
            light: "#ffeff1"
        },
        primary: {
            main: "#d7a8df", //  #ce93d8 #d7a8df #dfb9e5
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

const BootstrapTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.palette.common.black,
    },
}));

function AnimalCard(props) {

    return (
        <ThemeProvider theme={theme}>
            <Card
                sx={{ width: 250, m: 3, textAlign: "left", bgcolor:"background.light" }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "primary.dark" }} aria-label="initial-animal">
                            {props.name.charAt(0)}
                        </Avatar>
                    }
                    title={props.name}
                //   subheader="September 14, 2016"
                />

                <CardMedia
                    component="img"
                    height="194"
                    image={props.photoUrl}
                    alt="animal-image"
                />

                <CardActions disableSpacing>
                    <BootstrapTooltip title="Adopt Me!">
                        <IconButton aria-label="adopt" size="medium" color="primary">
                            <PetsIcon />
                        </IconButton>
                    </BootstrapTooltip>
                </CardActions>

                <CardContent
                    sx={{ paddingTop: 0 }}>
                    <Typography variant="body2" color="text.primary">
                        {props.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.tags.map(tag => "#" + tag + " ")}
                    </Typography>
                </CardContent>
            </Card>
        </ThemeProvider>
    );
}

export default AnimalCard;


//TODO petICON
// 1.  State
// 2. Color
// 3. Positiion