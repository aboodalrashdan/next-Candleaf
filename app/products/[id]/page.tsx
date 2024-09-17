import styles from "./prod.module.css";
import Image from "next/image";
import { Container } from "app/components/Container";

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  wax: string;
  fragrance: string;
  warrantyInformation: string;
  dimensions: Dimensions;
  weight: string;
  rating: number;
};
interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

type ProductDetailsProps = {
  params: {
    id: string;
  };
};

export default async function ProductDetails({ params }: ProductDetailsProps) {
  const { id } = params;

  const product = await fetchProduct(id);

  return (
    <Container>
      <div className={styles.contpag}>
        <div className={styles.containerimg}>
          <h2 className={styles.conth2}>{product.title}</h2>
          <Image
            alt={`Image of ${product.title}`}
            src={product.thumbnail}
            width={1000}
            height={1000}
            className={styles.contimg}
            priority
          />
          <p className={styles.contfree}>
            The product is manufactured using the finest quality resources, is
            made for your pleasure moments.
            <span>🚚 FREE SHIPPING</span>
          </p>
        </div>

        <div className={styles.containertxt}>
          <h2 className={styles.containertxth2}>{product.title}</h2>
          <div className={styles.containercost}>
            <p>${product.price}</p>
            <button type="button" className={styles.btn}>
              Add to cart
            </button>
          </div>
          <p>
            The product is manufactured using the finest quality resources, is
            made for your pleasure moments.
          </p>

          <div className={styles.containerbox}>
            <p className={styles.contp}>
              <strong>Description:</strong> {product.description}
            </p>
            <p className={styles.contp}>
              <strong>Rating:</strong> {product.rating}/5
            </p>
            <p className={styles.contp}>
              <strong>Warranty Information:</strong>{" "}
              {product.warrantyInformation}
            </p>
            <p className={styles.contp}>
              <strong>Dimension:</strong> {product.dimensions.width}x
              {product.dimensions.height}
            </p>
            <p className={styles.contp}>
              <strong>Weight:</strong> {product.weight}00g
            </p>
          </div>

          <p className={styles.contmobilp}>
            {product.description}
            <span>🚚 FREE SHIPPING</span>
          </p>
        </div>
      </div>
    </Container>
  );
}

async function fetchProduct(id: string): Promise<Product> {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await res.json();
  return product;
}
