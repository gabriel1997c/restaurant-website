import type { FormikErrors, FormikTouched } from 'formik';

export interface IChooseDateField {
  touched: FormikTouched<{ date: string }>;
  errors: FormikErrors<{ date: string }>;
  minDate: string;
}
