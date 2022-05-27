import { Fragment } from "react";
import styles from "./HomePage.module.css";
import bookImage from "../assests/stack.jpg";
import groupImage from "../assests/group.jpg";

const AboutPage = () => {
  return (
    <Fragment>
      <div className={styles.container}>
        <section className={styles["hero-section"]}>
          <div className={styles.textbox}>
            <h2>About BooksBud</h2>
            <h3>
              It's an interactive, user- friendly and easy to navigate second
              hand e-Bookshop for selling/donating or buying books online. It's
              a place where books get new life.
            </h3>

            <p className={styles.small}>
              {" "}
              <ion-icon name="library"></ion-icon>Read, Release & Reuse
            </p>

            <h2>Who are BooksBud ?</h2>
            <h3>
              BooksBud means Book's buddies who love their books. They tend to
              be the most generous, earth-friendly and educated people on the
              face of the planet.
            </h3>
          </div>

          <div className={styles["hero-img-box"]}>
            <img
              src={bookImage}
              className={styles["hero-img"]}
              alt="Boy sitting on books"
            />
          </div>

          <div className={styles["hero-img-box"]}>
            <img src={groupImage} className={styles["hero-img"]} alt="group" />
          </div>
          <div className={styles.textbox}>
            <h2>Read Responsibly! Why you should buy & sell used books…</h2>
            <p className={styles.small}>Do you know ?</p>
            <div className={styles.flex}>
              <ion-icon name="book"></ion-icon>
              <h3>
                Your reading habits could make a positive contribution to the
                world around you if you simply sell back books you no longer
                need.
              </h3>
            </div>

            <div className={styles.flex}>
              <ion-icon name="leaf"></ion-icon>
              <h3>
                Buying and selling used books helps in reducing CO2 emissions
                and deforestation practices created by mass production of new
                books.
              </h3>
            </div>
            <div className={styles.flex}>
              <ion-icon name="happy"></ion-icon>
              <h3>
                It truly is a winning formula: selling used books + buying books
                secondhand = happy readers and a brighter future for our planet.
              </h3>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
};

export default AboutPage;
