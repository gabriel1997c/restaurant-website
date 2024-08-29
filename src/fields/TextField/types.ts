import { TextFieldProps } from '@mui/material';
import { FieldProps } from 'formik';

export interface ITextField extends Omit<FieldProps<any>, 'field' | 'form' | 'meta'> {
  name: string;
  label: string;
  type?: TextFieldProps['type'];
  InputProps?: TextFieldProps['InputProps'];
  touched: {
    [key: string]: boolean;
  };
  errors: {
    [key: string]: string;
  };
  required?: boolean;
}