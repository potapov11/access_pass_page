import React from 'react';
import PhoneInput from 'react-phone-input-2';
import { IPhoneInputProps } from '../../utils/types';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneInput.module.scss';

export const PhoneInputComponent = ({
  value,
  name = 'phone',
  onChange,
  onFocus,
  isError,
  errorText,
}: IPhoneInputProps) => {
  console.log(isError, 'isError');

  return (
    <div className={styles.phone_input}>
      <PhoneInput
        country="ru"
        onlyCountries={['ru']}
        preferredCountries={['ru']}
        disableDropdown={true}
        value={value}
        onChange={(phone, data, event, formattedValue) => {
          onChange(phone, data, event, formattedValue);
        }}
        inputProps={{
          name: name,
          required: true,
          autoFocus: false,
        }}
        onFocus={onFocus}
        containerClass={
          value ? 'phone-input-container filled' : 'phone-input-container'
        }
        inputClass={
          !isError
            ? 'phone-input phone-input-add'
            : 'phone-input phone-input-add-error'
        }
        dropdownClass="phone-dropdown"
        placeholder="+7 (999) 123-45-67"
      />
      <div className={styles.phone_input_error}>
        <span>{errorText ? errorText : ''}</span>
      </div>
    </div>
  );
};
