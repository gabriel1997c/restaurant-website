import { TextField } from 'fields';
import { IGuestsField } from './types';


const GuestsField = ({ touched, errors }: IGuestsField) => {
  return (
    <TextField
      name="guests"
      label="Number of Guests"
      type="number"
      InputProps={{ inputProps: { min: 1 } }}
      touched={touched}
      errors={errors}
    />
  );
};

export default GuestsField;