import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';

InputField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,
   label: PropTypes.string,
   disabled: PropTypes.bool,
};

function InputField(props) {
   const { form, name, label, disabled } = props;
   const { errors, formState } = form;
   const hasError = formState.touched[name] && errors[name];

   return (
      // Auto binding value by Controller
      <Controller
         name={name}
         label={label}
         control={form.control}
         as={TextField}
         variant="outlined"
         margin="normal"
         disabled={disabled}
         fullWidth
         error={!!hasError}
         helperText={errors[name]?.message}
      />
   );
}

export default InputField;
