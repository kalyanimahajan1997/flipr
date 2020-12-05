import React from 'react';
import Box from '@material-ui/core/Box';
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