import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./Blogs.module.css";
import axios from "axios";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      await axios
        .get("https://backendtechno.onrender.com/blog/")
        .then((res) => setBlogs(res.data.blog));
    };
    getBlogs();
  }, []);
  return (
    <div className={styles.Blogs}>
      {blogs.map((item) => (
        <BlogCard
          key={item._id}
          _id={item._id}
          title={item.title}
          image={item.image}
          description={item.description}
          date={item.date}
          content={item.content}
          author={item.author}
        />
      ))}
    </div>
  );
};

export default Blogs;
