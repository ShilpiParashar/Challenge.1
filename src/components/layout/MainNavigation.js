import styles from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";
const MainNavigation = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <ion-icon name="book-outline"></ion-icon>
        <NavLink to="/home" activeClassName={styles.active}>
          BooksBud
        </NavLink>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li className={styles.otherchild}>
            <NavLink to="/about" activeClassName={styles.active}>
              About
            </NavLink>
          </li>

          <li className={styles.otherchild}>
            <NavLink to="/books" activeClassName={styles.active}>
              Buy
            </NavLink>
          </li>
          <li className={styles.otherchild}>
            <NavLink to="/new-book" activeClassName={styles.active}>
              Sell/Donate
            </NavLink>
          </li>
          <li className={styles.lastchild}>
            <NavLink to="/login" activeClassName={styles.active}>
              Login
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
