import { useState } from "react";
import { useUserContext } from "../context/UserContext";

// mui
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl'
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function LoginForm() {

    // component is stateful
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [submitResult, setSubmitResult] = useState('');

    // destructure the context values passed via UserProvider
    const { currentUser, handleUpdateUser } = useUserContext();

    // copy pasta from lecture notes
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userPassword.length < 5) {
            setSubmitResult('Password must be at least 5 chars long');
        } else if (userPassword === userEmail) {
            setSubmitResult('Password must not match email address');
        } else {
            setSubmitResult('Successful login.');
            handleUpdateUser({ email: userEmail }); // context function
        }
    }

    const handleUserEmailChange = (e) => {
        setUserEmail(e.target.value);
    }

    const handleUserPasswordChange = (e) => {
        setUserPassword(e.target.value);
    }


    {/* if the user is already logged in, show msg instead of form */ }
    if (currentUser.email) return (
        <><p>Welcome {currentUser.email}!</p>
            <button onClick={() => handleUpdateUser({})}>Log Out</button>
        </>
    );

    return (
        // <div className="LoginForm componentBox">
        //     <label>Email: {/* form inputs with similar props */}
        //         <input value={userEmail} onChange={handleUserEmailChange} />
        //     </label>
        //     <label>Password: {/* form inputs with similar props */}
        //         <input value={userPassword} onChange={handleUserPasswordChange} />
        //     </label>
        //     <button onClick={handleSubmit}>Login</button>
        //     <p>{submitResult}</p>
        // </div>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                {submitResult}
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        value={userEmail}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleUserEmailChange}
                    />
                    <TextField
                        value={userPassword}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleUserPasswordChange}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}