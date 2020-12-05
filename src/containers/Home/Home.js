import React from 'react';
import TopBar from './TopBar/TopBar';
import { makeStyles } from '@material-ui/core/styles';
import { Timeline } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '2rem'
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

function Home() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={classes.root}>
                <TopBar />
                <Timeline />
            </div>
        </React.Fragment>
    );
};

export default Home;