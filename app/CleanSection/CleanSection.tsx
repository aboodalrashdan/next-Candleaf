// components/CleanSection.tsx
import Image from 'next/image';
import Log from '../icon/true.svg';
import styles from './CleanSection.module.css';

export default function CleanSection() {
  return (
    <div className={styles.clean}>
        <div className={styles.fragrant}>
          <div className={styles.contclean}>
            <div className={styles.cleantxt}>
              <h2>Clean and fragrant soy wax</h2>
              <p className={styles.txt}>Made for your home and for your wellness</p>
              <div className={styles.txtimg} >
                <img
                src="/image/cub.webp"
                alt="weoijfw"
                />
              </div>
              
              <ul role="list" className={styles.list} >
                <li >
                  <Log/>
                  <b >Eco-sustainable:</b> 
                  <p > All recyclable materials, 0% CO2 emissions</p>
                </li>
                <li >
                  <Log/>
                  <b >Hyphoallergenic:</b> 
                  <p > 100% natural, human friendly ingredients.</p>
                </li>
                <li >
                  <Log/>
                  <b>Handmade:</b> 
                  <p > All candles are craftly made with love.</p>
                </li>
                <li >
                  <Log/>
                  <b >Long burning:</b> 
                  <p > No more waste. Created for last long.</p>
                </li>
              </ul>
              <button>Learn more</button>
            </div>
            <Image 
              className={styles.cubImage}
              src="/image/cub.png"
              alt="weoijfw"
              width={450}
              height={315}
            />
          </div>
        </div>
    </div>
  );
}
