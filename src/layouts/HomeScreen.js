import React from 'react';
import {Redirect, Route, Switch } from 'react-router-dom';
import { Grid, withStyles } from '@material-ui/core';

import DocumentList from '../screens/Document/List/DocumentList';
import DocumentRegister from '../screens/Document/Register/RegisterForm';
import Menu from '../components/Menu';
import NotFound from '../screens/NotFound'
const styles = theme => ({
    root: {
        flex: 1,
        flexDirection: 'column',
    },
    sectionContainer: {
        flex: 1,
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
                    <Redirect from="/" to="document" exact  />
                    <Route path="/document/" component={DocumentList} exact />
                    <Route path="/document/create" component={DocumentRegister} exact />
                    <Route path="/document/:id" component={DocumentRegister} exact />
                    <Route component={NotFound} />
                </Switch>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(HomeScreen)