import { DatePicker } from 'antd';
import styles from './PersonDatePicker.module.scss';
import dayjs from 'dayjs';

export const PersonDatePicker = ({ onChange, value }) => {
  const date = new Date();
  const localTodayDate = date.toLocaleDateString('ru');
  const dateFormat = 'YYYY-MM-DD';
  const formattedDate = localTodayDate.split('.').reverse().join('-');

  console.log(value, 'value PersonDatePicker');

  // Преобразуем value в объект Dayjs, если оно не пустое
  const defaultValue = value ? dayjs(value) : null;

  console.log(defaultValue, 'defaultValue');

  return (
    <DatePicker
      value={defaultValue} // Используем value вместо defaultValue
      className={styles.datepicker}
      placeholder="выберите дату"
      onChange={onChange}
      disabledDate={(current) => current && current > dayjs(formattedDate)} // Пример ограничения по дате
    />
  );
};
