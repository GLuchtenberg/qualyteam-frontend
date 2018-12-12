import React from 'react';
import { Typography, Paper, withStyles, Chip } from '@material-ui/core';
const styles = theme => ({
    root: {
        display: 'flex',
        minHeight: 120,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15,
    },
    verticalBadge: {
        flex: 1,
        width: 20,
        minHeight: 80,
        backgroundColor: '#547EEB'
    },
    infoContainer: {
        flex: 25,
        display: 'flex',
        paddingLeft: 15,
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    codeContainer: {
        paddingRight: 15,
        color: '#5A5959'
    },
    department: {
        color: '#5A5959',
        marginTop: 0
    },
    title: {
        fontSize: 22,
        marginTop: 0,
        marginBottom: 5,
    },
    chip: {
        margin: theme.spacing.unit,
    },
})
const DocumentItem = (props) => {
    const {
        document, classes
    } = props
    return (
        <Paper className={classes.root}>
            <div className={classes.verticalBadge} > </div>
            <div className={classes.infoContainer}>
                <div>
                    <h4 className={classes.title}>{document.title} </h4>
                    <h5 className={classes.department}>{document.department} </h5>
                    {document.categories.length &&
                        document.categories.map(category => <Chip color="primary" className={classes.chip} label={category.name} />)
                    }
                </div>
                <div className={classes.codeContainer}>
                    <h5>{document.code} </h5>
                </div>
            </div>
        </Paper>
    )
}


export default withStyles(styles)(DocumentItem)