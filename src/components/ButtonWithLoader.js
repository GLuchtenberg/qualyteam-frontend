import React from 'react';
import { withStyles, Button, CircularProgress } from '@material-ui/core';
import PropTypes from 'prop-types';

const styles = theme => ({
    root:{
        display:'flex'
    },
    button:{
        color:'white'
    },
    wrapper: {
        margin: theme.spacing.unit,
        position: 'relative'
    },
    buttonProgress: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12,
    }
})

const ButtonWithLoader = (props) => {
    const { classes, loading, text, handleButtonClick, ...others } = props
    return (
        <div className={classes.root}>
            <div className={classes.wrapper}>
                <Button
                    {...others}
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    disabled={loading}
                    onClick={handleButtonClick}
                >
                    {text}
                </Button>
                {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
            </div>
        </div>
    )
}

ButtonWithLoader.propTypes = {
    loading: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    handleButtonClick: PropTypes.func,
}
export default withStyles(styles)(ButtonWithLoader)