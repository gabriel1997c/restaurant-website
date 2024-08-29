import type { FormikErrors, FormikTouched } from 'formik';


export interface IEmailField {
  touched: FormikTouched<{ email: string }>;
  errors: FormikErrors<{ email: string }>;
}