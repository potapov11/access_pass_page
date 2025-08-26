import { useState, useEffect } from 'react';
import { TErrors, TFieldsPerson } from '../../utils/types';

export const useValidate = (fieldsPerson: TFieldsPerson) => {
  const [errors, setErrors] = useState<TErrors>({});
  const { responsibleForm, visitorForms } = fieldsPerson;

  console.log(fieldsPerson, 'useValidate fieldsPerson');

  useEffect(() => {
    const newErrors: TErrors = {
      visitorFormErrors: [],
    };

    if (!responsibleForm.firstname) {
      newErrors.firstname = 'Поле имя не должно быть пустым';
    } else if (responsibleForm.firstname.length < 2) {
      newErrors.firstname = 'Поле имя не должно быть меньше двух значений';
    }
    if (!responsibleForm.lastname) {
      newErrors.lastname = 'Поле фамилия не должно быть пустым';
    } else if (responsibleForm.lastname.length < 2) {
      newErrors.lastname = 'Поле фамилия не должно быть меньше двух значений';
    }
    if (responsibleForm.person_phone.length < 11) {
      newErrors.person_phone =
        'Поле номер телефона не должно быть меньше 11 знаков';
    }
    if (!responsibleForm.person_responsible_name) {
      newErrors.person_responsible_name = 'Необходимо выбрать подтверждающего';
    }

    visitorForms.forEach((element, index) => {
      if (!element.name) {
        newErrors.visitorFormErrors.push({
          id: index,
          error_name: 'Поле имя не должно быть пустым',
        });
      }
    });

    console.log(newErrors, 'newErrors');

    setErrors(newErrors);
  }, [fieldsPerson]);

  return errors;
};
