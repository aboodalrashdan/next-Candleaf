import styles from './prod.module.css' ;

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
  rating:number;
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

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product: Product = await res.json();

  return (
    <main className={styles.main}>
      <div className={styles.container}>
          <div className={styles.contpag}>
            <div className={styles.containerimg}>
              <h2 className={styles.conth2}>{product.title}</h2>
              <img
                alt={`Image of ${product.title}`}
                src={product.thumbnail}
                className={styles.contimg}
              />
              <p className={styles.contfree}>
              The product is manufactured using the finest quality resources, is made for your pleasure moments.
                <br />
                <br />
                🚚 FREE SHIPPING
              </p>
            </div>

            <div className={styles.containertxt}>
              <h2 className={styles.containertxth2}>{product.title}</h2>
              <div className={styles.containercost}>
                <p>${product.price}</p>
                <button type="button" className="chakra-button css-fidx71">
                  Add to cart
                </button>
              </div>
              <p>The product is manufactured using the finest quality resources, is made for your pleasure moments.</p>

              <div className={styles.containerbox}>
                <p className={styles.contp}>
                  <p>Description: </p>
                  {product.description}
                </p>
                <p className={styles.contp}>
                  <p>Rating: </p>
                  {product.rating}/5
                </p>
                <p className={styles.contp}>
                  <p >Warranty Information: </p>
                  {product.warrantyInformation}
                </p>
                <p className={styles.contp}>
                  <p>Dimension:</p>
                  {product.dimensions.width}x{product.dimensions.height}
                </p>
                <p className={styles.contp}>
                  <p> Weight: </p>
                  {product.weight}00g
                </p>
              </div>
              <p className={styles.contmobilp}>
                {product.description}
                <br />
                <br />
                🚚 FREE SHIPPING
              </p>
            </div>
          </div>
        </div>
    </main>
  );
}
