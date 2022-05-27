import { Link } from "react-router-dom";
import classes from "./BookItem.module.css";
import bookImage from "../../assests/front.jpeg";

const BookItem = (props) => {
  console.log("props.image", props.image);
  return (
    <li className={classes.item}>
      {/* <p className={classes.centered}>{props.author}</p> */}

      <div className={classes.main}>
        <p>{props.author}</p>
        <div className={classes["img-box"]}>
          <img
            src={props.image ? props.image : bookImage}
            className={classes.img}
            alt="book pic"
          />
          {/* {props.image} */}
        </div>
      </div>

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
        </ul>
        <div className={classes.actions}>
          <Link className={classes.btn} to={`/books/${props.id}`}>
            View
          </Link>
        </div>
      </div>
    </li>
  );
};

export default BookItem;
