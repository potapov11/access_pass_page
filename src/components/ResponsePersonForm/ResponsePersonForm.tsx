import styles from './ResponsePersonForm.module.scss';
import { TextInput } from '../TextInput/TextInput';
import { PhoneInputComponent } from '../PhoneInput/PhoneInput';
import { PersonDatePicker } from '../PersonDatePicker/PersonDatePicker';
import { DropDown } from '../DropDown/DropDown';
import { useResponsePersonForm } from './UseResponsePersonFrom';
import { useParams } from 'react-router-dom';
import { useLazyGetFormsByIdQuery } from '../../services/api';
import { useEffect } from 'react';
import { updateForm } from '../../services/slices/pass_from_slice';
import { useDispatch, useSelector } from 'react-redux';

export const ResponsePersonForm = () => {
  const {
    fieldsPerson,
    handleChange,
    errors,
    handlePhoneChange,
    handleFocus,
    handleDataPicker,
    handleDropdown,
    openDropDown,
    selectData,
  } = useResponsePersonForm();

  const { id } = useParams();
  console.log(id, 'id useParams');
  const [getFormsById] = useLazyGetFormsByIdQuery();
  const dispatch = useDispatch();

  const handleGetFromById = async () => {
    const { data } = await getFormsById(id);
    if (data) {
      dispatch(updateForm(data));
    }
    console.log(data, 'res handleGetFromById');
  };

  const formFromStore = useSelector((state) => state.form.responsibleForm);
  const AllFormFromStore = useSelector((state) => state.form);
  console.log(formFromStore, 'formFromStores');
  console.log(AllFormFromStore, 'AllFormFromStore formFromStores');

  useEffect(() => {
    handleGetFromById();
  }, [id]);

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

      <PersonDatePicker
        value={fieldsPerson.person_date}
        onChange={handleDataPicker}
      />

      <DropDown
        value={fieldsPerson.person_responsible_name}
        onChange={handleDropdown}
        openDropDown={openDropDown}
        selectData={selectData}
        isError={!!errors.person_responsible_name}
        errorText={errors.person_responsible_name}
      />
    </div>
  );
};
