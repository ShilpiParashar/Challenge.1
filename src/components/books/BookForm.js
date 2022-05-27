import { useRef, useState, useEffect } from "react";
import { Fragment } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./BookForm.module.css";

import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase";
import { v4 } from "uuid";
const validEmailRegex = RegExp(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const BookForm = (props) => {
  // const [file, setFiles] = useState(null);

  // useCustomFetchHook(file);

  //     return(
  //         <div>
  //             <input
  //                 type="file" id="input"
  //                 // onChange={ e => setFiles(e.target.value)}
  //                 onChange={() => setFiles(inputRef.current.files[0])}
  //             />
  //         </div>
  //     )
  // }
  // const [image, setImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState([]);
  const [state, setState] = useState({
    enteredAuthor: "",
    enteredText: "",
    enteredPrice: "",
    enteredRating: "",
    enteredSeller: "",
    enteredPhoneNumber: "",
    enteredEmail: "",
    enteredDate: "",
    enteredImage: null,
    imageUrl: "",
    imageUploadProgress: 0,
    validForm: false,
    invalid: {
      enteredAuthor: "",
      enteredText: "",
      enteredPrice: "",
      enteredRating: "",
      enteredSeller: "",
      enteredPhoneNumber: "",
      enteredEmail: "",
      enteredDate: ""
    },

    errors: {
      enteredAuthor: "",
      enteredText: "",
      enteredPrice: "",
      enteredRating: "",
      enteredSeller: "",
      enteredPhoneNumber: "",
      enteredEmail: "",
      enteredDate: ""
    },

    isSuccessSubmit: false,
    this_field_is_required: "This field is required.",
    switchtoMiniCard: false
  });
  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();
    uploadFile();
    // handleSave();
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        handleSave(url);
      });
    });
  };

  const onChangeHandler = (event) => {
    event && event.preventDefault();
    const { name, value } = event.target;
    let errors = state.errors;
    let invalid = state.invalid;

    switch (name) {
      case "enteredAuthor":
        if (value.length <= 0) {
          errors.enteredAuthor = state.this_field_is_required;
          invalid.enteredAuthor = true;
        } else {
          errors.enteredAuthor = "";
          invalid.enteredAuthor = false;
        }

        break;
      case "enteredText":
        if (value.length <= 0) {
          errors.enteredText = state.this_field_is_required;
          invalid.enteredText = true;
        } else {
          errors.enteredText = "";
          invalid.enteredText = false;
        }

        break;
      case "enteredPrice":
        if (value.length <= 0) {
          errors.enteredPrice = state.this_field_is_required;
          invalid.enteredPrice = true;
        } else {
          errors.enteredPrice = "";
          invalid.enteredPrice = false;
        }

        break;
      case "enteredRating":
        if (value.length <= 0) {
          errors.enteredRating = state.this_field_is_required;
          invalid.enteredRating = true;
        } else {
          errors.enteredRating = "";
          invalid.enteredRating = false;
        }

        break;

      case "enteredSeller":
        if (value.length <= 0) {
          errors.enteredSeller = state.this_field_is_required;
          invalid.enteredSeller = true;
        } else {
          errors.enteredSeller = "";
          invalid.enteredSeller = false;
        }

        break;
      case "enteredPhoneNumber":
        if (value.length <= 0) {
          errors.enteredPhoneNumber = state.this_field_is_required;
          invalid.enteredPhoneNumber = true;
        } else {
          errors.enteredPhoneNumber = "";
          invalid.enteredPhoneNumber = false;
        }

        break;
      case "enteredEmail":
        if (value.length > 0 && !validEmailRegex.test(value)) {
          errors.email = "Please enter a valid email address.";
          invalid.email = true;
        } else {
          errors.email = "";
          invalid.email = false;
        }

        break;

        break;

      default:
        break;
    }

    setState({ ...state, errors, [name]: value });
  };
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => {
      return val.length > 0 && (valid = false);
    });
    let invalid = { ...state.invalid };
    let stateErrors = { ...state.errors };
    // if (state.enteredAuthor == "") {
    //   invalid.enteredAuthor = true;
    //   stateErrors.enteredAuthor = state.this_field_is_required;
    //   valid = false;
    // }
    // if (state.enteredText == "") {
    //   invalid.enteredText = true;
    //   stateErrors.enteredText = state.this_field_is_required;
    //   valid = false;
    // }
    // if (state.enteredPrice == "") {
    //   invalid.enteredPrice = true;
    //   stateErrors.enteredPrice = state.this_field_is_required;
    //   valid = false;
    // }
    // if (state.enteredRating == "") {
    //   invalid.enteredRating = true;
    //   stateErrors.enteredRating = state.this_field_is_required;
    //   valid = false;
    // }

    // if (state.enteredSeller == "") {
    //   invalid.enteredSeller = true;
    //   stateErrors.enteredSeller = state.this_field_is_required;
    //   valid = false;
    // }
    // if (state.enteredPhoneNumber == "") {
    //   invalid.enteredPhoneNumber = true;
    //   stateErrors.enteredPhoneNumber = state.this_field_is_required;
    //   valid = false;
    // }
    // if (state.enteredEmail == "") {
    //   invalid.enteredEmail = true;
    //   stateErrors.enteredEmail = state.this_field_is_required;
    //   valid = false;
    // }
    // if (state.enteredDate == "") {
    //   invalid.enteredDate = true;
    //   stateErrors.enteredDate = state.this_field_is_required;
    //   valid = false;
    // }
    // if (state.enteredImage == "") {
    //   invalid.enteredImage = true;
    //   stateErrors.enteredImage = state.this_field_is_required;
    //   valid = false;
    // }

    setState({ ...state, invalid, errors: stateErrors });

    return valid;
  };
  const handleSave = (imageUrlPath) => {
    if (validateForm(state.errors)) {
      const addBookData = {
        author: state.enteredAuthor,
        text: state.enteredText,
        price: state.enteredPrice,
        rating: state.enteredRating,
        seller: state.enteredSeller,
        phoneNumber: state.enteredPhoneNumber,
        email: state.enteredEmail,
        date: state.enteredDate,
        image: imageUrlPath
      };
      if (props.onAddBook) {
        props.onAddBook(addBookData);
      }
    }
  };
  console.log("state", state);
  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={(location) =>
          "Are you sure you want to leave? All your entered data wil be lost!"
        }
      ></Prompt>
      <Card>
        {imageUrls.map((url) => {
          return <img src={url} />;
        })}
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="author">Book Title and Author's Name</label>
            <textarea
              name="enteredAuthor"
              value={state.enteredAuthor}
              type="text"
              rows="2"
              id="author"
              onChange={onChangeHandler}
            ></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="text">Review</label>
            <input
              name="enteredText"
              id="text"
              type="text"
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="price">Price</label>
            <input
              name="enteredPrice"
              type="number"
              id="price"
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="rating">Rating</label>
            <input
              name="enteredRating"
              type="number"
              id="rating"
              decimalslimit={1}
              max="5"
              min="0"
              step="0.1"
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="seller">Your Name</label>
            <input
              name="enteredSeller"
              type="text"
              id="seller"
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="phoneNumber">Contact Number</label>
            <input
              name="enteredPhoneNumber"
              type="text"
              id="phoneNumber"
              maxLength="10"
              title="Please enter a valid phone number!"
              pattern="[1-9]{1}[0-9]{9}"
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email Address</label>
            <input
              name="enteredEmail"
              type="email"
              id="email"
              title="Please enter a valid e-mail Address"
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="date">Date of posting</label>
            <input
              name="enteredDate"
              type="date"
              id="date"
              onChange={onChangeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Upload an image</label>
            <input
              name="enteredImage"
              type="file"
              accept="image/*"
              id="image"
              onChange={(event) => {
                setImageUpload(event.target.files[0]);
              }}
              // onChange={() => setFiles(imageInputRef.current.files[0])}
            />
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className={classes.btn}>
              Add Book
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default BookForm;
