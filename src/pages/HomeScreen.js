import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DocumentList from './Document/List/Index';
import DocumentRegister from './Document/Register/RegisterForm';
import { Grid, withStyles } from '@material-ui/core';
import Menu from '../components/Menu';

const styles = theme => ({
    root: {
        flex: 1,
        flexDirection: 'column',
    },
    sectionContainer: {
        flex: 1,
        // alignSelf: 'center',
        [theme.breakpoints.up("lg")]: {
            width: 1170
        },
        [theme.breakpoints.up('md')]: {
            alignSelf: 'center',
            width: 980
        }
    }
})
const HomeScreen = (props) => {
    const { classes } = props
    return (
        <Grid container className={classes.root} spacing={16} >
            <Menu />
            <Grid item className={classes.sectionContainer} >

                <Switch>
                    <Route path="/" component={DocumentList} exact />
                    <Route path="/document/:id" component={DocumentRegister} exact />
                </Switch>

            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(HomeScreen)