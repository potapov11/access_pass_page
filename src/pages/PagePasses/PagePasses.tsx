import { Header } from '../../layouts/Header/Header';
import styles from './PagePasses.module.scss';
import { PassesForms } from '../../components/PassesForms/PassesForms';

export const PagePasses = () => {
  return (
    <div className="container">
      <Header />
      <section className={styles.page_passes}>
        <h2 className={styles.page_passes_title}>Все пропуска</h2>
        <PassesForms />
      </section>
    </div>
  );
};
