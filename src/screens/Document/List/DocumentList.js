import React, { Component, Fragment } from 'react';
import { withStyles, Chip, Fab, Typography, Card } from '@material-ui/core';
import { withRouter, Link } from 'react-router-dom';
import { backendApi } from '../../../services/http';
import Loader from "../../../components/Loader";
import AddIcon from '@material-ui/icons/Add';
const borderCard = {
    borderLeftColor: '#23bbad',
    borderLeftWidth: 20,
    borderLeftStyle: 'solid',
}
const itemHeight = 120
const styles = theme => (
    {
    item: {
        minHeight: itemHeight,
        marginTop: 15,
        ...borderCard  
    },

    infoContainer: {
        display: 'flex',
        paddingLeft: 15,
        paddingTop: 15,
        justifyContent: 'space-between'
    },
    department: {
        color: '#5A5959',
        marginTop: 0,
        
    },
    titleLink:{
        textDecoration:'none'

    },
    title: {
        fontSize: 30,
        marginTop: 0,
        marginBottom: 5,
    },
    chip: {
        marginBottom: theme.spacing.unit,
        marginTop: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        '&:hover': {
            backgroundColor: '#188279',
            borderColor: 'white',
            color:'white'
        },
    },
    codeContainer: {
        paddingRight: 15,
        
    },
    codeText: {
        margin: 0,
        fontSize: 25,
        fontWeight: '600',
        color: '#5A5959',
    },
    fab:{
        position: 'fixed',
        color: 'white',
        bottom: theme.spacing.unit * 2,
        right: theme.spacing.unit * 2,
    },
    extendedIcon: {
        marginRight: theme.spacing.unit,
    },
    emptyState:{
        display:'flex',
        minHeight: itemHeight * 1.5,
        ...borderCard
    },
    emptyStateTitle:{
        paddingLeft: theme.spacing.unit * 3,
        paddingRight: theme.spacing.unit * 3,
        alignSelf: 'center',
        fontSize: 34,
    }
})

class DocumentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:true,
            documents: []
        };
    }
    componentDidMount () {
        backendApi.get('document')
            .then(documents => this.setState({ documents,loading:false }))
    }

    render () {
        const {
            classes, history
        } = this.props
        const {documents, loading } = this.state
        if(loading){
            return <Loader />
        }
        return (
            <Fragment>
            <Link to="/document/create">
                <Fab variant="extended" color="primary" aria-label="Delete" className={classes.fab}>
                    <AddIcon  className={classes.extendedIcon} />
                    Adicionar
                </Fab>
            </Link>
            {   documents.length > 0 ?
                documents.map(document => {
                    return (
                        <Card className={classes.item} key={document.id}>
                            <div className={classes.infoContainer}>
                                <div>
                                    <Link to={`/document/${document.id}`} className={classes.titleLink}>
                                        <Typography variant="h4" onClick={() => history.push(`/document/${document.id}`)}  className={classes.title}>{document.title} </Typography>
                                    </Link>
                                    <Typography variant="caption" className={classes.department}>{document.category.name} </Typography>
                                    {
                                        document.documentDepartments.map(dd => <Chip
                                            label={dd.department.name}
                                            key={`${dd.documentId}-${dd.departmentId}`}
                                            className={classes.chip}
                                            color="primary"
                                            variant="outlined"
                                          />)
                                    }
                                </div>
                                <div className={classes.codeContainer}>
                                    <Typography variant="caption" className={classes.codeText}>{document.code} </Typography>
                                </div>
                            </div>
                        </Card>
                    )
                }) :
                <Card className={classes.emptyState}>
                    <Typography variant="h2" className={classes.emptyStateTitle}>Não existem documentos cadastrados <Link to={'/document/create'}>Clique aqui</Link> para cadastrar um novo documento.</Typography>
                </Card>
            }
            </Fragment>
        );
    }
}



export default withRouter(withStyles(styles)(DocumentList))

