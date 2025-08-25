import { DatePicker, Space } from 'antd';
import styles from './PersonDatePicker.module.scss';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';

export const PersonDatePicker = () => {
  const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, '-> date', dateString, '-> dateString');
  };

  const date = new Date();
  const localTodayDate = date.toLocaleDateString('ru');
  const dateFormat = 'YYYY-MM-DD';
  const formattedDate = localTodayDate.split('.').reverse().join('-');

  return (
    <DatePicker
      className={styles.datepicker}
      placeholder="выберите дату"
      onChange={onChange}
      maxDate={dayjs(formattedDate, dateFormat)}
    />
  );
};
