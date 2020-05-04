import React from 'react';
import { TextField } from "@material-ui/core";

const Input = ({input, meta, label, dataTestId}) => {
    let error = false;
    let errorMessage = '';

    if (meta.error && meta.visited && !meta.active) {
        error = true;
        errorMessage = meta.error;
    }

    return (
        <TextField
            fullWidth={true}
            margin={"normal"}
            label={label}
            error={error}
            helperText={errorMessage}
            required
            {...input}
            inputProps={{
                'data-testid': dataTestId
            }}
        />
    )
}

export default Input;