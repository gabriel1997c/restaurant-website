import { MenuItem, TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import type { ISelectField } from './types';

const SelectField = ({ name, label, options, touched, errors, ...props }: ISelectField) => (
  <>
    <Field
      as={TextField}
      select
      name={name}
      label={label}
      fullWidth
      margin="normal"
      variant="outlined"
      error={Boolean(touched[name] && errors[name])}
      helperText={<ErrorMessage name={name} />}
      InputLabelProps={{ shrink: true }}
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </Field>
  </>
);

export default SelectField;
