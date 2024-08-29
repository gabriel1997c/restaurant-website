import { TextField } from 'fields';

import type { IEmailField } from './types';

const EmailField = ({ touched, errors }: IEmailField) => {
  return <TextField name="email" label="Email" type="email" touched={touched} errors={errors} />;
};

export default EmailField;
