import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TFieldsPerson, SelectOption, PersonData } from '../../utils/types';
import { useLazyGetConfirmPersonsQuery } from '../../services/api';
import { useValidate } from '../hooks/UseValidate';
import { addToForm } from '../../services/slices/pass_from_slice';
import type { DatePickerProps } from 'antd';

export const useResponsePersonForm = () => {
  const [selectData, setSelectData] = useState<SelectOption[] | null>(null);
  const [fieldsPerson, setFieldsPerson] = useState<TFieldsPerson>({
    firstname: '',
    lastname: '',
    person_phone: '',
    person_date: '',
    person_responsible_name: '',
  });

  useEffect(() => {
    console.log(fieldsPerson, 'fieldsPerson after update');
  }, [fieldsPerson]);

  const formFromStore = useSelector((state) => state.form.responsibleForm);
  const AllFormFromStore = useSelector((state) => state.form);
  console.log(formFromStore, 'formFromStores');
  const dispatch = useDispatch();

  useEffect(() => {
    setFieldsPerson(formFromStore);
  }, [formFromStore]);

  const [getConfirmPersons, { isLoading }] = useLazyGetConfirmPersonsQuery();

  const errors = useValidate(AllFormFromStore);

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

  const handleDataPicker: DatePickerProps['onChange'] = (date, dateString) => {
    if (dateString) {
      setFieldsPerson((prev) => {
        const updatedFields = {
          ...prev,
          person_date: dateString as string,
        };
        dispatch(addToForm(updatedFields));

        return updatedFields;
      });
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
      const data = await getConfirmPersons();
      const { data: personArray } = data;

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
    } catch (e) {
      console.error(e.message);
    }
  };

  return {
    fieldsPerson,
    handleChange,
    errors,
    handlePhoneChange,
    handleFocus,
    handleDataPicker,
    handleDropdown,
    openDropDown,
    selectData,
  };
};
