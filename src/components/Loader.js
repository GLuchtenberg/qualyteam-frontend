import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme =>({
    root:{
        display:'flex',
        justifyContent: 'center'
    },
    progress:{
        padding: theme.spacing.unit * 2,
    }
})
const Loader = (props)=> {
    const classes = props.classes
    return(
        <div className={classes.root}>
            <CircularProgress className={classes.progress} />
        </div>
    )
}

export default withStyles(styles)(Loader)