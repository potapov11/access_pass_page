import React from 'react';
import styles from './PassCreatePage.module.scss';
import { Space } from 'antd';
import { ResponsePersonForm } from '../../components/ResponsePersonForm/ResponsePersonForm';
import { TextInput } from '../../components/TextInput/TextInput';

export const PassCreatePage = () => {
  return (
    <div className="container">
      <section className={styles.pass_create}>
        <div className={styles.pass_create_wrapper}>
          <div style={{ width: '50%', border: '1px solid black' }}>hello</div>
          <ResponsePersonForm />
        </div>
      </section>
    </div>
  );
};
