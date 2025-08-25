import { useEffect, useState } from 'react';
import styles from './ResponsePersonForm.module.scss';
import { TextInput } from '../TextInput/TextInput';
import { useValidate } from '../hooks/UseValidate';
import { TFieldsPerson } from '../../utils/types';
import { PhoneInputComponent } from '../PhoneInput/PhoneInput';
import { PersonDatePicker } from '../PersonDatePicker/PersonDatePicker';
import { DropDown } from '../DropDown/DropDown';
import type { DatePickerProps } from 'antd';
import { useLazyGetConfirmPersonsQuery } from '../../services/api';

export const ResponsePersonForm = () => {
  const [selectData, setSelectData] = useState(null);
  const [fieldsPerson, setFieldsPerson] = useState<TFieldsPerson>({
    firstname: '',
    lastname: '',
    person_phone: '',
    person_date: '',
    person_resppnsible_name: '',
  });

  useEffect(() => {
    console.log(fieldsPerson, 'fieldsPerson');
  }, [fieldsPerson]);

  // const { data, isLoading } = useLazyGetConfirmPersonsQuery();
  const [getConfirmPersons, { isLoading }] = useLazyGetConfirmPersonsQuery();

  const errors = useValidate(fieldsPerson);

  const handleChange = (name: string, value: string) => {
    console.log(name, 'name handleChange');
    console.log(value, 'value handleChange');

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

  const handleDataPicker: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, 'date');
    console.log(dateString, 'dateString');

    setFieldsPerson((prev) => ({
      ...prev,
      person_date: dateString,
    }));
  };

  const openDropDown = async () => {
    try {
      setTimeout(async () => {
        const data = await getConfirmPersons();
        const { data: personArray } = data;

        if (personArray && personArray.length > 0) {
          const renderSelectData = personArray.map((person) => ({
            value: person.id,
            label: (
              <div>
                <p>
                  {person.name} {person.job_title}
                </p>
              </div>
            ),
          }));

          console.log(renderSelectData, 'renderSelectData');
          setSelectData(renderSelectData);
        }
      }, 500);
    } catch (e) {
      console.error(e.message);
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
      <PersonDatePicker onChange={handleDataPicker} />
      <DropDown
        isError={''}
        openDropDown={openDropDown}
        selectData={selectData}
      ></DropDown>
    </div>
  );
};
