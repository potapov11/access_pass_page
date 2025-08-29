import { useEffect, useMemo, useState } from 'react';
import styles from './VisitorForm.module.scss';
import { TextInput } from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateVisitorForm } from '../../services/slices/pass_from_slice';
import { PhoneInputComponent } from '../PhoneInput/PhoneInput';
import { useValidate } from '../hooks/UseValidate';

export const VisitorForm = ({ visitorProps }) => {
  const { name, id, phone } = visitorProps;
  const dispatch = useDispatch();

  console.log(id, 'id');

  // store компоненты
  const visitorsForm = useSelector((state) => state.form.visitorForms);
  const AllForms = useSelector((state) => state.form);

  //валидация
  const errors = useValidate(AllForms);

  const targetError = useMemo(() => {
    return errors?.visitorFormErrors?.find((item) => item.id === id);
  }, [id, errors]);

  const [fieldsVisitor, setFieldsVisitor] = useState({
    name: name || '',
    phone: phone || '',
  });

  useEffect(() => {
    console.log(fieldsVisitor, 'fieldsVisitor');
  }, [fieldsVisitor]);

  const updateReduxForm = (updatedFields) => {
    const updatedVisitorsForm = visitorsForm.map((item, index) => {
      if (index === id) {
        return {
          ...item,
          ...updatedFields,
        };
      }
      return item;
    });

    dispatch(updateVisitorForm(updatedVisitorsForm));
  };

  const handleChange = (fieldName, value) => {
    setFieldsVisitor((prev) => {
      const updatedFields = {
        ...prev,
        [fieldName]: value,
      };

      updateReduxForm(updatedFields);

      return updatedFields;
    });
  };

  const handleFocus = () => {
    if (!fieldsVisitor.phone) {
      handleChange('phone', '+7');
    }
  };

  const handlePhoneChange = (value: string) => {
    handleChange('phone', value);
  };

  return (
    <div className={styles.visitor_form}>
      <TextInput
        placeholder="Имя посетителя"
        value={fieldsVisitor.name}
        name="visitor_name"
        onChange={(e) => handleChange('name', e.target.value)}
        errorText={targetError?.error_name || ''}
        isError={!!targetError?.error_name || Boolean('')}
      />
      <PhoneInputComponent
        value={phone}
        name="visitor_phone"
        onChange={handlePhoneChange}
        onFocus={handleFocus}
        isError={!!targetError?.error_phone || ''}
        errorText={targetError?.error_phone || Boolean('')}
      />
    </div>
  );
};
