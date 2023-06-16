import React, { useRef } from "react";
import classes from "./Comments.module.css";
import axios from "axios";
const Comments = ({ _id, name, comments = [] }) => {
  const comment = useRef();
  const username = localStorage.getItem("username");

  const AddComment = async () => {
    const data = {
      _id: _id,
      name: name,
      date: Date.now,
      text: comment.current.value,
    };
    await axios
      .post("https://backendtechno.onrender.com/blog/addComment", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        window.location.reload();
      });
  };

  return (
    <div className={classes.Comments}>
      <h3>Comments</h3>
      <div className={classes.Comments_AddCommentContainer}>
        <textarea
          ref={comment}
          rows={5}
          placeholder={"Enter your comment here"}
        />
        <button onClick={AddComment} className={classes.Comments_AddBtn}>
          Add Comment
        </button>
      </div>
      <div className={classes.Comments_commentsContainer}>
        {comments.map((item) => (
          <div className={classes.Comments_SingleComment}>
            <div className={classes.Comments_CommentInfo}>
              <p className={classes.Comments_Author}>{item.name}</p>
              <p className={classes.Comments_Data}>{item.date}</p>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;
