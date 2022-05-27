import classes from "./CommentItem.module.css";

const CommentItem = (props) => {
  return <p className={classes.small}>"{props.text}"</p>;
};

export default CommentItem;
