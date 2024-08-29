import { TextField } from '@mui/material';
import { ErrorMessage, Field } from 'formik';

import type { IDatePickerField } from './types';

const DatePickerField = ({ name, label, minDate, touched, errors, ...props }: IDatePickerField) => (
  <>
    <Field name={name}>
      {({ field }: any) => (
        <TextField
          {...field}
          label={label}
          type="date"
          fullWidth
          margin="normal"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          InputProps={{
            inputProps: { min: minDate },
          }}
          error={Boolean(touched[name] && errors[name])}
          helperText={<ErrorMessage name={name} id={`${name}-error-text`} />}
          aria-describedby={`${name}-error-text`}
          {...props}
        />
      )}
    </Field>
  </>
);

export default DatePickerField;
