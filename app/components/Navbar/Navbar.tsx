"use client";

import { useState } from "react";
import Link from "next/link";
import User from "../../../public/icon/user.svg";
import Shop from "../../../public/icon/shopping.svg";
import Spn from "../../../public/icon/menu.svg";
import styles from "./Navbar.module.css";
import Candleaf from "../../../public/icon/cand.svg";
import { Container } from "../Container";

 export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.navbar}>
          <Link href="/">
            <Candleaf />
          </Link>
          <nav className={`${styles.stack} ${isMenuOpen ? styles.open : ""}`}>
            <Link className={styles.chakra} href="/products">All Products</Link>
            <Link className={styles.chakra} href="/about">About</Link>
            <Link className={styles.chakra} href="/contact">Contact Us</Link>
          </nav>
          <div className={styles.icon}>
            <Link href="/cart">
              <Shop />
            </Link>
            <Link href="/profile">
              <User />
            </Link>
            <div className={styles.spm3}>
              <button className={styles.spn} onClick={toggleMenu}>
                  <Spn width={30} height={30} />
              </button>
              {isMenuOpen && (
                <div className={styles.mobile}>
                  <div className={styles.mobileMenu}>
                    <Link className={styles.navbtn} href="/products">All Products</Link>
                    <Link className={styles.navbtn} href="/about">About</Link>
                    <Link className={styles.navbtn} href="/contact">Contact Us</Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

