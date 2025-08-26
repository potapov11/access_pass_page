import styles from './ResponsePersonForm.module.scss';
import { TextInput } from '../TextInput/TextInput';
import { PhoneInputComponent } from '../PhoneInput/PhoneInput';
import { PersonDatePicker } from '../PersonDatePicker/PersonDatePicker';
import { DropDown } from '../DropDown/DropDown';
import { useResponsePersonForm } from './UseResponsePersonFrom';

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
