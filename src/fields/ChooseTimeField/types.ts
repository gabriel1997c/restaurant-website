import type { FormikErrors, FormikTouched } from 'formik';

export interface ITimeSlot {
  value: string | number;
  label: string;
}

export interface IChooseTimeField {
  touched: FormikTouched<{ time: string }>;
  errors: FormikErrors<{ time: string }>;
  options: ITimeSlot[];
}
