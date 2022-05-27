import { Fragment, useEffect } from "react";
import { Link, useParams, Route } from "react-router-dom";
import HighlightedBook from "../components/books/HighlightedBook";
import Comments from "../components/comments/Comments";
import useHttp from "../hooks/use-http";
import { getSingleBook } from "../lib/api";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const BookDetail = () => {
  const params = useParams();

  const { bookId } = params;

  const {
    sendRequest,
    status,
    data: loadedBook,
    error,
  } = useHttp(getSingleBook, true);

  useEffect(() => {
    sendRequest(bookId);
  }, [sendRequest, bookId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered">{error}</p>;
  }

  if (!loadedBook.text) {
    return (
      <p className="centered"> Oops! Book details are not added properly.</p>
    );
  }
  return (
    <Fragment>
      <HighlightedBook
        author={loadedBook.author}
        text={loadedBook.text}
        price={loadedBook.price}
        rating={loadedBook.rating}
        seller={loadedBook.seller}
        phoneNumber={loadedBook.phoneNumber}
        email={loadedBook.email}
        date={loadedBook.date}
        image={loadedBook.image}
      />

      <Route path={`/books/${params.bookId}`} exact>
        <div className="special">
          <Link className="btn" to={`/books/${params.bookId}/comments`}>
            Share your experience with us!
          </Link>
        </div>
      </Route>
      <Route path={`/books/${params.bookId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};
export default BookDetail;
