import { Fragment } from "react";
import { useHistory, useLocation } from "react-router-dom";

import BookItem from "./BookItem";
import classes from "./BookList.module.css";

const sortBooks = (books, ascending) => {
  return books.sort((bookA, bookB) => {
    if (ascending) {
      return bookA.id > bookB.id ? 1 : -1;
    } else {
      return bookA.id < bookB.id ? 1 : -1;
    }
  });
};

const BookList = (props) => {
  const history = useHistory();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);

  const isSortingAscending = queryParams.get("sort") === "asc";

  const sortedBooks = sortBooks(props.books, isSortingAscending);

  const changeSortingHandler = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAscending ? "desc" : "asc"}`,
    });
  };
  return (
    <Fragment>
      <div className={classes.section}>
        <div className={classes.sorting}>
          <button onClick={changeSortingHandler}>
            <ion-icon name="swap-vertical-outline"></ion-icon>
            Show {isSortingAscending ? "Recent Uploads" : "Old Uploads"}
          </button>
        </div>
        <ul className={classes.list}>
          {sortedBooks.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              author={book.author}
              rating={book.rating}
              price={book.price}
              date={book.date}
              image={book.image}
            />
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BookList;
