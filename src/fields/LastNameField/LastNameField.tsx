import { TextField } from 'fields';

import type { ILastNameField } from './types';

const LastNameField = ({ touched, errors }: ILastNameField) => {
  return (
    <TextField name="lastName" label="Last Name" type="text" touched={touched} errors={errors} />
  );
};

export default LastNameField;
