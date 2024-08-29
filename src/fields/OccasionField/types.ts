import type { FormikErrors, FormikTouched } from 'formik';

export interface IOccasion {
  value: string | number;
  label: string;
}

export interface IOccasionField {
  touched: FormikTouched<{ time: string }>;
  errors: FormikErrors<{ time: string }>;
  options: IOccasion[];
}
