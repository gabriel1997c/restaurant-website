import { TextField } from 'fields';
import { IFirstNameField } from './types';


const FirstNameField = ({ touched, errors }: IFirstNameField) => {
  return (
    <TextField name="firstName" label="First Name" type="text" touched={touched} errors={errors} />
  );
};

export default FirstNameField;