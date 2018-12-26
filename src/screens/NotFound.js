import React from 'react';
import image404 from '../404.jpg'
import { withStyles, Typography } from '@material-ui/core';
const styles = theme=> ({
    root:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    image:{
        [theme.breakpoints.down('sm')]: {
            maxWidth: 290
        }
    }
})
const NotFound = (props) =>{
    const {classes} = props
    return (
        <main className={classes.root}>
        <Typography variant="display2">OOh! Não consegui encontrar a paginaaa.</Typography>
        <div>
            <img  className={classes.image} src={image404} alt="Not found" />
        </div>
    </main>
    )
}
    

export default withStyles(styles)(NotFound)