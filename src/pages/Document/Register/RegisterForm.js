import React, { Component } from 'react';
import { FormControl, TextField, InputLabel, Select, MenuItem, Checkbox, FormHelperText, FormControlLabel, FormLabel, FormGroup, Input } from '@material-ui/core';

export default class componentName extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render () {
        return (
            <form noValidate autoComplete="off">
                <TextField
                    label="Título"
                    margin="normal"
                />

                <FormControl>
                    <InputLabel htmlFor="codigo">Código</InputLabel>
                    <Input
                        id="codigo"

                    />
                </FormControl>



                <FormControl >
                    <InputLabel htmlFor="age-simple">Age</InputLabel>
                    <Select


                        inputProps={{
                            name: 'age',
                            id: 'age-simple',
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl component="fieldset" >
                    <FormLabel component="legend">Assign responsibility</FormLabel>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                />
                            }
                            label="Gilad Gray"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                />
                            }
                            label="Jason Killian"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox

                                    value="antoine"
                                />
                            }
                            label="Antoine Llorca"
                        />
                    </FormGroup>
                    <FormHelperText>Be careful</FormHelperText>
                </FormControl>
            </form>
        );
    }
}
