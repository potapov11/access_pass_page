import { useState, useEffect } from 'react';
import { TErrors, TFieldsPerson } from '../../utils/types';

export const useValidate = (fieldsPerson: TFieldsPerson) => {
  const [errors, setErrors] = useState<TErrors>({});

  console.log(fieldsPerson, 'fieldsPerson');

  useEffect(() => {
    const newErrors: TErrors = {};

    if (!fieldsPerson.firstname) {
      newErrors.firstname = 'Поле имя не должно быть пустым';
    } else if (fieldsPerson.firstname.length < 2) {
      newErrors.firstname = 'Поле имя не должно быть меньше двух значений';
    }
    if (!fieldsPerson.lastname) {
      newErrors.lastname = 'Поле фамилия не должно быть пустым';
    } else if (fieldsPerson.lastname.length < 2) {
      newErrors.lastname = 'Поле фамилия не должно быть меньше двух значений';
    }
    if (fieldsPerson.person_phone.length < 11) {
      newErrors.person_phone =
        'Поле номер телефона не должно быть меньше 11 знаков';
    }
    setErrors(newErrors);
  }, [fieldsPerson]);

  return errors;
};
