import { TextField as MuiTextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import type { ITextField } from './types';

const TextField = ({ name, label, type = 'text', InputProps, required, ...props }: ITextField) => (
  <>
    <Field name={name}>
      {({ field, form }: any) => (
        <MuiTextField
          {...field}
          label={label}
          type={type}
          InputProps={InputProps}
          fullWidth
          margin="normal"
          error={Boolean(form.touched[name] && form.errors[name])}
          helperText={<ErrorMessage name={name} id={`${name}-error-text`} />}
          InputLabelProps={{ shrink: true }}
          aria-describedby={`${name}-error-text`}
          aria-required={required}
          aria-invalid={Boolean(form.touched[name] && form.errors[name])}
          {...props}
        />
      )}
    </Field>
  </>
);

export default TextField;
