import styles from "./products.module.css";
import Image from "next/image";
import Link from "next/link";
import { Container } from "app/components/Container";

type Product = {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <Container>
      <div className={styles.contprod}>
        <h2 className={styles.conttxt}>Products</h2>
        <p className={styles.contparg}>
          Order it for you or for your beloved ones
        </p>
        <div className={styles.products}>
          {products.map((product: Product) => (
            <Link
              key={product.id}
              className={styles.card}
              href={`/products/${product.id}`}
              passHref
            >
              <div className={styles.cardheader}>
                <Image
                  alt={`Image of ${product.title}`}
                  src={product.thumbnail}
                  width={100}
                  height={100}
                  className={styles.cardimg}
                  priority
                />
              </div>
              <div className={styles.cardbody}>
                <p className={styles.cardbodytit}>{product.title}</p>
                <p className={styles.cardbodycost}>${product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}

async function fetchProducts(limit: number = 8): Promise<Product[]> {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
  const data = await res.json();
  return data.products;
}
