import { Input, Space } from 'antd';
import styles from './TextInput.module.scss';

export const TextInput = ({
  placeholder,
  value,
  onChange,
  errorText,
  isError,
}) => {
  return (
    <div className={styles.text_input}>
      <Input
        status={isError ? 'error' : ''}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <div className={styles.text_input_error}>
        <span>{errorText ? errorText : ''}</span>
      </div>
    </div>
  );
};
