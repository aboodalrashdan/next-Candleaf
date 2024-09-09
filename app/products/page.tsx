import styles from './products.module.css';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default async function ProductsPage() {

  const res = await fetch('https://dummyjson.com/products?limit=8');
  const data = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.contprod}>
        <h2 className={styles.conttxt}>Products</h2>
        <p className={styles.contparg}>Order it for you or for your beloved ones</p>
        <div className={styles.products}>
          {data.products.map((product: Product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <div className={styles.card}>
                <div className={styles.cardheader}>
                  <img
                    alt={`Image of ${product.title}`}
                    src={product.thumbnail}
                    className={styles.cardimg}
                  />
                </div>
                <div className={styles.cardbody}>
                  <p className={styles.cardbodytit}>{product.title}</p>
                  <p className={styles.cardbodycost}>${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

  