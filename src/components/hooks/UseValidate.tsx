import { useState, useEffect } from 'react';
import { TErrors, TFieldsPerson } from '../../utils/types';

export const useValidate = (fieldsPerson: TFieldsPerson) => {
  const [errors, setErrors] = useState<TErrors>({});
  const { responsibleForm, visitorForms } = fieldsPerson;

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

    // Проверка форм посетителей
    visitorForms.forEach((element, index) => {
      const errorsForVisitor = {
        id: index,
      };

      if (!element.name) {
        errorsForVisitor.error_name = 'Поле имя не должно быть пустым';
      }
      if (!element.phone || element.phone.length < 11) {
        errorsForVisitor.error_phone =
          'Поле номер телефона не должно быть меньше 11 знаков';
      }

      if (Object.keys(errorsForVisitor).length > 0) {
        newErrors.visitorFormErrors[element.id] = errorsForVisitor;
      }
    });

    setErrors(newErrors);
  }, [fieldsPerson]);

  return errors;
};
