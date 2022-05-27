import { useEffect } from "react";

import BookList from "../components/books/BookList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import NoBooksFound from "../components/books/NoBooksFound";
import useHttp from "../hooks/use-http";
import { getAllBooks } from "../lib/api";

const AllBooks = () => {
  const {
    sendRequest,
    status,
    data: loadedBooks,
    error,
  } = useHttp(getAllBooks, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedBooks || loadedBooks.length === 0)) {
    return <NoBooksFound />;
  }
  return <BookList books={loadedBooks} />;
};
export default AllBooks;
