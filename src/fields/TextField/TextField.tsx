import { TextField as MuiTextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import type { ITextField } from './types';

const TextField = ({ name, label, type = 'text', InputProps, ...props }: ITextField) => (
  <>
    <Field
      as={MuiTextField}
      label={label}
      name={name}
      type={type}
      InputProps={InputProps}
      fullWidth
      margin="normal"
      error={Boolean(props.touched[name] && props.errors[name])}
      helperText={<ErrorMessage name={name} />}
      {...props}
    />
  </>
);

export default TextField;
