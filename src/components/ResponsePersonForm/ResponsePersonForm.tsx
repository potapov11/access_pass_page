import { useState } from 'react';
import styles from './ResponsePersonForm.module.scss';
import { TextInput } from '../TextInput/TextInput';
import { useValidate } from '../hooks/UseValidate';
import { TFieldsPerson } from '../../utils/types';
import { PhoneInputComponent } from '../PhoneInput/PhoneInput'; // твой обёрнутый компонент

export const ResponsePersonForm = () => {
  const [fieldsPerson, setFieldsPerson] = useState<TFieldsPerson>({
    firstname: '',
    lastname: '',
    person_phone: '',
  });

  const errors = useValidate(fieldsPerson);

  const handleChange = (name: string, value: string) => {
    setFieldsPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoneChange = (value: string) => {
    handleChange('person_phone', value);
  };

  const handleFocus = () => {
    if (!fieldsPerson.person_phone) {
      handleChange('person_phone', '+7');
    }
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.form_title}>Форма ответственного</h2>

      <TextInput
        placeholder="Имя"
        name="firstname"
        value={fieldsPerson.firstname}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        errorText={errors.firstname}
        isError={!!errors.firstname}
      />

      <TextInput
        placeholder="Фамилия"
        name="lastname"
        value={fieldsPerson.lastname}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        errorText={errors.lastname}
        isError={!!errors.lastname}
      />

      <PhoneInputComponent
        value={fieldsPerson.person_phone}
        name="person_phone"
        onChange={handlePhoneChange}
        onFocus={handleFocus}
        isError={!!errors.person_phone}
        errorText={errors.person_phone}
      />
    </div>
  );
};
