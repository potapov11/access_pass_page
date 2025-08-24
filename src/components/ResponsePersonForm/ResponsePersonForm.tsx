import { useState } from 'react';
import styles from './ResponsePersonForm.module.scss';
import { Space } from 'antd';
import { TextInput } from '../TextInput/TextInput';
import { useValidate } from '../hooks/UseValidate';

export const ResponsePersonForm = () => {
  const [fieldsPerson, setFieldsPerson] = useState({
    firstname: '',
    lastname: '',
  });

  const errors = useValidate(fieldsPerson);
  console.log(errors, 'errors');

  const handleChangeFields = (e, name) => {
    const value = e.target.value;

    setFieldsPerson((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className={styles.form}>
      <h2 className={styles.form_title}>Форма ответственного</h2>
      <TextInput
        placeholder={'Имя'}
        value={fieldsPerson.firstname}
        onChange={(e) => handleChangeFields(e, 'firstname')}
        errorText={errors.firstname}
        isError={errors.firstname?.length}
      />
      <TextInput
        placeholder={'Фамилия'}
        value={fieldsPerson.lastname}
        onChange={(e) => handleChangeFields(e, 'lastname')}
        errorText={errors.lastname}
        isError={errors.lastname?.length}
      />
    </div>
  );
};
