import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import type { IDatePickerField } from './types';

const DatePickerField = ({ name, label, minDate, ...props }: IDatePickerField) => (
  <Field
    as={TextField}
    label={label}
    name={name}
    type="date"
    fullWidth
    margin="normal"
    InputLabelProps={{ shrink: true }}
    InputProps={{ inputProps: { min: minDate } }}
    error={Boolean(props.touched[name] && props.errors[name])}
    helperText={<ErrorMessage name={name} />}
    {...props}
  />
);

export default DatePickerField;
