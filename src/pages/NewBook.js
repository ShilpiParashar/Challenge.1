import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./HomePage.module.css";
import bookImage from "../assests/bookself.jpg";

import BookForm from "../components/books/BookForm";
import useHttp from "../hooks/use-http";
import { addBook } from "../lib/api";

const NewBook = () => {
  const { sendRequest, status } = useHttp(addBook);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/books");
    }
  }, [status, history]);

  const addBookHandler = (bookData) => {
    sendRequest(bookData);
  };

  return (
    <div className={styles.container}>
      <section className={styles["hero-section"]}>
        <div>
          <div className={styles.textbox}>
            <h2>Vacant your bookshelves here!</h2>
            <p className={styles.small}>
              Sell your book and earn money or donate it for free.
            </p>
            <h3>
              In order to sell/donate your book fill the details so that
              interested buyer can get in touch with you.
            </h3>
          </div>
          <div className={styles["hero-img-box"]}>
            <img
              src={bookImage}
              className={styles["hero-img"]}
              alt="Bookshelf"
            />
          </div>
        </div>

        <BookForm isLoading={status === "pending"} onAddBook={addBookHandler} />
      </section>
    </div>
  );
};
export default NewBook;
