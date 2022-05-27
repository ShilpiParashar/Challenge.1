import { Fragment, React } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import { useTypewriter } from "react-simple-typewriter";
import girlImage from "../assests/girl.jpg";

const HomePage = () => {
  const { text } = useTypewriter({
    words: ["Students", "Novel Readers", "Book Lovers"],
    loop: [0],
  });

  return (
    <Fragment>
      <div className={styles.container}>
        <section className={styles["hero-section"]}>
          <div className={styles.textbox}>
            <h1>Second hand Books Shop</h1>
            <h2>
              For
              <span> | {text}</span>
            </h2>
            <h3>
              Where you can buy second hand books at cheaper prices, sell used
              books and earn money from them or simply donate your books and
              contribute in community welfare.
            </h3>

            <div className={styles.btn}>
              <Link to="/login" className={styles["btn--full"]}>
                Get started
              </Link>
              <Link to="/about" className={styles["btn--outline"]}>
                Learn more &rarr;
              </Link>
            </div>
          </div>
          <div className={styles["hero-img-box"]}>
            <img
              src={girlImage}
              className={styles["hero-img"]}
              alt="Boy sitting on books"
            />
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default HomePage;
