import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CounterCard from './CounterCard/CounterCard';



const TopBar = (props) => {
    // console.log(props.summaryData);
    let cards = [];
    for (var key in props.summaryData) {
        cards.push(<CounterCard status={key} key={key} number={props.summaryData[key]}></CounterCard>);
    }
    return (
        <React.Fragment>
            <Box display="flex" justifyContent="center" m={3} p={1} bgcolor="background.paper">
                {cards}
            </Box>
        </React.Fragment>
    );
};

export default TopBar;