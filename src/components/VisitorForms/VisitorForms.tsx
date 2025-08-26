import { VisitorForm } from '../VisitorForm/VisitorForm';
import styles from './Visitor.module.scss';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addVisitorForm } from '../../services/slices/pass_from_slice';
import { visitorsDummyObj } from '../../utils/vars';

export const VisitorForms = () => {
  const visitorsForm = useSelector((state) => state.form.visitorForms);
  const dispatch = useDispatch();
  console.log(visitorsForm, 'visitorsForm');

  const pushVisitForm = () => {
    console.log('pushVisitForm');
    console.log(addVisitorForm);
    dispatch(addVisitorForm(visitorsDummyObj));
  };

  return (
    <div className={styles.visitor_form}>
      <h2 className={styles.visitor_form_title}>форма посетителя</h2>
      <div className={styles.visitor_form_wrap}>
        {visitorsForm?.length > 0
          ? visitorsForm.map((item) => <VisitorForm key={item.id} />)
          : null}
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}
      >
        <Button onClick={pushVisitForm}>Добавить</Button>
      </div>
    </div>
  );
};
