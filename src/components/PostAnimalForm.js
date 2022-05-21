import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import Autocomplete from '@mui/material/Autocomplete';
import { createTheme, styled } from '@mui/material/styles';

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


const defaultTags = [
    'Dog',
    'Cat',
    'Shabu',
    'ShabuEatsTarin',
];

const Input = styled('input')({
    display: 'none',
});

function PostAnimalForm() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [photoUrls, setPhotoUrls] = useState("");
    const [tags, setTags] = useState([]);

    async function handleSubmitAnimal() {
        if (name !== "") {
            const response = await fetch("/api/animal", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: name,
                    description: description,
                    photoUrls: [],
                    tags: tags
                })
            });

            const data = await response.json();
            console.log(data);

            if (data) {
                const formData = new FormData();
                formData.append("id", data.id)
                formData.append("photo", photoUrls[0])
                const responsePic = await fetch("/api/uploadPhoto", {
                    method: "post",
                    body: formData
                });
            } else {
                console.log("Fail to upload photo");
            }
        } else {
            console.log("no name");
        }
    };

    return (
        <Box
            display="fluid"
            component="form"
            sx={{
                padding: 5,
                alignItems: 'center',
                justifyContent: "center",
            }}
            noValidate
            autoComplete="off"
        >
            <Grid item xs={12}>
                <AddCircleIcon fontSize="large" />
            </Grid>
            <Grid item xs={12} paddingBottom={3}>
                <Typography variant='h5'
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                    }}>
                    Post Animals
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Animal Name"
                    variant="standard"
                    name="name"
                    value={name}
                    autoFocus
                    onChange={(event) => setName(event.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="description"
                    label="Add Animal Descriptions"
                    variant="standard"
                    name="name"
                    value={description}
                    multiline
                    onChange={(event) => setDescription(event.target.value)}
                />
            </Grid>
            <Grid item xs={12}>
                <Autocomplete
                    multiple
                    id="tags-filled"
                    options={defaultTags}
                    freeSolo
                    value={tags}
                    onChange={(event, newValue) => {
                        setTags([
                            ...newValue,
                        ]);
                    }}
                    renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
                        ))
                    }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            variant="standard"
                            label="Tags"
                            placeholder="Add tags"
                        />
                    )}
                />
            </Grid>
            <Grid item xs={12} sx={{ mt: 3, mb: 2 }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <label htmlFor="contained-button-file">
                        <Input accept="image/*" id="contained-button-file" multiple type="file"
                            onChange={(event) => {
                                setPhotoUrls(event.target.files);
                            }} />
                        <Button variant="contained" component="span">
                            Upload Image
                        </Button>
                    </label>
                    <label htmlFor="icon-button-file">
                        <Input accept="image/*" id="icon-button-file" type="file"
                            onChange={(event) => {
                                setPhotoUrls(event.target.files);
                            }} />
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label>
                </Stack>
            </Grid>
            <Grid item xs={12}>
                <Button
                    // type="submit"
                    fullWidth
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={handleSubmitAnimal}
                    sx={{ mt: 3, mb: 2, bgcolor: "primary.dark" }}>
                    Submit
                </Button>
            </Grid>
        </Box>
    );
}

export default PostAnimalForm;

// submit form ?
// 2 API reqs