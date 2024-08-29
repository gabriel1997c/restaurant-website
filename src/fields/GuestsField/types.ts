import type { FormikErrors, FormikTouched } from 'formik';


export interface IGuestsField {
  touched: FormikTouched<{ guests: number }>;
  errors: FormikErrors<{ guests: number }>;
}