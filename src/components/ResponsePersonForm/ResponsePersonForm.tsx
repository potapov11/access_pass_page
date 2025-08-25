import { useEffect, useState } from 'react';
import styles from './ResponsePersonForm.module.scss';
import { TextInput } from '../TextInput/TextInput';
import { useValidate } from '../hooks/UseValidate';
import { TFieldsPerson, SelectOption, PersonData } from '../../utils/types';
import { PhoneInputComponent } from '../PhoneInput/PhoneInput';
import { PersonDatePicker } from '../PersonDatePicker/PersonDatePicker';
import { DropDown } from '../DropDown/DropDown';
import type { DatePickerProps } from 'antd';
import { useLazyGetConfirmPersonsQuery } from '../../services/api';
import { useSelector, useDispatch } from 'react-redux';
import { addToForm } from '../../services/slices/pass_from_slice';
export const ResponsePersonForm = () => {
  const [selectData, setSelectData] = useState<SelectOption[] | null>(null);
  const [fieldsPerson, setFieldsPerson] = useState<TFieldsPerson>({
    firstname: '',
    lastname: '',
    person_phone: '',
    person_date: '',
    person_responsible_name: '',
  });

  useEffect(() => {
    console.log(fieldsPerson, 'fieldsPerson');
  }, [fieldsPerson]);

  const form = useSelector((state) => state.form);
  console.log(form, 'form useSelector');
  const dispatch = useDispatch();

  const [getConfirmPersons, { isLoading }] = useLazyGetConfirmPersonsQuery();

  const errors = useValidate(fieldsPerson);

  const handleChange = (name: string, value: string) => {
    setFieldsPerson((prev) => {
      const updatedFields = {
        ...prev,
        [name]: value,
      };
      dispatch(addToForm(updatedFields));

      return updatedFields;
    });
  };

  const handlePhoneChange = (value: string) => {
    handleChange('person_phone', value);
  };

  const handleFocus = () => {
    if (!fieldsPerson.person_phone) {
      handleChange('person_phone', '+7');
    }
  };

  const handleDataPicker: DatePickerProps['onChange'] = (dateString) => {
    if (dateString) {
      setFieldsPerson((prev) => ({
        ...prev,
        person_date: dateString,
      }));
    }
  };

  const handleDropdown = (value: string) => {
    setFieldsPerson((prev) => ({
      ...prev,
      person_responsible_name: value,
    }));
  };

  const openDropDown = async () => {
    try {
      setTimeout(async () => {
        const data = await getConfirmPersons();
        const { data: personArray } = data;

        console.log(personArray, 'personArray');

        if (personArray && personArray.length > 0) {
          const renderSelectData = personArray.map((person: PersonData) => ({
            value: person.id,
            label: (
              <p>
                {person.name} {person.job_title}
              </p>
            ),
          }));

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
        onChange={handleDropdown}
        openDropDown={openDropDown}
        selectData={selectData}
        isError={!!errors.person_responsible_name}
        errorText={errors.person_responsible_name}
      />
    </div>
  );
};
