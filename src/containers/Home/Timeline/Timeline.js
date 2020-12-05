import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const Timeline = (props) => {
    console.log(props.selectedData);
    if (!props.selectedData || !props.selectedData.scan)
        return (<span />);
    let listItems = [<Divider />];
    let id = 0;
    props.selectedData.scan.forEach((data) => {
        listItems.push(<React.Fragment>
            <ListItem key={id} button>
                <ListItemText>
                    {data.location} - {data.time ? data.time.split(' ')[0] : null} -  {data.time ? data.time.split(' ')[1] : null}
                </ListItemText>
            </ListItem>
            <Divider /></React.Fragment>
        );
        id = id + 1;
    })
    return (
        <React.Fragment>
            <List component="nav" aria-label="main mailbox folders">
                {listItems}
            </List>
        </React.Fragment>
    );
};

export default Timeline;