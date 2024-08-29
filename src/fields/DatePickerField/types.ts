import { FieldProps } from 'formik';

export interface IDatePickerField extends Omit<FieldProps<any>, 'field' | 'form' | 'meta'> {
  name: string;
  label: string;
  minDate?: string;
  touched: {
    [key: string]: boolean;
  };
  errors: {
    [key: string]: string;
  };
}
