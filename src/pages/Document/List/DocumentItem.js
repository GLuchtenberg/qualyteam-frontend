import React from 'react';
import { Paper, withStyles, Chip } from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
const styles = theme => ({
    root: {
        display: 'flex',
        minHeight: 120,
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 15,
        borderLeftColor: '#547EEB',
        borderLeftWidth: 20,
        borderLeftStyle: 'solid',
    },

    infoContainer: {
        flexGrow: 1,
        display: 'flex',
        paddingLeft: 15,
        paddingTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    codeContainer: {
        paddingRight: 15,
        color: '#5A5959',

    },
    codeText: {
        margin: 0,
        fontSize: 20
    }
})
const DocumentItem = (props) => {
    const {
        document, classes, history
    } = props
    return (
        <Paper className={classes.root}>

            <div className={classes.infoContainer}>
                <div>
                    <Link to={`/document/${document.id}`}><h4 onClick={() => history.push(`/document/${document.id}`)} className={classes.title}>{document.title} </h4></Link>
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


export default withRouter(withStyles(styles)(DocumentItem))