import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));


function App() {
    return (
        <>
            <form action="" method="get">
                <p title="Sing in">Sign in to your account</p>

                <TextField
                    required
                    id="filled-required"
                    label="E-mail"
                    variant="filled"
                />

                <br/>

                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                />

            </form>
        </>
);
}

export default App;