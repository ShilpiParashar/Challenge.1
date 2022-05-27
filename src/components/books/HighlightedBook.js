import { Fragment } from "react";
import classes from "./HighlightedBook.module.css";
import bookImage from "../../assests/front.jpeg";

const HighlightedBook = (props) => {
  return (
    <Fragment>
      <div className={classes.container}>
        <li className={classes.item}>
          <section className={classes["hero-section"]}>
            <div className={classes.textbox}>
              <p className={classes.centered}>{props.author} </p>
              <figcaption>"{props.text}"</figcaption>
              <div>
                <ul>
                  <li>
                    <ion-icon name="pricetags-outline"></ion-icon>
                    <span>
                      &#8377;<strong>{props.price}</strong>
                    </span>
                  </li>
                  <li>
                    <ion-icon name="star-outline"></ion-icon>
                    <span>
                      <strong>{props.rating}</strong> rating
                    </span>
                  </li>
                  <li>
                    <ion-icon name="calendar-outline"></ion-icon>
                    <span>
                      Posted on
                      <strong> {props.date}</strong>
                    </span>
                  </li>
                  <li>
                    <ion-icon name="person-outline"></ion-icon>
                    <span>
                      Seller's name is
                      <strong> {props.seller}</strong>
                    </span>
                  </li>
                  <li>
                    <ion-icon name="call-outline"></ion-icon>
                    <span>
                      Contact no. is
                      <strong> {props.phoneNumber}</strong>
                    </span>
                  </li>
                  <li>
                    <ion-icon name="mail-outline"></ion-icon>
                    <span>
                      Email Address is
                      <strong> {props.email}</strong>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className={classes["img-box"]}>
              <img
                src={props.image ? props.image : bookImage}
                className={classes.img}
                alt="book pic"
              />
              {/* {props.image} */}
            </div>
          </section>
        </li>
      </div>
    </Fragment>
  );
};

export default HighlightedBook;
