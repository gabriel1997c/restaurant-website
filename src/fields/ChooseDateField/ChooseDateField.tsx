import { DatePickerField } from 'fields';

import type { IChooseDateField } from './types';

const ChooseDateField = ({ touched, errors, minDate }: IChooseDateField) => {
  return (
    <DatePickerField
      name="date"
      label="Choose Date"
      minDate={minDate}
      touched={touched}
      errors={errors}
    />
  );
};

export default ChooseDateField;
