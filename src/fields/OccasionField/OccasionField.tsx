import { SelectField } from 'fields';

import { IOccasionField } from './types';

const OccasionField = ({ touched, errors, options }: IOccasionField) => {
  return (
    <SelectField
      name="occasion"
      label="Occasion"
      options={options}
      touched={touched}
      errors={errors}
    />
  );
};

export default OccasionField;
