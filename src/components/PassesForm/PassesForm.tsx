import styles from './PassesForm.module.scss';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';
import { useNavigate } from 'react-router-dom';
export const PassesForm = ({ pass }) => {
  const { id } = pass;
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/passcreate/${id}`);
  };

  return (
    <li key={id} className={styles.passes_form}>
      <div className={styles.passes_form_icons}>
        <Tooltip title="перейти к пропуску" color={'#000080'}>
          <ArrowRightOutlined onClick={handleNavigate} />
        </Tooltip>
      </div>
      <div className={styles.passes_form_wrap}>
        <span>Ответственный:</span>
        <span>{pass.responsibleForm.firstname}</span>
      </div>
    </li>
  );
};
