import { SelectField } from 'fields';
import { IChooseTimeField } from './types';

const ChooseTimeField = ({ touched, errors, options }: IChooseTimeField) => {
  return (
    <SelectField
      name="time"
      label="Choose Time"
      options={options}
      touched={touched}
      errors={errors}
    />
  );
};

export default ChooseTimeField;
