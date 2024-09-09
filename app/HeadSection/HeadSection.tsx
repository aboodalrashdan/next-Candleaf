// components/HeadSection.tsx
import Link from 'next/link';
import styles from './HeadSection.module.css';

export default function HeadSection() {
  return (
    <div className={styles.head}>
        <div className={styles.conthead}>
            <h2>🌱<br/>The nature candle</h2>
            <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments</p>
            <Link href="/products"><button type="button" className={styles.contheadBtn}>Discover our collection</button></Link>
        </div>
    </div>
  );
}
