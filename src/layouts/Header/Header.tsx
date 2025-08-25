import { Link } from 'react-router-dom';
import { useGetCategoriesQuery, useGetProductsQuery } from '../../services/api';
import styles from './Header.module.scss';

export const Header = () => {
  const { data } = useGetCategoriesQuery();
  const { data: dataProduct } = useGetProductsQuery();

  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <nav>
          <ul className={styles.header_list}>
            {data?.map((category) => (
              <li className={styles.header_list_item} key={category}>
                <Link to="/category/$category" className={styles.nav_link}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
