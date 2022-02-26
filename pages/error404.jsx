import React from 'react';
import Layout from '../components/Layout';

import styles from '../styles/Error404.module.css'

const Error404 = () => {
  return (
    <Layout pagina='Error404'>
        <div className={styles.content}>
            <p className={styles.error}>Pagina no encontrada</p>
        </div>
    </Layout>
  )
}

export default Error404;