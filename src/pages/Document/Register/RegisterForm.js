import React, { Component } from 'react';
import { FormControl, TextField, InputLabel, Select, MenuItem, Checkbox, FormControlLabel, FormLabel, FormGroup, Input, Paper, withStyles, Button, Typography } from '@material-ui/core';

import MaskedInput from 'react-text-mask';

function TextMaskCustom (props) {
    const { inputRef, ...other } = props;

    return (
        <MaskedInput
            {...other}
            ref={inputRef}
            placeholderChar={'\u2000'}
            showMask
        />
    );
}


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
        display: 'flex',
        justifyContent: 'space-evenly',
        paddingBottom: unit * 3,
    },
    categories: {
        marginTop: 14,
        paddingLeft: unit * 2
    }
})

class RegisterForm extends Component {

    render () {
        const departments = [
            { id: 1, name: "Desenvolvimento" },
            { id: 2, name: "Comercial" },
            { id: 3, name: "Suporte" }
        ]
        const categories = [
            { id: 1, name: 'Procedimentos operacionais' },
            { id: 2, name: 'Formulários padrões' },
            { id: 3, name: 'Planejamento de processo' },
        ]
        const {
            classes
        } = this.props
        return (
            <Paper className={classes.root} >
                <Typography variant="title">Documento</Typography>
                <form className={classes.form} noValidate autoComplete="off">
                    <main className={classes.formInputs}>
                        <section>
                            <TextField
                                fullWidth
                                label="Título"
                                margin="normal"
                            />
                            <FormControl fullWidth>
                                <InputLabel htmlFor="codigo">Código</InputLabel>
                                <Input
                                    id="codigo"
                                />
                            </FormControl>
                            <FormControl fullWidth>
                                <InputLabel htmlFor="department">Departamento</InputLabel>
                                <Select
                                    autoWidth
                                    required
                                    inputProps={{
                                        name: 'department',
                                        id: 'department',
                                    }}
                                    value=""
                                >
                                    <MenuItem value="">
                                        <em>Departamento</em>
                                    </MenuItem>
                                    {
                                        departments.map(department => <MenuItem key={department.id} value={department.id}>{department.name}</MenuItem>)
                                    }
                                </Select>
                            </FormControl>
                        </section>

                        <FormControl component="fieldset" className={classes.categories} fullWidth>
                            <FormLabel component="legend">Categorias</FormLabel>
                            <FormGroup>
                                {
                                    categories.map(category => <FormControlLabel key={category.id} control={<Checkbox value={category.id.toString()} />} label={category.name} />)
                                }

                            </FormGroup>

                        </FormControl>

                    </main>

                    <Button variant="contained" color="primary" className={classes.button} type="submit">
                        Salvar
                    </Button>
                </form>
            </Paper>

        );
    }
}
export default withStyles(styles)(RegisterForm)