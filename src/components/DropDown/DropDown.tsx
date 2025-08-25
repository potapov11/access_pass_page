import { Select } from 'antd';
import styles from './DropDown.module.scss';
import { Spinner } from '../UI/Spinner/Spinner';

export const DropDown = ({ openDropDown, selectData, isError }) => {
  const onChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const onSearch = (value: string) => {
    console.log('search:', value);
  };

  const spinner = [{ value: '', label: <Spinner /> }];

  return (
    <Select
      className={styles.select}
      showSearch
      placeholder="Выберите подтверждающего"
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={selectData && selectData.length > 0 ? selectData : spinner}
      onOpenChange={openDropDown}
    />
  );
};
