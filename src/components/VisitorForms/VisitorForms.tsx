import { VisitorForm } from '../VisitorForm/VisitorForm';
import styles from './Visitor.module.scss';
import { Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { addVisitorForm } from '../../services/slices/pass_from_slice';
import { visitorsDummyObj } from '../../utils/vars';
import { useAddFormMutation } from '../../services/api';

export const VisitorForms = () => {
  const visitorsForm = useSelector((state) => state.form.visitorForms);
  const form = useSelector((state) => state.form);
  console.log(visitorsForm, 'visitorsForm store');
  const dispatch = useDispatch();
  const [addVisitorFormPost] = useAddFormMutation();

  const handleFormPost = async () => {
    try {
      const response = await addVisitorFormPost(form).unwrap();
      console.log('Успех:', response);
    } catch (error) {
      console.error('Ошибка:', error);
    }
  };

  const pushVisitForm = () => {
    const updatedVisitorDummyObj = {
      ...visitorsDummyObj,
      id: visitorsForm.length,
    };
    dispatch(addVisitorForm(updatedVisitorDummyObj));
  };

  return (
    <div className={styles.visitor_form}>
      <h2 className={styles.visitor_form_title}>форма посетителя</h2>
      <div className={styles.visitor_form_wrap}>
        {visitorsForm?.length > 0
          ? visitorsForm.map((visitor) => (
              <VisitorForm visitorProps={visitor} key={visitor.id} />
            ))
          : null}
      </div>
      <div
        style={{ display: 'flex', justifyContent: 'center', marginTop: 'auto' }}
      >
        <Button onClick={pushVisitForm}>Добавить</Button>
        <Button onClick={handleFormPost}>Cохранить</Button>
      </div>
    </div>
  );
};
