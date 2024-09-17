import Image from "next/image";
import styles from "./CleanSection.module.css";
import Log from "../../../public/icon/true.svg";
import { Container } from "../Container";

interface ListItem {
  id: string;
  title: string;
  description: string;
}

export function CleanSection() {
  const listItems: ListItem[] = [
    {
      id: "1",
      title: "Eco-sustainable:",
      description: "All recyclable materials, 0% CO2 emissions",
    },
    {
      id: "2",
      title: "Hyphoallergenic:",
      description: "100% natural, human friendly ingredients.",
    },
    {
      id: "3",
      title: "Handmade:",
      description: "All candles are craftly made with love.",
    },
    {
      id: "4",
      title: "Long burning:",
      description: "No more waste. Created for last long.",
    },
  ];

  return (
    <div className={styles.clean}>
      <Container>
        <div className={styles.contclean}>
          <div className={styles.cleantxt}>
            <h2>Clean and fragrant soy wax</h2>
            <p className={styles.txt}>
              Made for your home and for your wellness
            </p>
            <div className={styles.txtimg}>
              <Image
                src="/image/cub.png"
                alt="weoijfw"
                className={styles.txtiimg}
                width={440}
                height={320}
                priority
              />
            </div>

            <ul role="list" className={styles.list}>
              {listItems.map((item) => (
                <li key={item.id}>
                  <Log />
                  <span>{item.title}</span>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
            <button>Learn more</button>
          </div>
          <Image
            className={styles.cubImage}
            src="/image/cub.png"
            alt="weoijfw"
            width={450}
            height={315}
            priority
          />
        </div>
      </Container>
    </div>
  );
}
