import { FieldProps } from 'formik';

export interface ISelectField extends Omit<FieldProps<any>, 'field' | 'form' | 'meta'> {
  name: string;
  label: string;
  options: { value: string | number; label: string }[];
  touched: {
    [key: string]: boolean;
  };
  errors: {
    [key: string]: string;
  };
}
