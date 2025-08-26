import { Select } from 'antd';
import styles from './DropDown.module.scss';
import { Spinner } from '../UI/Spinner/Spinner';
import { IDroDownProps } from '../../utils/types';

export const DropDown = ({
  openDropDown,
  selectData,
  isError,
  onChange,
  errorText,
}: IDroDownProps) => {
  const spinner = [{ value: '', label: <Spinner /> }];

  return (
    <div>
      <Select
        className={styles.select}
        showSearch
        placeholder="Выберите подтверждающего"
        optionFilterProp="label"
        onChange={onChange}
        options={selectData && selectData.length > 0 ? selectData : spinner}
        onOpenChange={openDropDown}
      />
      <div className={styles.select_error}>
        <span>{errorText ? errorText : ''}</span>
      </div>
    </div>
  );
};
