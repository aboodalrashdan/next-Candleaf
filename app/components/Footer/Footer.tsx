import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import Home from "../../../public/icon/hoe.svg";
import { Container } from "../Container";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.ioqnpr}>
        <Container>
          <hr className={styles.line} />
          <div className={styles.footcont}>
            <div className={styles.logoSection}>
              <Home />
              <p>
                Your natural candle made for your home and for your wellness.
              </p>
            </div>
            <div className={styles.linksSection}>
              <div className={styles.column}>
                <p className={styles.txt}>Discovery</p>
                <Link href="#">
                  <p>New season</p>
                </Link>
                <Link href="#">
                  <p>Most searched</p>
                </Link>
                <Link href="#">
                  <p>Most selled</p>
                </Link>
              </div>
              <div className={styles.column}>
                <p className={styles.txt}>Info</p>
                <Link href="#">
                  <p>Contact Us</p>
                </Link>
                <Link href="#">
                  <p>Privacy Policies</p>
                </Link>
                <Link href="#">
                  <p>Terms & Conditions</p>
                </Link>
              </div>
              <div className={styles.column}>
                <p className={styles.txt}>About</p>
                <Link href="#">
                  <p>Help</p>
                </Link>
                <Link href="#">
                  <p>Shipping</p>
                </Link>
                <Link href="#">
                  <p>Affiliate</p>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className={styles.bottom}>
        <p>©Candleaf All Rights Reserved.</p>
      </div>
    </footer>
  );
};
