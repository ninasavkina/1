import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        padding: '30px',
        borderRadius: '5px'
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    typo: {
        cursor: 'pointer',
    },
    email: {
        cursor: 'pointer',
    },
    grid: {
        marginTop: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    stack: {
        marginTop: theme.spacing(6),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'Impact',
        fontSize: '30px',
        fontWeight: '700',
        color: '#3d50b6'

    },
}));

export default function SignIn() {
    const classes = useStyles();

    return (
        <>
        <Container component="main" maxWidth="xs">
            <p className={classes.stack}>STACKFINDOVER</p>

            <CssBaseline />
            <div className={classes.paper}>
                <Typography className={classes.typo} component="h1" variant="h6">
                    Sign in to your account
                </Typography>
                <form className={classes.form}>
                    <TextField
                        input type="email"
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        inputProps={{
                            style: {
                                cursor: "pointer"
                            }
                        }}

                    />

                    <Grid item xs>
                        <Link href="https://www.google.com" target="_blank" variant="body2">
                            Forgot password?
                        </Link>
                    </Grid>

                    <TextField
                        variant="outlined"
                        cursor="pointer"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        maxlength="6"
                        inputProps={{
                            minlength: "6",
                            style: {
                                cursor: "pointer"
                            }
                        }}
                    />

                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Stay signed in for a week"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        cursor="pointer"
                    >
                        Continue
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Link href="https://www.google.com.ua/maps/" target="_blank" variant="body2">
                                {"Use single sing-on (Google) instead"}
                            </Link>
                        </Grid>
                    </Grid>

                </form>
            </div>
            </Container>
                <Grid item className={classes.grid}>
                    <p>Don't have an account?</p>
                    <Link href="https://www.facebook.com" target="_blank" variant="body2">
                        {"Sing Up"}
                    </Link>
                </Grid>
        </>
    );
}