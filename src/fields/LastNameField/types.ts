import type { FormikErrors, FormikTouched } from 'formik';

export interface ILastNameField {
  touched: FormikTouched<{ lastName: string }>;
  errors: FormikErrors<{ lastName: string }>;
}
