import React from 'react';
import styles from './PassCreatePage.module.scss';
import { ResponsePersonForm } from '../../components/ResponsePersonForm/ResponsePersonForm';
import { Header } from '../../layouts/Header/Header';
import { VisitorForms } from '../../components/VisitorForms/VisitorForms';

export const PassCreatePage = () => {
  return (
    <div className="container">
      <Header />
      <section className={styles.pass_create}>
        <div className={styles.pass_create_wrapper}>
          <div style={{ width: '50%', border: '1px solid black' }}>hello</div>
          <ResponsePersonForm />
        </div>
        <VisitorForms />
      </section>
    </div>
  );
};
