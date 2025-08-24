import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

interface PhoneInputProps {
  value: string;
  name?: string;
  onChange: (
    value: string,
    data: any,
    event: React.ChangeEvent<HTMLInputElement>,
    formattedValue: string
  ) => void;
  onFocus?: () => void;
}

export const PhoneInputComponent: React.FC<PhoneInputProps> = ({
  value,
  name = 'phone',
  onChange,
  onFocus,
}) => {
  return (
    <div>
      <PhoneInput
        country="ru" // или "us", в зависимости от нужной страны по умолчанию
        onlyCountries={['ru', 'us', 'kz', 'ua']} // опционально: ограничить выбор
        preferredCountries={['ru', 'us']}
        value={value}
        onChange={(phone, data, event, formattedValue) => {
          // Передаём имя поля, если используешь один обработчик для нескольких полей
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
        inputClass="phone-input"
        dropdownClass="phone-dropdown"
        placeholder="+7 (999) 123-45-67"
      />
    </div>
  );
};
