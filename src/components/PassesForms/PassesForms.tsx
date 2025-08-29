import { useGetFormsQuery } from '../../services/api';
import { Spinner } from '../UI/Spinner/Spinner';
import { ErrorText } from '../UI/ErrorText/ErrorText';
import { PassesForm } from '../PassesForm/PassesForm';
import styles from './PassesForms.module.scss';

export const PassesForms = () => {
  const {
    data: passes,
    isLoading,
    isError,
  } = useGetFormsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  if (isError) return <ErrorText />;
  if (isLoading) return <Spinner />;

  return (
    <div className={styles.passes_forms}>
      {passes?.length > 0 ? (
        <ul className={styles.passes_forms_list}>
          {passes.map((pass) => (
            <PassesForm pass={pass} />
          ))}
        </ul>
      ) : null}
    </div>
  );
};
