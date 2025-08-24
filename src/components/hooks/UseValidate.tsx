import { useState, useEffect } from 'react';

export const useValidate = (fieldsPerson) => {
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const newErrors = {};
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

    setErrors(newErrors);
  }, [fieldsPerson]);

  return errors;
};
