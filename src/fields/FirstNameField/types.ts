import type { FormikErrors, FormikTouched } from 'formik';

export interface IFirstNameField {
  touched: FormikTouched<{ firstName: string }>;
  errors: FormikErrors<{ firstName: string }>;
}
