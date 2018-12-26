import React, { Component, Fragment } from 'react';
import { backendApi } from '../../../services/http';
import { withSnackbar } from 'notistack';
import ButtonWithLoader from "../../../components/ButtonWithLoader";
import { Form, Field, withFormik, ErrorMessage } from 'formik'
import validate from './FormValidation'
import {
    FormControl,
    TextField,
    InputLabel,
    Select,
    MenuItem,
    Checkbox,
    FormControlLabel,
    FormLabel,
    FormGroup,
    Paper,
    withStyles,
    Typography,
    Grid
} from '@material-ui/core';


const styles = ({ spacing: { unit } }) => ({
    root: {
        margin: `${unit * 3}px auto`,
        padding: unit * 2,
        maxWidth: 500,
    },
    form: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',

    },
    formInputs: {
        
        paddingBottom: unit * 3,
    },
    categories: {
        marginTop: 14,
        paddingLeft: unit * 2
    },
    errorBag: {
        color: 'red !important'
    }
})

class RegisterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            document:{},
            departments: [],
            categories: [],
        }
        this.changeCheckboxes = this.changeCheckboxes.bind(this)
    }
    
    componentWillUpdate(nextProps,state){
        const documentId = parseInt(this.props.match.params.id)
        if(state.document.id !== documentId &&  ! isNaN(parseFloat(documentId))){
            
            backendApi.get(`document/${documentId}`)
                .then( document => {
                    this.setState({document})
                    this.props.setValues(document)
                } )
        }
    }
    componentDidMount() {
        backendApi
            .get('department')
            .then(departments => this.setState({ departments }))
        backendApi
            .get('category')
            .then(categories => this.setState({ categories }))
    }

    changeCheckboxes(event) {
        const  value = event.target.value;
        let values = this.props.values
        const departments = values.documentDepartments
        
        const find = departments.find(c => c.departmentId.toString() === value.toString())
        if (find) {
            departments.splice(find, 1)
        } else {
            departments.push({ departmentId: value })
        }
        values.documentDepartments = departments
        this.props.setValues(values)
        this.props.setFieldTouched('documentDepartments', true, true)
    }
    render() {
        const { departments, categories } = this.state
        const { classes,isSubmitting } = this.props
        return (
            <Paper className={classes.root} >
                <Typography variant="h6">Documento</Typography>
                <Form className={classes.form}>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <Field name='title'>
                                {({ field }) => (
                                    <Fragment>
                                        <TextField
                                            fullWidth
                                            label="Título"
                                            margin="normal"
                                            {...field}
                                        />
                                        <div className={classes.errorBag}>
                                            <ErrorMessage name="title" />
                                        </div>
                                    </Fragment>
                                )}
                            </Field>

                            <Field name="code">
                                {({ field }) => (
                                    <Fragment>
                                        <TextField
                                            fullWidth
                                            label="Código"
                                            margin="normal"
                                            {...field}
                                        />
                                        <div className={classes.errorBag}>
                                            <ErrorMessage name="code" />
                                        </div>
                                    </Fragment>
                                )}
                            </Field>

                            <Field name='categoryId'>
                                {({ field }) => (
                                    <FormControl fullWidth>
                                        <InputLabel htmlFor="category">Categoria</InputLabel>
                                        <Select
                                            autoWidth
                                            required
                                            {...field}
                                            inputProps={{
                                                name: 'categoryId',
                                                id: 'category',
                                            }}

                                        >
                                            <MenuItem value="">
                                                <em>Categoria</em>
                                            </MenuItem>
                                            {
                                                categories.map(categories => <MenuItem key={categories.id} value={categories.id}>{categories.name}</MenuItem>)
                                            }
                                        </Select>
                                        <div className={classes.errorBag}>
                                            <ErrorMessage name="categoryId" />
                                        </div>
                                    </FormControl>
                                )}
                            </Field>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Field name="documentDepartments">
                                {({ field }) => (
                                    <FormControl component="fieldset" className={classes.categories} fullWidth>
                                
                                        <FormLabel component="legend">Departamentos</FormLabel>
                                        <FormGroup>
                                            {
                                                departments.map(department => <FormControlLabel
                                                    key={department.id}
                                                    control={
                                                        <Fragment>
                                                        {
                                                            field.value ?
                                                            <Checkbox checked={!!field.value.find(f => f.departmentId.toString() === department.id.toString())} name="departmentId" onChange={this.changeCheckboxes} value={department.id.toString()} /> :
                                                            <Checkbox name="departmentId" onChange={this.changeCheckboxes} value={department.id.toString()} /> 

                                                        }
                                                        
                                                        </Fragment>
                                                    }
                                                    label={department.name} />)
                                            }
                                        </FormGroup>
                                        <div className={classes.errorBag}>
                                            <ErrorMessage name="documentDepartments" />
                                        </div>
                                    </FormControl>
                                )}
                            </Field>
                        </Grid>
                        <ButtonWithLoader text="Salvar" loading={isSubmitting} variant="contained" color="primary" type="submit" />
                    </Grid>
                </Form>
            </Paper>
        );
    }
}

const form = {
    title: '',
    code: '',
    documentDepartments: [],
    categoryId: ''
}
export default withSnackbar(withFormik({
    mapPropsToValues: (props) => form,
    validate,
    handleSubmit: (values,{props,setSubmitting}) => {
        const documentId = values.id
        if(documentId){
            backendApi.put(`document/${documentId}`, {document: values})
                .then(doc => {
                    props.enqueueSnackbar(`Atualização no documento ${doc.title} efetuada com sucesso!`, { variant: 'success' })
                    props.history.push("/document")
                })
                .catch(error => {
                    return props.enqueueSnackbar(`Erro ao cadastrar:  ${error.message}`, { variant: 'error' })
                })
                .finally(() => setSubmitting(false))
        }else{
            backendApi.post('document', {document: values})
                .then(doc => {
                    props.enqueueSnackbar(`Cadastro do documento ${doc.title} efetuado com sucesso!`, { variant: 'success' })
                    props.history.push("/document")
                })
                .catch(error => {
                    return props.enqueueSnackbar(`Erro ao cadastrar:  ${error.message}`, { variant: 'error' })
                })
                .finally(() => setSubmitting(false))
        }
        
    },

})(withStyles(styles)(RegisterForm)))