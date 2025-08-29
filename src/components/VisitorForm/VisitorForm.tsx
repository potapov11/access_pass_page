import { useEffect, useMemo, useState } from 'react';
import styles from './VisitorForm.module.scss';
import { TextInput } from '../TextInput/TextInput';
import { useDispatch, useSelector } from 'react-redux';
import { updateVisitorForm } from '../../services/slices/pass_from_slice';
import { useValidate } from '../hooks/UseValidate';

export const VisitorForm = ({ visitorProps }) => {
  const { name, id } = visitorProps;
  const dispatch = useDispatch();

  // store компоненты
  const visitorsForm = useSelector((state) => state.form.visitorForms);
  const AllForms = useSelector((state) => state.form);

  //валидация
  const errors = useValidate(AllForms);
  const targetError = useMemo(() => {
    errors?.visitorFormErrors?.find((item, i) => i === id);
  }, [id, errors]);

  const [fieldsVisitor, setFieldsVisitor] = useState({
    name: name || '',
  });

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
    </div>
  );
};
