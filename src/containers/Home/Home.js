import React from 'react';
import { Component } from 'react';
import { withStyles } from "@material-ui/core/styles";
import TopBar from './TopBar/TopBar';
import Timeline from './Timeline/Timeline';
import Grid from '@material-ui/core/Grid';
import Table from './Table/Table';
import axios from '../../axios-auth';

const styles = theme => ({
    root: {
        marginTop: '2rem',
        padding: '2rem'
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
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
});

class Home extends Component {

    state = {
        summaryData: {},
        data: [],
        selectedData: {}
    };

    componentDidMount() {
        axios.post('', {
            email: "mayankmittal@intugine.com"
        }).then(response => {
            console.log(response.data)
            let newData = [];
            let summaryData = {};
            let id = 1;
            response.data.forEach(data => {
                newData.push({
                    id: id,
                    awbno: data.awbno,
                    transporter: data.carrier,
                    source: data.from,
                    destination: data.to,
                    startDate: data.pickup_date ? data.pickup_date.split(' ')[0] : null,
                    status: data.current_status,
                    scan: data.scan,
                    status_code: data.current_status_code
                });
                id = id + 1;
                if (summaryData.hasOwnProperty(data.current_status_code)) {
                    summaryData[data.current_status_code] = summaryData[data.current_status_code] + 1;
                } else {
                    summaryData[data.current_status_code] = 0;
                }
                // summaryData[data.current_status_code] = summaryData[data.current_status_code] + 1;
            });
            this.setState({
                summaryData: summaryData,
                data: newData,
                selectedData: newData[0]
            });
            // console.log(summaryData);
        })
    }

    onSelection = selectedData => {
        this.setState((prevState, props) => ({ ...prevState, selectedData: selectedData }));
        console.log('CHANGED');
        console.log(selectedData);
    }

    render() {
        const classes = this.props.classes;
        return (
            <React.Fragment>
                <div className={classes.root}>
                    <TopBar summaryData={this.state.summaryData}></TopBar>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Timeline selectedData={this.state.selectedData} />
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6}>
                            <Table tableData={this.state.data} onChange={this.onSelection} />
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>)
    };
};

export default withStyles(styles, { withTheme: true })(Home);