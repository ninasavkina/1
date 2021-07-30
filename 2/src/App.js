import React from 'react';
import Button from '@material-ui/core/Button';
import './App.css'

function App() {
    return (
        <>
            <form action="" method="get">
                <p title="Sing in">Sign in to your account</p>

                <div className="group">
                    <label htmlFor="">E-mail</label>
                    <input type="text" name="E-mail"/>
                </div>

                <div className="group">
                    <label htmlFor="">Password:</label>
                    <input type="password" name="password"/>
                </div>

                <div className="group">
                    <Button>Регистрация</Button>
                </div>

                <a href="https://www.google.com" target="_blank">Forgot your password?</a>

            </form>
        </>
);
}

export default App;