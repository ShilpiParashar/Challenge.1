import { Link } from "react-router-dom";
import { Fragment } from "react";
const NoBooksFound = () => {
  return (
    <Fragment>
      <p className="centered">No Book found!</p>
      <div className="actions">
        <Link className="btn" to="/new-book">
          Add a Book
        </Link>
      </div>
    </Fragment>
  );
};

export default NoBooksFound;
