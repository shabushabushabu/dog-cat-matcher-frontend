import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import {Link} from 'react-router-dom';

function PageCard(props){
    return (
        <Card sx={{ 
            maxWidth: 500,
            }}
            elevation={5}>
            <Link to={props.pageUrl}>
                <Box sx={{ position: 'relative'}}>
                <CardMedia
                component="img"
                // height="200"
                image={props.imageUrl}/>
                <Box
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    bgcolor: 'rgba(0, 0, 0, 0.54)',
                    color: 'white',
                    padding: '10px',
                }}
                >
                <Typography variant="h5">{props.pageTitle}</Typography>
                <Typography variant="body2">{props.pageDescription}</Typography>
                </Box>
                </Box>
            </Link>
        </Card>
    )
};

export default PageCard;