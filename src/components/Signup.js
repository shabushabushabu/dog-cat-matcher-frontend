import { useState } from 'react';

import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import DateAdapter from '@mui/lab/AdapterMoment';

import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import DefaultTheme from './DefaultTheme';

function SignUpModel() {
    const [isOpen, setOpen] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [occupation, setOccupation] = useState('');

    async function handleSignUp() {
        // if ((password!== "") & (password === confirmPassword)) {

        // }
        const response = await fetch("/api/user", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                firstName: firstName,
                lastName: lastName,
                email: email,
                password: password,
                birthDate: birthDate,
                occupation: occupation
            })
        });

        const data = await response.json();

        if (data.result === "success") {
            setOpen(false)
            console.log("Successfully signup user")
            // success pop-up
        } else {
            // error pop-up
            console.log("Failed signup user")
        }
    };

    let SignUpButton = (
        <Button
            fullWidth
            onClick={() => setOpen(true)}
        >
            Sign Up
        </Button>
    )

    return (
        <ThemeProvider theme={DefaultTheme}>
            <Modal
                open={isOpen}
                onClose={() => setOpen(false)}
            >
                <div fluid style={{
                    backgroundColor: "white",
                    width: "500px",
                    margin: "20vh auto",
                    padding: "30px"
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography variant='h5'
                                sx={{
                                    textAlign: "center",
                                    fontWeight: "bold"
                                }}>
                                Sign Up
                            </Typography>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                value={firstName}
                                onChange={(event) => setFirstName(event.target.value)}
                                autoFocus>
                            </TextField>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                name="lastName"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                value={lastName}
                                onChange={(event) => setLastName(event.target.value)}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="email"
                                // varient="filled"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                value={email}
                                autoComplete="email"
                                onChange={(event) => setEmail(event.target.value)}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                name="password"
                                // varient="filled"
                                required
                                fullWidth
                                id="password"
                                label="Password"
                                type="password"
                                value={password}
                                autoComplete="new-password"
                                onChange={(event) => setPassword(event.target.value)}
                            >
                            </TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={DateAdapter}>
                                <DatePicker
                                    disableFuture
                                    label="birthDate"
                                    value={birthDate}
                                    onChange={(value) => setBirthDate(value)}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>

                        <Grid item xs={12}>
                            <FormControl
                                required
                                fullWidth
                            >
                                <InputLabel id="occupation">
                                    Occupation
                                </InputLabel>
                                <Select
                                    labelId="occupation"
                                    id="occupation"
                                    value={occupation}
                                    label="Occupation"
                                    onChange={(event) => setOccupation(event.target.value)}
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Dog Lover"}>Dog Lover</MenuItem>
                                    <MenuItem value={"Cat Lover"}>Cat Lover</MenuItem>
                                    <MenuItem value={"Shabu Lover"}>Shabu Lover</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>

                        <Grid item xs={6}>
                            <Button
                                fullWidth
                                variant="contained"
                                color="error"
                                onClick={() => setOpen(false)}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                onClick={handleSignUp}>
                                Sign Up
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Modal>
            {SignUpButton}
        </ThemeProvider>
    )
};

export default SignUpModel;

// Wish list/Questions:
// 1. Why birthDate picker is error
// 2. Add photo?
