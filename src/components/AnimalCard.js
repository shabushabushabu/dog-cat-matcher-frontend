import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ShabuImage from "../figures/SHABU_profile3.jpg"

function AnimalCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="shabu"
                height="140"
                image={ShabuImage}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Shabu the Corgi
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lovely corgi dog
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Adopt</Button>
            </CardActions>
        </Card>
    );
}

export default AnimalCard;