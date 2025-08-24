import { Input, Space } from 'antd';
import styles from './TextInput.module.scss';
import { TextInputProps } from '../../utils/types';

export const TextInput = ({
  placeholder,
  value,
  onChange,
  errorText,
  isError,
  name,
}: TextInputProps) => {
  return (
    <div className={styles.text_input}>
      <Input
        status={isError ? 'error' : ''}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
      />
      <div className={styles.text_input_error}>
        <span>{errorText ? errorText : ''}</span>
      </div>
    </div>
  );
};
