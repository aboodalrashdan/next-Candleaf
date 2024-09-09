'use client';

import { useState } from 'react';
import Link from 'next/link';
import User from '../icon/user.svg';
import Shop from '../icon/shopping.svg';
import Spn from '../icon/menu.svg';
import styles from './Navbar.module.css';
import Candleaf from '../icon/cand.svg';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.navbar}>
          <Link className={styles.icon1} href="/">
          <Candleaf />
          </Link>
          <div className={`${styles.stack} ${isMenuOpen ? styles.open : ''}`}>
            <Link className={styles.chakra} href="/products">
              All Products
            </Link>
            <Link className={styles.chakra} href="/about">
              About
            </Link>
            <Link className={styles.chakra} href="/contact">
              Contact Us
            </Link>
          </div>

          <div className={styles.icon2}>
            <Link className={styles.icon1} href="/cart">
              <Shop/>
            </Link>
            <Link className={styles.icon1} href="/profile">
              <User/>
            </Link>
            <div className={styles.spm3}>
            <button className={styles.spn} onClick={toggleMenu}>
              <span> <Spn width={30} height={30} /></span> 
            </button>
            {isMenuOpen && (
          <div className={styles.mobile}>
          <div className={styles.mobileMenu} >
            <button className={styles.navbtn}>
            <Link className={styles.chakra} href="/products">
              All Products
            </Link>
            </button>
            <button className={styles.navbtn}>
            <Link className={styles.chakra} href="/about">
              About
            </Link>
            </button>
            <button className={styles.navbtn}>
            <Link className={styles.chakra} href="/contact">
              Contact Us
            </Link>
            </button>
          </div>
          </div>
        )}
            <div>
            </div>
            </div>
          </div>
        </div>


      </div>
    </header>
  );
};

export default Navbar;


