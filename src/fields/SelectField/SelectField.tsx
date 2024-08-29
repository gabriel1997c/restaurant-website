import { MenuItem, TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import type { ISelectField } from './types';

const SelectField = ({ name, label, options, touched, errors, ...props }: ISelectField) => (
  <>
    <Field name={name}>
      {({ field }: any) => (
        <TextField
          {...field}
          select
          label={label}
          fullWidth
          margin="normal"
          variant="outlined"
          error={Boolean(touched[name] && errors[name])}
          helperText={<ErrorMessage name={name} id={`${name}-error-text`} />}
          InputLabelProps={{ shrink: true }}
          aria-describedby={`${name}-error-text`}
          {...props}
        >
          {options.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    </Field>
  </>
);

export default SelectField;
