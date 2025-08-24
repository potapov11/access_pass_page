import { useState } from 'react';
import styles from './ResponsePersonForm.module.scss';
import { TextInput } from '../TextInput/TextInput';
import { useValidate } from '../hooks/UseValidate';
import { TFieldsPerson } from '../../utils/types';

export const ResponsePersonForm = () => {
  const [fieldsPerson, setFieldsPerson] = useState<TFieldsPerson>({
    firstname: '',
    lastname: '',
  });

  const errors = useValidate(fieldsPerson);

  const handleChangeFields: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const { value, name } = e.target;

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
        name="firstname"
        value={fieldsPerson.firstname}
        onChange={(e) => handleChangeFields(e)}
        errorText={errors.firstname}
        isError={!!errors.firstname}
      />
      <TextInput
        placeholder={'Фамилия'}
        value={fieldsPerson.lastname}
        name="lastname"
        onChange={(e) => handleChangeFields(e)}
        errorText={errors.lastname}
        isError={!!errors.lastname}
      />
    </div>
  );
};
