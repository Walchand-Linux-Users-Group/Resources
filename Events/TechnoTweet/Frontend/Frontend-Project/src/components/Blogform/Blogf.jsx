import React, { useRef, useState } from "react";
import styles from "./Blogf.module.css";
import axios from "axios";
import { useNavigate } from "react-router";

const Blog_f = () => {
  const title = useRef();
  const Description = useRef();
  const Content = useRef();
  const [file, setFile] = useState();
  const id = localStorage.getItem("_id");

  const location = useNavigate();

  async function submitHandler(e) {
    e.preventDefault();
    let data = new FormData();
    data.append("title", title.current.value);
    data.append("author", id);
    data.append("description", Description.current.value);
    data.append("content", Content.current.value);
    data.append("file", file);
    await axios
      .post("https://backendtechno.onrender.com/blog/createBlog", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        location("/");
      });
  }

  return (
    <div className={styles.signup}>
      <form>
        <h2>Add Blog</h2>
        <label htmlFor="Title">Title</label>
        <input ref={title} type="text" id="Title" />
        <label htmlFor="Desc">Description</label>
        <textarea ref={Description} id="Desc" />
        <label htmlFor="cont">Content</label>
        <textarea ref={Content} id="cont" />
        <label htmlFor="image">Image</label>
        <input
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
          type="file"
          id="image"
        />
        <button onClick={submitHandler}>Add Blog</button>
      </form>
    </div>
  );
};

export default Blog_f;
