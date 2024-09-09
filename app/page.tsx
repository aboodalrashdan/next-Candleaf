import React from 'react';
import styles from './page.module.css';
import ProductsPage from './products/page'
import HeadSection from './HeadSection/HeadSection';
import CleanSection from './CleanSection/CleanSection';

export default function HomePage() {
  return (
    <div className={styles.container}>
      <HeadSection/>
      <ProductsPage/>
      <CleanSection/>
    </div>
  );
}
