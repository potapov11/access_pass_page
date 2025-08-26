import { Link } from 'react-router-dom';
import { useGetCategoriesQuery, useGetProductsQuery } from '../../services/api';
import styles from './Header.module.scss';

export const Header = () => {
  // const { data } = useGetCategoriesQuery();
  // const { data: dataProduct } = useGetProductsQuery();

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <nav>
          <ul className={styles.header_list}>
            <li className={styles.header_list_item}>
              <Link to="/" className={styles.nav_link}>
                Home
              </Link>
            </li>
            <li className={styles.header_list_item}>
              <Link to="/passcreate" className={styles.nav_link}>
                Pass
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
