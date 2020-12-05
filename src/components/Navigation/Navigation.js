import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Logo from '../Logo/Logo';
import Profile from '../Profile/Profile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: 'white',
        color: 'black'
    },
    logoIcon: {
        height: '1rem',
    },
    title: {
        flexGrow: 1,
    },
}));

function NavigationBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.appBar}>
                <Toolbar>
                    <Logo className={classes.logoIcon} />
                    <Typography variant="h6" className={classes.title}>
                        Intigine
            </Typography>
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Brands</Button>
                    <Button color="inherit">Transporters</Button>
                    <Button startIcon={<Profile />}> <ExpandMoreIcon /> </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavigationBar;