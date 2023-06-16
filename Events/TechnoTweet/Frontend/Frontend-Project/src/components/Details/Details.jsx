import React, { useEffect, useState } from "react";
import Comments from "../Comments/Comments";
import styles from "./Details.module.css";
import { useNavigate, useParams } from "react-router";
import axios from "axios";

const Details = () => {
  const { id } = useParams();
  const _id = localStorage.getItem("_id");
  const [blogs, setBlogs] = useState(undefined);
  useEffect(() => {
    const getBlogs = async () => {
      await axios
        .get(`https://backendtechno.onrender.com/blog/getBlog/${id}`)
        .then((res) => {
          setBlogs(res.data.blog);
          console.log(blogs);
        });
    };

    getBlogs();
  }, []);

  // const [detail, setDetail] = useState(undefined);
  const history = useNavigate();

  const DeleteBlog = async () => {
    const data = {
      _id: id,
    };
    await axios
      .post("https://backendtechno.onrender.com/blog/deleteBlog", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        // window.location.reload();
        history("/");
      });
  };
  return (
    <>
      {blogs !== undefined ? (
        <div className={styles.Details}>
          <div className={styles.MetaData}>
            <p>{blogs.author.username}</p>
            <p>{blogs.date}</p>
          </div>
          <div className={styles.Details_FirstContainer}>
            <div className={styles.Details_InnerDiv}>
              <h1 className={styles.title}>{blogs.title}</h1>
              <p className={styles.Description}>{blogs.description}</p>
            </div>
            <div className={styles.ImageContainer}>
              <img
                src={`https://backendtechno.onrender.com/images/${blogs.image}`}
                alt="adfadf"
              />
            </div>
          </div>
          <div className={styles.InfoContainer}>
            <p>{blogs.content}</p>
          </div>
          <Comments
            _id={id}
            name={blogs.author.username}
            comments={blogs.comments}
          />
          <button id={styles.delete} onClick={DeleteBlog}>
            Delete Blog
          </button>

          {/* {detail !== undefined ? (
    <div className={styles.Details}>
    <div className={styles.MetaData}>
    <p>{detail.author.username}</p>
    <p>{detail.date}</p>
    </div>
    <div className={styles.Details_FirstContainer}>
    <div className={styles.Details_InnerDiv}>
    <h1 className={styles.title}>{detail.title}</h1>
    <p className={styles.Description}>{detail.description}</p>
    </div>
    <div className={styles.ImageContainer}>
    <img
    src={`https://backendtechno.onrender.com/images/${detail.image}`}
    alt="adfadf"
    />
    </div>
    </div>
    <div className={styles.InfoContainer}>
    <p>{detail.content}</p>
    </div>
    {_id !== null ? (
      <Comments
      _id={id}
      name={detail.author.username}
      comments={detail.comments}
      />
      ) : (
        ""
      )}
      {detail.author._id === _id ? (
        <button onClick={DeleteBlog}>Delete Blog</button>
      ) : (
        ""
      )}
    </div>
    ) : (
    <div></div>
  )} */}
          {/* {_id !== null ? (
        <Comments
          _id={id}
          name={detail.author.username}
          comments={detail.comments}
        />
      ) : (
        ""
      )} */}
          {/* {detail.author._id === _id ? (
        <button onClick={DeleteBlog}>Delete Blog</button>
      ) : (
        ""
      )} */}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Details;
// import React, { useEffect, useState } from "react";
// import Comments from "../Comments/Comments";
// import styles from "./Details.module.css";
// import { useNavigate, useParams } from "react-router";
// import axios from "axios";

// const Details = () => {
//   const { id } = useParams();
//   const _id = localStorage.getItem("_id");
//   const history = useNavigate();

//   const [blog, setBlog] = useState(null);

//   const DeleteBlog = async () => {
//     alert("Deleting the blog");
//   };

//   return (
//     <>
//       {blog === null ? (
//         <div className={styles.Details}>
//           <div className={styles.MetaData}>
//             <p>Author</p>
//             <p>Date</p>
//           </div>
//           <div className={styles.Details_FirstContainer}>
//             <div className={styles.Details_InnerDiv}>
//               <h1 className={styles.title}>This is the title</h1>
//               <p className={styles.Description}>
//                 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
//                 laudantium delectus nobis sapiente corporis sunt fugiat, culpa
//                 quod ipsam iste!
//               </p>
//             </div>
//             <div className={styles.ImageContainer}>
//               <img
//                 src={`https://media.newyorker.com/photos/5ba177da9eb2f7420aadeb98/master/w_2560%2Cc_limit/Cohen-Linus-Torvalds.jpg`}
//                 alt="adfadf"
//               />
//             </div>
//           </div>
//           <div className={styles.InfoContainer}>
//             <p>
//               Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//               Similique veniam aut sequi asperiores incidunt error labore
//               dignissimos tenetur, sapiente necessitatibus praesentium corporis,
//               doloremque distinctio vitae omnis laborum dolore, tempore
//               quibusdam? Similique corrupti pariatur error minus voluptas, eius
//               nobis excepturi quidem.
//             </p>
//           </div>
//           <Comments _id={id} name="Author" comments={[]} />
//           <button id={styles.delete} onClick={DeleteBlog}>
//             Delete Blog
//           </button>
//         </div>
//       ) : (
//         ""
//       )}
//     </>
//   );
// };

// export default Details;
