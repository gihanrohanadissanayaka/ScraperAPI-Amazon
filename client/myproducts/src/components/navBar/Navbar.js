import React, { useState } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { AppBar, Toolbar, Typography, TextField, IconButton } from '@material-ui/core';
import { Save, DeleteForever } from '@material-ui/icons';
import logo from '../../assets/logo.jpg';
import useStyle from './NavBarStyles';

const Navbar = () => {
    const classes = useStyle();
    const [isSubmit, setIsSubmit] = useState(false);
    const [apiKey, setApiKey] = useState(null);
    const location = useLocation();

    const handleAPIKey = () => {
        if (isSubmit) {
            setIsSubmit(false);
            sessionStorage.removeItem('APIKey');
            setApiKey('');
        } else {
            sessionStorage.setItem('APIKey', apiKey);
            setIsSubmit(true);
        }
    }

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit' component={Link} to='/'>
                        <img src={logo} alt="MyStore" height='40px' className={classes.image} />
                        Mura Developers
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div>
                    <div><TextField id="outlined-basic" label="API key" variant="outlined" fullWidth name='apiKey' type='text' value={apiKey} onChange={(e) => setApiKey(e.target.value)} /></div>
                    </div>
                    )}
                    <div className={classes.button}><IconButton onClick={handleAPIKey}>{(isSubmit) ? <DeleteForever /> : <Save />}</IconButton></div>
                    
                </Toolbar>

            </AppBar>
        </>
    )
}

export default Navbar;