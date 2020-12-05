import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    card: {
        backgroundColor: '#2a66b5',
        minWidth: '110px',
        maxHeight: '100px',
        margin: '0.5rem',
        color: 'white'
    },
    text: {
        fontSize: '2rem'
    },
    title: {
        fontSize: 14,
    }
});
const CounterCard = (props) => {
    const classes = useStyles();
    return (<Card className={classes.card} variant="outlined">
        <CardContent>
            <Typography variant="h5" component="h2">
                {props.status}
            </Typography>
            <Typography variant="body2" component="p" className={classes.text}>
                {props.number}
            </Typography>
        </CardContent>
    </Card>);
};

export default CounterCard;